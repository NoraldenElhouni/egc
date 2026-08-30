"use client";

import { useEffect, useRef, useState } from "react";
import { Button } from "@/components/ui/button";
import { X, ChevronLeft, ChevronRight } from "lucide-react";
import Image from "next/image";
import { useTranslations } from "next-intl";
import type { LocalizedCategory, LocalizedProject } from "@/lib/data/projects";

const ALL = "all";

// While the card is hovered, cycle to the next image every HOVER_CYCLE_MS.
// Reverts to the cover image as soon as the pointer leaves.
const HOVER_CYCLE_MS = 1200;

function ProjectCard({
  project,
  imageCountLabel,
  onOpen,
}: {
  project: LocalizedProject;
  imageCountLabel: string;
  onOpen: () => void;
}) {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);
  const images = project.images;

  useEffect(() => {
    if (!isHovered || images.length <= 1) return;
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % images.length);
    }, HOVER_CYCLE_MS);
    return () => clearInterval(interval);
  }, [isHovered, images]);

  const image = images[activeIndex] ?? images[0];

  return (
    <div
      className="group cursor-pointer"
      onClick={onOpen}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => {
        setIsHovered(false);
        setActiveIndex(0);
      }}
    >
      <div className="relative aspect-4/3 overflow-hidden mb-6 bg-card">
        <Image
          src={image?.url || "/placeholder.svg"}
          alt={image?.alt || project.title}
          fill
          sizes="(min-width: 1024px) 384px, (min-width: 768px) 50vw, 100vw"
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
        />
        <div className="absolute inset-0 bg-linear-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500">
          <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
            <p className="text-sm mb-2">{project.title}</p>
            <p className="text-xs opacity-75">{imageCountLabel}</p>
          </div>
        </div>
      </div>
      <div className="space-y-2">
        <h3 className="font-serif font-semibold text-xl group-hover:text-accent transition-colors">
          {project.title}
        </h3>
        <div className="flex items-center justify-between text-sm text-muted-foreground">
          <span>{project.location}</span>
        </div>
        <p className="text-sm text-muted-foreground leading-relaxed line-clamp-2">
          {project.description}
        </p>
      </div>
    </div>
  );
}

export function ProjectsGrid({
  projects,
  categories,
}: {
  projects: LocalizedProject[];
  categories: LocalizedCategory[];
}) {
  const t = useTranslations("projects");
  const [activeCategory, setActiveCategory] = useState<string>(ALL);
  const [selectedProject, setSelectedProject] =
    useState<LocalizedProject | null>(null);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isDescriptionExpanded, setIsDescriptionExpanded] = useState(false);

  // Never leave the page unscrollable if this unmounts while the lightbox is up.
  useEffect(() => {
    return () => {
      document.body.style.overflow = "unset";
    };
  }, []);

  const filteredProjects =
    activeCategory === ALL
      ? projects
      : projects.filter((p) => p.categoryId === activeCategory);
  const displayedProjects = filteredProjects.slice(0, 20);

  const openLightbox = (project: LocalizedProject) => {
    setSelectedProject(project);
    setCurrentImageIndex(0);
    setIsDescriptionExpanded(false);
    document.body.style.overflow = "hidden";
  };

  const closeLightbox = () => {
    setSelectedProject(null);
    setCurrentImageIndex(0);
    setIsDescriptionExpanded(false);
    document.body.style.overflow = "unset";
  };

  const nextImage = () => {
    if (selectedProject) {
      setCurrentImageIndex((prev) =>
        prev === selectedProject.images.length - 1 ? 0 : prev + 1,
      );
    }
  };

  const previousImage = () => {
    if (selectedProject) {
      setCurrentImageIndex((prev) =>
        prev === 0 ? selectedProject.images.length - 1 : prev - 1,
      );
    }
  };

  const touchStartXRef = useRef<number | null>(null);
  const SWIPE_THRESHOLD_PX = 40;

  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartXRef.current = e.touches[0].clientX;
  };

  const handleTouchEnd = (e: React.TouchEvent) => {
    const startX = touchStartXRef.current;
    touchStartXRef.current = null;
    if (startX === null) return;
    const deltaX = e.changedTouches[0].clientX - startX;
    if (Math.abs(deltaX) < SWIPE_THRESHOLD_PX) return;
    if (deltaX < 0) nextImage();
    else previousImage();
  };

  return (
    <>
      <section id="projects" dir="ltr" className="py-12 md:py-24 bg-background">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <p className="text-sm uppercase tracking-widest text-muted-foreground mb-4">
              {t("label")}
            </p>
            <h2 className="font-serif font-semibold text-4xl md:text-5xl lg:text-6xl text-balance leading-tight">
              {t("title")}
            </h2>
            <p className="text-muted-foreground mt-6 leading-relaxed">
              {t("description")}
            </p>
          </div>

          {/* Category Filter */}
          <div className="flex flex-wrap justify-center gap-3 mb-12">
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
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {displayedProjects.map((project) => (
              <ProjectCard
                key={project.id}
                project={project}
                imageCountLabel={t("imageCount", {
                  count: project.images.length,
                })}
                onOpen={() => openLightbox(project)}
              />
            ))}
          </div>
        </div>
      </section>

      {selectedProject && (
        <div
          className="fixed inset-0 z-50 bg-black/95 flex items-center justify-center"
          onClick={closeLightbox}
        >
          {/* Close Button */}
          <button
            onClick={closeLightbox}
            className="absolute top-4 right-4 z-50 p-2 rounded-full bg-white/10 hover:bg-white/20 transition-colors"
            aria-label={t("closeLightbox")}
          >
            <X className="w-6 h-6 text-white" />
          </button>

          {/* Image Container */}
          <div
            className="relative w-full h-full flex items-center justify-center p-4 md:p-8"
            onClick={(e) => e.stopPropagation()}
            onTouchStart={handleTouchStart}
            onTouchEnd={handleTouchEnd}
          >
            <div className="relative w-full h-full max-w-6xl max-h-[80vh]">
              <Image
                src={
                  selectedProject.images[currentImageIndex]?.url ||
                  "/placeholder.svg"
                }
                alt={
                  selectedProject.images[currentImageIndex]?.alt ||
                  selectedProject.title
                }
                fill
                sizes="100vw"
                className="object-contain"
                priority
              />
            </div>

            {/* Navigation Buttons - Only show if more than 1 image */}
            {selectedProject.images.length > 1 && (
              <div dir="ltr">
                <button
                  onClick={previousImage}
                  className="absolute left-4 top-1/2 -translate-y-1/2 p-3 rounded-full bg-white/10 hover:bg-white/20 transition-colors"
                  aria-label={t("previousImage")}
                >
                  <ChevronLeft className="w-6 h-6 text-white" />
                </button>
                <button
                  onClick={nextImage}
                  className="absolute right-4 top-1/2 -translate-y-1/2 p-3 rounded-full bg-white/10 hover:bg-white/20 transition-colors"
                  aria-label={t("nextImage")}
                >
                  <ChevronRight className="w-6 h-6 text-white" />
                </button>
              </div>
            )}
          </div>

          {/* Project Info & Image Counter */}
          <div
            dir="ltr"
            className="absolute bottom-0 left-0 right-0 p-6 bg-linear-to-t from-black/80 to-transparent"
          >
            <div className="max-w-6xl mx-auto">
              <h3 className="text-white font-serif font-semibold text-2xl mb-2">
                {selectedProject.title}
              </h3>
              <p className="text-white/80 text-sm mb-2">
                {selectedProject.location}
              </p>
              {selectedProject.description && (
                <div className="mb-3">
                  <p
                    className={`text-white/70 text-sm leading-relaxed ${
                      isDescriptionExpanded ? "" : "line-clamp-2"
                    }`}
                  >
                    {selectedProject.description}
                  </p>
                  <button
                    type="button"
                    onClick={(e) => {
                      e.stopPropagation();
                      setIsDescriptionExpanded((expanded) => !expanded);
                    }}
                    className="text-white text-xs font-medium underline underline-offset-2 mt-1"
                  >
                    {isDescriptionExpanded ? t("seeLess") : t("seeMore")}
                  </button>
                </div>
              )}
              <p className="text-white/60 text-sm">
                {t("imageOf", {
                  current: currentImageIndex + 1,
                  total: selectedProject.images.length,
                })}
              </p>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
