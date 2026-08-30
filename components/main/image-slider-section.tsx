"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight, X } from "lucide-react";

// TEMP: hardcoded from existing project images until this is Supabase-backed
// (see docs/plan/supabase-cms-hero-slider.md).
const slides = [
  {
    src: "/projects/Zintan Airport/Layer 680.png",
    alt: "Zintan Airport",
    title: "Zintan Airport",
  },
  {
    src: "/projects/1800 Housing Units/t8.png",
    alt: "1800 Housing Units",
    title: "1800 Housing Units",
  },
  {
    src: "/projects/Abu Nawas Tourist Project, Tripoli/Layer 533.png",
    alt: "Abu Nawas Tourist Project, Tripoli",
    title: "Abu Nawas Tourist Project",
  },
  {
    src: "/projects/Omer Al Mukhtar Monument/pre-om-tg-hd-010.png",
    alt: "Omar Mukhtar Monument",
    title: "Omar Mukhtar Monument",
  },
  {
    src: "/projects/Peril Island Housing/Layer 597.png",
    alt: "Peril Island Housing",
    title: "Peril Island Housing",
  },
];

const AUTOPLAY_MS = 5000;

export function ImageSliderSection() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isLightboxOpen, setIsLightboxOpen] = useState(false);
  const timerRef = useRef<ReturnType<typeof setInterval> | null>(null);

  const resetTimer = () => {
    if (timerRef.current) clearInterval(timerRef.current);
    timerRef.current = setInterval(() => {
      setActiveIndex((i) => (i + 1) % slides.length);
    }, AUTOPLAY_MS);
  };

  useEffect(() => {
    resetTimer();
    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, []);

  const goTo = (index: number) => {
    setActiveIndex((index + slides.length) % slides.length);
    resetTimer();
  };

  const openLightbox = () => {
    if (timerRef.current) clearInterval(timerRef.current);
    setIsLightboxOpen(true);
  };

  const closeLightbox = () => {
    setIsLightboxOpen(false);
    resetTimer();
  };

  if (slides.length === 0) return null;

  return (
    <>
      <section className="py-12 md:py-24 bg-background">
      <div className="container mx-auto px-6 lg:px-12">
        <div
          className="relative max-w-6xl mx-auto aspect-video overflow-hidden cursor-pointer"
          onClick={openLightbox}
        >
          {slides.map((slide, index) => (
            <div
              key={slide.src}
              className="absolute inset-0 transition-opacity duration-1000 ease-in-out"
              style={{ opacity: index === activeIndex ? 1 : 0 }}
            >
              <Image
                src={slide.src}
                alt={slide.alt}
                fill
                priority={index === 0}
                className="object-cover"
                sizes="(min-width: 1024px) 768px, 100vw"
              />
              <div className="absolute inset-0 bg-linear-to-t from-black/60 via-black/10 to-transparent" />
            </div>
          ))}

          {/* Caption */}
          <div className="absolute bottom-8 left-6 right-6 z-10">
            <p className="font-serif text-2xl md:text-4xl text-white text-balance">
              {slides[activeIndex].title}
            </p>
          </div>

          {slides.length > 1 && (
            <div dir="ltr" className="absolute inset-0 z-10">
              <button
                type="button"
                onClick={(e) => {
                  e.stopPropagation();
                  goTo(activeIndex - 1);
                }}
                aria-label="Previous slide"
                className="absolute left-4 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 text-white flex items-center justify-center hover:bg-white/20 transition-colors"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>
              <button
                type="button"
                onClick={(e) => {
                  e.stopPropagation();
                  goTo(activeIndex + 1);
                }}
                aria-label="Next slide"
                className="absolute right-4 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 text-white flex items-center justify-center hover:bg-white/20 transition-colors"
              >
                <ChevronRight className="w-5 h-5" />
              </button>

              <div className="absolute bottom-8 right-6 flex items-center gap-2">
                {slides.map((slide, index) => (
                  <button
                    key={slide.src}
                    type="button"
                    onClick={(e) => {
                      e.stopPropagation();
                      goTo(index);
                    }}
                    aria-label={`Go to slide ${index + 1}`}
                    className={`h-2 rounded-full transition-all ${
                      index === activeIndex ? "w-6 bg-white" : "w-2 bg-white/40"
                    }`}
                  />
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </section>

      {isLightboxOpen && (
        <div
          className="fixed inset-0 z-50 bg-black/95 flex items-center justify-center"
          onClick={closeLightbox}
        >
          <button
            onClick={closeLightbox}
            className="absolute top-4 right-4 z-50 p-2 rounded-full bg-white/10 hover:bg-white/20 transition-colors"
            aria-label="Close lightbox"
          >
            <X className="w-6 h-6 text-white" />
          </button>

          <div
            className="relative w-full h-full flex items-center justify-center p-4 md:p-8"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="relative w-full h-full max-w-6xl max-h-[80vh]">
              <Image
                src={slides[activeIndex].src}
                alt={slides[activeIndex].alt}
                fill
                className="object-contain"
                priority
              />
            </div>

            {slides.length > 1 && (
              <div dir="ltr">
                <button
                  onClick={() => goTo(activeIndex - 1)}
                  className="absolute left-4 top-1/2 -translate-y-1/2 p-3 rounded-full bg-white/10 hover:bg-white/20 transition-colors"
                  aria-label="Previous image"
                >
                  <ChevronLeft className="w-6 h-6 text-white" />
                </button>
                <button
                  onClick={() => goTo(activeIndex + 1)}
                  className="absolute right-4 top-1/2 -translate-y-1/2 p-3 rounded-full bg-white/10 hover:bg-white/20 transition-colors"
                  aria-label="Next image"
                >
                  <ChevronRight className="w-6 h-6 text-white" />
                </button>
              </div>
            )}
          </div>

          <div
            dir="ltr"
            className="absolute bottom-0 left-0 right-0 p-6 bg-linear-to-t from-black/80 to-transparent"
          >
            <div className="max-w-6xl mx-auto">
              <h3 className="text-white font-serif font-semibold text-2xl mb-2">
                {slides[activeIndex].title}
              </h3>
              <p className="text-white/60 text-sm">
                {activeIndex + 1} of {slides.length}
              </p>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
