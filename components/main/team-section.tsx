import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

export function TeamSection() {
  const team = [
    {
      name: "Ahmed Al-Mansouri",
      role: "Principal Partner & Lead Architect",
      image: "/professionals/architect-1.png",
      bio: "With over 25 years of experience, Ahmed leads our architectural vision and major project initiatives.",
    },
    {
      name: "Fatima Hassan",
      role: "Principal Partner & Urban Planner",
      image: "/female-architect-professional.jpg",
      bio: "Fatima specializes in urban planning and sustainable design, bringing innovative solutions to complex projects.",
    },
    {
      name: "Omar Khalil",
      role: "Principal Partner & Structural Engineer",
      image: "/structural-engineer-professional.jpg",
      bio: "Omar ensures structural integrity and engineering excellence across all our projects.",
    },
    {
      name: "Layla Ibrahim",
      role: "Principal Partner & Project Director",
      image: "/project-manager-professional.jpg",
      bio: "Layla oversees project management and client relations, ensuring seamless project delivery.",
    },
  ];

  return (
    <section
      id="team"
      className="py-12 md:py-24 bg-background max-w-7xl mx-auto"
    >
      <div className="container mx-auto px-6 lg:px-12">
        <div className="flex items-end justify-between mb-16">
          <div className="max-w-2xl">
            <p className="text-sm uppercase tracking-widest text-muted-foreground mb-4">
              Our Team
            </p>
            <h2 className="font-serif font-semibold text-4xl md:text-5xl lg:text-6xl text-balance leading-tight">
              Meet Our Leadership
            </h2>
            <p className="text-muted-foreground mt-6 leading-relaxed">
              Our team of 38 professionals is led by four principal partners who
              bring decades of combined experience in architecture, engineering,
              and project management.
            </p>
          </div>
          <Button
            asChild
            variant="outline"
            className="hidden md:flex bg-transparent"
          >
            <Link href="/team" className="flex items-center gap-2">
              View All Team
              <ArrowRight size={16} />
            </Link>
          </Button>
        </div>

        {/* Principal Partners */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16 max-w-6xl mx-auto">
          {team.map((member, index) => (
            <div key={index} className="group">
              <div className="relative aspect-[3/4] overflow-hidden mb-6 bg-card">
                <img
                  src={member.image || "/placeholder.svg"}
                  alt={member.name}
                  className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500"
                />
              </div>
              <h3 className="font-serif font-semibold text-xl mb-1">
                {member.name}
              </h3>
              <p className="text-sm text-accent mb-3">{member.role}</p>
              <p className="text-sm text-muted-foreground leading-relaxed">
                {member.bio}
              </p>
            </div>
          ))}
        </div>

        <div className="flex justify-center mb-12 md:hidden">
          <Button asChild variant="outline">
            <Link href="/team" className="flex items-center gap-2">
              View All Team
              <ArrowRight size={16} />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
