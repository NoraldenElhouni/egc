"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useTranslations } from "next-intl";
import type { LocalizedCategory, LocalizedProject } from "@/lib/data/projects";

const ALL = "all";

export function ProjectsCatalog({
  projects,
  categories,
}: {
  projects: LocalizedProject[];
  categories: LocalizedCategory[];
}) {
  const t = useTranslations("projects");
  const [activeCategory, setActiveCategory] = useState<string>(ALL);

  const filteredProjects =
    activeCategory === ALL
      ? projects
      : projects.filter((p) => p.categoryId === activeCategory);

  return (
    <>
      {/* Category Filter */}
      <div className="flex flex-wrap justify-center gap-3 mb-16">
        <Button
          variant={activeCategory === ALL ? "default" : "outline"}
          size="sm"
          onClick={() => setActiveCategory(ALL)}
          className="uppercase tracking-wider text-xs"
        >
          {t("categories.all")}
        </Button>
        {categories.map((category) => (
          <Button
            key={category.id}
            variant={activeCategory === category.id ? "default" : "outline"}
            size="sm"
            onClick={() => setActiveCategory(category.id)}
            className="uppercase tracking-wider text-xs"
          >
            {category.name}
          </Button>
        ))}
      </div>

      {/* Projects Grid */}
      {filteredProjects.length === 0 ? (
        <p className="text-center text-muted-foreground">{t("empty")}</p>
      ) : (
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-10">
          {filteredProjects.map((project) => (
            <Link
              key={project.id}
              href={`/projects/${project.slug}`}
              className="group cursor-pointer block"
            >
              <div className="relative aspect-4/3 overflow-hidden mb-6 bg-card">
                <Image
                  src={project.images[0]?.url || "/placeholder.svg"}
                  alt={project.images[0]?.alt || project.title}
                  fill
                  sizes="(min-width: 1024px) 25vw, (min-width: 768px) 50vw, 100vw"
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-linear-to-t from-black/90 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                  <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                    <p className="text-sm leading-relaxed line-clamp-2 mb-4 translate-y-2 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500">
                      {project.description}
                    </p>
                    <span className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider translate-y-2 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500 delay-75">
                      {t("viewDetails")}
                      <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                    </span>
                  </div>
                </div>
              </div>
              <div className="space-y-2">
                <h3 className="font-serif font-semibold text-xl group-hover:text-accent transition-colors">
                  {project.title}
                </h3>
                <div className="flex items-center justify-between text-sm text-muted-foreground">
                  <span>{project.location}</span>
                  <span>{project.year}</span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      )}
    </>
  );
}
