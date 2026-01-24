"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { MabicaLogo } from "../mabica/mabica-logo";

export function Footer() {
  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { name: "About", href: "/about" as const },
    { name: "Services", href: "/services" as const },
    { name: "Projects", href: "/projects" as const },
    { name: "Ecosystem", href: "/ecosystem" as const },
    { name: "Contact", href: "/contact" as const },
  ];

  const socialLinks = [
    { name: "Discord", href: "#" as const },
    { name: "TikTok", href: "#" as const },
    { name: "YouTube", href: "#" as const },
    { name: "Instagram", href: "#" as const },
    { name: "GitHub", href: "#" as const },
    { name: "Spotify", href: "#" as const },
  ];

  return (
    <footer className="py-12 px-4 md:px-8 bg-deep-moss text-morning-mist">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-4">
          <div className="col-span-1 md:col-span-2">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <MabicaLogo size="large" className="mb-4" />
              <p className="mb-4 max-w-md text-lime-shoot">
                MABICA (Mari Bikin Cerita) is a creative storytelling collective
                that transforms raw ideas into complete artistic works. We
                combine various creative disciplines into one output: Multimedia
                Novels.
              </p>
              <div className="flex flex-row flex-wrap gap-4">
                {socialLinks.map((social) => (
                  <Link
                    key={social.name}
                    href={social.href}
                    className="transition-colors text-lime-shoot hover:text-sage-leaf flex items-center gap-2"
                  >
                    {social.name === 'Discord' && <span>💬</span>}
                    {social.name === 'TikTok' && <span>🎵</span>}
                    {social.name === 'YouTube' && <span>📺</span>}
                    {social.name === 'Instagram' && <span>📷</span>}
                    {social.name === 'GitHub' && <span>💻</span>}
                    {social.name === 'Spotify' && <span>🎧</span>}
                    {social.name}
                  </Link>
                ))}
              </div>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h3 className="mb-4 text-lg font-bold text-sage-leaf font-playfair">
              Quick Links
            </h3>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="block py-1 transition-colors text-lime-shoot hover:text-sage-leaf"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <h3 className="mb-4 text-lg font-bold text-sage-leaf font-playfair">
              Contact
            </h3>
            <address className="not-italic text-lime-shoot">
              <p className="text-lime-shoot">Indonesia</p>
              <p className="mt-2 transition-colors text-lime-shoot hover:text-sage-leaf">
                mabica.community@gmail.com
              </p>
            </address>
          </motion.div>
        </div>

        <motion.div
          className="pt-8 mt-8 text-center border-t border-sage-leaf/20"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          <p className="transition-colors text-lime-shoot hover:text-sage-leaf">
            &copy; {currentYear} MABICA. All rights reserved. From Idea to
            Story.
          </p>
        </motion.div>
      </div>
    </footer>
  );
}
