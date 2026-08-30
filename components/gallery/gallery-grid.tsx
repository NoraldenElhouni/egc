"use client";

import { useState } from "react";
import Image from "next/image";
import { useTranslations } from "next-intl";
import { Lightbox } from "yet-another-react-lightbox";
import { Zoom } from "yet-another-react-lightbox/plugins";
import "yet-another-react-lightbox/styles.css";
import type { ProjectImage } from "@/lib/data/projects";

export type GalleryImage = ProjectImage & {
  projectTitle: string;
  categoryName: string;
};

// The masonry rhythm of the original hardcoded gallery. Cycled by index so the
// layout keeps its shape for any number of images coming out of the database.
const SPANS = [
  "md:col-span-2 md:row-span-2",
  "md:col-span-1",
  "md:col-span-1",
  "md:col-span-1",
  "md:col-span-1",
  "md:col-span-2",
  "md:col-span-1",
  "md:col-span-2",
  "md:col-span-1",
  "md:col-span-2",
  "md:col-span-1",
  "md:col-span-1",
  "md:col-span-2",
  "md:col-span-1",
  "md:col-span-1",
];

export function GalleryGrid({ images }: { images: GalleryImage[] }) {
  const t = useTranslations("gallery");
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [lightboxIndex, setLightboxIndex] = useState(0);

  const lightboxSlides = images.map((image) => ({
    src: image.url || "/placeholder.svg",
    alt: image.alt,
  }));

  const openLightbox = (index: number) => {
    setLightboxIndex(index);
    setLightboxOpen(true);
  };

  if (images.length === 0) {
    return <p className="text-center text-muted-foreground">{t("empty")}</p>;
  }

  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4 md:gap-6 auto-rows-[250px]">
        {images.map((image, index) => (
          <div
            key={image.id}
            className={`relative overflow-hidden group cursor-pointer ${
              SPANS[index % SPANS.length]
            }`}
            onClick={() => openLightbox(index)}
          >
            <Image
              src={image.url || "/placeholder.svg"}
              alt={image.alt}
              fill
              sizes="(min-width: 768px) 50vw, 100vw"
              className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
            />
            <div className="absolute inset-0 bg-linear-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500">
              <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                <p className="text-xs uppercase tracking-wider mb-2 text-white/80">
                  {image.categoryName}
                </p>
                <p className="font-serif text-lg">{image.projectTitle}</p>
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
    </>
  );
}
