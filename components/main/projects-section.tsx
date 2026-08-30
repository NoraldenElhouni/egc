import { getCategories, getFeaturedProjects } from "@/lib/data/projects";
import { ProjectsGrid } from "@/components/main/projects-grid";

export async function ProjectsSection({ locale }: { locale: string }) {
  const [projects, categories] = await Promise.all([
    getFeaturedProjects(locale),
    getCategories(locale),
  ]);

  return <ProjectsGrid projects={projects} categories={categories} />;
}
