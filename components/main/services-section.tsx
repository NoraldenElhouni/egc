import {
  Building2,
  Ruler,
  ClipboardCheck,
  Users,
  Lightbulb,
  FileText,
} from "lucide-react";

export function ServicesSection() {
  const services = [
    {
      icon: Building2,
      title: "Architectural Design",
      description:
        "Comprehensive architectural design services from concept to completion, blending contemporary aesthetics with functional excellence.",
    },
    {
      icon: Ruler,
      title: "Urban Planning",
      description:
        "Master planning and urban design solutions that create sustainable, livable communities and enhance urban environments.",
    },
    {
      icon: ClipboardCheck,
      title: "Project Management",
      description:
        "End-to-end project management ensuring timely delivery, quality control, and budget adherence throughout the construction process.",
    },
    {
      icon: Users,
      title: "Engineering Consultancy",
      description:
        "Multidisciplinary engineering services including structural, MEP, and civil engineering for complex projects.",
    },
    {
      icon: Lightbulb,
      title: "Heritage Conservation",
      description:
        "Specialized restoration and conservation services preserving cultural heritage while adapting historic structures for modern use.",
    },
    {
      icon: FileText,
      title: "Site Supervision",
      description:
        "Professional on-site supervision and quality assurance ensuring construction meets design specifications and standards.",
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
