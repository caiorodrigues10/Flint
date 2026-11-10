import React from 'react';
import { BsArrowRight, BsWhatsapp, BsCheckCircleFill } from 'react-icons/bs';

interface PricingSectionProps {
  onSelectPlan: (planName: string, price: string) => void;
}

export const PricingSection: React.FC<PricingSectionProps> = ({ onSelectPlan }) => {
  const models = [
    {
      level: 'Estrutura 01',
      name: 'Landing Page de Alta Conversão',
      price: 'R$ 790',
      period: 'pagamento único',
      idealFor: 'Para quem busca gerar leads e contatos imediatos no WhatsApp via tráfego pago ou redes sociais.',
      specs: [
        '1 página contínua ultra-rápida (< 0.8s)',
        'Botão inteligente integrado de WhatsApp',
        'Galeria de fotos e portfólio em alta definição',
        'Traçado de rota no Google Maps e Waze',
        'Entrega em até 10 a 15 dias úteis',
      ],
      featured: true,
    },
    {
      level: 'Estrutura 02',
      name: 'Site Institucional Completo',
      price: 'R$ 1.490',
      period: 'pagamento único',
      idealFor: 'Para marcas, clínicas e empresas com múltiplos serviços que precisam de solidez e busca no Google.',
      specs: [
        'Arquitetura multi-páginas (Sobre, Serviços, Contato)',
        'Otimização técnica para o Google (SEO)',
        'Formulário detalhado de briefing e cotações',
        'Galeria corporativa ampla e institucional',
        'Entrega em até 15 dias úteis',
      ],
      featured: false,
    },
    {
      level: 'Estrutura 03',
      name: 'Catálogo Digital Interativo',
      price: 'R$ 950',
      period: 'pagamento único',
      idealFor: 'Para comércio físico, restaurantes ou produtos: consulta de itens com QR Code e zero taxas de apps.',
      specs: [
        '0% de comissões sobre suas vendas',
        'Arquivo de QR Code vetorizado para balcão/mesa',
        'Catálogo leve com fotos e preços no celular',
        'Atualização simples de produtos e valores',
        'Entrega em até 10 a 15 dias úteis',
      ],
      featured: false,
    },
  ];

  return (
    <section id="planos" className="py-24 sm:py-36 relative z-10 border-b border-white/10 bg-[#030408] overflow-hidden select-none">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Cabeçalho */}
        <div className="max-w-3xl mb-16 sm:mb-24">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/5 border border-white/10 text-xs font-mono text-[#8AB4F8] mb-5">
            <span className="w-2 h-2 rounded-full bg-[#34A853] animate-pulse" />
            <span>Tabela de Investimento</span>
          </div>

          <h2 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white leading-tight">
            Valores transparentes e sem mensalidades forçadas.
          </h2>

          <p className="mt-4 text-base sm:text-xl text-[#9AA0A6] font-normal leading-relaxed">
            Desenvolvimento profissional sob medida. O site é 100% de propriedade da sua marca, sem aluguéis recorrentes:
          </p>
        </div>

        {/* ESTRUTURA EM TABELA EDITORIAL ABERTA (SEM CARDS OU CAIXAS) */}
        <div className="border-t border-b border-white/15 divide-y divide-white/10">
          {models.map((m, idx) => (
            <div
              key={idx}
              className="py-10 sm:py-14 grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-10 items-center hover:bg-white/[0.02] transition-colors"
            >
              {/* Coluna 1: Nome e Nível */}
              <div className="lg:col-span-4 space-y-1">
                <span className="text-xs font-mono text-[#8AB4F8] uppercase tracking-wider block">
                  {m.level} {m.featured && '• Mais Solicitado'}
                </span>
                <h3 className="text-xl sm:text-2xl font-bold text-white tracking-tight">
                  {m.name}
                </h3>
                <p className="text-xs text-[#9AA0A6] pt-1 leading-relaxed max-w-sm">
                  {m.idealFor}
                </p>
              </div>

              {/* Coluna 2: Especificações Técnicas em Linha */}
              <div className="lg:col-span-5 space-y-1.5 text-xs sm:text-sm text-[#CBD5E1]">
                {m.specs.map((s, sIdx) => (
                  <div key={sIdx} className="flex items-center gap-2">
                    <span className="text-[#34A853] font-bold text-xs">✓</span>
                    <span>{s}</span>
                  </div>
                ))}
              </div>

              {/* Coluna 3: Preço e Chamada de Ação */}
              <div className="lg:col-span-3 flex flex-col items-start lg:items-end justify-center space-y-3">
                <div>
                  <div className="text-3xl sm:text-4xl font-black font-mono text-white tracking-tight">
                    {m.price}
                  </div>
                  <span className="text-xs text-[#70757A] font-mono block lg:text-right">
                    {m.period}
                  </span>
                </div>

                <button
                  onClick={() => onSelectPlan(m.name, m.price)}
                  className={`inline-flex items-center gap-2 px-6 py-3 rounded-full text-xs sm:text-sm font-semibold transition-all cursor-pointer ${
                    m.featured
                      ? 'bg-[#1A73E8] hover:bg-[#1557B0] text-white shadow-md'
                      : 'bg-white/5 hover:bg-white hover:text-black text-white border border-white/10'
                  }`}
                >
                  <BsWhatsapp className="w-3.5 h-3.5" />
                  <span>Escolher Formato</span>
                  <BsArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
