'use client';

import Link from 'next/link';
import { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import { MabicaLogo } from '../mabica/mabica-logo';

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navLinks = [
    { name: 'Home', href: '/' as const },
    { name: 'About', href: '/about' as const },
    { name: 'Services', href: '/services' as const },
    { name: 'Projects', href: '/projects' as const },
    { name: 'Ecosystem', href: '/ecosystem' as const },
    { name: 'Contact', href: '/contact' as const },
  ];

  return (
    <header className="sticky top-0 z-50 bg-morning-mist/80 backdrop-blur-sm py-4 px-4 md:px-8 border-b border-sage-leaf/20">
      <div className="container mx-auto flex justify-between items-center">
        <MabicaLogo size="normal" />

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-1">
          {navLinks.map((link) => (
            <Button
              key={link.href}
              variant="ghost"
              className="text-deep-moss hover:bg-lime-shoot rounded-none px-3 py-2 text-sm font-medium transition-colors relative group"
              asChild
            >
              <Link href={link.href} className="relative">
                {link.name}
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-sage-leaf group-hover:w-full transition-all duration-300 ease-out" />
              </Link>
            </Button>
          ))}
        </nav>

        {/* Mobile Menu Button */}
        <Sheet open={isMenuOpen} onOpenChange={setIsMenuOpen}>
          <SheetTrigger asChild>
            <Button variant="ghost" size="icon" className="md:hidden text-deep-moss">
              <Menu className="h-6 w-6" />
              <span className="sr-only">Toggle menu</span>
            </Button>
          </SheetTrigger>
          <SheetContent side="right" className="bg-morning-mist w-4/5">
            <div className="flex flex-col space-y-4 mt-8">
              {navLinks.map((link) => (
                <Button
                  key={link.href}
                  variant="ghost"
                  className="justify-start text-deep-moss hover:bg-lime-shoot rounded-none px-3 py-4 text-lg font-medium"
                  asChild
                  onClick={() => setIsMenuOpen(false)}
                >
                  <Link href={link.href}>{link.name}</Link>
                </Button>
              ))}
            </div>
          </SheetContent>
        </Sheet>
      </div>

      {/* Mobile Navigation - Alternative approach if needed */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.nav
            className="md:hidden absolute top-full left-0 right-0 bg-morning-mist shadow-lg py-4 px-4"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
          >
            <div className="flex flex-col space-y-3">
              {navLinks.map((link) => (
                <Button
                  key={link.href}
                  variant="ghost"
                  className="justify-start text-deep-moss hover:bg-lime-shoot rounded-none px-3 py-3 text-base font-medium"
                  asChild
                  onClick={() => setIsMenuOpen(false)}
                >
                  <Link href={link.href}>{link.name}</Link>
                </Button>
              ))}
            </div>
          </motion.nav>
        )}
      </AnimatePresence>
    </header>
  );
}