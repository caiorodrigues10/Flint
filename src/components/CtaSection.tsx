import React from 'react';
import { BsWhatsapp, BsArrowRight } from 'react-icons/bs';

interface CtaSectionProps {
  onSuccess: (whatsapp: string) => void;
}

export const CtaSection: React.FC<CtaSectionProps> = ({ onSuccess }) => {
  const handleOpenWhatsApp = () => {
    const text = encodeURIComponent(
      'Olá! Gostaria de um orçamento para o site da minha empresa.'
    );
    window.open(`https://wa.me/5511999999999?text=${text}`, '_blank');
    onSuccess('whatsapp_direct');
  };

  return (
    <section id="contato" className="py-24 sm:py-32 border-t border-neutral-900 bg-black">
      <div className="max-w-4xl mx-auto px-6 text-center">
        <h2 className="text-3xl sm:text-5xl font-bold tracking-tight text-white leading-tight">
          Vamos colocar seu site no ar?
        </h2>

        <p className="mt-4 text-base sm:text-lg text-neutral-400 max-w-xl mx-auto font-normal">
          Converse direto com quem vai desenvolver o projeto. Sem formulário demorado, sem intermediários.
        </p>

        <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
          <button
            onClick={handleOpenWhatsApp}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-3 px-8 py-4 rounded-full bg-[#25D366] hover:bg-[#20BA5A] text-black font-bold text-base transition-all cursor-pointer shadow-lg active:scale-95"
          >
            <BsWhatsapp className="w-5 h-5 fill-black" />
            <span>Falar com a gente no WhatsApp</span>
            <BsArrowRight className="w-4 h-4 ml-1" />
          </button>
        </div>

        <div className="mt-8 flex items-center justify-center gap-6 text-xs text-neutral-500 font-mono">
          <span>• Resposta em poucos minutos</span>
          <span>• Entrega em até 15 dias</span>
          <span>• Sem mensalidade</span>
        </div>
      </div>
    </section>
  );
};
