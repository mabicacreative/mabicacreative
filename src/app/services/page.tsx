import { Header } from '@/components/layout/header';
import { Footer } from '@/components/layout/footer';
import { Card, CardContent } from '@/components/ui/card';

export default function ServicesPage() {
  const services = [
    {
      id: 1,
      title: 'Multimedia Novel Production',
      description: 'Full-service creation of multimedia novels combining text, visuals, and audio elements into cohesive storytelling experiences.',
      features: ['Concept Development', 'Writing & Editing', 'Illustration & Design', 'Audio Production']
    },
    {
      id: 2,
      title: 'Creative Collaboration',
      description: 'Facilitating collaborative creation processes between writers, artists, musicians, and developers.',
      features: ['Team Coordination', 'Project Management', 'Cross-disciplinary Integration', 'Quality Assurance']
    },
    {
      id: 3,
      title: 'Digital Publishing',
      description: 'Publishing and distribution of digital content across multiple platforms and formats.',
      features: ['Platform Optimization', 'Accessibility Features', 'Multi-format Conversion', 'Global Distribution']
    },
    {
      id: 4,
      title: 'Audio Production',
      description: 'Professional recording, mixing, and mastering of voice acting and musical compositions.',
      features: ['Voice Acting Direction', 'Sound Design', 'Music Composition', 'Audio Mastering']
    },
    {
      id: 5,
      title: 'Visual Design',
      description: 'Creating compelling visual assets including character designs, worldbuilding art, and promotional materials.',
      features: ['Character Design', 'Worldbuilding Art', 'Promotional Materials', 'Branding Solutions']
    },
    {
      id: 6,
      title: 'Localization',
      description: 'Adapting content for different languages and cultural contexts while preserving the original essence.',
      features: ['Translation Services', 'Cultural Adaptation', 'Regional Compliance', 'Quality Review']
    }
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-grow">
        <div className="py-20 bg-gradient-to-b from-morning-mist to-lime-shoot">
          <div className="container mx-auto px-4 text-center">
            <h1 className="mb-6">Our Services</h1>
            <p className="text-xl text-deep-moss/90 max-w-3xl mx-auto">
              Comprehensive creative solutions for multimedia storytelling
            </p>
          </div>
        </div>
        
        <section className="py-20 bg-morning-mist">
          <div className="container mx-auto px-4">
            <div className="max-w-5xl mx-auto">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {services.map((service) => (
                  <Card key={service.id} className="h-full bg-white border-sage-leaf/30 hover:border-sage-leaf/60 transition-all duration-300 group">
                    <CardContent className="p-6">
                      <h3 className="font-playfair font-bold text-xl text-deep-moss mb-3 group-hover:text-sage-leaf transition-colors">
                        {service.title}
                      </h3>
                      <p className="text-deep-moss/80 mb-4">
                        {service.description}
                      </p>
                      <ul className="space-y-2">
                        {service.features.map((feature, idx) => (
                          <li key={idx} className="flex items-start">
                            <span className="text-sage-leaf mr-2">•</span>
                            <span className="text-deep-moss/70">{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </CardContent>
                  </Card>
                ))}
              </div>
              
              <div className="mt-16 bg-lime-shoot p-8 rounded-xl">
                <h2 className="font-playfair font-bold text-3xl text-deep-moss mb-4 text-center">Our Approach</h2>
                <p className="text-deep-moss/90 text-center max-w-3xl mx-auto">
                  At MABICA, we believe in the power of collective creativity. Every project begins with an idea and grows through collaborative effort. 
                  We bring together writers, illustrators, voice actors, musicians, and developers to create rich, immersive storytelling experiences 
                  that transcend traditional media boundaries.
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