export function VisionSection() {
  return (
    <section id="vision" className="py-12 md:py-24 bg-muted/30">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <p className="text-sm uppercase tracking-widest text-muted-foreground mb-4">
              Our Vision
            </p>
            <h2 className="font-serif font-semibold text-4xl md:text-5xl lg:text-6xl text-balance leading-tight mb-6">
              Shaping the Future of Architecture
            </h2>
            <div className="space-y-6 text-muted-foreground leading-relaxed">
              <p>
                At Engineering Group Company, our vision is to be the leading
                architectural and engineering consultancy in Libya and the
                region, recognized for our innovative designs that harmoniously
                blend contemporary architecture with traditional Arab heritage.
              </p>
              <p>
                We aspire to create spaces that not only meet functional
                requirements but also inspire communities, respect cultural
                values, and contribute positively to the urban fabric of our
                cities.
              </p>
              <p>
                Our commitment extends beyond individual projects to shaping
                sustainable, livable environments that enhance the quality of
                life for generations to come.
              </p>
            </div>
          </div>
          <div className="relative aspect-[4/3] overflow-hidden">
            <img
              src="/architectural-vision-modern-design.jpg"
              alt="Architectural Vision"
              className="w-full h-full object-cover"
            />
          </div>
        </div>

        {/* Core Values */}
        <div className="mt-24 grid md:grid-cols-3 gap-8">
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
