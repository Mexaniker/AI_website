'use client';

import Link from 'next/link';

export default function Header() {
  const navLinks = [
    { href: '#product', label: 'Продукт' },
    { href: '#advantages', label: 'Преимущества' },
    { href: '#cases', label: 'Кейсы' },
    { href: '#pricing', label: 'Тарифы' },
    { href: '#about', label: 'О нас' },
    { href: '#contact', label: 'Контакты' },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-xl border-b border-white/5">
      <div className="container mx-auto px-4">
        <div className="flex items-center h-14 md:h-16 relative">
          {/* Logo */}
          <Link href="/" className="text-xl md:text-2xl font-bold">
            <span className="gradient-text">Azori</span>
          </Link>

          {/* Navigation - Centered */}
          <nav className="absolute left-1/2 -translate-x-1/2 flex items-center gap-4 md:gap-6">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-xs md:text-sm font-light text-muted-foreground hover:text-foreground transition-colors relative group"
              >
                {link.label}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-cyan-400 to-blue-500 group-hover:w-full transition-all duration-300" />
              </a>
            ))}
          </nav>
        </div>
      </div>
    </header>
  );
}
