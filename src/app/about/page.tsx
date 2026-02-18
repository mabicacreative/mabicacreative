import type { Metadata } from "next";
import { Card, CardContent } from "@/components/ui/card";

export const metadata: Metadata = {
  title: "About - MABICA",
  description:
    "Learn about MABICA, a creative storytelling collective transforming raw ideas into complete artistic works.",
};

interface MemberCardProps {
  name: string;
  role: string;
  description: string;
}

function MemberCard({ name, role, description }: MemberCardProps) {
  return (
    <Card>
      <CardContent className="py-6">
        <h3 className="font-playfair text-xl font-semibold text-deep-moss mb-1">
          {name}
        </h3>
        <p className="text-sage-leaf font-medium text-sm mb-3">{role}</p>
        <p className="text-deep-moss text-opacity-70 text-sm leading-relaxed">
          {description}
        </p>
      </CardContent>
    </Card>
  );
}

interface TeamSectionProps {
  title: string;
  members: MemberCardProps[];
}

function TeamSection({ title, members }: TeamSectionProps) {
  return (
    <div className="mb-12">
      <h3 className="font-playfair text-2xl font-semibold text-deep-moss mb-6">
        {title}
      </h3>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {members.map((member) => (
          <MemberCard key={member.name} {...member} />
        ))}
      </div>
    </div>
  );
}

export default function AboutPage() {
  const coreManagement = [
    {
      name: "Rayzi",
      role: "Project Manager",
      description: "All-in-One Leader & Visionary",
    },
    {
      name: "Kemi",
      role: "Tech Lead & Dev",
      description:
        "Developer, System Architect, & Current Maintainer continuing MABICA's legacy.",
    },
    {
      name: "Karin",
      role: "Creative Lead",
      description: "Novelist & Creative Content Director",
    },
    {
      name: "Buybuy",
      role: "Management",
      description: "Administration & Team Documentation",
    },
  ];

  const narrativeTeam = [
    {
      name: "Karin",
      role: "Lead Novelist",
      description: "Main Novelist & Script Supervisor",
    },
    {
      name: "Jamal",
      role: "Script Developer",
      description: "Assistant Writer & Plot Developer",
    },
    {
      name: "Yunzu",
      role: "Novelist",
      description: "Novelist & Social Media Specialist",
    },
  ];

  const visualTeam = [
    {
      name: "Atlas",
      role: "Lead Illustrator",
      description: "Character & Worldbuilding Artist, YouTube Visual",
    },
  ];

  const audioTeam = [
    {
      name: "Dev",
      role: "Composer",
      description: "Composer & Sound Engineer",
    },
    {
      name: "Zero",
      role: "Arranger",
      description: "Arranger & Musician",
    },
    {
      name: "Verlin",
      role: "Voice Actor",
      description: "Voice Actor bringing characters to life",
    },
    {
      name: "Sate",
      role: "Voice Actor",
      description: "Voice Actor bringing characters to life",
    },
    {
      name: "Taku",
      role: "Voice Actor",
      description: "Voice Actor bringing characters to life",
    },
  ];

  const localizationTeam = [
    {
      name: "Pon",
      role: "Language Specialist",
      description: "English Language Adaptation",
    },
  ];

  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="container mx-auto px-6 py-20">
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="font-playfair text-4xl md:text-5xl font-bold text-deep-moss mb-6">
            About MABICA
          </h1>
          <p className="text-lg text-deep-moss text-opacity-70 leading-relaxed">
            Mari Bikin Cerita, A Creative Storytelling Collective
          </p>
        </div>
      </section>

      {/* About Section */}
      <section className="bg-morning-mist py-20">
        <div className="container mx-auto px-6">
          <div className="max-w-3xl mx-auto">
            <h2 className="font-playfair text-3xl font-bold text-deep-moss mb-6">
              Our Story
            </h2>
            <div className="prose prose-lg text-deep-moss text-opacity-80">
              <p className="leading-relaxed mb-4">
                MABICA (Mari Bikin Cerita) is not just a reading platform. We
                are a <strong>Production Collective</strong> that combines
                various creative disciplines in one output:{" "}
                <strong>Multimedia Novels</strong>.
              </p>
              <p className="leading-relaxed mb-4">
                Here, a story is not just written. It is built collectively by
                writers, illustrators, voice actors, musicians, and developers.
                MABICA is the ecosystem where raw ideas transform into complete
                and eternal works of art.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Status Section */}
      <section className="container mx-auto px-6 py-20">
        <div className="max-w-3xl mx-auto">
          <h2 className="font-playfair text-3xl font-bold text-deep-moss mb-6">
            Status: Legacy Reborn
          </h2>
          <div className="bg-morning-mist rounded-xl p-8">
            <p className="text-deep-moss text-opacity-80 leading-relaxed">
              MABICA continues its journey through solo development by{" "}
              <strong>Kemi</strong>, carrying forward the vision and legacy
              built by the original collective. This continuation represents a
              dignified commitment to preserving and advancing the creative
              works that the team pioneered together.
            </p>
          </div>
        </div>
      </section>

      {/* The Collective Section */}
      <section className="bg-morning-mist py-20">
        <div className="container mx-auto px-6">
          <div className="max-w-5xl mx-auto">
            <h2 className="font-playfair text-3xl font-bold text-deep-moss mb-4">
              The Collective
            </h2>
            <p className="text-deep-moss text-opacity-80 mb-12">
              The pioneers who built the foundation of MABICA.
            </p>

            <TeamSection title="Core & Management" members={coreManagement} />
            <TeamSection
              title="Narrative & Script"
              members={narrativeTeam}
            />
            <TeamSection title="Visual & Art" members={visualTeam} />
            <TeamSection title="Audio & Music" members={audioTeam} />
            <TeamSection
              title="Language & Localization"
              members={localizationTeam}
            />
          </div>
        </div>
      </section>

      {/* Philosophy Section */}
      <section className="bg-deep-moss text-morning-mist py-20">
        <div className="container mx-auto px-6">
          <div className="max-w-3xl mx-auto">
            <h2 className="font-playfair text-3xl font-bold mb-8 text-center">
              Philosophy: The Artifact
            </h2>
            <blockquote className="font-playfair text-xl italic text-morning-mist text-opacity-90 leading-relaxed mb-8 text-center">
              "MABICA is not just a gathering place. It is a space for growth.
              From idea to story to work to impact. Even if the team may be
              scattered, every released work is an artifact proving that we once
              created something extraordinary together."
            </blockquote>
            <div className="border-t border-morning-mist border-opacity-20 pt-8 mt-8">
              <p className="text-morning-mist text-opacity-70 leading-relaxed text-center">
                Each multimedia novel, each soundtrack, each illustration
                stands as a digital monument to what can be achieved when
                creative minds unite in harmony.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Visual Identity Section */}
      <section className="container mx-auto px-6 py-20">
        <div className="max-w-3xl mx-auto">
          <h2 className="font-playfair text-3xl font-bold text-deep-moss mb-8">
            Brand Identity
          </h2>

          {/* Color Palette */}
          <div className="mb-12">
            <h3 className="font-playfair text-xl font-semibold text-deep-moss mb-6">
              Color Palette
            </h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              <div className="text-center">
                <div
                  className="h-24 rounded-lg mb-3 shadow-sm"
                  style={{ backgroundColor: "#F8FAF7" }}
                />
                <p className="font-medium text-deep-moss text-sm">
                  Morning Mist
                </p>
                <p className="text-deep-moss text-opacity-80 text-xs">
                  #F8FAF7
                </p>
              </div>
              <div className="text-center">
                <div
                  className="h-24 rounded-lg mb-3 shadow-sm"
                  style={{ backgroundColor: "#8EB897" }}
                />
                <p className="font-medium text-deep-moss text-sm">Sage Leaf</p>
                <p className="text-deep-moss text-opacity-80 text-xs">
                  #8EB897
                </p>
              </div>
              <div className="text-center">
                <div
                  className="h-24 rounded-lg mb-3 shadow-sm"
                  style={{ backgroundColor: "#2C3E32" }}
                />
                <p className="font-medium text-deep-moss text-sm">Deep Moss</p>
                <p className="text-deep-moss text-opacity-80 text-xs">
                  #2C3E32
                </p>
              </div>
              <div className="text-center">
                <div
                  className="h-24 rounded-lg mb-3 shadow-sm"
                  style={{ backgroundColor: "#CEDEBD" }}
                />
                <p className="font-medium text-deep-moss text-sm">
                  Lime Shoot
                </p>
                <p className="text-deep-moss text-opacity-80 text-xs">
                  #CEDEBD
                </p>
              </div>
            </div>
          </div>

          {/* Typography */}
          <div>
            <h3 className="font-playfair text-xl font-semibold text-deep-moss mb-6">
              Typography
            </h3>
            <div className="space-y-6">
              <div>
                <p className="text-sm text-deep-moss text-opacity-80 mb-2">
                  Headings: Playfair Display
                </p>
                <p className="font-playfair text-4xl text-deep-moss">
                  The quick brown fox
                </p>
              </div>
              <div>
                <p className="text-sm text-deep-moss text-opacity-80 mb-2">
                  Body: Inter
                </p>
                <p className="font-sans text-lg text-deep-moss">
                  The quick brown fox jumps over the lazy dog
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
