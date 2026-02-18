import Link from "next/link";

export function Footer() {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    { href: "https://instagram.com/mabicacreative", label: "Instagram" },
    { href: "https://tiktok.com/@mabicacreative", label: "TikTok" },
    { href: "https://x.com/mabicacreative", label: "Twitter/X" },
    { href: "https://github.com/mabicacreative", label: "GitHub" },
  ];

  const ecosystemLinks = [
    { href: "https://dsc.gg/mabica", label: "Discord" },
    { href: "https://mabica.vercel.app", label: "Website" },
  ];

  return (
    <footer className="bg-deep-moss text-morning-mist py-12 mt-auto">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          {/* Brand */}
          <div>
            <h3 className="font-playfair text-2xl font-bold mb-4">MABICA</h3>
            <p className="text-morning-mist text-opacity-70 text-sm leading-relaxed">
              Mari Bikin Cerita - A Creative Storytelling Collective
              transforming raw ideas into complete artistic works.
            </p>
          </div>

          {/* Ecosystem */}
          <div>
            <h4 className="font-playfair text-lg font-semibold mb-4">
              Ecosystem
            </h4>
            <ul className="space-y-2">
              {ecosystemLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-morning-mist text-opacity-70 hover:text-opacity-100 hover:text-sage-leaf transition-colors duration-200 text-sm"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Social */}
          <div>
            <h4 className="font-playfair text-lg font-semibold mb-4">
              Connect
            </h4>
            <ul className="space-y-2">
              {socialLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-morning-mist text-opacity-70 hover:text-opacity-100 hover:text-sage-leaf transition-colors duration-200 text-sm"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-morning-mist border-opacity-20 pt-8 text-center">
          <p className="text-morning-mist text-opacity-50 text-sm">
            &copy; {currentYear} MABICA. From Idea to Story.
          </p>
        </div>
      </div>
    </footer>
  );
}
