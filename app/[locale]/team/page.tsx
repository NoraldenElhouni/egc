import { teamMembers } from "@/lib/team-data";
import Link from "next/link";
import { Mail, Phone, ArrowRight } from "lucide-react";

export default function TeamPage() {
  return (
    <div className="min-h-screen bg-background">
      <main className="pt-32 pb-24">
        <div className="container mx-auto px-6 lg:px-12">
          {/* Header */}
          <div className="text-center max-w-4xl mx-auto mb-20">
            <p className="text-sm uppercase tracking-widest text-muted-foreground mb-4">
              Our Team
            </p>
            <h1 className="font-serif font-semibold text-5xl md:text-6xl lg:text-7xl text-balance leading-tight mb-6">
              Meet Our Leadership
            </h1>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Our team of 38 professionals is led by four principal partners who
              bring decades of combined experience in architecture, engineering,
              and project management. Together, we create exceptional spaces
              that honor tradition while embracing innovation.
            </p>
          </div>

          {/* Team Members Grid */}
          <div className="grid md:grid-cols-2 gap-12 mb-20">
            {teamMembers.map((member) => (
              <Link
                key={member.id}
                href={`/team/${member.id}`}
                className="group"
              >
                <div className="relative aspect-4/5 overflow-hidden mb-6 bg-card">
                  <img
                    src={member.image || "/placeholder.svg"}
                    alt={member.name}
                    className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-linear-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  <div className="absolute bottom-6 left-6 right-6 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                    <div className="flex items-center gap-2 text-sm">
                      <span>View Profile</span>
                      <ArrowRight size={16} />
                    </div>
                  </div>
                </div>

                <h2 className="font-serif font-semibold text-2xl mb-2 group-hover:text-accent transition-colors">
                  {member.name}
                </h2>
                <p className="text-sm text-accent mb-4">{member.role}</p>
                <p className="text-muted-foreground leading-relaxed mb-4 line-clamp-3">
                  {member.bio}
                </p>

                <div className="flex flex-col gap-2 text-sm text-muted-foreground">
                  <div className="flex items-center gap-2">
                    <Mail size={16} />
                    <span>{member.email}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Phone size={16} />
                    <span>{member.phone}</span>
                  </div>
                </div>
              </Link>
            ))}
          </div>

          {/* Team Stats */}
          <div className="bg-muted/30 p-12 md:p-16">
            <div className="grid md:grid-cols-4 gap-8 text-center">
              <div>
                <div className="font-serif text-5xl font-semibold text-accent mb-3">
                  38
                </div>
                <div className="text-sm uppercase tracking-wider text-muted-foreground">
                  Team Members
                </div>
              </div>
              <div>
                <div className="font-serif text-5xl font-semibold text-accent mb-3">
                  15+
                </div>
                <div className="text-sm uppercase tracking-wider text-muted-foreground">
                  Architects & Designers
                </div>
              </div>
              <div>
                <div className="font-serif text-5xl font-semibold text-accent mb-3">
                  10+
                </div>
                <div className="text-sm uppercase tracking-wider text-muted-foreground">
                  Engineers & Specialists
                </div>
              </div>
              <div>
                <div className="font-serif text-5xl font-semibold text-accent mb-3">
                  25+
                </div>
                <div className="text-sm uppercase tracking-wider text-muted-foreground">
                  Years Experience
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
