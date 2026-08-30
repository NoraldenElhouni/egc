import "server-only";

import { createClient, storageUrl } from "@/utils/supabase/server";
import { asLocale, pick } from "@/lib/data/locale";

export type ProjectImage = {
  id: string;
  url: string;
  alt: string;
};

export type LocalizedCategory = {
  id: string;
  name: string;
};

export type LocalizedProject = {
  id: string;
  slug: string;
  title: string;
  description: string;
  location: string;
  client: string | null;
  status: string | null;
  year: string | null;
  categoryId: string;
  categoryName: string;
  isFeatured: boolean;
  images: ProjectImage[];
};

/**
 * Supabase is a network dependency on a marketing site. If it is unreachable or
 * misconfigured we log and render an empty section, rather than 500 the page.
 */
function report(scope: string, error: unknown) {
  console.error(`[data/projects] ${scope}:`, error);
}

export async function getCategories(
  locale: string
): Promise<LocalizedCategory[]> {
  const loc = asLocale(locale);

  try {
    const supabase = createClient();
    const { data, error } = await supabase
      .from("categories")
      .select("id, name_en, name_ar")
      .eq("is_active", true)
      // `categories` has no sort column; insertion order keeps the filter row
      // in the order the seed defines (residential, commercial, cultural).
      .order("created_at", { ascending: true });

    if (error) {
      report("getCategories", error);
      return [];
    }

    return (data ?? []).map((row) => ({
      id: row.id,
      name: pick(row.name_en, row.name_ar, loc),
    }));
  } catch (error) {
    report("getCategories", error);
    return [];
  }
}

export async function getProjects(
  locale: string
): Promise<LocalizedProject[]> {
  const loc = asLocale(locale);

  try {
    const supabase = createClient();

    const [projectsResult, categoriesResult] = await Promise.all([
      supabase
        .from("projects")
        .select(
          `id, slug, category_id, title_en, title_ar,
           description_en, description_ar, location_en, location_ar,
           client_en, client_ar, status_en, status_ar, year, is_featured,
           project_images ( id, storage_path, alt_en, alt_ar, sort_order, is_cover )`
        )
        // Redundant with RLS, which already hides inactive rows -- kept so the
        // intent is visible at the call site and survives a policy change.
        .eq("is_active", true)
        .order("sort_order", { ascending: true })
        .order("sort_order", {
          referencedTable: "project_images",
          ascending: true,
        }),
      supabase.from("categories").select("id, name_en, name_ar"),
    ]);

    if (projectsResult.error) {
      report("getProjects", projectsResult.error);
      return [];
    }
    if (categoriesResult.error) {
      report("getProjects/categories", categoriesResult.error);
    }

    const categoryNames = new Map(
      (categoriesResult.data ?? []).map((row) => [
        row.id,
        pick(row.name_en, row.name_ar, loc),
      ])
    );

    return (projectsResult.data ?? []).map((row) => {
      const images = [...(row.project_images ?? [])]
        // `is_cover` wins regardless of sort_order, so the card thumbnail is
        // always the image the ERP marked as the cover.
        .sort((a, b) => {
          if (a.is_cover !== b.is_cover) return a.is_cover ? -1 : 1;
          return a.sort_order - b.sort_order;
        })
        .map((image) => ({
          id: image.id,
          url: storageUrl(image.storage_path),
          alt: pick(image.alt_en, image.alt_ar, loc),
        }));

      return {
        id: row.id,
        slug: row.slug,
        title: pick(row.title_en, row.title_ar, loc),
        description: pick(row.description_en, row.description_ar, loc),
        location: pick(row.location_en, row.location_ar, loc),
        client: pick(row.client_en, row.client_ar, loc) || null,
        status: pick(row.status_en, row.status_ar, loc) || null,
        year: row.year,
        categoryId: row.category_id,
        categoryName: categoryNames.get(row.category_id) ?? "",
        isFeatured: row.is_featured,
        images,
      };
    });
  } catch (error) {
    report("getProjects", error);
    return [];
  }
}

export async function getFeaturedProjects(
  locale: string
): Promise<LocalizedProject[]> {
  const projects = await getProjects(locale);
  return projects.filter((project) => project.isFeatured);
}

/** Every image of every active project, flattened, for the gallery page. */
export async function getGalleryImages(
  locale: string
): Promise<(ProjectImage & { projectTitle: string; categoryName: string })[]> {
  const projects = await getProjects(locale);

  return projects.flatMap((project) =>
    project.images.map((image) => ({
      ...image,
      projectTitle: project.title,
      categoryName: project.categoryName,
    }))
  );
}
