"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { X, ChevronLeft, ChevronRight } from "lucide-react";
import Image from "next/image";
import { useTranslations } from "next-intl";

type ProjectCategory = "all" | "residential" | "commercial" | "cultural";

interface Project {
  title: string;
  category: ProjectCategory;
  location: string;
  images: string[];
  slug: string;
}

export function ProjectsSection() {
  const t = useTranslations("projects");
  const [activeCategory, setActiveCategory] = useState<ProjectCategory>("all");
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const categories = [
    { id: "all" as ProjectCategory, label: "All Projects" },
    { id: "residential" as ProjectCategory, label: "Residential" },
    { id: "commercial" as ProjectCategory, label: "Commercial" },
    { id: "cultural" as ProjectCategory, label: "Cultural" },
  ];

  const projects: Project[] = [
    {
      title: "Tripoli Water Front",
      category: "cultural",
      location: "Tripoli, Libya",
      images: [
        "/projects/Tripoli Water Front/dsd copy.png",
        "/projects/Tripoli Water Front/image2.png",
        "/projects/Tripoli Water Front/image3.png",
      ],
      slug: "tripoli-water-front",
    },
    {
      title: "Benghazi Westren Lake Recreation and leisure Park",
      category: "cultural",
      location: "Benghazi, Libya",
      images: [
        "/projects/Benghazi Westren Lake Recreation and leisure Park/westren Lake.png",
        "/projects/Benghazi Westren Lake Recreation and leisure Park/image2.png",
      ],
      slug: "Benghazi-Westren-Lake-Recreation-and-leisure-Park",
    },
    {
      title: "1800 Housing Units",
      category: "residential",
      location: "Benghazi, Libya",
      images: [
        "/projects/1800 Housing Units/t8.png",
        "/projects/1800 Housing Units/image2.png",
        "/projects/1800 Housing Units/image3.png",
      ],
      slug: "1800-housing-units",
    },
    {
      title: "250 Housing units",
      category: "residential",
      location: "Benghazi, Libya",
      images: [
        "/projects/250 Housing units/Layer 512.png",
        "/projects/250 Housing units/image2.png",
      ],
      slug: "250-housing-units",
    },
    {
      title: "Resort Hotel",
      category: "commercial",
      location: "Benghazi, Libya",
      images: [
        "/projects/Resort Hotel/Layer 506.png",
        "/projects/Resort Hotel/image2.png",
        "/projects/Resort Hotel/image3.png",
      ],
      slug: "resort-hotel",
    },
    {
      title: "Abu Nawas Tourist Project, Tripoli",
      category: "commercial",
      location: "Tripoli, Libya",
      images: [
        "/projects/Abu Nawas Tourist Project, Tripoli/Layer 533.png",
        "/projects/Abu Nawas Tourist Project, Tripoli/image2.png",
      ],
      slug: "abu-nawas-tourist-project-tripoli",
    },
  ];

  const filteredProjects =
    activeCategory === "all"
      ? projects
      : projects.filter((p) => p.category === activeCategory);
  const displayedProjects = filteredProjects.slice(0, 6);

  const openLightbox = (project: Project) => {
    setSelectedProject(project);
    setCurrentImageIndex(0);
    document.body.style.overflow = "hidden";
  };

  const closeLightbox = () => {
    setSelectedProject(null);
    setCurrentImageIndex(0);
    document.body.style.overflow = "unset";
  };

  const nextImage = () => {
    if (selectedProject) {
      setCurrentImageIndex((prev) =>
        prev === selectedProject.images.length - 1 ? 0 : prev + 1
      );
    }
  };

  const previousImage = () => {
    if (selectedProject) {
      setCurrentImageIndex((prev) =>
        prev === 0 ? selectedProject.images.length - 1 : prev - 1
      );
    }
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
            {categories.map((category) => (
              <Button
                key={category.id}
                variant={activeCategory === category.id ? "default" : "outline"}
                size="sm"
                onClick={() => setActiveCategory(category.id)}
                className="uppercase tracking-wider text-xs"
              >
                {t(`categories.${category.id}`)}
              </Button>
            ))}
          </div>

          {/* Projects Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {displayedProjects.map((project, index) => (
              <div
                key={index}
                className="group cursor-pointer"
                onClick={() => openLightbox(project)}
              >
                <div className="relative aspect-4/3 overflow-hidden mb-6 bg-card">
                  <Image
                    src={project.images[0] || "/placeholder.svg"}
                    alt={project.title}
                    fill
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-linear-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                    <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                      <p className="text-sm mb-2">{project.title}</p>
                      <p className="text-xs opacity-75">
                        {project.images.length}{" "}
                        {project.images.length === 1 ? "image" : "images"}
                      </p>
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
                </div>
              </div>
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
            aria-label="Close lightbox"
          >
            <X className="w-6 h-6 text-white" />
          </button>

          {/* Image Container */}
          <div
            className="relative w-full h-full flex items-center justify-center p-4 md:p-8"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="relative w-full h-full max-w-6xl max-h-[80vh]">
              <Image
                src={
                  selectedProject.images[currentImageIndex] ||
                  "/placeholder.svg"
                }
                alt={`${selectedProject.title} - Image ${
                  currentImageIndex + 1
                }`}
                fill
                className="object-contain"
                priority
              />
            </div>

            {/* Navigation Buttons - Only show if more than 1 image */}
            {selectedProject.images.length > 1 && (
              <>
                <button
                  onClick={previousImage}
                  className="absolute left-4 top-1/2 -translate-y-1/2 p-3 rounded-full bg-white/10 hover:bg-white/20 transition-colors"
                  aria-label="Previous image"
                >
                  <ChevronLeft className="w-6 h-6 text-white" />
                </button>
                <button
                  onClick={nextImage}
                  className="absolute right-4 top-1/2 -translate-y-1/2 p-3 rounded-full bg-white/10 hover:bg-white/20 transition-colors"
                  aria-label="Next image"
                >
                  <ChevronRight className="w-6 h-6 text-white" />
                </button>
              </>
            )}
          </div>

          {/* Project Info & Image Counter */}
          <div
            dir="ltr"
            className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black/80 to-transparent"
          >
            <div className="max-w-6xl mx-auto">
              <h3 className="text-white font-serif font-semibold text-2xl mb-2">
                {selectedProject.title}
              </h3>
              <p className="text-white/80 text-sm mb-2">
                {selectedProject.location}
              </p>
              <p className="text-white/60 text-sm">
                Image {currentImageIndex + 1} of {selectedProject.images.length}
              </p>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
