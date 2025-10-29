"use client";

import { useState } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import Image from "next/image";

type ProjectCategory =
  | "all"
  | "residential"
  | "commercial"
  | "healthcare"
  | "cultural";

export function ProjectsSection() {
  const [activeCategory, setActiveCategory] = useState<ProjectCategory>("all");

  const categories = [
    { id: "all" as ProjectCategory, label: "All Projects" },
    { id: "residential" as ProjectCategory, label: "Residential" },
    { id: "commercial" as ProjectCategory, label: "Commercial" },
    { id: "healthcare" as ProjectCategory, label: "Healthcare" },
    { id: "cultural" as ProjectCategory, label: "Cultural" },
  ];

  const projects = [
    {
      title: "Benina International Airport",
      category: "commercial",
      location: "Benghazi, Libya",
      year: "2023",
      image: "/modern-airport-terminal-architecture.jpg",
      description:
        "New passenger terminal with contemporary design and advanced facilities.",
      slug: "benina-international-airport",
    },
    {
      title: "Residential Complex",
      category: "residential",
      location: "Benghazi, Libya",
      year: "2022",
      image: "/modern-residential-complex-architecture.jpg",
      description:
        "1,800 residential units with integrated community facilities.",
      slug: "residential-complex-benghazi",
    },
    {
      title: "Al-Hawari Hospital",
      category: "healthcare",
      location: "Benghazi, Libya",
      year: "2021",
      image: "/modern-hospital-building-architecture.jpg",
      description:
        "State-of-the-art medical facility with comprehensive healthcare services.",
      slug: "al-hawari-hospital",
    },
    {
      title: "Heritage Market Restoration",
      category: "cultural",
      location: "Old City, Benghazi",
      year: "2020",
      image: "/traditional-market-restoration-architecture.jpg",
      description:
        "Restoration and modernization of historic market preserving cultural heritage.",
      slug: "heritage-market-restoration",
    },
    {
      title: "Commercial Tower",
      category: "commercial",
      location: "Benghazi, Libya",
      year: "2022",
      image: "/modern-commercial-tower-architecture.jpg",
      description: "Mixed-use development combining office and retail spaces.",
      slug: "commercial-tower-benghazi",
    },
    {
      title: "Qaryounis Resort",
      category: "residential",
      location: "Qaryounis, Libya",
      year: "2021",
      image: "/luxury-resort-architecture-coastal.jpg",
      description:
        "Luxury coastal resort with hotel and residential facilities.",
      slug: "qaryounis-resort",
    },
    {
      title: "Residential Complex",
      category: "residential",
      location: "Benghazi, Libya",
      year: "2022",
      image: "/modern-residential-complex-architecture.jpg",
      description:
        "1,800 residential units with integrated community facilities.",
      slug: "residential-complex-benghazi",
    },
    {
      title: "Heritage Market Restoration",
      category: "cultural",
      location: "Old City, Benghazi",
      year: "2020",
      image: "/traditional-market-restoration-architecture.jpg",
      description:
        "Restoration and modernization of historic market preserving cultural heritage.",
      slug: "heritage-market-restoration",
    },
  ];

  const filteredProjects =
    activeCategory === "all"
      ? projects
      : projects.filter((p) => p.category === activeCategory);
  const displayedProjects = filteredProjects.slice(0, 6);

  return (
    <section id="projects" className="py-12 md:py-24 bg-background">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <p className="text-sm uppercase tracking-widest text-muted-foreground mb-4">
            Portfolio
          </p>
          <h2 className="font-serif font-semibold text-4xl md:text-5xl lg:text-6xl text-balance leading-tight">
            Our Projects
          </h2>
          <p className="text-muted-foreground mt-6 leading-relaxed">
            A diverse portfolio spanning residential, commercial, healthcare,
            and cultural projects across Libya&apos;s major cities and coastal
            regions.
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
              {category.label}
            </Button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {displayedProjects.map((project, index) => (
            <div key={index} className="group cursor-pointer">
              <div className="relative aspect-4/3 overflow-hidden mb-6 bg-card">
                <Image
                  src={project.image || "/placeholder.svg"}
                  alt={project.title}
                  fill
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-linear-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                  <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                    <p className="text-sm mb-2">{project.description}</p>
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
            </div>
          ))}
        </div>

        {/* <div className="text-center mt-12">
          <Button asChild size="lg" className="group">
            <Link href="/projects">
              View All Projects
              <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </Button>
        </div> */}
      </div>
    </section>
  );
}
