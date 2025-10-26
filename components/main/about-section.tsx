export function AboutSection() {
  return (
    <section id="about" className="py-24 md:py-32 bg-background">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="grid md:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Image */}
          <div className="relative aspect-[4/5] overflow-hidden">
            <img
              src="/architectural-blueprints-and-modern-building-desig.jpg"
              alt="About EGC"
              className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
            />
          </div>

          {/* Content */}
          <div className="space-y-6">
            <div className="space-y-2">
              <p className="text-sm uppercase tracking-widest text-muted-foreground">Since 1998</p>
              <h2 className="font-serif font-semibold text-4xl md:text-5xl lg:text-6xl text-balance leading-tight">
                A Legacy of Design Excellence
              </h2>
            </div>

            <div className="space-y-4 text-muted-foreground leading-relaxed">
              <p>
                Engineering Group Company (EGC) is a multi-disciplinary architectural practice based in Benghazi, Libya,
                with extensive experience in architecture, urbanism, and engineering. Established in 1998, we have grown
                to a team of 38 dedicated professionals, including four principal partners.
              </p>
              <p>
                Our practice consists of architects, urban designers, planners, and technical staff who bring decades of
                combined expertise to every project. We specialize in on-site supervision and comprehensive project
                management, ensuring excellence from concept to completion.
              </p>
              <p>
                At the heart of EGC lies our commitment to providing distinctive design that contributes meaningfully to
                the field of architecture. We work within the framework of local urban settings, with a strong emphasis
                on cultural and environmental considerations.
              </p>
              <p className="font-medium text-foreground">
                Our contemporary architectural language embodies the tradition of Arab culture and environment, fusing
                structural tenets of traditional architecture with the vocabulary of modernism.
              </p>
            </div>

            <div className="grid grid-cols-3 gap-6 pt-6 border-t border-border">
              <div>
                <div className="text-3xl font-serif font-semibold text-accent">25+</div>
                <div className="text-sm text-muted-foreground mt-1">Years Experience</div>
              </div>
              <div>
                <div className="text-3xl font-serif font-semibold text-accent">500+</div>
                <div className="text-sm text-muted-foreground mt-1">Projects Completed</div>
              </div>
              <div>
                <div className="text-3xl font-serif font-semibold text-accent">38</div>
                <div className="text-sm text-muted-foreground mt-1">Team Members</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
