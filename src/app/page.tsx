import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export default function Home() {
  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="container mx-auto px-6 py-20 md:py-32">
        <div className="flex flex-col items-center text-center max-w-4xl mx-auto">
          <Image
            src="/mabica-logo.png"
            alt="MABICA Logo"
            width={120}
            height={120}
            className="mb-8"
            priority
          />

          <h1 className="font-playfair text-5xl md:text-7xl font-bold text-deep-moss mb-6">
            From Idea to Story
          </h1>

          <p className="text-lg md:text-xl text-deep-moss text-opacity-80 leading-relaxed mb-10 max-w-2xl text-balance">
            MABICA is a creative storytelling collective where raw ideas
            transform into complete artistic works through the power of
            multimedia narratives.
          </p>

          <div className="flex flex-col sm:flex-row gap-4">
            <Link href="/ootc">
              <Button size="lg" variant="primary">
                Explore Our Work
              </Button>
            </Link>
            <Link href="/about">
              <Button size="lg" variant="outline">
                Learn About Us
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* About Preview Section */}
      <section className="bg-morning-mist py-20">
        <div className="container mx-auto px-6">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="font-playfair text-3xl md:text-4xl font-bold text-deep-moss mb-6">
              A Collective of Creators
            </h2>
            <p className="text-deep-moss text-opacity-80 leading-relaxed text-lg mb-8">
              MABICA (Mari Bikin Cerita) is not just a reading platform. We are
              a <strong>Production Collective</strong> that combines various
              creative disciplines including writers, illustrators, voice actors,
              musicians, and developers into one unified output: Multimedia
              Novels.
            </p>
            <p className="text-deep-moss text-opacity-80 leading-relaxed text-lg">
              Here, stories are not just written. They are built collectively,
              transforming raw ideas into eternal artistic works.
            </p>
          </div>
        </div>
      </section>

      {/* Featured Work Section */}
      <section className="container mx-auto px-6 py-20">
        <div className="max-w-4xl mx-auto">
          <h2 className="font-playfair text-3xl md:text-4xl font-bold text-deep-moss mb-4 text-center">
            Featured Work
          </h2>
          <p className="text-deep-moss text-opacity-80 text-center mb-12 max-w-2xl mx-auto">
            Discover our flagship multimedia novel that showcases the power of
            collaborative storytelling.
          </p>

          <Card className="max-w-2xl mx-auto overflow-hidden">
            {/* OOTC Cover Image */}
            <div className="relative w-full h-64 md:h-80 bg-deep-moss">
              <Image
                src="/ootc-cover.jpg"
                alt="Occult of The Catalyst Cover"
                fill
                className="object-cover"
                priority
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </div>

            <div className="bg-morning-mist p-8">
              <CardHeader>
                <CardTitle className="text-2xl md:text-3xl">
                  Occult of The Catalyst
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-deep-moss text-opacity-80 leading-relaxed">
                  A multimedia novel experience that combines cinematic visuals,
                  immersive soundscapes, and compelling narrative into one
                  cohesive artistic statement.
                </p>
                <p className="text-deep-moss text-opacity-80 leading-relaxed">
                  This is more than a story. It is a digital artifact, proof of
                  what happens when creative minds unite in harmony.
                </p>
                <div className="pt-4">
                  <Link href="/ootc">
                    <Button variant="primary">Enter the World</Button>
                  </Link>
                </div>
              </CardContent>
            </div>
          </Card>
        </div>
      </section>

      {/* Artifact Closing Section */}
      <section className="bg-deep-moss text-morning-mist py-20">
        <div className="container mx-auto px-6">
          <div className="max-w-3xl mx-auto text-center">
            <blockquote className="font-playfair text-2xl md:text-3xl italic text-morning-mist text-opacity-90 leading-relaxed mb-8">
              "MABICA is not just a gathering place. It is a space for growth.
              From idea to story, from story to work, from work to impact."
            </blockquote>
            <p className="text-morning-mist text-opacity-80">
              Every released work is an artifact proving that we once created
              something extraordinary together.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}
