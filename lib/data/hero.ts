import "server-only";

import { createClient, storageUrl } from "@/utils/supabase/server";
import { asLocale, pick } from "@/lib/data/locale";

export type HeroSlide = {
  id: string;
  url: string;
  alt: string;
};

function report(scope: string, error: unknown) {
  console.error(`[data/hero] ${scope}:`, error);
}

export async function getHeroSlides(locale: string): Promise<HeroSlide[]> {
  const loc = asLocale(locale);

  try {
    const supabase = createClient();
    const { data, error } = await supabase
      .from("hero_slides")
      .select("id, storage_path, alt_en, alt_ar")
      // Redundant with RLS, which already hides inactive rows -- kept so the
      // intent is visible at the call site and survives a policy change.
      .eq("is_active", true)
      .order("sort_order", { ascending: true });

    if (error) {
      report("getHeroSlides", error);
      return [];
    }

    return (data ?? []).map((row) => ({
      id: row.id,
      url: storageUrl(row.storage_path),
      alt: pick(row.alt_en, row.alt_ar, loc),
    }));
  } catch (error) {
    report("getHeroSlides", error);
    return [];
  }
}
