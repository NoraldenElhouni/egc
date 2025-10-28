import {
  Building2,
  Ruler,
  ClipboardCheck,
  Users,
  Lightbulb,
  FileText,
} from "lucide-react";
import { useTranslations } from "next-intl";

export function ServicesSection() {
  const t = useTranslations("services");
  const services = [
    {
      icon: Building2,
      title: t("architectural"),
      description: t("architecturalDesc"),
    },
    {
      icon: Ruler,
      title: t("urban"),
      description: t("urbanDesc"),
    },
    {
      icon: ClipboardCheck,
      title: t("project"),
      description: t("projectDesc"),
    },
    {
      icon: Users,
      title: t("engineering"),
      description: t("engineeringDesc"),
    },
    {
      icon: Lightbulb,
      title: t("heritage"),
      description: t("heritageDesc"),
    },
    {
      icon: FileText,
      title: t("site"),
      description: t("siteDesc"),
    },
  ];

  return (
    <section id="services" className="py-12 md:py-24 bg-muted/30 ">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <p className="text-sm uppercase tracking-widest text-muted-foreground mb-4">
            What We Do
          </p>
          <h2 className="font-serif font-semibold text-4xl md:text-5xl lg:text-6xl text-balance leading-tight">
            Our Services
          </h2>
          <p className="text-muted-foreground mt-6 leading-relaxed">
            Comprehensive architectural and engineering services tailored to
            meet the unique needs of each project, from initial concept through
            final completion.
          </p>
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
