export function HistorySection() {
  const milestones = [
    {
      year: "1998",
      title: "Foundation",
      description:
        "Engineering Group Company established in Benghazi with a vision to transform architectural practice in Libya.",
    },
    {
      year: "2005",
      title: "Major Expansion",
      description:
        "Expanded team to 20+ professionals and completed first large-scale residential project.",
    },
    {
      year: "2010",
      title: "Healthcare Excellence",
      description:
        "Completed Al-Hawari Hospital, establishing our reputation in healthcare facility design.",
    },
    {
      year: "2015",
      title: "Heritage Conservation",
      description:
        "Pioneered heritage restoration projects in Benghazi's Old City, preserving cultural landmarks.",
    },
    {
      year: "2020",
      title: "Infrastructure Leadership",
      description:
        "Selected for Benina International Airport expansion, our largest infrastructure project to date.",
    },
    {
      year: "2024",
      title: "Regional Recognition",
      description:
        "Recognized as one of Libya's leading architectural firms with 500+ completed projects.",
    },
  ];

  return (
    <section id="history" className="py-12 md:py-24 bg-background">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <p className="text-sm uppercase tracking-widest text-muted-foreground mb-4">
            Our Journey
          </p>
          <h2 className="font-serif font-semibold text-4xl md:text-5xl lg:text-6xl text-balance leading-tight">
            25+ Years of Excellence
          </h2>
          <p className="text-muted-foreground mt-6 leading-relaxed">
            From our founding in 1998 to becoming one of Libya's most respected
            architectural firms, our journey has been marked by innovation,
            dedication, and a commitment to excellence.
          </p>
        </div>

        {/* Timeline */}
        <div className="relative">
          {/* Vertical line */}
          <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-px bg-border hidden md:block" />

          <div className="space-y-12">
            {milestones.map((milestone, index) => (
              <div key={index} className="relative">
                <div
                  className={`grid md:grid-cols-2 gap-8 items-center ${
                    index % 2 === 0 ? "" : "md:flex-row-reverse"
                  }`}
                >
                  {/* Content */}
                  <div
                    className={`${
                      index % 2 === 0
                        ? "md:text-right md:pr-12"
                        : "md:col-start-2 md:pl-12"
                    }`}
                  >
                    <div className="inline-block px-4 py-2 bg-accent/10 text-accent font-semibold text-sm mb-4">
                      {milestone.year}
                    </div>
                    <h3 className="font-serif font-semibold text-2xl mb-3">
                      {milestone.title}
                    </h3>
                    <p className="text-muted-foreground leading-relaxed">
                      {milestone.description}
                    </p>
                  </div>

                  {/* Timeline dot */}
                  <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-accent rounded-full border-4 border-background" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
