import { Header } from '@/components/layout/header';
import { Footer } from '@/components/layout/footer';
import { TeamSection } from '@/components/sections/team-section';
import { PhilosophySection } from '@/components/sections/philosophy-section';

export default function AboutPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-grow">
        <div className="py-20 bg-gradient-to-b from-morning-mist to-lime-shoot">
          <div className="container mx-auto px-4 text-center">
            <h1 className="mb-6">About MABICA</h1>
            <p className="text-xl text-deep-moss/90 max-w-3xl mx-auto">
              A Creative Storytelling Collective transforming raw ideas into complete artistic works
            </p>
          </div>
        </div>
        
        <TeamSection />
        <PhilosophySection />
      </main>
      
      <Footer />
    </div>
  );
}