"use client";

import { useState } from "react";
import { Lightbox } from "yet-another-react-lightbox";
import { Zoom } from "yet-another-react-lightbox/plugins";
import "yet-another-react-lightbox/styles.css";

interface ProjectImageGalleryProps {
  images: string[];
  projectTitle: string;
}

export function ProjectImageGallery({
  images,
  projectTitle,
}: ProjectImageGalleryProps) {
  const [open, setOpen] = useState(false);
  const [index, setIndex] = useState(0);

  const slides = images.map((src) => ({
    src: src || "/placeholder.svg",
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
            <img
              src={image || "/placeholder.svg"}
              alt={`${projectTitle} - Image ${idx + 1}`}
              className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
            />
            <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
              <p className="text-white font-medium">Click to enlarge</p>
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
