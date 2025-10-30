import { useTranslations } from "next-intl";

export function AboutSection() {
  const t = useTranslations("about");
  return (
    <section id="about" className="py-12 md:py-24 bg-background">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="grid md:grid-cols-2 gap-12 lg:gap-20 items-center max-w-7xl mx-auto">
          {/* Image */}
          <div className="relative aspect-4/5 overflow-hidden">
            <img
              src="/about/Layer 571.png"
              alt="About EGC"
              className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
            />
          </div>

          {/* Content */}
          <div className="space-y-6">
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
                  25+
                </div>
                <div className="text-sm text-muted-foreground mt-1">
                  {t("years")}
                </div>
              </div>
              <div>
                <div className="text-3xl font-serif font-semibold text-accent">
                  500+
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
