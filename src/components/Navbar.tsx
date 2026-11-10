import React, { useState, useEffect } from 'react';
import { FlintLogo } from './FlintLogo';
import { BsWhatsapp } from 'react-icons/bs';

interface NavbarProps {
  darkMode: boolean;
  setDarkMode: (val: boolean) => void;
  sparkFx: boolean;
  setSparkFx: (val: boolean) => void;
  onOpenWaitlist: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenWaitlist }) => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'Projetos', href: '#cases' },
    { label: 'Resultados', href: '#metricas' },
    { label: 'Serviços', href: '#servicos' },
    { label: 'Comparativo', href: '#comparativo' },
    { label: 'Planos', href: '#planos' },
    { label: 'Dúvidas', href: '#faq' },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 transition-all duration-200 px-4 sm:px-6 py-3">
      <div
        className={`max-w-5xl mx-auto rounded-xl transition-all duration-200 ${
          scrolled
            ? 'bg-[#0A0C12]/95 backdrop-blur-md border border-white/10 shadow-lg py-2.5 px-5'
            : 'bg-[#0E1118]/80 backdrop-blur-sm py-3 px-5 border border-white/5'
        } flex items-center justify-between`}
      >
        {/* Brand */}
        <a href="#" className="flex items-center gap-2 group transition-opacity hover:opacity-90">
          <FlintLogo size={32} variant="dark" />
        </a>

        {/* Minimal Nav Links */}
        <nav className="hidden md:flex items-center gap-6 text-sm font-medium text-[#9AA0A6]">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="hover:text-white transition-colors"
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* CTA Button simples e profissional */}
        <div className="flex items-center gap-3">
          <button
            onClick={onOpenWaitlist}
            className="py-2 px-4 rounded-lg bg-[#1A73E8] hover:bg-[#1557B0] text-white text-xs sm:text-sm font-semibold flex items-center gap-2 cursor-pointer transition-colors shadow-sm active:scale-95"
          >
            <BsWhatsapp className="w-3.5 h-3.5 text-white" />
            <span>Pedir Orçamento</span>
          </button>
        </div>
      </div>
    </header>
  );
};
