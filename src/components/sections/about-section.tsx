"use client";

import { Card, CardContent } from "@/components/ui/card";
import { MabicaLogo } from "@/components/mabica/mabica-logo";
import { FadeIn } from "@/components/animations/fade-in";

export function AboutSection() {
  return (
    <section className="py-24 bg-morning-mist">
      <div className="container px-4 mx-auto">
        <div className="mx-auto max-w-5xl">
          <div className="mb-20 text-center">
            <FadeIn>
              <h2 className="inline-block relative text-4xl md:text-5xl">
                About MABICA
                <span className="absolute left-0 -bottom-3 w-full h-1 bg-sage-leaf/30"></span>
              </h2>
            </FadeIn>
          </div>

          <div className="grid grid-cols-1 gap-12 items-start">
            <FadeIn>
              <div className="flex justify-center lg:col-span-1">
                <MabicaLogo size="large" />
              </div>
            </FadeIn>

            <FadeIn delay={0.2}>
              <div className="lg:col-span-2">
                <Card className="bg-transparent border-0 shadow-none">
                  <CardContent className="p-0">
                    <p className="mb-7 text-lg leading-relaxed md:text-xl text-deep-moss/90">
                      MABICA (Mari Bikin Cerita) is not just a reading platform.
                      We are a{" "}
                      <strong className="font-semibold">
                        Creative Storytelling Collective
                      </strong>{" "}
                      that combines various creative disciplines into one
                      output:{" "}
                      <strong className="font-semibold">
                        Multimedia Novels
                      </strong>
                      .
                    </p>

                    <p className="mb-8 text-lg leading-relaxed md:text-xl text-deep-moss/90">
                      Here, a story is not just written, but built collectively
                      by writers, illustrators, voice actors, musicians, and
                      developers. MABICA is an ecosystem where raw ideas
                      transform into complete artistic works.
                    </p>

                    <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
                      <div className="p-6 rounded-xl bg-lime-shoot">
                        <h3 className="mb-3 text-2xl font-bold font-playfair text-deep-moss">
                          Vision
                        </h3>
                        <p className="leading-relaxed text-deep-moss/90">
                          To become a space for young imagination exploration
                          that unites literacy, visual arts, and digital
                          technology.
                        </p>
                      </div>

                      <div className="p-6 rounded-xl bg-lime-shoot">
                        <h3 className="mb-3 text-2xl font-bold font-playfair text-deep-moss">
                          Mission
                        </h3>
                        <p className="leading-relaxed text-deep-moss/90">
                          Producing high-quality novels with cinematic visual
                          and audio support, building "Digital Artefacts" as
                          proof of creators' dedication.
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </FadeIn>
          </div>
        </div>
      </div>
    </section>
  );
}
