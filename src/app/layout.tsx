import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  display: "swap",
});

export const metadata: Metadata = {
  title: "MABICA - From Idea to Story",
  description:
    "A Creative Storytelling Collective transforming raw ideas into complete artistic works through multimedia novels.",
  keywords: [
    "MABICA",
    "Mari Bikin Cerita",
    "multimedia novel",
    "storytelling",
    "creative collective",
  ],
  authors: [{ name: "MABICA Collective" }],
  openGraph: {
    title: "MABICA - From Idea to Story",
    description:
      "A Creative Storytelling Collective transforming raw ideas into complete artistic works.",
    type: "website",
    locale: "en_US",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${inter.variable} ${playfair.variable} font-sans antialiased flex flex-col min-h-screen`}
      >
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
