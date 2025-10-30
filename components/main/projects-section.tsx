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
        "/projects/Benghazi Westren Lake Recreation and leisure Park/1_4 - Photo.png",
        "/projects/Benghazi Westren Lake Recreation and leisure Park/westren Lake.png",
        "/projects/Benghazi Westren Lake Recreation and leisure Park/1_2 - Photo.png",
        "/projects/Benghazi Westren Lake Recreation and leisure Park/1_8 - Photo.png",
      ],
      slug: "Benghazi-Westren-Lake-Recreation-and-leisure-Park",
    },
    {
      title: "1800 Housing Units",
      category: "residential",
      location: "Benghazi, Libya",
      description:
        "The Benghazi 1800 Housing Development in Libya is a conceptual master plan for a residential project that draws inspiration from the spatial qualities of traditional Italian villages, centering community life around a vibrant central square designed to host social, commercial, and recreational activities. This core is surrounded by clusters of housing units and educational facilities, arranged to ensure accessibility and a comfortable living environment while promoting walkability and interaction within a human-scaled urban fabric that balances density with open communal areas. By integrating Mediterranean planning principles with local needs, the proposal aims to create a cohesive and lively neighborhood that fosters family life and community engagement in Benghazi.",
      images: [
        "/projects/1800 Housing Units/t8.png",
        "/projects/1800 Housing Units/Layer 9.png",
        "/projects/1800 Housing Units/Layer 11.png",
        "/projects/1800 Housing Units/Layer 14.png",
        "/projects/1800 Housing Units/Layer 16.png",
      ],
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
      images: ["/projects/Abu Nawas Tourist Project, Tripoli/Layer 533.png"],
      slug: "abu-nawas-tourist-project-tripoli",
    },
    {
      title: "Fish Market Restoration",
      category: "cultural",
      location: "Benghazi, Libya",
      description:
        "The Fish Market Restoration in Benghazi, Libya, is a concept proposal for the adaptive reuse of one of the city's historic architectural landmarks. The project approaches the restoration with great sensitivity, aiming to preserve the building's original character, authentic details, and materials while subtly integrating modern interventions to meet current functional needs. The renewed design envisions the market as a vibrant public space that continues to serve local vendors while also attracting visitors through the addition of a small restaurant and tourist amenities, thereby breathing new life into a beloved community landmark and bridging its heritage with modern urban activity.",
      images: ["/projects/Resort Hotel2/Layer 578-1.png"],
      slug: "fish-market-restoration",
    },
    {
      title: "Omar Mukhtar Monument",
      category: "cultural",
      location: "Libya",
      description:
        "The Omar Mukhtar Monument, originally built in 1957 and demolished during the Gaddafi period, stands as a symbol of national heritage and pride. Our team developed comprehensive architectural and construction drawings to faithfully reconstruct the monument, restoring it to its original form and honoring its historical and cultural significance. The project emphasized accuracy in materials, detailing, and proportions, ensuring that the restored monument reflects the design intent and spirit of the original work. By carefully balancing historical fidelity with modern construction techniques, the reconstruction revives an important national landmark for future generations.",
      images: ["/projects/Omer Al Mukhtar Monument/الضريح6.png"],
      slug: "omar-mukhtar-monument",
    },
    {
      title: "Zentain Airport",
      category: "commercial",
      location: "Libya",
      description:
        "The Zentain Airport was designed to accommodate 400,000 passengers annually, serving both local and international flights efficiently. The concept prioritizes functional simplicity and spatial efficiency, achieving maximum operational capacity within a minimal footprint. The design emphasizes clear circulation, streamlined passenger flow, and user-friendly facilities, ensuring comfort and convenience for travelers. Strategic zoning of check-in, security, boarding, and support areas allows for smooth operations while maintaining flexibility for future expansion. By combining efficiency, functionality, and modern airport standards, the project delivers a compact yet effective hub that meets the region's air transport needs.",
      images: ["/projects/Zintan Airport/Layer 680.png"],
      slug: "zentain-airport",
    },
    {
      title: "Mail Proposal",
      category: "commercial",
      location: "Qatar",
      description:
        "The design proposal for the mail in Qatar reinterprets local Qatari architectural identity through a contemporary lens. The concept integrates traditional design elements—such as shaded walkways, courtyards, and geometric patterns—with modern materials and technologies to create a vibrant, environmentally responsive shopping destination. Sustainability was a key design driver, emphasizing natural ventilation, controlled daylight, and the use of energy-efficient systems to ensure thermal comfort while reducing environmental impact. The result is a dynamic retail environment that balances cultural authenticity with modern expectations of leisure, comfort, and sustainability—offering an enjoyable shopping experience that reflects the spirit of Qatar's architectural heritage.",
      images: ["/projects/Mail Proposal Qatar/Layer 652.png"],
      slug: "mail-proposal-qatar",
    },
    {
      title: "Mall Al-Haya",
      category: "commercial",
      location: "Benghazi, Libya",
      description:
        "Mall Al-Haya is a small, locally oriented shopping center located in the heart of Benghazi. The design carefully responds to its urban context, particularly the neighboring Cecia building, a historic structure from the Italian period, ensuring that the new development respects and complements the area's architectural heritage. The layout emphasizes functional retail spaces while maintaining a sensitive relationship with surrounding streetscapes and public areas. By blending contemporary design with contextual awareness, the project creates a small-scale commercial hub that serves local needs while honoring the city's historical fabric.",
      images: ["/projects/Mall Haya/Layer 700.png"],
      slug: "mall-haya",
    },
    {
      title: "Peril Island Housing",
      category: "residential",
      location: "Doha, Qatar",
      description:
        "The Peril Island Housing project in Doha was designed following the developer's guidelines while responding to the needs of Qatari families. The layout emphasizes maximizing sea views for all residences, creating a strong visual and spatial connection with the waterfront. The design combines functional living spaces with communal amenities, ensuring comfort, privacy, and convenience for families. Thoughtful orientation, landscaping, and open spaces enhance the quality of life while maintaining harmony with the coastal environment.",
      images: [
        "/projects/Peril Island Housing/Layer 597.png",
        "/projects/Peril Island Housing/Layer 598.png",
      ],
      slug: "peril-island-housing",
    },
    {
      title: "Cardan Hotel",
      category: "commercial",
      location: "Benghazi, Libya",
      description:
        "The Cardan Hotel is situated on Dubai Street in Benghazi, a vibrant area known for its gold and jewelry shops. The hotel comprises 47 guest rooms, including three suites, as well as a conference hall, meeting rooms, and restaurants. The architectural design adopts a simple Mediterranean style, creating a harmonious visual relationship with the surrounding urban fabric. The use of clean lines, light materials, and contextual detailing allows the hotel to integrate seamlessly into the lively street, providing both functionality and aesthetic appeal for guests and visitors.",
      images: [
        "/projects/Cardan Hotel/Asset 2.png",
        "/projects/Cardan Hotel/Asset 3.png",
        "/projects/Cardan Hotel/Asset 4.png",
        "/projects/Cardan Hotel/Asset 5.png",
      ],
      slug: "cardan-hotel",
    },
    {
      title: "Venice Street Hotel Studio Complex",
      category: "commercial",
      location: "Benghazi, Libya",
      description:
        "The Venice Street Hotel Studio Complex comprises 12 studios set within an outdoor landscaped environment featuring a children's play area and swimming pools. Located on one of Benghazi's most prominent shopping streets, the complex combines convenience with leisure, offering residents and guests a comfortable and engaging environment. The architectural design blends Arabic motifs with Mediterranean townscapes, creating a harmonious and culturally resonant aesthetic. Thoughtful spatial planning ensures privacy for each studio while promoting interaction through shared outdoor spaces, balancing community living with modern hospitality standards.",
      images: [
        "/projects/Venice Street Hotel Studio Complex/Enscape_2024-10-10-11-08-39 copy.png",
        "/projects/Venice Street Hotel Studio Complex/Enscape_2024-10-12-03-55-42 copy.png",
        "/projects/Venice Street Hotel Studio Complex/Enscape_2024-10-12-03-59-50 copy.jpg",
      ],
      slug: "venice-street-hotel-studio-complex",
    },
  ];

  const filteredProjects =
    activeCategory === "all"
      ? projects
      : projects.filter((p) => p.category === activeCategory);
  const displayedProjects = filteredProjects.slice(0, 20);

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
