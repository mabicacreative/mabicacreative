'use client';

import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { FadeIn } from '@/components/animations/fade-in';

export function HeroSection() {
  return (
    <section className="relative overflow-hidden py-24 md:py-40 bg-gradient-to-b from-morning-mist to-lime-shoot">
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <FadeIn>
            <h1 className="mb-6 text-5xl md:text-7xl font-playfair font-bold tracking-tight text-deep-moss">
              From Idea to Story
            </h1>
          </FadeIn>

          <FadeIn delay={0.2}>
            <p className="text-xl md:text-2xl text-deep-moss/90 mb-12 max-w-2xl mx-auto leading-relaxed">
              A Creative Storytelling Collective transforming raw ideas into complete artistic works
            </p>
          </FadeIn>

          <FadeIn delay={0.4}>
            <Button asChild size="lg" className="bg-sage-leaf hover:bg-deep-moss text-morning-mist rounded-full px-10 py-6 text-lg font-medium transition-all duration-300 hover:scale-105">
              <Link href="/about">Explore Our Vision</Link>
            </Button>
          </FadeIn>
        </div>
      </div>

      {/* Decorative elements */}
      <div className="absolute top-1/4 left-10 w-32 h-32 rounded-full bg-lime-shoot/20 blur-2xl"></div>
      <div className="absolute bottom-1/4 right-10 w-40 h-40 rounded-full bg-sage-leaf/10 blur-2xl"></div>
    </section>
  );
}