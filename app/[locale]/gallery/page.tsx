import { getTranslations, setRequestLocale } from "next-intl/server";
import { getGalleryImages } from "@/lib/data/projects";
import { GalleryGrid } from "@/components/gallery/gallery-grid";

export const revalidate = 3600;

export default async function GalleryPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);
  const t = await getTranslations({ locale, namespace: "gallery" });
  const images = await getGalleryImages(locale);

  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="pt-32 pb-16 md:pt-40 md:pb-24 bg-linear-to-b from-muted/30 to-background">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="text-center max-w-4xl mx-auto">
            <p className="text-sm uppercase tracking-widest text-muted-foreground mb-4">
              {t("label")}
            </p>
            <h1 className="font-serif font-semibold text-5xl md:text-6xl lg:text-7xl text-balance leading-tight">
              {t("title")}
            </h1>
            <p className="text-muted-foreground mt-6 text-lg leading-relaxed max-w-2xl mx-auto">
              {t("pageDescription")}
            </p>
          </div>
        </div>
      </section>

      {/* Gallery Grid */}
      <section className="py-16 md:py-24 bg-background">
        <div className="container mx-auto px-6 lg:px-12">
          <GalleryGrid images={images} />

          {/* CTA Section */}
          <div className="mt-24 text-center">
            <h2 className="font-serif text-3xl md:text-4xl font-semibold mb-6">
              {t("cta.title")}
            </h2>
            <p className="text-muted-foreground mb-8 max-w-2xl mx-auto leading-relaxed">
              {t("cta.description")}
            </p>
            <a
              href="/#contact"
              className="inline-flex items-center justify-center rounded-md bg-accent px-8 py-3 text-sm font-medium text-accent-foreground hover:bg-accent/90 transition-colors uppercase tracking-wider"
            >
              {t("cta.button")}
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
