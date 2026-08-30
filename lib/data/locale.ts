export type Locale = "en" | "ar";

export function asLocale(locale: string): Locale {
  return locale === "ar" ? "ar" : "en";
}

/**
 * Choose the column for the active locale, falling back to the other language
 * when a field hasn't been translated yet. Content arrives from the ERP, where
 * an Arabic field can legitimately be blank.
 */
export function pick(
  en: string | null,
  ar: string | null,
  locale: Locale
): string {
  const preferred = locale === "ar" ? ar : en;
  const fallback = locale === "ar" ? en : ar;
  return preferred?.trim() || fallback?.trim() || "";
}
