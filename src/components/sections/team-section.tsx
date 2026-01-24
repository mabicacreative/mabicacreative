'use client';

import { Card, CardContent } from '@/components/ui/card';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { FadeIn } from '@/components/animations/fade-in';
import { StaggerContainer, StaggerItem } from '@/components/animations/stagger-container';

export function TeamSection() {
  const teamMembers = [
    {
      id: 1,
      name: 'Rayzi',
      role: 'Project Manager',
      description: 'All-in-One Leader & Visionary',
      department: 'Core & Management'
    },
    {
      id: 2,
      name: 'Kemi',
      role: 'Tech Lead & Dev',
      description: 'Developer, System Architect, & Current Maintainer',
      department: 'Core & Management'
    },
    {
      id: 3,
      name: 'Karin',
      role: 'Creative Lead',
      description: 'Novelist & Creative Director of Content',
      department: 'Narrative & Script'
    },
    {
      id: 4,
      name: 'Jamal',
      role: 'Assistant Writer',
      description: 'Plot Developer',
      department: 'Narrative & Script'
    },
    {
      id: 5,
      name: 'Yunzu',
      role: 'Novelist',
      description: 'Social Media Specialist',
      department: 'Narrative & Script'
    },
    {
      id: 6,
      name: 'Atlas',
      role: 'Lead Illustrator',
      description: 'YouTube Visual (Character & Worldbuilding)',
      department: 'Visual & Art'
    },
    {
      id: 7,
      name: 'Dev',
      role: 'Composer',
      description: 'Sound Engineer',
      department: 'Audio & Music'
    },
    {
      id: 8,
      name: 'Zero',
      role: 'Arranger',
      description: 'Musician',
      department: 'Audio & Music'
    },
    {
      id: 9,
      name: 'Pon',
      role: 'Language Specialist',
      description: 'English Language Adaptation',
      department: 'Language & Localization'
    }
  ];

  return (
    <section className="py-24 bg-morning-mist">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto text-center mb-20">
          <FadeIn>
            <h2 className="inline-block relative text-4xl md:text-5xl">
              The Collective
              <span className="absolute -bottom-3 left-0 w-full h-1 bg-sage-leaf/30"></span>
            </h2>
          </FadeIn>

          <FadeIn delay={0.2}>
            <p className="text-xl md:text-2xl text-deep-moss/90 mt-6 max-w-2xl mx-auto leading-relaxed">
              Meet the creative minds behind MABICA's multimedia storytelling
            </p>
          </FadeIn>
        </div>

        <StaggerContainer staggerChildren={0.1}>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {teamMembers.map((member) => (
              <StaggerItem key={member.id}>
                <Card className="h-full bg-white border-sage-leaf/30 hover:border-sage-leaf/60 transition-all duration-300 group shadow-sm hover:shadow-md">
                  <CardContent className="p-8 flex items-start space-x-6">
                    <Avatar className="w-20 h-20 border-2 border-sage-leaf flex-shrink-0">
                      <AvatarImage src={`/images/team/${member.name.toLowerCase()}.jpg`} alt={member.name} />
                      <AvatarFallback className="bg-lime-shoot text-deep-moss w-20 h-20">
                        {member.name.charAt(0)}
                      </AvatarFallback>
                    </Avatar>
                    <div>
                      <h3 className="font-playfair font-bold text-xl text-deep-moss group-hover:text-sage-leaf transition-colors">
                        {member.name}
                      </h3>
                      <p className="text-sage-leaf font-medium text-lg">{member.role}</p>
                      <p className="text-deep-moss/70 text-sm mt-2">{member.department}</p>
                      <p className="text-deep-moss/80 mt-3 leading-relaxed">{member.description}</p>
                    </div>
                  </CardContent>
                </Card>
              </StaggerItem>
            ))}
          </div>
        </StaggerContainer>

        <FadeIn delay={0.4}>
          <div className="mt-24 text-center max-w-3xl mx-auto">
            <div className="bg-lime-shoot p-10 rounded-2xl shadow-sm">
              <h3 className="font-playfair font-bold text-2xl md:text-3xl text-deep-moss mb-5">Current Status</h3>
              <p className="text-deep-moss/90 text-lg leading-relaxed">
                <span className="font-semibold">Legacy Reborn:</span> Currently maintained by Kemi as a solo development effort,
                continuing the legacy of the original team. The collective spirit lives on in every project we create.
              </p>
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}