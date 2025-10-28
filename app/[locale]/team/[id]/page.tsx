import { getTeamMemberById, teamMembers } from "@/lib/team-data";
import { notFound } from "next/navigation";
import Link from "next/link";
import {
  ArrowLeft,
  Mail,
  Phone,
  Award,
  GraduationCap,
  Briefcase,
  Languages,
} from "lucide-react";
import { Button } from "@/components/ui/button";

export function generateStaticParams() {
  return teamMembers.map((member) => ({
    id: member.id,
  }));
}

export default function TeamMemberPage({ params }: { params: { id: string } }) {
  const member = getTeamMemberById(params.id);

  if (!member) {
    notFound();
  }

  return (
    <div className="min-h-screen bg-background">
      <main className="pt-32 pb-24">
        <div className="container mx-auto px-6 lg:px-12">
          {/* Back Button */}
          <Button asChild variant="ghost" className="mb-8">
            <Link href="/team" className="flex items-center gap-2">
              <ArrowLeft size={16} />
              Back to Team
            </Link>
          </Button>

          <div className="grid lg:grid-cols-5 gap-12">
            {/* Left Column - Image and Contact */}
            <div className="lg:col-span-2">
              <div className="sticky top-32">
                <div className="relative aspect-3/4 overflow-hidden mb-6 bg-card">
                  <img
                    src={member.image || "/placeholder.svg"}
                    alt={member.name}
                    className="w-full h-full object-cover"
                  />
                </div>

                <div className="bg-muted/30 p-6">
                  <h3 className="font-serif font-semibold text-xl mb-4">
                    Contact Information
                  </h3>
                  <div className="flex flex-col gap-3 text-sm">
                    <div className="flex items-center gap-3">
                      <Mail size={18} className="text-accent" />
                      <a
                        href={`mailto:${member.email}`}
                        className="hover:text-accent transition-colors"
                      >
                        {member.email}
                      </a>
                    </div>
                    <div className="flex items-center gap-3">
                      <Phone size={18} className="text-accent" />
                      <a
                        href={`tel:${member.phone}`}
                        className="hover:text-accent transition-colors"
                      >
                        {member.phone}
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Column - Details */}
            <div className="lg:col-span-3">
              <div className="mb-8">
                <h1 className="font-serif font-semibold text-4xl md:text-5xl mb-3">
                  {member.name}
                </h1>
                <p className="text-xl text-accent mb-6">{member.role}</p>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  {member.bio}
                </p>
              </div>

              {/* Experience */}
              <div className="mb-8 pb-8 border-b border-border">
                <div className="flex items-center gap-3 mb-4">
                  <Briefcase size={24} className="text-accent" />
                  <h2 className="font-serif font-semibold text-2xl">
                    Experience
                  </h2>
                </div>
                <p className="text-lg text-muted-foreground">
                  {member.experience} in the field
                </p>
              </div>

              {/* Specializations */}
              <div className="mb-8 pb-8 border-b border-border">
                <h2 className="font-serif font-semibold text-2xl mb-4">
                  Specializations
                </h2>
                <div className="flex flex-wrap gap-2">
                  {member.specializations.map((spec, index) => (
                    <span
                      key={index}
                      className="px-4 py-2 bg-muted/50 text-sm border border-border"
                    >
                      {spec}
                    </span>
                  ))}
                </div>
              </div>

              {/* Education */}
              <div className="mb-8 pb-8 border-b border-border">
                <div className="flex items-center gap-3 mb-4">
                  <GraduationCap size={24} className="text-accent" />
                  <h2 className="font-serif font-semibold text-2xl">
                    Education
                  </h2>
                </div>
                <ul className="space-y-3">
                  {member.education.map((edu, index) => (
                    <li
                      key={index}
                      className="text-muted-foreground leading-relaxed"
                    >
                      {edu}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Achievements */}
              <div className="mb-8 pb-8 border-b border-border">
                <div className="flex items-center gap-3 mb-4">
                  <Award size={24} className="text-accent" />
                  <h2 className="font-serif font-semibold text-2xl">
                    Key Achievements
                  </h2>
                </div>
                <ul className="space-y-3">
                  {member.achievements.map((achievement, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <span className="text-accent mt-1">•</span>
                      <span className="text-muted-foreground leading-relaxed">
                        {achievement}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Languages */}
              <div>
                <div className="flex items-center gap-3 mb-4">
                  <Languages size={24} className="text-accent" />
                  <h2 className="font-serif font-semibold text-2xl">
                    Languages
                  </h2>
                </div>
                <div className="flex flex-wrap gap-2">
                  {member.languages.map((lang, index) => (
                    <span
                      key={index}
                      className="px-4 py-2 bg-accent/10 text-accent text-sm border border-accent/20"
                    >
                      {lang}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
