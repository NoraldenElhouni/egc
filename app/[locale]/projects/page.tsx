"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Lightbox } from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";

type ProjectCategory =
  | "all"
  | "residential"
  | "commercial"
  | "healthcare"
  | "cultural"
  | "administrative";

export default function ProjectsPage() {
  const [activeCategory, setActiveCategory] = useState<ProjectCategory>("all");
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [lightboxIndex, setLightboxIndex] = useState(0);

  const categories = [
    { id: "all" as ProjectCategory, label: "All Projects" },
    { id: "residential" as ProjectCategory, label: "Residential" },
    { id: "commercial" as ProjectCategory, label: "Commercial" },
    { id: "administrative" as ProjectCategory, label: "Administrative" },
    { id: "healthcare" as ProjectCategory, label: "Healthcare" },
    { id: "cultural" as ProjectCategory, label: "Cultural & Heritage" },
  ];

  const projects = [
    {
      title: "Benina International Airport - New Passenger Terminal",
      category: "administrative",
      location: "Benghazi, Libya",
      year: "2023",
      image: "/modern-airport-terminal-architecture.jpg",
      description:
        "Design and engineering works for the new passenger terminal with contemporary architecture and advanced facilities.",
    },
    {
      title: "Al-Sharqiya Rural Bank Headquarters",
      category: "administrative",
      location: "Eastern Region, Libya",
      year: "2022",
      image: "/modern-bank-building-architecture.jpg",
      description:
        "Administrative headquarters building with modern banking facilities.",
    },
    {
      title: "Qaryounis Community Center",
      category: "commercial",
      location: "Qaryounis, Benghazi",
      year: "2022",
      image: "/community-center-modern-architecture.jpg",
      description:
        "Multi-purpose community and commercial center serving the local area.",
    },
    {
      title: "Residential Complex - 1,800 Units",
      category: "residential",
      location: "Benghazi, Libya",
      year: "2022",
      image: "/modern-residential-complex-architecture.jpg",
      description:
        "Large-scale residential development with 1,800 units and integrated community facilities.",
    },
    {
      title: "Residential Complex - Boufakhra",
      category: "residential",
      location: "Boufakhra, Benghazi",
      year: "2021",
      image: "/residential-housing-complex-modern.jpg",
      description:
        "Residential housing complex with modern amenities and sustainable design.",
    },
    {
      title: "Al-Hawari Hospital",
      category: "healthcare",
      location: "Benghazi, Libya",
      year: "2021",
      image: "/modern-hospital-building-architecture.jpg",
      description:
        "Comprehensive medical facility with state-of-the-art healthcare services and modern design.",
    },
    {
      title: "Psychiatric Hospital",
      category: "healthcare",
      location: "Benghazi, Libya",
      year: "2020",
      image: "/psychiatric-hospital-modern-architecture.jpg",
      description:
        "Specialized psychiatric care facility with therapeutic environment design.",
    },
    {
      title: "Heart Care Center",
      category: "healthcare",
      location: "Benghazi, Libya",
      year: "2021",
      image: "/cardiac-care-center-architecture.jpg",
      description:
        "Specialized cardiac care center with advanced medical technology integration.",
    },
    {
      title: "Heritage Market Restoration - Al-Hout Souq",
      category: "cultural",
      location: "Old City, Benghazi",
      year: "2020",
      image: "/traditional-market-restoration-architecture.jpg",
      description:
        "Restoration and modernization of historic market within the old city development framework.",
    },
    {
      title: "Heritage Market Restoration - Al-Rabie Souq",
      category: "cultural",
      location: "Old City, Benghazi",
      year: "2020",
      image: "/heritage-market-restoration-traditional.jpg",
      description:
        "Preservation and renovation of traditional market preserving cultural heritage.",
    },
    {
      title: "Ahmed Al-Sharif Mosque",
      category: "cultural",
      location: "Benghazi, Libya",
      year: "2019",
      image: "/modern-mosque-architecture-design.jpg",
      description:
        "Contemporary mosque design blending traditional Islamic architecture with modern elements.",
    },
    {
      title: "Commercial Tower - Jamal Abdel Nasser Street",
      category: "commercial",
      location: "Benghazi, Libya",
      year: "2022",
      image: "/modern-commercial-tower-architecture.jpg",
      description:
        "Mixed-use commercial and administrative tower in prime location.",
    },
    {
      title: "Qaryounis Tourist Resort",
      category: "residential",
      location: "Qaryounis, Libya",
      year: "2021",
      image: "/luxury-resort-architecture-coastal.jpg",
      description:
        "Luxury coastal resort with hotel facilities and residential units.",
    },
    {
      title: "Sidi Faraj Tourist Development",
      category: "residential",
      location: "Sidi Faraj, Benghazi",
      year: "2020",
      image: "/coastal-resort-development-architecture.jpg",
      description:
        "Comprehensive tourist development with hotel, residential units, and recreational facilities.",
    },
    {
      title: "Residential Units - 407 Units",
      category: "residential",
      location: "Awjila, Libya",
      year: "2021",
      image: "/residential-development-modern-housing.jpg",
      description:
        "Medium-scale residential development with modern housing units.",
    },
    {
      title: "Residential Units - 1,400 Units",
      category: "residential",
      location: "Al-Nawaqiya, Libya",
      year: "2020",
      image: "/large-residential-complex-architecture.jpg",
      description:
        "Large residential community with comprehensive facilities and services.",
    },
  ];

  const filteredProjects =
    activeCategory === "all"
      ? projects
      : projects.filter((p) => p.category === activeCategory);

  const lightboxSlides = filteredProjects.map((project) => ({
    src: project.image || "/placeholder.svg",
    alt: project.title,
    title: project.title,
    description: project.description,
  }));

  const openLightbox = (index: number) => {
    setLightboxIndex(index);
    setLightboxOpen(true);
  };

  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="pt-32 pb-16 md:pt-40 md:pb-24 bg-linear-to-t from-muted/30 to-background">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="text-center max-w-4xl mx-auto">
            <p className="text-sm uppercase tracking-widest text-muted-foreground mb-4">
              Portfolio
            </p>
            <h1 className="font-serif font-semibold text-5xl md:text-6xl lg:text-7xl text-balance leading-tight">
              Our Projects
            </h1>
            <p className="text-muted-foreground mt-6 text-lg leading-relaxed max-w-2xl mx-auto">
              A diverse portfolio spanning residential, commercial, healthcare,
              and cultural projects across Libya's major cities, desert regions,
              and coastal areas. Each project reflects our commitment to
              excellence and innovation.
            </p>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section className="py-16 md:py-24 bg-background">
        <div className="container mx-auto px-6 lg:px-12">
          {/* Category Filter */}
          <div className="flex flex-wrap justify-center gap-3 mb-16">
            {categories.map((category) => (
              <Button
                key={category.id}
                variant={activeCategory === category.id ? "default" : "outline"}
                size="sm"
                onClick={() => setActiveCategory(category.id)}
                className="uppercase tracking-wider text-xs"
              >
                {category.label}
              </Button>
            ))}
          </div>

          {/* Projects Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-10">
            {filteredProjects.map((project, index) => (
              <div
                key={index}
                className="group cursor-pointer"
                onClick={() => openLightbox(index)}
              >
                <div className="relative aspect-4/3 overflow-hidden mb-6 bg-card">
                  <img
                    src={project.image || "/placeholder.svg"}
                    alt={project.title}
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

          {/* Stats Section */}
          <div className="mt-24 pt-16 border-t border-border">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
              <div>
                <div className="font-serif text-4xl md:text-5xl font-semibold text-accent mb-2">
                  500+
                </div>
                <div className="text-sm uppercase tracking-wider text-muted-foreground">
                  Projects Completed
                </div>
              </div>
              <div>
                <div className="font-serif text-4xl md:text-5xl font-semibold text-accent mb-2">
                  25+
                </div>
                <div className="text-sm uppercase tracking-wider text-muted-foreground">
                  Years Experience
                </div>
              </div>
              <div>
                <div className="font-serif text-4xl md:text-5xl font-semibold text-accent mb-2">
                  38
                </div>
                <div className="text-sm uppercase tracking-wider text-muted-foreground">
                  Team Members
                </div>
              </div>
              <div>
                <div className="font-serif text-4xl md:text-5xl font-semibold text-accent mb-2">
                  100%
                </div>
                <div className="text-sm uppercase tracking-wider text-muted-foreground">
                  Client Satisfaction
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

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
    </main>
  );
}
