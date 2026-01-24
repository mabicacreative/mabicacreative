'use client';

import { Card, CardContent } from '@/components/ui/card';
import { FadeIn } from '@/components/animations/fade-in';
import { StaggerContainer, StaggerItem } from '@/components/animations/stagger-container';

export function WorksGrid() {
  const projects = [
    {
      id: 1,
      title: 'Occult of The Catalyst (OOTC)',
      description: 'A supernatural thriller exploring the boundaries between reality and the occult.',
      category: 'Novel'
    },
    {
      id: 2,
      title: 'Sulit Ku Katakan',
      description: 'An emotional ballad exploring the complexities of unspoken feelings.',
      category: 'Music'
    },
    {
      id: 3,
      title: 'Kuasa Itu Nyata',
      description: 'A powerful anthem about discovering inner strength and resilience.',
      category: 'Music'
    },
    {
      id: 4,
      title: 'Libur Tlah Tiba',
      description: 'A cheerful tune celebrating the joy of rest and relaxation.',
      category: 'Music'
    },
    {
      id: 5,
      title: 'Gadis Lugu',
      description: 'A nostalgic song capturing the innocence of youth and first love.',
      category: 'Music'
    },
    {
      id: 6,
      title: 'Aku Harusnya Sadar',
      description: 'A reflective piece about realizing what was truly important.',
      category: 'Music'
    }
  ];

  return (
    <section className="py-24 bg-lime-shoot">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto text-center mb-20">
          <FadeIn>
            <h2 className="inline-block relative text-4xl md:text-5xl">
              Featured Projects
              <span className="absolute -bottom-3 left-0 w-full h-1 bg-deep-moss/30"></span>
            </h2>
          </FadeIn>

          <FadeIn delay={0.2}>
            <p className="text-xl md:text-2xl text-deep-moss/90 mt-6 max-w-2xl mx-auto leading-relaxed">
              Explore our collection of multimedia novels and musical compositions
            </p>
          </FadeIn>
        </div>

        <StaggerContainer staggerChildren={0.1}>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project) => (
              <StaggerItem key={project.id}>
                <Card className="h-full bg-morning-mist border-sage-leaf/30 hover:border-sage-leaf/60 transition-all duration-300 group shadow-sm hover:shadow-md">
                  <CardContent className="p-8">
                    <div className="flex justify-between items-start mb-4">
                      <span className="text-xs font-semibold px-3 py-1 bg-sage-leaf/20 text-deep-moss rounded-full">
                        {project.category}
                      </span>
                    </div>
                    <h3 className="font-playfair font-bold text-xl text-deep-moss mb-3 group-hover:text-sage-leaf transition-colors">
                      {project.title}
                    </h3>
                    <p className="text-deep-moss/80 leading-relaxed">
                      {project.description}
                    </p>
                  </CardContent>
                </Card>
              </StaggerItem>
            ))}
          </div>
        </StaggerContainer>
      </div>
    </section>
  );
}