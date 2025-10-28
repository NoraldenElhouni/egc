"use client";

import { useState } from "react";
import { Lightbox } from "yet-another-react-lightbox";
import { Zoom } from "yet-another-react-lightbox/plugins";
import "yet-another-react-lightbox/styles.css";

export default function GalleryPage() {
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [lightboxIndex, setLightboxIndex] = useState(0);

  const galleryImages = [
    {
      src: "/modern-airport-terminal-architecture.jpg",
      alt: "Benina International Airport Terminal",
      category: "Architecture",
      span: "md:col-span-2 md:row-span-2",
    },
    {
      src: "/architectural-detail-modern-facade.jpg",
      alt: "Modern Facade Detail",
      category: "Details",
      span: "md:col-span-1",
    },
    {
      src: "/interior-design-luxury-lobby.jpg",
      alt: "Luxury Interior Design",
      category: "Interiors",
      span: "md:col-span-1",
    },
    {
      src: "/modern-hospital-building-architecture.jpg",
      alt: "Healthcare Facility",
      category: "Healthcare",
      span: "md:col-span-1",
    },
    {
      src: "/traditional-market-restoration-architecture.jpg",
      alt: "Heritage Market Restoration",
      category: "Heritage",
      span: "md:col-span-1",
    },
    {
      src: "/modern-residential-complex-architecture.jpg",
      alt: "Residential Complex",
      category: "Residential",
      span: "md:col-span-2",
    },
    {
      src: "/architectural-model-modern-building.jpg",
      alt: "Architectural Model",
      category: "Design Process",
      span: "md:col-span-1",
    },
    {
      src: "/construction-site-modern-architecture.jpg",
      alt: "Construction Progress",
      category: "Construction",
      span: "md:col-span-2",
    },
    {
      src: "/modern-commercial-tower-architecture.jpg",
      alt: "Commercial Tower",
      category: "Commercial",
      span: "md:col-span-1",
    },
    {
      src: "/luxury-resort-architecture-coastal.jpg",
      alt: "Coastal Resort",
      category: "Hospitality",
      span: "md:col-span-2",
    },
    {
      src: "/architectural-drawing-blueprint.jpg",
      alt: "Design Blueprints",
      category: "Design Process",
      span: "md:col-span-1",
    },
    {
      src: "/completed-building-exterior-sunset.jpg",
      alt: "Completed Project at Sunset",
      category: "Architecture",
      span: "md:col-span-1",
    },
    {
      src: "/modern-mosque-architecture-design.jpg",
      alt: "Contemporary Mosque Design",
      category: "Cultural",
      span: "md:col-span-2",
    },
    {
      src: "/heritage-market-restoration-traditional.jpg",
      alt: "Traditional Architecture Elements",
      category: "Heritage",
      span: "md:col-span-1",
    },
    {
      src: "/cardiac-care-center-architecture.jpg",
      alt: "Medical Facility Interior",
      category: "Healthcare",
      span: "md:col-span-1",
    },
  ];

  const lightboxSlides = galleryImages.map((image) => ({
    src: image.src || "/placeholder.svg",
    alt: image.alt,
  }));

  const openLightbox = (index: number) => {
    setLightboxIndex(index);
    setLightboxOpen(true);
  };

  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="pt-32 pb-16 md:pt-40 md:pb-24 bg-linear-to-b from-muted/30 to-background">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="text-center max-w-4xl mx-auto">
            <p className="text-sm uppercase tracking-widest text-muted-foreground mb-4">
              Gallery
            </p>
            <h1 className="font-serif font-semibold text-5xl md:text-6xl lg:text-7xl text-balance leading-tight">
              Design in Detail
            </h1>
            <p className="text-muted-foreground mt-6 text-lg leading-relaxed max-w-2xl mx-auto">
              Explore the craftsmanship, attention to detail, and architectural
              excellence that defines our work. From concept to completion,
              every project tells a story.
            </p>
          </div>
        </div>
      </section>

      {/* Gallery Grid */}
      <section className="py-16 md:py-24 bg-background">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4 md:gap-6 auto-rows-[250px]">
            {galleryImages.map((image, index) => (
              <div
                key={index}
                className={`relative overflow-hidden group cursor-pointer ${image.span}`}
                onClick={() => openLightbox(index)}
              >
                <img
                  src={image.src || "/placeholder.svg"}
                  alt={image.alt}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-linear-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                  <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                    <p className="text-xs uppercase tracking-wider mb-2 text-white/80">
                      {image.category}
                    </p>
                    <p className="font-serif text-lg">{image.alt}</p>
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
            ))}
          </div>

          {/* CTA Section */}
          <div className="mt-24 text-center">
            <h2 className="font-serif text-3xl md:text-4xl font-semibold mb-6">
              Ready to Start Your Project?
            </h2>
            <p className="text-muted-foreground mb-8 max-w-2xl mx-auto leading-relaxed">
              Let's collaborate to bring your architectural vision to life. Our
              team is ready to discuss your project requirements.
            </p>
            <a
              href="/#contact"
              className="inline-flex items-center justify-center rounded-md bg-accent px-8 py-3 text-sm font-medium text-accent-foreground hover:bg-accent/90 transition-colors uppercase tracking-wider"
            >
              Get in Touch
            </a>
          </div>
        </div>
      </section>

      {/* Lightbox with Zoom */}
      <Lightbox
        open={lightboxOpen}
        close={() => setLightboxOpen(false)}
        index={lightboxIndex}
        slides={lightboxSlides}
        plugins={[Zoom]}
        zoom={{
          maxZoomPixelRatio: 3,
          scrollToZoom: true,
        }}
        styles={{
          container: { backgroundColor: "rgba(0, 0, 0, 0.95)" },
        }}
      />
    </main>
  );
}
