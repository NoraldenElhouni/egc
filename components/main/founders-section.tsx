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
    {
      name: "Principal Partner",
      title: "Design Director & Co-Founder",
      image: "/professional-designer-portrait.png",
      bio: "Leading the creative vision with a focus on contemporary design that honors traditional Arab architectural principles.",
    },
  ]

  return (
    <section id="founders" className="py-24 md:py-32 bg-muted/30">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <p className="text-sm uppercase tracking-widest text-muted-foreground mb-4">Leadership</p>
          <h2 className="font-serif font-semibold text-4xl md:text-5xl lg:text-6xl text-balance leading-tight">
            Meet Our Co-Founders
          </h2>
          <p className="text-muted-foreground mt-6 leading-relaxed">
            Four principal partners with complementary expertise, united by a shared vision for architectural excellence
            and cultural preservation.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {founders.map((founder, index) => (
            <div key={index} className="group">
              <div className="relative aspect-[3/4] overflow-hidden mb-6 bg-card">
                <img
                  src={founder.image || "/placeholder.svg"}
                  alt={founder.name}
                  className="w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700"
                />
              </div>
              <div className="space-y-2">
                <h3 className="font-serif font-semibold text-xl">{founder.name}</h3>
                <p className="text-sm text-accent uppercase tracking-wider">{founder.title}</p>
                <p className="text-sm text-muted-foreground leading-relaxed">{founder.bio}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
