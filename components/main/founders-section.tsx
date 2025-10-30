import { useTranslations } from "next-intl";
import Image from "next/image";

export function FoundersSection() {
  const t = useTranslations("founders");
  const founders = [
    {
      name: t("rafiq.name"),
      title: t("rafiq.title"),
      image: "/professionals/architect-1.png",
      bio: t("rafiq.bio"),
    },
    {
      name: t("amer.name"),
      title: t("amer.title"),
      image: "/professional-engineer-portrait.png",
      bio: t("amer.bio"),
    },
    {
      name: t("tareq.name"),
      title: t("tareq.title"),
      image: "/professional-engineer-portrait.png",
      bio: t("tareq.bio"),
    },
  ];

  return (
    <section id="founders" className="py-16 md:py-20 bg-muted/30">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <p className="text-sm uppercase tracking-widest text-muted-foreground mb-3">
            {t("leadership")}
          </p>
          <h2 className="font-serif font-semibold text-3xl md:text-4xl text-balance leading-tight">
            {t("title")}
          </h2>
          <p className="text-muted-foreground mt-4 text-sm leading-relaxed">
            {t("description")}
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 justify-center gap-8 max-w-6xl mx-auto">
          {founders.map((founder, index) => (
            <div key={index} className="group">
              <div className="relative aspect-3/4 overflow-hidden mb-4 bg-card rounded-xl">
                <Image
                  src={founder.image || "/placeholder.svg"}
                  alt={founder.name}
                  fill
                  className="w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700"
                />
              </div>
              <div className="space-y-1.5">
                <h3 className="font-serif font-semibold text-lg">
                  {founder.name}
                </h3>
                <p className="text-xs text-accent uppercase tracking-wider">
                  {founder.title}
                </p>
                <p className="text-xs text-muted-foreground leading-relaxed">
                  {founder.bio}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
