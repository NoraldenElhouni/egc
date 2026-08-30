"use client";

import { useState } from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { useTranslations } from "next-intl";
import { Lightbox } from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";
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
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [lightboxIndex, setLightboxIndex] = useState(0);

  const filteredProjects =
    activeCategory === ALL
      ? projects
      : projects.filter((p) => p.categoryId === activeCategory);

  const lightboxSlides = filteredProjects.map((project) => ({
    src: project.images[0]?.url || "/placeholder.svg",
    alt: project.images[0]?.alt || project.title,
    title: project.title,
    description: project.description,
  }));

  const openLightbox = (index: number) => {
    setLightboxIndex(index);
    setLightboxOpen(true);
  };

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
          {filteredProjects.map((project, index) => (
            <div
              key={project.id}
              className="group cursor-pointer"
              onClick={() => openLightbox(index)}
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
                    <p className="text-sm leading-relaxed">
                      {project.description}
                    </p>
                  </div>
                </div>
                {/* Click indicator */}
                <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm rounded-full p-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="text-foreground"
                  >
                    <path d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v6m3-3H7" />
                  </svg>
                </div>
              </div>
              <div className="space-y-2">
                <h3 className="font-serif font-semibold text-xl group-hover:text-accent transition-colors text-balance">
                  {project.title}
                </h3>
                <div className="flex items-center justify-between text-sm text-muted-foreground">
                  <span>{project.location}</span>
                  <span>{project.year}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}

      {/* Lightbox */}
      <Lightbox
        open={lightboxOpen}
        close={() => setLightboxOpen(false)}
        index={lightboxIndex}
        slides={lightboxSlides}
        styles={{
          container: { backgroundColor: "rgba(0, 0, 0, 0.95)" },
        }}
      />
    </>
  );
}
