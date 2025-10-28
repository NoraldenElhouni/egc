import Link from "next/link";
import {
  ArrowLeft,
  MapPin,
  Calendar,
  Building2,
  CheckCircle2,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { ProjectImageGallery } from "@/components/projects/project-image-gallery";

export default function FeaturedProjectPage() {
  // Featured project: Benina International Airport
  const project = {
    title: "Benina International Airport - New Passenger Terminal",
    location: "Benghazi, Libya",
    year: "2023",
    category: "commercial",
    image: "/modern-airport-terminal-architecture.jpg",
    details: {
      overview:
        "The new passenger terminal at Benina International Airport represents a landmark achievement in Libyan infrastructure development. This state-of-the-art facility combines contemporary architectural design with advanced operational efficiency, serving as a gateway to eastern Libya. The design emphasizes natural light, spacious interiors, and seamless passenger flow while incorporating sustainable building practices and local cultural elements.",
      features: [
        "Modern terminal building with capacity for 2 million passengers annually",
        "Advanced baggage handling systems and security infrastructure",
        "Energy-efficient climate control and natural lighting systems",
        "Spacious departure and arrival halls with premium lounges",
        "Integration of traditional Libyan architectural motifs with contemporary design",
        "Comprehensive retail and dining facilities",
        "Accessible design meeting international standards",
        "Future-ready infrastructure for expansion",
      ],
      client: "Libyan Civil Aviation Authority",
      area: "45,000 m²",
      status: "Completed 2023",
      services: [
        "Architectural Design",
        "Engineering Consultation",
        "Project Management",
        "Construction Supervision",
      ],
      images: [
        "/modern-airport-terminal-architecture.jpg",
        "/airport-interior-design-modern.jpg",
        "/airport-terminal-exterior-night.jpg",
        "/airport-departure-hall-design.jpg",
        "/airport-architecture-facade-detail.jpg",
        "/airport-terminal-construction-progress.jpg",
      ],
    },
  };

  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[60vh] min-h-[500px] overflow-hidden">
        <img
          src={project.image || "/placeholder.svg"}
          alt={project.title}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-linear-to-t from-black/80 via-black/40 to-transparent" />
        <div className="absolute inset-0 flex items-end">
          <div className="container mx-auto px-6 lg:px-12 pb-16">
            <Button
              asChild
              variant="ghost"
              size="sm"
              className="text-white hover:text-white/80 mb-6"
            >
              <Link href="/projects">
                <ArrowLeft className="mr-2 h-4 w-4" />
                Back to All Projects
              </Link>
            </Button>
            <h1 className="font-serif font-semibold text-4xl md:text-5xl lg:text-6xl text-white text-balance leading-tight mb-4">
              {project.title}
            </h1>
            <div className="flex flex-wrap gap-6 text-white/90">
              <div className="flex items-center gap-2">
                <MapPin className="h-4 w-4" />
                <span>{project.location}</span>
              </div>
              <div className="flex items-center gap-2">
                <Calendar className="h-4 w-4" />
                <span>{project.year}</span>
              </div>
              <div className="flex items-center gap-2">
                <Building2 className="h-4 w-4" />
                <span className="capitalize">{project.category}</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Project Details */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="grid lg:grid-cols-3 gap-12">
            {/* Main Content */}
            <div className="lg:col-span-2 space-y-12">
              <div>
                <h2 className="font-serif font-semibold text-3xl mb-6">
                  Project Overview
                </h2>
                <p className="text-muted-foreground leading-relaxed text-lg">
                  {project.details.overview}
                </p>
              </div>

              <div>
                <h2 className="font-serif font-semibold text-3xl mb-6">
                  Key Features
                </h2>
                <ul className="space-y-4">
                  {project.details.features.map((feature, index) => (
                    <li key={index} className="flex gap-3">
                      <CheckCircle2 className="h-6 w-6 text-accent shrink-0 mt-0.5" />
                      <span className="text-muted-foreground leading-relaxed">
                        {feature}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Image Gallery */}
              <div>
                <h2 className="font-serif font-semibold text-3xl mb-6">
                  Project Gallery
                </h2>
                <ProjectImageGallery
                  images={project.details.images}
                  projectTitle={project.title}
                />
              </div>
            </div>

            {/* Sidebar */}
            <div className="lg:col-span-1">
              <div className="sticky top-24 space-y-8">
                <div className="bg-muted/30 p-8 space-y-6">
                  <h3 className="font-serif font-semibold text-2xl">
                    Project Information
                  </h3>

                  <div>
                    <p className="text-sm text-muted-foreground uppercase tracking-wider mb-2">
                      Client
                    </p>
                    <p className="font-medium">{project.details.client}</p>
                  </div>

                  <div>
                    <p className="text-sm text-muted-foreground uppercase tracking-wider mb-2">
                      Area
                    </p>
                    <p className="font-medium">{project.details.area}</p>
                  </div>

                  <div>
                    <p className="text-sm text-muted-foreground uppercase tracking-wider mb-2">
                      Status
                    </p>
                    <p className="font-medium">{project.details.status}</p>
                  </div>

                  <div>
                    <p className="text-sm text-muted-foreground uppercase tracking-wider mb-2">
                      Services
                    </p>
                    <ul className="space-y-2">
                      {project.details.services.map((service, index) => (
                        <li key={index} className="text-sm">
                          • {service}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <Button asChild className="w-full" size="lg">
                  <Link href="/#contact">Discuss Your Project</Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
