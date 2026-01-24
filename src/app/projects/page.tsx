import { Header } from '@/components/layout/header';
import { Footer } from '@/components/layout/footer';
import { Card, CardContent } from '@/components/ui/card';

export default function ProjectsPage() {
  const projects = [
    {
      id: 1,
      title: 'Occult of The Catalyst (OOTC)',
      description: 'A supernatural thriller exploring the boundaries between reality and the occult. This multimedia novel combines intricate storytelling with atmospheric visuals and an original soundtrack.',
      category: 'Multimedia Novel',
      year: '2023',
      status: 'Completed',
      details: {
        writers: ['Karin', 'Jamal'],
        illustrators: ['Atlas'],
        composers: ['Dev', 'Zero'],
        voiceActors: ['Verlin', 'Sate', 'Taku']
      }
    },
    {
      id: 2,
      title: 'Sulit Ku Katakan',
      description: 'An emotional ballad exploring the complexities of unspoken feelings. Part of our debut music collection that accompanies our narrative works.',
      category: 'Music',
      year: '2023',
      status: 'Released',
      details: {
        composers: ['Dev'],
        arrangers: ['Zero'],
        vocalists: ['Verlin']
      }
    },
    {
      id: 3,
      title: 'Kuasa Itu Nyata',
      description: 'A powerful anthem about discovering inner strength and resilience. Featured in our multimedia novel series as a thematic piece.',
      category: 'Music',
      year: '2023',
      status: 'Released',
      details: {
        composers: ['Dev'],
        arrangers: ['Zero'],
        vocalists: ['Taku']
      }
    },
    {
      id: 4,
      title: 'Libur Tlah Tiba',
      description: 'A cheerful tune celebrating the joy of rest and relaxation. Often used as a calming interlude in our audio experiences.',
      category: 'Music',
      year: '2023',
      status: 'Released',
      details: {
        composers: ['Dev'],
        arrangers: ['Zero'],
        vocalists: ['Sate']
      }
    },
    {
      id: 5,
      title: 'Gadis Lugu',
      description: 'A nostalgic song capturing the innocence of youth and first love. Featured in our coming-of-age narrative series.',
      category: 'Music',
      year: '2023',
      status: 'Released',
      details: {
        composers: ['Dev'],
        arrangers: ['Zero'],
        vocalists: ['Verlin']
      }
    },
    {
      id: 6,
      title: 'Aku Harusnya Sadar',
      description: 'A reflective piece about realizing what was truly important. Used as a pivotal moment in our dramatic narrative arcs.',
      category: 'Music',
      year: '2023',
      status: 'Released',
      details: {
        composers: ['Dev'],
        arrangers: ['Zero'],
        vocalists: ['Taku']
      }
    }
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-grow">
        <div className="py-20 bg-gradient-to-b from-morning-mist to-lime-shoot">
          <div className="container mx-auto px-4 text-center">
            <h1 className="mb-6">Artifacts & Projects</h1>
            <p className="text-xl text-deep-moss/90 max-w-3xl mx-auto">
              Explore our collection of creative works - each a unique artifact of collaborative storytelling
            </p>
          </div>
        </div>
        
        <section className="py-20 bg-morning-mist">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {projects.map((project) => (
                  <Card key={project.id} className="h-full bg-white border-sage-leaf/30 hover:border-sage-leaf/60 transition-all duration-300 group overflow-hidden">
                    <div className="h-4 bg-sage-leaf"></div>
                    <CardContent className="p-6">
                      <div className="flex justify-between items-start mb-4">
                        <h3 className="font-playfair font-bold text-xl text-deep-moss group-hover:text-sage-leaf transition-colors">
                          {project.title}
                        </h3>
                        <span className="text-xs font-semibold px-2 py-1 bg-lime-shoot text-deep-moss rounded-full">
                          {project.year}
                        </span>
                      </div>
                      
                      <div className="flex justify-between items-center mb-4">
                        <span className="text-xs font-semibold px-2 py-1 bg-sage-leaf/20 text-deep-moss rounded-full">
                          {project.category}
                        </span>
                        <span className={`text-xs font-semibold px-2 py-1 rounded-full ${
                          project.status === 'Completed' || project.status === 'Released' 
                            ? 'bg-green-100 text-green-800' 
                            : 'bg-yellow-100 text-yellow-800'
                        }`}>
                          {project.status}
                        </span>
                      </div>
                      
                      <p className="text-deep-moss/80 mb-4">
                        {project.description}
                      </p>
                      
                      <div className="pt-4 border-t border-sage-leaf/20">
                        <h4 className="font-playfair font-medium text-deep-moss mb-2">Contributors</h4>
                        <div className="space-y-1">
                          {Object.entries(project.details).map(([role, people]) => (
                            <div key={role} className="flex justify-between text-sm">
                              <span className="text-deep-moss/70 capitalize">{role}:</span>
                              <span className="text-deep-moss/90">{people.join(', ')}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
              
              <div className="mt-16 bg-lime-shoot p-8 rounded-xl">
                <h2 className="font-playfair font-bold text-3xl text-deep-moss mb-4 text-center">The Artifact Philosophy</h2>
                <p className="text-deep-moss/90 text-center max-w-3xl mx-auto">
                  Each project at MABICA is treated as an "artifact" - a unique creation that represents the collective effort 
                  of our diverse team. These artifacts are more than just products; they are proof of our collaborative 
                  process and dedication to the craft of multimedia storytelling.
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
}