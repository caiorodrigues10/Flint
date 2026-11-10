import React from 'react';
import { FlintLogo } from './FlintLogo';
import { 
  BsWhatsapp, 
  BsArrowUpRight,
  BsShieldCheck
} from 'react-icons/bs';

interface FooterProps {
  darkMode?: boolean;
}

export const Footer: React.FC<FooterProps> = () => {
  return (
    <footer className="relative z-10 border-t border-white/10 bg-[#04060A] text-[#9AA0A6] overflow-hidden select-none">
      {/* Luz ambiente sutil no fundo */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[700px] h-[250px] bg-gradient-to-t from-[#1A73E8]/12 via-[#4285F4]/5 to-transparent blur-[120px] rounded-full pointer-events-none -z-10" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
        {/* Bloco Superior: Logo + Proposta Direta + Acesso Rápido */}
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-8 pb-10 border-b border-white/10">
          <div className="space-y-3 max-w-md">
            <FlintLogo size={36} variant="dark" />
            <p className="text-sm text-[#BDC1C6] leading-relaxed font-normal">
              Estúdio de desenvolvimento web focado em criar páginas de alto impacto, plataformas institucionais e canais diretos de conversão, sem mensalidades forçadas.
            </p>
          </div>

          {/* Links Essenciais Limpos */}
          <div className="flex flex-wrap items-center gap-6 sm:gap-8 text-sm font-medium text-[#BDC1C6]">
            <a 
              href="#cases" 
              className="hover:text-white transition-colors"
            >
              Projetos
            </a>
            <a 
              href="#servicos" 
              className="hover:text-white transition-colors"
            >
              Soluções
            </a>
            <a 
              href="#planos" 
              className="hover:text-white transition-colors"
            >
              Planos & Preços
            </a>
            <a 
              href="#faq" 
              className="hover:text-white transition-colors"
            >
              Dúvidas
            </a>
            <a
              href="https://wa.me/5511999999999"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 hover:bg-[#25D366]/15 hover:border-[#25D366]/40 text-white text-xs font-semibold border border-white/10 transition-all text-[#25D366]"
            >
              <BsWhatsapp className="w-3.5 h-3.5 text-[#25D366]" />
              <span>WhatsApp Direto</span>
              <BsArrowUpRight className="w-3 h-3 opacity-70" />
            </a>
          </div>
        </div>

        {/* Bloco Inferior: Credenciais Diretas & Copyright */}
        <div className="pt-8 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 text-xs text-[#70757A]">
          <div className="flex flex-wrap items-center gap-4 text-[#9AA0A6]">
            <span className="flex items-center gap-1.5 font-mono text-[#34A853]">
              <span className="w-2 h-2 rounded-full bg-[#34A853] animate-pulse" />
              Entrega em 10 a 15 dias úteis
            </span>
            <span className="text-white/20">•</span>
            <span className="flex items-center gap-1.5 font-mono">
              <BsShieldCheck className="w-3.5 h-3.5 text-[#8AB4F8]" />
              Garantia & Domínio Próprio
            </span>
            <span className="text-white/20 hidden sm:inline">•</span>
            <span className="font-mono hidden sm:inline">São Paulo, BR</span>
          </div>

          <p className="text-[#70757A]">
            &copy; {new Date().getFullYear()} Flint Studio. Todos os direitos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
};
