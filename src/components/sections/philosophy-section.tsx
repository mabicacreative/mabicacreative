"use client";

import { Card, CardContent } from "@/components/ui/card";
import { FadeIn } from "@/components/animations/fade-in";
import Image from "next/image";

export function PhilosophySection() {
  return (
    <section className="py-24 bg-morning-mist">
      <div className="container px-4 mx-auto">
        <div className="mx-auto max-w-5xl">
          <div className="mb-20 text-center">
            <FadeIn>
              <h2 className="inline-block relative text-4xl md:text-5xl">
                The Artifact Philosophy
                <span className="absolute left-0 -bottom-3 w-full h-1 bg-sage-leaf/30"></span>
              </h2>
            </FadeIn>
          </div>

          <div className="grid grid-cols-1 gap-16 items-center lg:grid-cols-2">
            <FadeIn>
              <Card className="h-full shadow-sm bg-sage-leaf/5 border-sage-leaf/30">
                <CardContent className="p-8">
                  <div className="flex flex-col items-center text-center">
                    <div className="relative mb-8">
                      <div className="flex justify-center items-center w-24 h-24 text-2xl font-bold rounded-full bg-sage-leaf text-morning-mist">
                        M
                      </div>
                      <div className="flex absolute -top-2 -right-2 justify-center items-center w-8 h-8 text-xs rounded-full border-2 bg-lime-shoot border-morning-mist text-deep-moss">
                        +
                      </div>
                    </div>

                    <div className="flex flex-col justify-center items-center mb-8 space-y-4 md:flex-row md:space-y-0 md:space-x-6">
                      <div className="p-4 rounded-lg border shadow-sm bg-morning-mist border-sage-leaf/30">
                        <div className="mb-2 font-bold text-sage-leaf">IDE</div>
                        <div className="flex justify-center items-center mx-auto w-12 h-12 rounded-full bg-sage-leaf/20">
                          •
                        </div>
                      </div>

                      <div className="hidden text-2xl md:block text-sage-leaf">
                        →
                      </div>
                      <div className="text-2xl md:hidden text-sage-leaf">↓</div>

                      <div className="p-4 rounded-lg border shadow-sm bg-morning-mist border-sage-leaf/30">
                        <div className="mb-2 font-bold text-sage-leaf">
                          CERITA
                        </div>
                        <div className="flex justify-center items-center mx-auto w-12 h-12 rounded-full bg-sage-leaf/20">
                          •
                        </div>
                      </div>

                      <div className="hidden text-2xl md:block text-sage-leaf">
                        →
                      </div>
                      <div className="text-2xl md:hidden text-sage-leaf">↓</div>

                      <div className="p-4 rounded-lg border shadow-sm bg-morning-mist border-sage-leaf/30">
                        <div className="mb-2 font-bold text-sage-leaf">
                          KARYA
                        </div>
                        <div className="flex justify-center items-center mx-auto w-12 h-12 rounded-full bg-sage-leaf/20">
                          •
                        </div>
                      </div>

                      <div className="hidden text-2xl md:block text-sage-leaf">
                        →
                      </div>
                      <div className="text-2xl md:hidden text-sage-leaf">↓</div>

                      <div className="p-4 rounded-lg border shadow-sm bg-morning-mist border-sage-leaf/30">
                        <div className="mb-2 font-bold text-sage-leaf">
                          DAMPAK
                        </div>
                        <div className="flex justify-center items-center mx-auto w-12 h-12 rounded-full bg-sage-leaf/20">
                          •
                        </div>
                      </div>
                    </div>

                    <p className="leading-relaxed text-center text-deep-moss/90">
                      MABICA bukan sekadar tempat kumpul—tapi ruang bertumbuh.
                      Meskipun raga tim mungkin tersebar, setiap karya yang
                      rilis adalah artefak yang membuktikan bahwa kita pernah
                      berkarya bersama dengan luar biasa.
                    </p>

                    <p className="mt-6 text-lg font-semibold text-deep-moss">
                      — The MABICA Collective
                    </p>
                  </div>
                </CardContent>
              </Card>
            </FadeIn>

            <FadeIn delay={0.2}>
              <div className="space-y-10">
                <div>
                  <h3 className="mb-5 text-2xl font-bold md:text-3xl font-playfair text-deep-moss">
                    Design Philosophy
                  </h3>
                  <p className="mb-6 text-lg leading-relaxed text-deep-moss/90">
                    Our visual identity embraces a retro-minimalist aesthetic
                    that balances fun, cozy, and clean design principles. We use
                    natural and fresh colors with a focus on greens and soft
                    backgrounds to create a comfortable reading experience.
                  </p>
                  <div className="flex mt-4 space-x-4">
                    <div className="w-10 h-10 rounded-full border-2 bg-morning-mist border-sage-leaf/50"></div>
                    <div className="w-10 h-10 rounded-full bg-sage-leaf"></div>
                    <div className="w-10 h-10 rounded-full bg-deep-moss"></div>
                    <div className="w-10 h-10 rounded-full bg-lime-shoot"></div>
                  </div>
                </div>

                <div>
                  <h3 className="mb-5 text-2xl font-bold md:text-3xl font-playfair text-deep-moss">
                    Creative Approach
                  </h3>
                  <p className="text-lg leading-relaxed text-deep-moss/90">
                    We believe in the power of collaboration. Every project is
                    an artifact that represents the collective effort of
                    writers, illustrators, voice actors, musicians, and
                    developers working in harmony.
                  </p>
                </div>
              </div>
            </FadeIn>
          </div>
        </div>
      </div>
    </section>
  );
}
