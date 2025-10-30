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
  description: string;
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
      description:
        "The Triple Waterfront Design Competition in Tripoli aimed to reestablish the historic connection between the city and its seafront while addressing long-standing urban and transportation challenges. Awarded second place, the proposal envisioned an integrated waterfront that harmonizes mobility, public life, and heritage preservation. The design reorganizes traffic flow to ease congestion and enhance pedestrian accessibility, creating a seamless transition between the historic core of Tripoli and the Mediterranean coastline. Monumental landmarks and public spaces were strategically introduced along the waterfront to enrich the skyline and celebrate the city's cultural identity.",
      images: [
        "/projects/Tripoli Water Front/Layer 7.png",
        "/projects/Tripoli Water Front/Background copy.png",
        "/projects/Tripoli Water Front/dsd copy.png",
        "/projects/Tripoli Water Front/Layer 8.png",
        "/projects/Tripoli Water Front/qq copy.png",
        "/projects/Tripoli Water Front/rr copy.png",
      ],
      slug: "tripoli-water-front",
    },
    {
      title: "Benghazi Westren Lake Recreation and leisure Park",
      category: "cultural",
      location: "Benghazi, Libya",
      description:
        "The Libyan Airlines Monument in Libya, a winning first-place competition entry for a Memorial/Monument Design, was conceived to honor the 113 passengers and crew who perished when a Libyan aircraft was brought down in 1973. The design embodies remembrance, unity, and resilience through a powerful architectural expression centered on a symbolic flower, whose petals each represent one of the victims. This form of collective remembrance is enclosed by a triangular building that captures the motion and final trajectory of the airplane, blending symbolism, geometry, and emotion to transform tragedy into a space for reflection and national memory.",
      images: [
        "/projects/Benghazi Westren Lake Recreation and leisure Park/westren Lake.png",
      ],
      slug: "Benghazi-Westren-Lake-Recreation-and-leisure-Park",
    },
    {
      title: "1800 Housing Units",
      category: "residential",
      location: "Benghazi, Libya",
      description:
        "The Benghazi 1800 Housing Development in Libya is a conceptual master plan for a residential project that draws inspiration from the spatial qualities of traditional Italian villages, centering community life around a vibrant central square designed to host social, commercial, and recreational activities. This core is surrounded by clusters of housing units and educational facilities, arranged to ensure accessibility and a comfortable living environment while promoting walkability and interaction within a human-scaled urban fabric that balances density with open communal areas. By integrating Mediterranean planning principles with local needs, the proposal aims to create a cohesive and lively neighborhood that fosters family life and community engagement in Benghazi.",
      images: ["/projects/1800 Housing Units/t8.png"],
      slug: "1800-housing-units",
    },
    {
      title: "250 Housing units",
      category: "residential",
      location: "Aljufra, Libya",
      description:
        "The Aljufra Housing Development in Libya is a conceptual residential project for 250 units, designed to address the harsh desert climate while respecting local social and cultural patterns. Each unit features a private entrance to ensure family privacy, while the overall layout fosters a strong sense of neighborhood connection. The architectural composition creates a rhythmic texture across the site, forming shaded pathways and interconnected courtyards that encourage movement and social interaction. This design not only enhances comfort by reducing exposure to extreme heat and wind but also reflects the traditional urban fabric of desert settlements, balancing privacy, community, and environmental adaptability to offer a contemporary housing model harmonized with Aljufra's cultural and climatic context.",
      images: ["/projects/250 Housing units/Layer 512.png"],
      slug: "250-housing-units",
    },
    {
      title: "Resort Hotel",
      category: "commercial",
      location: "Sousa, Libya",
      description:
        "The Sousa Resort is a conceptual hospitality development for Libya's coast, envisioned to nestle between the sea and mountain backdrop to create a unique experience celebrating its natural setting. The master plan leverages the dramatic topography to provide every accommodation with uninterrupted sea views while maintaining harmony with the landscape. Designed for flexible, phased implementation, the resort can be developed in stages without compromising the overall vision, and it features a combination of motel-style units and individual cabins each positioned for privacy, comfort, and a direct visual connection to the sea. By blending natural materials, landscape integration, and contemporary design, the project aims to establish a tranquil destination that highlights the charm of Sousa's coastal and mountainous environment.",
      images: ["/projects/Resort Hotel/Layer 506.png"],
      slug: "resort-hotel",
    },
    {
      title: "Abu Nawas Tourist Project, Tripoli",
      category: "commercial",
      location: "Tripoli, Libya",
      description:
        "The Abounoas Commercial Center in Tripoli, Libya, is a concept proposal for a vibrant mixed-use destination designed to bring diverse urban activities together into a single cohesive development. The project integrates commercial spaces, a hotel, a cinema, restaurants, children’s entertainment areas, and a small retail zone, all organized to create a lively and engaging environment. Taking full advantage of its prime coastal location, the design offers panoramic seafront views and encourages interaction and leisure through open terraces, landscaped plazas, and strong visual connections to the waterfront. By blending entertainment, retail, and hospitality functions, the project aims to establish itself as a dynamic social and commercial hub that reflects the modern spirit of Tripoli while embracing its coastal identity.",
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
                  <p className="text-sm text-muted-foreground leading-relaxed line-clamp-2">
                    {project.description}
                  </p>
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
            className="absolute bottom-0 left-0 right-0 p-6 bg-linear-to-t from-black/80 to-transparent"
          >
            <div className="max-w-6xl mx-auto">
              <h3 className="text-white font-serif font-semibold text-2xl mb-2">
                {selectedProject.title}
              </h3>
              <p className="text-white/80 text-sm mb-2">
                {selectedProject.location}
              </p>
              <p className="text-white/70 text-sm leading-relaxed mb-3">
                {selectedProject.description}
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
