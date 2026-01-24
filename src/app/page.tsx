import { Header } from '@/components/layout/header';
import { Footer } from '@/components/layout/footer';
import { HeroSection } from '@/components/sections/hero-section';
import { AboutSection } from '@/components/sections/about-section';
import { WorksGrid } from '@/components/sections/works-grid';
import { PhilosophySection } from '@/components/sections/philosophy-section';

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-grow">
        <HeroSection />
        <AboutSection />
        <WorksGrid />
        <PhilosophySection />
      </main>
      
      <Footer />
    </div>
  );
}