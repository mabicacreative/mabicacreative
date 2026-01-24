'use client';

import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';

export function MabicaLogo({ className = '', size = 'normal' }: { className?: string; size?: 'small' | 'normal' | 'large'; }) {
  const sizeClasses = {
    small: 'w-8 h-8',
    normal: 'w-10 h-10',
    large: 'w-16 h-16'
  };

  return (
    <Link href="/" className={`flex items-center space-x-3 ${className}`}>
      <motion.div
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.98 }}
        transition={{ type: "spring", stiffness: 400, damping: 17 }}
        className={`${sizeClasses[size]} relative`}
      >
        <Image
          src="/images/logo/mabicalogo-rounded.png"
          alt="MABICA Logo"
          fill
          className="object-contain"
          sizes="(max-width: 768px) 40px, 64px"
        />
      </motion.div>
      <span className="font-playfair font-bold text-deep-moss text-xl hidden sm:block">
        MABICA
      </span>
    </Link>
  );
}