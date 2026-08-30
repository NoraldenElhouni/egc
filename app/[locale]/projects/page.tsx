import { getTranslations, setRequestLocale } from "next-intl/server";
import { getCategories, getProjects } from "@/lib/data/projects";
import { ProjectsCatalog } from "@/components/projects/projects-catalog";

export const revalidate = 3600;

export default async function ProjectsPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);
  const t = await getTranslations({ locale, namespace: "projects" });

  const [projects, categories] = await Promise.all([
    getProjects(locale),
    getCategories(locale),
  ]);

  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="pt-32 pb-16 md:pt-40 md:pb-24 bg-linear-to-t from-muted/30 to-background">
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

      {/* Projects Section */}
      <section className="py-16 md:py-24 bg-background">
        <div className="container mx-auto px-6 lg:px-12">
          <ProjectsCatalog projects={projects} categories={categories} />

          {/* Stats Section */}
          <div className="mt-24 pt-16 border-t border-border">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
              <div>
                <div className="font-serif text-4xl md:text-5xl font-semibold text-accent mb-2">
                  500+
                </div>
                <div className="text-sm uppercase tracking-wider text-muted-foreground">
                  {t("stats.completed")}
                </div>
              </div>
              <div>
                <div className="font-serif text-4xl md:text-5xl font-semibold text-accent mb-2">
                  25+
                </div>
                <div className="text-sm uppercase tracking-wider text-muted-foreground">
                  {t("stats.experience")}
                </div>
              </div>
              <div>
                <div className="font-serif text-4xl md:text-5xl font-semibold text-accent mb-2">
                  38
                </div>
                <div className="text-sm uppercase tracking-wider text-muted-foreground">
                  {t("stats.team")}
                </div>
              </div>
              <div>
                <div className="font-serif text-4xl md:text-5xl font-semibold text-accent mb-2">
                  100%
                </div>
                <div className="text-sm uppercase tracking-wider text-muted-foreground">
                  {t("stats.satisfaction")}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
