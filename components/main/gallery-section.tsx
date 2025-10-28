"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import Image from "next/image";

export function GallerySection() {
  const galleryImages = [
    {
      src: "/architectural-detail-modern-facade.jpg",
      alt: "Architectural Detail",
      span: "col-span-2",
    },
    {
      src: "/interior-design-luxury-lobby.jpg",
      alt: "Interior Design",
      span: "col-span-1",
    },
    {
      src: "/architectural-model-modern-building.jpg",
      alt: "Architectural Model",
      span: "col-span-1",
    },
    {
      src: "/construction-site-modern-architecture.jpg",
      alt: "Construction Progress",
      span: "col-span-2",
    },
    {
      src: "/architectural-drawing-blueprint.jpg",
      alt: "Design Process",
      span: "col-span-1",
    },
    {
      src: "/completed-building-exterior-sunset.jpg",
      alt: "Completed Project",
      span: "col-span-1",
    },
  ];

  return (
    <section id="gallery" className="py-12 md:py-24 bg-muted/30">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <p className="text-sm uppercase tracking-widest text-muted-foreground mb-4">
            Gallery
          </p>
          <h2 className="font-serif font-semibold text-4xl md:text-5xl lg:text-6xl text-balance leading-tight">
            Design in Detail
          </h2>
          <p className="text-muted-foreground mt-6 leading-relaxed">
            Explore the craftsmanship and attention to detail that defines our
            architectural approach.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {galleryImages.map((image, index) => (
            <div
              key={index}
              className={`relative aspect-square overflow-hidden group cursor-pointer ${image.span}`}
            >
              <Image
                src={image.src || "/placeholder.svg"}
                alt={image.alt}
                fill
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-center justify-center">
                <p className="text-white font-serif text-xl">{image.alt}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <Button
            asChild
            size="lg"
            variant="outline"
            className="group bg-transparent"
          >
            <Link href="/gallery">
              View Full Gallery
              <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
