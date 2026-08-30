import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { getTranslations, setRequestLocale } from "next-intl/server";
import { ArrowLeft, MapPin, Calendar, Building2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { ProjectImageGallery } from "@/components/projects/project-image-gallery";
import { getProjectBySlug } from "@/lib/data/projects";

export const revalidate = 3600;

export default async function ProjectDetailPage({
  params,
}: {
  params: Promise<{ locale: string; slug: string }>;
}) {
  const { locale, slug } = await params;
  setRequestLocale(locale);
  const t = await getTranslations({ locale, namespace: "projects" });
  const project = await getProjectBySlug(locale, slug);

  if (!project) {
    notFound();
  }

  const cover = project.images[0];

  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[60vh] min-h-[500px] overflow-hidden">
        <Image
          src={cover?.url || "/placeholder.svg"}
          alt={cover?.alt || project.title}
          fill
          priority
          sizes="100vw"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-linear-to-t from-black/80 via-black/40 to-transparent" />
        <div className="absolute inset-0 flex items-end">
          <div className="container mx-auto px-6 lg:px-12 pb-16">
            <Button
              asChild
              variant="ghost"
              size="sm"
              className="text-white hover:text-white/80 mb-6"
            >
              <Link href="/projects">
                <ArrowLeft className="mr-2 h-4 w-4" />
                {t("featured.back")}
              </Link>
            </Button>
            <h1 className="font-serif font-semibold text-4xl md:text-5xl lg:text-6xl text-white text-balance leading-tight mb-4">
              {project.title}
            </h1>
            <div className="flex flex-wrap gap-6 text-white/90">
              <div className="flex items-center gap-2">
                <MapPin className="h-4 w-4" />
                <span>{project.location}</span>
              </div>
              {project.year && (
                <div className="flex items-center gap-2">
                  <Calendar className="h-4 w-4" />
                  <span>{project.year}</span>
                </div>
              )}
              {project.categoryName && (
                <div className="flex items-center gap-2">
                  <Building2 className="h-4 w-4" />
                  <span className="capitalize">{project.categoryName}</span>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Project Details */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="grid lg:grid-cols-3 gap-12">
            {/* Main Content */}
            <div className="lg:col-span-2 space-y-12">
              <div>
                <h2 className="font-serif font-semibold text-3xl mb-6">
                  {t("featured.overview")}
                </h2>
                <p className="text-muted-foreground leading-relaxed text-lg">
                  {project.description}
                </p>
              </div>

              {/* Image Gallery */}
              {project.images.length > 0 && (
                <div>
                  <h2 className="font-serif font-semibold text-3xl mb-6">
                    {t("featured.gallery")}
                  </h2>
                  <ProjectImageGallery
                    images={project.images.map((image) => ({
                      src: image.url,
                      alt: image.alt,
                    }))}
                  />
                </div>
              )}
            </div>

            {/* Sidebar */}
            <div className="lg:col-span-1">
              <div className="sticky top-24 space-y-8">
                <div className="bg-muted/30 p-8 space-y-6">
                  <h3 className="font-serif font-semibold text-2xl">
                    {t("featured.info")}
                  </h3>

                  {project.client && (
                    <div>
                      <p className="text-sm text-muted-foreground uppercase tracking-wider mb-2">
                        {t("featured.client")}
                      </p>
                      <p className="font-medium">{project.client}</p>
                    </div>
                  )}

                  <div>
                    <p className="text-sm text-muted-foreground uppercase tracking-wider mb-2">
                      {t("featured.location")}
                    </p>
                    <p className="font-medium">{project.location}</p>
                  </div>

                  {project.status && (
                    <div>
                      <p className="text-sm text-muted-foreground uppercase tracking-wider mb-2">
                        {t("featured.status")}
                      </p>
                      <p className="font-medium">{project.status}</p>
                    </div>
                  )}

                  {project.categoryName && (
                    <div>
                      <p className="text-sm text-muted-foreground uppercase tracking-wider mb-2">
                        {t("featured.category")}
                      </p>
                      <p className="font-medium capitalize">
                        {project.categoryName}
                      </p>
                    </div>
                  )}
                </div>

                <Button asChild className="w-full" size="lg">
                  <Link href="/#contact">{t("featured.cta")}</Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
