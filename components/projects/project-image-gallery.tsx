"use client";

import { useState } from "react";
import Image from "next/image";
import { useTranslations } from "next-intl";
import { Lightbox } from "yet-another-react-lightbox";
import { Zoom } from "yet-another-react-lightbox/plugins";
import "yet-another-react-lightbox/styles.css";

interface ProjectImageGalleryProps {
  images: { src: string; alt: string }[];
}

export function ProjectImageGallery({ images }: ProjectImageGalleryProps) {
  const t = useTranslations("projects");
  const [open, setOpen] = useState(false);
  const [index, setIndex] = useState(0);

  const slides = images.map((image) => ({
    src: image.src || "/placeholder.svg",
    alt: image.alt,
  }));

  return (
    <>
      <div className="grid md:grid-cols-2 gap-6">
        {images.map((image, idx) => (
          <div
            key={idx}
            className="relative aspect-4/3 overflow-hidden cursor-pointer group"
            onClick={() => {
              setIndex(idx);
              setOpen(true);
            }}
          >
            <Image
              src={image.src || "/placeholder.svg"}
              alt={image.alt}
              fill
              sizes="(min-width: 768px) 50vw, 100vw"
              className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
            />
            <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
              <p className="text-white font-medium">{t("viewProject")}</p>
            </div>
          </div>
        ))}
      </div>

      <Lightbox
        open={open}
        close={() => setOpen(false)}
        slides={slides}
        index={index}
        plugins={[Zoom]}
      />
    </>
  );
}
