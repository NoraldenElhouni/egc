"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight, X } from "lucide-react";
import { useTranslations } from "next-intl";
import type { HeroSlide } from "@/lib/data/hero";

const AUTOPLAY_MS = 5000;

export function ImageSlider({ slides }: { slides: HeroSlide[] }) {
  const t = useTranslations("heroSlider");
  const [activeIndex, setActiveIndex] = useState(0);
  const [isLightboxOpen, setIsLightboxOpen] = useState(false);
  const timerRef = useRef<ReturnType<typeof setInterval> | null>(null);

  const resetTimer = () => {
    if (timerRef.current) clearInterval(timerRef.current);
    if (slides.length <= 1) return;
    timerRef.current = setInterval(() => {
      setActiveIndex((i) => (i + 1) % slides.length);
    }, AUTOPLAY_MS);
  };

  useEffect(() => {
    resetTimer();
    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [slides.length]);

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
                key={slide.id}
                className="absolute inset-0 transition-opacity duration-1000 ease-in-out"
                style={{ opacity: index === activeIndex ? 1 : 0 }}
              >
                <Image
                  src={slide.url}
                  alt={slide.alt}
                  fill
                  priority={index === 0}
                  className="object-cover"
                  sizes="(min-width: 1024px) 768px, 100vw"
                />
                <div className="absolute inset-0 bg-linear-to-t from-black/60 via-black/10 to-transparent" />
              </div>
            ))}

            {slides.length > 1 && (
              <div dir="ltr" className="absolute inset-0 z-10">
                <button
                  type="button"
                  onClick={(e) => {
                    e.stopPropagation();
                    goTo(activeIndex - 1);
                  }}
                  aria-label={t("previousSlide")}
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
                  aria-label={t("nextSlide")}
                  className="absolute right-4 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 text-white flex items-center justify-center hover:bg-white/20 transition-colors"
                >
                  <ChevronRight className="w-5 h-5" />
                </button>

                <div className="absolute bottom-8 right-6 flex items-center gap-2">
                  {slides.map((slide, index) => (
                    <button
                      key={slide.id}
                      type="button"
                      onClick={(e) => {
                        e.stopPropagation();
                        goTo(index);
                      }}
                      aria-label={t("goToSlide", { number: index + 1 })}
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
            aria-label={t("closeLightbox")}
          >
            <X className="w-6 h-6 text-white" />
          </button>

          <div
            className="relative w-full h-full flex items-center justify-center p-4 md:p-8"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="relative w-full h-full max-w-6xl max-h-[80vh]">
              <Image
                src={slides[activeIndex].url}
                alt={slides[activeIndex].alt}
                fill
                sizes="100vw"
                className="object-contain"
                priority
              />
            </div>

            {slides.length > 1 && (
              <div dir="ltr">
                <button
                  onClick={() => goTo(activeIndex - 1)}
                  className="absolute left-4 top-1/2 -translate-y-1/2 p-3 rounded-full bg-white/10 hover:bg-white/20 transition-colors"
                  aria-label={t("previousSlide")}
                >
                  <ChevronLeft className="w-6 h-6 text-white" />
                </button>
                <button
                  onClick={() => goTo(activeIndex + 1)}
                  className="absolute right-4 top-1/2 -translate-y-1/2 p-3 rounded-full bg-white/10 hover:bg-white/20 transition-colors"
                  aria-label={t("nextSlide")}
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
              <p className="text-white/60 text-sm">
                {t("imageOf", { current: activeIndex + 1, total: slides.length })}
              </p>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
