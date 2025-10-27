import Image from "next/image";

export function FoundersSection() {
  const founders = [
    {
      name: "Principal Partner",
      title: "Lead Architect & Co-Founder",
      image: "/professionals/architect-1.png",
      bio: "With over 25 years of experience in architectural design and urban planning, our lead architect has shaped the vision of EGC since its inception.",
    },
    {
      name: "Principal Partner",
      title: "Urban Planning Director & Co-Founder",
      image: "/professional-urban-planner-portrait.jpg",
      bio: "Specializing in sustainable urban development and heritage preservation, bringing innovative solutions to complex planning challenges.",
    },
    {
      name: "Principal Partner",
      title: "Engineering Director & Co-Founder",
      image: "/professional-engineer-portrait.png",
      bio: "Expert in structural engineering and project management, ensuring technical excellence and seamless execution of all projects.",
    },
  ];

  return (
    <section id="founders" className="py-16 md:py-20 bg-muted/30">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <p className="text-sm uppercase tracking-widest text-muted-foreground mb-3">
            Leadership
          </p>
          <h2 className="font-serif font-semibold text-3xl md:text-4xl text-balance leading-tight">
            Meet Our Co-Founders
          </h2>
          <p className="text-muted-foreground mt-4 text-sm leading-relaxed">
            Four principal partners with complementary expertise, united by a
            shared vision for architectural excellence and cultural
            preservation.
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
