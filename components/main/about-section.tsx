export function AboutSection() {
  return (
    <section id="about" className="py-12 md:py-24 bg-background">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="grid md:grid-cols-2 gap-12 lg:gap-20 items-center max-w-7xl mx-auto">
          {/* Image */}
          <div className="relative aspect-4/5 overflow-hidden">
            <img
              src="/architectural-blueprints-and-modern-building-desig.jpg"
              alt="About EGC"
              className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
            />
          </div>

          {/* Content */}
          <div className="space-y-6">
            <div className="space-y-2">
              <p className="text-sm uppercase tracking-widest text-muted-foreground">
                Since 1998
              </p>
              <h2 className="font-serif font-semibold text-4xl md:text-5xl lg:text-6xl text-balance leading-tight">
                A Legacy of Design Excellence
              </h2>
            </div>

            <div className="space-y-4 text-muted-foreground leading-relaxed">
              <p>
                Engineering Group Company (EGC) is a multi-disciplinary
                architectural practice based in Benghazi, Libya, with extensive
                experience in architecture, urbanism, and engineering.
                Established in 1998, we have grown to a team of 38 dedicated
                professionals, including four principal partners.
              </p>
              <p>
                Our practice consists of architects, urban designers, planners,
                and technical staff who bring decades of combined expertise to
                every project. We specialize in on-site supervision and
                comprehensive project management, ensuring excellence from
                concept to completion.
              </p>
              <p>
                At the heart of EGC lies our commitment to providing distinctive
                design that contributes meaningfully to the field of
                architecture. We work within the framework of local urban
                settings, with a strong emphasis on cultural and environmental
                considerations.
              </p>
              <p className="font-medium text-foreground">
                Our contemporary architectural language embodies the tradition
                of Arab culture and environment, fusing structural tenets of
                traditional architecture with the vocabulary of modernism.
              </p>
            </div>

            <div className="grid grid-cols-3 gap-6 pt-6 border-t border-border">
              <div>
                <div className="text-3xl font-serif font-semibold text-accent">
                  25+
                </div>
                <div className="text-sm text-muted-foreground mt-1">
                  Years Experience
                </div>
              </div>
              <div>
                <div className="text-3xl font-serif font-semibold text-accent">
                  500+
                </div>
                <div className="text-sm text-muted-foreground mt-1">
                  Projects Completed
                </div>
              </div>
              <div>
                <div className="text-3xl font-serif font-semibold text-accent">
                  38
                </div>
                <div className="text-sm text-muted-foreground mt-1">
                  Team Members
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
              Innovation
            </h3>
            <p className="text-muted-foreground text-sm leading-relaxed">
              Embracing cutting-edge design solutions while respecting
              traditional architectural principles.
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
              Excellence
            </h3>
            <p className="text-muted-foreground text-sm leading-relaxed">
              Delivering the highest quality in every aspect of our work, from
              design to execution.
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
              Sustainability
            </h3>
            <p className="text-muted-foreground text-sm leading-relaxed">
              Creating environmentally responsible designs that minimize impact
              and maximize efficiency.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
