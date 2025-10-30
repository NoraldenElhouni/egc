import {
  Building2,
  Ruler,
  ClipboardCheck,
  Users,
  Lightbulb,
  FileText,
  Trees,
  HardHat,
  PenTool,
  Zap,
} from "lucide-react";
import { useTranslations } from "next-intl";

export function ServicesSection() {
  const t = useTranslations("services");
  const services = [
    {
      icon: Building2,
      title: t("architectural.title"),
      description: t("architectural.des"),
    },
    {
      icon: Ruler,
      title: t("urban.title"),
      description: t("urban.des"),
    },
    {
      icon: Trees,
      title: t("landscape.title"),
      description: t("landscape.des"),
    },
    {
      icon: HardHat,
      title: t("structural.title"),
      description: t("structural.des"),
    },
    {
      icon: ClipboardCheck,
      title: t("construction.title"),
      description: t("construction.des"),
    },
    {
      icon: Users,
      title: t("project.title"),
      description: t("project.des"),
    },
    {
      icon: FileText,
      title: t("boq.title"),
      description: t("boq.des"),
    },
    {
      icon: PenTool,
      title: t("shop.title"),
      description: t("shop.des"),
    },
    {
      icon: Zap,
      title: t("mep.title"),
      description: t("mep.des"),
    },
  ];

  return (
    <section id="services" className="py-12 md:py-24 bg-muted/30 ">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <p className="text-sm uppercase tracking-widest text-muted-foreground mb-4">
            {t("h1")}
          </p>
          <h2 className="font-serif font-semibold text-4xl md:text-5xl lg:text-6xl text-balance leading-tight">
            {t("h2")}
          </h2>
          <p className="text-muted-foreground mt-6 leading-relaxed">{t("p")}</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <div
                key={index}
                className="bg-background p-8 group hover:shadow-lg transition-shadow duration-300"
              >
                <div className="w-14 h-14 mb-6 rounded-full bg-accent/10 flex items-center justify-center group-hover:bg-accent/20 transition-colors">
                  <Icon className="w-7 h-7 text-accent" />
                </div>
                <h3 className="font-serif font-semibold text-xl mb-3">
                  {service.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed text-sm">
                  {service.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
