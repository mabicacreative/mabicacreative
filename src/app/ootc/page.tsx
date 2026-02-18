import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { artData } from "@/lib/artData";

export const metadata: Metadata = {
  title: "Occult of The Catalyst - MABICA",
  description:
    "Occult of The Catalyst (OOTC) - A multimedia novel experience by MABICA combining cinematic visuals, immersive soundscapes, and compelling narrative.",
};

export default function OOTCPage() {
  const readingPlatforms = [
    {
      name: "Wattpad",
      link: "#",
      description: "Read the full story on Wattpad",
    },
    {
      name: "Webnovel",
      link: "#",
      description: "Available on Webnovel platform",
    },
    {
      name: "Fizzo",
      link: "#",
      description: "Read on Fizzo Novel app",
    },
  ];

  const soundtrackAlbums = [
    {
      title: "Memori Harianku",
      link: "https://artists.landr.com/055855142658",
      tracks: ["Memori Harianku"],
    },
    {
      title: "Occult Of The Catalyst Official OST",
      link: "https://artists.landr.com/055855263810",
      tracks: [
        "Gadis Lugu",
        "Sulit Ku Katakan",
        "Kuasa Itu Nyata",
        "Aku Harusnya Sadar",
        "Libur Tlah Tiba",
      ],
    },
  ];

  const characters = [
    {
      name: "Protagonist",
      role: "Main Character",
      description:
        "A young individual whose life changes dramatically after encountering the Catalyst. Driven by curiosity and determination, they navigate a world of mystery and supernatural forces.",
      traits: ["Curious", "Determined", "Brave", "Introspective"],
      image: "/ootc-cover.jpg",
    },
    {
      name: "The Mentor",
      role: "Guide",
      description:
        "An enigmatic figure who holds knowledge about the Catalyst and its origins. They guide the protagonist through the hidden truths of their world.",
      traits: ["Wise", "Mysterious", "Protective", "Knowledgeable"],
      image: "/ootc-cover.jpg",
    },
    {
      name: "The Antagonist",
      role: "Opposing Force",
      description:
        "A powerful entity seeking to control the Catalyst for their own purposes. Their motives are complex, rooted in a tragic past.",
      traits: ["Ambitious", "Complex", "Powerful", "Tragic"],
      image: "/ootc-cover.jpg",
    },
  ];

  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-deep-moss text-morning-mist py-24 md:py-32">
        <div className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              {/* OOTC Cover Banner */}
              <div className="relative w-full aspect-[2/3] max-w-md mx-auto">
                <Image
                  src="/ootc-cover.jpg"
                  alt="Occult of The Catalyst Cover"
                  fill
                  className="object-cover rounded-lg"
                  priority
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
              </div>

              {/* Hero Text */}
              <div className="text-center md:text-left">
                <p className="text-sage-leaf font-medium mb-4 tracking-wider uppercase text-sm">
                  Multimedia Novel by MABICA
                </p>
                <h1 className="font-playfair text-5xl md:text-7xl font-bold mb-6">
                  Occult of The Catalyst
                </h1>
                <p className="text-xl text-morning-mist text-opacity-80 leading-relaxed">
                  A cinematic journey through mystery, discovery, and transformation
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Story Overview Section */}
      <section className="container mx-auto px-6 py-20">
        <div className="max-w-3xl mx-auto">
          <h2 className="font-playfair text-3xl font-bold text-deep-moss mb-8">
            Story Overview
          </h2>

          {/* Genre & Info */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12">
            <div className="text-center p-4 bg-morning-mist rounded-lg">
              <p className="text-sage-leaf text-sm font-medium mb-1">Genre</p>
              <p className="text-deep-moss font-medium">Fantasy, Mystery</p>
            </div>
            <div className="text-center p-4 bg-morning-mist rounded-lg">
              <p className="text-sage-leaf text-sm font-medium mb-1">Status</p>
              <p className="text-deep-moss font-medium">Ongoing</p>
            </div>
            <div className="text-center p-4 bg-morning-mist rounded-lg">
              <p className="text-sage-leaf text-sm font-medium mb-1">Language</p>
              <p className="text-deep-moss font-medium">Indonesian</p>
            </div>
            <div className="text-center p-4 bg-morning-mist rounded-lg">
              <p className="text-sage-leaf text-sm font-medium mb-1">Format</p>
              <p className="text-deep-moss font-medium">Multimedia Novel</p>
            </div>
          </div>

          {/* Synopsis */}
          <div className="prose prose-lg text-deep-moss text-opacity-80 mb-12">
            <h3 className="font-playfair text-2xl font-semibold text-deep-moss mb-4">
              Synopsis
            </h3>
            <p className="leading-relaxed mb-4">
              Occult of The Catalyst is a multimedia novel that pushes the
              boundaries of traditional storytelling. Through the fusion of
              written narrative, visual artistry, and sonic landscapes, OOTC
              creates an immersive experience that engages readers on multiple
              sensory levels.
            </p>
            <p className="leading-relaxed">
              The story follows a young protagonist whose ordinary life is
              forever changed when they encounter the Catalyst, a mysterious
              force with the power to alter reality itself. As they delve deeper
              into its secrets, they uncover a hidden world where the boundaries
              between the natural and supernatural blur, and where every choice
              carries profound consequences.
            </p>
          </div>

          {/* Theme & Tags */}
          <div className="bg-morning-mist rounded-xl p-6">
            <h3 className="font-playfair text-xl font-semibold text-deep-moss mb-4">
              Themes & Tags
            </h3>
            <div className="flex flex-wrap gap-2">
              {["Supernatural", "Coming of Age", "Mystery", "Transformation", "Destiny", "Power", "Friendship", "Sacrifice"].map((tag) => (
                <span
                  key={tag}
                  className="px-4 py-2 bg-sage-leaf text-deep-moss rounded-full text-sm font-medium"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Read Now Section */}
      <section className="bg-morning-mist py-20">
        <div className="container mx-auto px-6">
          <div className="max-w-3xl mx-auto">
            <h2 className="font-playfair text-3xl font-bold text-deep-moss mb-4 text-center">
              Read the Novel
            </h2>
            <p className="text-deep-moss text-opacity-80 text-center mb-12">
              Available on multiple platforms for your reading convenience
            </p>

            <div className="grid md:grid-cols-3 gap-6">
              {readingPlatforms.map((platform) => (
                <Link
                  key={platform.name}
                  href={platform.link}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Card className="h-full hover:shadow-lg transition-all duration-300 hover:-translate-y-1 bg-white">
                    <CardContent className="py-8 text-center">
                      <h3 className="font-playfair text-xl font-semibold text-deep-moss mb-2">
                        {platform.name}
                      </h3>
                      <p className="text-deep-moss text-opacity-80 text-sm mb-4">
                        {platform.description}
                      </p>
                      <span className="text-sage-leaf font-medium text-sm">
                        Read Now →
                      </span>
                    </CardContent>
                  </Card>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Characters Section */}
      <section className="container mx-auto px-6 py-20">
        <div className="max-w-5xl mx-auto">
          <h2 className="font-playfair text-3xl font-bold text-deep-moss mb-4 text-center">
            Characters
          </h2>
          <p className="text-deep-moss text-opacity-80 text-center mb-12">
            Meet the key figures in the Occult of The Catalyst
          </p>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {characters.map((character) => (
              <Card
                key={character.name}
                className="overflow-hidden hover:shadow-lg transition-all duration-300 hover:-translate-y-2 bg-white"
              >
                {/* Character Image */}
                <div className="relative w-full aspect-[3/4] bg-deep-moss">
                  <Image
                    src={character.image}
                    alt={character.name}
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, 33vw"
                  />
                </div>

                {/* Character Info */}
                <div className="p-6">
                  <h3 className="font-playfair text-xl font-semibold text-deep-moss mb-1">
                    {character.name}
                  </h3>
                  <p className="text-sage-leaf font-medium text-sm mb-3">
                    {character.role}
                  </p>
                  <p className="text-deep-moss text-opacity-80 leading-relaxed mb-4 text-sm">
                    {character.description}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {character.traits.map((trait) => (
                      <span
                        key={trait}
                        className="px-3 py-1 bg-sage-leaf text-deep-moss rounded-full text-xs font-medium"
                      >
                        {trait}
                      </span>
                    ))}
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Art & Visuals Section - Pinterest Style Grid */}
      <section className="bg-morning-mist py-20">
        <div className="container mx-auto px-6">
          <div className="max-w-7xl mx-auto">
            <h2 className="font-playfair text-3xl font-bold text-deep-moss mb-4 text-center">
              Art & Visuals
            </h2>
            <p className="text-deep-moss text-opacity-80 text-center mb-12">
              Experience the world of OOTC through stunning visual artistry
            </p>

            {/* Masonry Grid using CSS columns */}
            <div className="columns-1 sm:columns-2 lg:columns-3 xl:columns-4 gap-6 space-y-6">
              {artData.map((item) => (
                <div
                  key={item.id}
                  className="break-inside-avoid group"
                >
                  <Card className="overflow-hidden bg-white hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                    {/* Art Image */}
                    <div className="relative w-full bg-deep-moss" style={{ aspectRatio: item.height === "tall" ? "3/4" : item.height === "short" ? "4/3" : "1/1" }}>
                      <Image
                        src={item.image}
                        alt={item.title}
                        fill
                        className="object-cover transition-transform duration-500 group-hover:scale-105"
                        sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 25vw"
                      />
                    </div>

                    {/* Art Info */}
                    <CardContent className="p-4">
                      <h3 className="font-playfair text-lg font-semibold text-deep-moss mb-2">
                        {item.title}
                      </h3>
                      <p className="text-deep-moss text-opacity-80 text-sm leading-relaxed">
                        {item.description}
                      </p>
                    </CardContent>
                  </Card>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Official Soundtrack Section */}
      <section className="container mx-auto px-6 py-20">
        <div className="max-w-4xl mx-auto">
          <h2 className="font-playfair text-3xl font-bold text-deep-moss mb-4">
            Official Soundtrack
          </h2>
          <p className="text-deep-moss text-opacity-80 mb-12">
            Experience the sonic landscape of OOTC through our official
            soundtrack albums
          </p>

          <div className="space-y-8">
            {soundtrackAlbums.map((album) => (
              <Card key={album.title} className="bg-morning-mist">
                <div className="p-6 md:p-8">
                  <CardHeader>
                    <CardTitle className="text-xl md:text-2xl">
                      {album.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <ul className="space-y-2">
                      {album.tracks.map((track, index) => (
                        <li
                          key={track}
                          className="text-deep-moss text-opacity-80 flex items-center"
                        >
                          <span className="text-sage-leaf mr-3 font-medium">
                            {String(index + 1).padStart(2, "0")}
                          </span>
                          {track}
                        </li>
                      ))}
                    </ul>
                    <div className="pt-4">
                      <Link href={album.link} target="_blank">
                        <Button variant="primary" size="sm">
                          Listen on LANDR
                        </Button>
                      </Link>
                    </div>
                  </CardContent>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Music Section - Additional */}
      <section className="bg-morning-mist py-20">
        <div className="container mx-auto px-6">
          <div className="max-w-3xl mx-auto">
            <h2 className="font-playfair text-3xl font-bold text-deep-moss mb-4 text-center">
              Music & Audio
            </h2>
            <p className="text-deep-moss text-opacity-80 text-center mb-12">
              Beyond the soundtrack, explore the full musical universe of MABICA
            </p>

            <div className="grid md:grid-cols-2 gap-6">
              <Card className="bg-white">
                <CardContent className="py-6">
                  <h3 className="font-playfair text-xl font-semibold text-deep-moss mb-3">
                    Original Score
                  </h3>
                  <p className="text-deep-moss text-opacity-80 leading-relaxed">
                    Custom-composed music that accompanies the narrative,
                    enhancing emotional moments and building atmosphere
                    throughout the story.
                  </p>
                </CardContent>
              </Card>
              <Card className="bg-white">
                <CardContent className="py-6">
                  <h3 className="font-playfair text-xl font-semibold text-deep-moss mb-3">
                    Audiobook
                  </h3>
                  <p className="text-deep-moss text-opacity-80 leading-relaxed">
                    Full-cast audio narration bringing the story to life with
                    professional voice acting and immersive sound design.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Status Section */}
      <section className="bg-deep-moss text-morning-mist py-20">
        <div className="container mx-auto px-6">
          <div className="max-w-3xl mx-auto text-center">
            <div className="inline-block bg-sage-leaf text-deep-moss px-4 py-2 rounded-full text-sm font-medium mb-6">
              Final Release
            </div>
            <h2 className="font-playfair text-3xl font-bold mb-6">
              A Digital Artifact
            </h2>
            <p className="text-morning-mist text-opacity-80 leading-relaxed mb-8">
              Occult of The Catalyst stands as proof of what happens when
              creative minds unite in harmony. It is more than a novel, a
              testament to collaborative artistry, a digital monument that
              transcends traditional storytelling.
            </p>
            <Link href="/contact">
              <Button variant="primary" size="lg">
                Join the Community
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
