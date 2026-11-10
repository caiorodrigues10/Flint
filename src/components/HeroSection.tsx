import React from 'react';
import { FlintLogo } from './FlintLogo';
import { BsArrowRight, BsWhatsapp } from 'react-icons/bs';

interface HeroSectionProps {
  onOpenWaitlist: () => void;
  onOpenVideo: () => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({ onOpenWaitlist }) => {
  return (
    <section className="relative pt-32 pb-16 sm:pt-36 sm:pb-20 overflow-hidden z-10 border-b border-white/5">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative">
        {/* Brand Logo */}
        <div className="flex justify-center mb-6">
          <FlintLogo size={46} variant="dark" />
        </div>

        {/* Título Forte, Editorial e Direto */}
        <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold tracking-[-0.03em] text-white leading-[1.12] [text-wrap:balance]">
          Seus clientes procuram você na internet. O que eles encontram?
        </h1>

        {/* Subtítulo Globalizado e Abrangente */}
        <p className="mt-5 text-base sm:text-lg text-[#A0A5B0] max-w-2xl mx-auto leading-relaxed font-normal [text-wrap:balance]">
          Desenvolvemos sites de alto padrão, landing pages e plataformas digitais para <span className="text-white font-medium">empresas</span>, <span className="text-white font-medium">marcas</span> e <span className="text-white font-medium">negócios</span>. Páginas com carregamento instantâneo, visual refinado e canais diretos de contato — sem custos recorrentes ou comissões.
        </p>

        {/* Botões de Ação Simples e Limpos */}
        <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-3">
          <button
            onClick={onOpenWaitlist}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 py-3 px-6 rounded-lg bg-[#1A73E8] hover:bg-[#1557B0] active:scale-[0.98] text-white font-semibold text-sm sm:text-base transition-colors shadow-sm cursor-pointer"
          >
            <BsWhatsapp className="w-4 h-4 text-white" />
            <span>Pedir Proposta para Meu Negócio</span>
            <BsArrowRight className="w-4 h-4" />
          </button>

          <a
            href="#cases"
            className="w-full sm:w-auto inline-flex items-center justify-center py-3 px-5 rounded-lg bg-white/5 hover:bg-white/10 active:scale-[0.98] text-[#E0E2E8] font-medium text-sm sm:text-base border border-white/10 transition-colors cursor-pointer"
          >
            Ver Projetos Entregues
          </a>
        </div>

        {/* Três pilares de confiança simples */}
        <div className="mt-10 flex flex-wrap items-center justify-center gap-6 sm:gap-10 text-xs text-[#8A909E] font-mono">
          <span className="flex items-center gap-1.5">
            <span className="w-1.5 h-1.5 rounded-full bg-[#34A853]" />
            Entrega em 10 a 15 dias úteis
          </span>
          <span className="flex items-center gap-1.5">
            <span className="w-1.5 h-1.5 rounded-full bg-[#1A73E8]" />
            Pagamento único sem mensalidade
          </span>
          <span className="flex items-center gap-1.5">
            <span className="w-1.5 h-1.5 rounded-full bg-[#8AB4F8]" />
            Domínio próprio e SSL inclusos
          </span>
        </div>
      </div>
    </section>
  );
};
