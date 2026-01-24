import { Header } from '@/components/layout/header';
import { Footer } from '@/components/layout/footer';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import Link from 'next/link';

export default function EcosystemPage() {
  const platforms = [
    {
      id: 1,
      name: 'MABICA Website',
      url: 'https://mabica.vercel.app/' as const,
      description: 'Our central digital library and hub for all multimedia novels and content.',
      icon: '🌐',
      category: 'Platform'
    },
    {
      id: 2,
      name: 'Discord Community',
      url: '#' as const,
      description: 'The primary communication and community hub for creators and fans.',
      icon: '💬',
      category: 'Community'
    },
    {
      id: 3,
      name: 'TikTok',
      url: '#' as const,
      description: 'Literacy-focused content and behind-the-scenes creative processes.',
      icon: '🎵',
      category: 'Social Media'
    },
    {
      id: 4,
      name: 'YouTube',
      url: '#' as const,
      description: 'Visual showcases, character introductions, and worldbuilding content.',
      icon: '📺',
      category: 'Media'
    },
    {
      id: 5,
      name: 'Instagram',
      url: '#' as const,
      description: 'Visual storytelling, artwork showcases, and creative updates.',
      icon: '📷',
      category: 'Social Media'
    },
    {
      id: 6,
      name: 'GitHub',
      url: '#' as const,
      description: 'Our system architecture, codebase, and technical documentation.',
      icon: '💻',
      category: 'Technical'
    },
    {
      id: 7,
      name: 'Spotify',
      url: '#' as const,
      description: 'Original soundtracks, audiobooks, and music compositions.',
      icon: '🎧',
      category: 'Audio'
    }
  ];

  const resources = [
    {
      id: 1,
      title: 'Creator Guidelines',
      description: 'Comprehensive guide for contributing to MABICA projects',
      link: '#' as const
    },
    {
      id: 2,
      title: 'Brand Assets',
      description: 'Official logos, color palettes, and typography guides',
      link: '#' as const
    },
    {
      id: 3,
      title: 'Submission Portal',
      description: 'Submit your creative ideas and proposals',
      link: '#' as const
    },
    {
      id: 4,
      title: 'Documentation',
      description: 'Technical and creative documentation for collaborators',
      link: '#' as const
    }
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-grow">
        <div className="py-20 bg-gradient-to-b from-morning-mist to-lime-shoot">
          <div className="container mx-auto px-4 text-center">
            <h1 className="mb-6">MABICA Ecosystem</h1>
            <p className="text-xl text-deep-moss/90 max-w-3xl mx-auto">
              Explore our interconnected platforms and resources that support the creative process
            </p>
          </div>
        </div>
        
        <section className="py-20 bg-morning-mist">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <div className="text-center mb-16">
                <h2 className="font-playfair font-bold text-3xl text-deep-moss mb-4">Connected Platforms</h2>
                <p className="text-deep-moss/80 max-w-2xl mx-auto">
                  Our ecosystem spans multiple platforms to engage with audiences and collaborators in meaningful ways
                </p>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
                {platforms.map((platform) => (
                  <Card key={platform.id} className="h-full bg-white border-sage-leaf/30 hover:border-sage-leaf/60 transition-all duration-300 group">
                    <CardContent className="p-6">
                      <div className="flex items-start space-x-4">
                        <div className="text-3xl">{platform.icon}</div>
                        <div>
                          <div className="flex justify-between items-start">
                            <h3 className="font-playfair font-bold text-lg text-deep-moss group-hover:text-sage-leaf transition-colors">
                              {platform.name}
                            </h3>
                            <span className="text-xs font-semibold px-2 py-1 bg-sage-leaf/20 text-deep-moss rounded-full">
                              {platform.category}
                            </span>
                          </div>
                          <p className="text-deep-moss/70 mt-2 mb-3">
                            {platform.description}
                          </p>
                          <Button variant="outline" size="sm" asChild>
                            <Link href={platform.url || '#'}>Visit Platform</Link>
                          </Button>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
              
              <div className="bg-lime-shoot p-8 rounded-xl">
                <h2 className="font-playfair font-bold text-3xl text-deep-moss mb-4 text-center">Resources & Tools</h2>
                <p className="text-deep-moss/80 text-center mb-8 max-w-2xl mx-auto">
                  Essential resources for creators, collaborators, and community members
                </p>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {resources.map((resource) => (
                    <Card key={resource.id} className="h-full bg-white border-sage-leaf/30 hover:border-sage-leaf/60 transition-all duration-300 group">
                      <CardContent className="p-6">
                        <h3 className="font-playfair font-bold text-xl text-deep-moss mb-2 group-hover:text-sage-leaf transition-colors">
                          {resource.title}
                        </h3>
                        <p className="text-deep-moss/80 mb-4">
                          {resource.description}
                        </p>
                        <Button variant="outline" asChild>
                          <Link href={resource.link}>Access Resource</Link>
                        </Button>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </div>
              
              <div className="mt-16 text-center">
                <h2 className="font-playfair font-bold text-3xl text-deep-moss mb-4">Join Our Community</h2>
                <p className="text-deep-moss/80 max-w-2xl mx-auto mb-8">
                  Become part of the MABICA ecosystem and contribute to the evolution of multimedia storytelling
                </p>
                <Button asChild size="lg" className="bg-sage-leaf hover:bg-deep-moss text-morning-mist">
                  <Link href="/contact">Get Involved</Link>
                </Button>
              </div>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
}