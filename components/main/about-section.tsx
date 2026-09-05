"use client";

import { useEffect, useState } from "react";
import { useTranslations } from "next-intl";

// Firm was established in 1998 (see messages.about.paragraph1) -- compute the
// years-of-experience stat instead of hand-updating a hardcoded number, same
// as the /projects page stats.
const FOUNDING_YEAR = 1998;

const ABOUT_IMAGES = [
  "/about/Omar Mukhtar Monument.jpeg",
  "/about/Omar Mukhtar Monument(1).jpeg",
  "/about/Omar Mukhtar Monument(2).jpeg",
  "/about/Omar Mukhtar Monument(3).jpeg",
];

const SLIDE_INTERVAL_MS = 4000;

export function AboutSection() {
  const t = useTranslations("about");
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setActiveIndex((i) => (i + 1) % ABOUT_IMAGES.length);
    }, SLIDE_INTERVAL_MS);
    return () => clearInterval(timer);
  }, []);

  return (
    <section id="about" className="py-12 md:py-24 bg-background">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="grid md:grid-cols-2 gap-12 lg:gap-20 items-center max-w-7xl mx-auto">
          {/* Image: below the text on mobile, back to its normal column on md+ */}
          <div className="relative aspect-4/5 overflow-hidden order-2 md:order-1 bg-white">
            {ABOUT_IMAGES.map((src, index) => (
              <img
                key={src}
                src={src}
                alt="About EGC"
                className="absolute inset-0 w-full h-full object-contain transition-opacity duration-1000 ease-in-out"
                style={{ opacity: index === activeIndex ? 1 : 0 }}
              />
            ))}

            <div className="absolute bottom-4 inset-x-0 flex items-center justify-center gap-2 z-10">
              <div className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-black/30 backdrop-blur-sm">
              {ABOUT_IMAGES.map((src, index) => (
                <button
                  key={src}
                  type="button"
                  onClick={() => setActiveIndex(index)}
                  aria-label={`${index + 1}`}
                  className={`h-2 rounded-full transition-all ${
                    index === activeIndex ? "w-6 bg-white" : "w-2 bg-white/50"
                  }`}
                />
              ))}
              </div>
            </div>
          </div>

          {/* Content */}
          <div className="space-y-6 order-1 md:order-2">
            <div className="space-y-2">
              <p className="text-sm uppercase tracking-widest text-muted-foreground">
                {t("since")}
              </p>
              <h2 className="font-serif font-semibold text-4xl md:text-5xl lg:text-6xl text-balance leading-tight">
                {t("header")}
              </h2>
            </div>

            <div className="space-y-4 text-muted-foreground leading-relaxed">
              <p>{t("paragraph1")}</p>
              <p>{t("paragraph2")}</p>
              <p>{t("paragraph3")}</p>
              <p className="font-medium text-foreground">{t("paragraph4")}</p>
            </div>

            <div className="grid grid-cols-3 gap-6 pt-6 border-t border-border">
              <div>
                <div className="text-3xl font-serif font-semibold text-accent">
                  {new Date().getFullYear() - FOUNDING_YEAR}+
                </div>
                <div className="text-sm text-muted-foreground mt-1">
                  {t("years")}
                </div>
              </div>
              <div>
                <div className="text-3xl font-serif font-semibold text-accent">
                  200+
                </div>
                <div className="text-sm text-muted-foreground mt-1">
                  {t("projects")}
                </div>
              </div>
              <div>
                <div className="text-3xl font-serif font-semibold text-accent">
                  38
                </div>
                <div className="text-sm text-muted-foreground mt-1">
                  {t("team")}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Core Values */}
        <div className="mt-24 grid md:grid-cols-3 gap-8 max-w-7xl justify-center mx-auto">
          <div className="text-center p-8">
            <div className="w-16 h-16 mx-auto mb-6 rounded-full bg-accent/10 flex items-center justify-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="32"
                height="32"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="text-accent"
              >
                <path d="M12 2v20M2 12h20" />
              </svg>
            </div>
            <h3 className="font-serif font-semibold text-xl mb-3">
              {t("vision.title")}
            </h3>
            <p className="text-muted-foreground text-sm leading-relaxed">
              {t("vision.dec")}
            </p>
          </div>
          <div className="text-center p-8">
            <div className="w-16 h-16 mx-auto mb-6 rounded-full bg-accent/10 flex items-center justify-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="32"
                height="32"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="text-accent"
              >
                <path d="M12 2L2 7l10 5 10-5-10-5z" />
                <path d="M2 17l10 5 10-5M2 12l10 5 10-5" />
              </svg>
            </div>
            <h3 className="font-serif font-semibold text-xl mb-3">
              {t("mission.title")}
            </h3>
            <p className="text-muted-foreground text-sm leading-relaxed">
              {t("mission.dec")}
            </p>
          </div>
          <div className="text-center p-8">
            <div className="w-16 h-16 mx-auto mb-6 rounded-full bg-accent/10 flex items-center justify-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="32"
                height="32"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="text-accent"
              >
                <circle cx="12" cy="12" r="10" />
                <path d="M12 6v6l4 2" />
              </svg>
            </div>
            <h3 className="font-serif font-semibold text-xl mb-3">
              {t("values.title")}
            </h3>
            <p className="text-muted-foreground text-sm leading-relaxed">
              {t("values.dec")}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
