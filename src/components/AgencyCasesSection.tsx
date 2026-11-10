import React from 'react';
import { 
  BsArrowRight,
  BsClock,
  BsWhatsapp
} from 'react-icons/bs';

export const AgencyCasesSection: React.FC<{ onContact: () => void }> = ({ onContact }) => {
  const cases = [
    {
      client: 'Pão D’Ouro Confeitaria',
      segment: 'Alimentação & Encomendas',
      metric: '+85%',
      metricLabel: 'pedidos diretos no WhatsApp',
      speed: '0.7s no 4G',
      headline: 'Substituição de PDF estático por pedidos em 1 toque.',
      description:
        'O cliente navegava por um arquivo de 14MB que travava o celular. Criamos uma vitrine visual leve com botões automáticos que já mandam o sabor e o tamanho escolhido no balcão.',
      deliverable: '12 dias úteis',
    },
    {
      client: 'Villa Real Espaço & Eventos',
      segment: 'Festas & Casamentos',
      metric: '3.4x',
      metricLabel: 'mais noivas agendando visitas',
      speed: 'Tour Fotográfico',
      headline: 'Tour fotográfico imersivo e agenda de datas integrada.',
      description:
        'Desenvolvemos uma galeria em alta resolução da área verde e salão, com rota direta para Waze e Uber e agendamento presencial sem intermediários.',
      deliverable: '14 dias úteis',
    },
    {
      client: 'Bistrô & Parrilla La Brasa',
      segment: 'Gastronomia & Restaurante',
      metric: '0%',
      metricLabel: 'comissão repassada a aplicativos',
      speed: 'QR Code de Mesa',
      headline: 'Menu digital para mesa e delivery próprio.',
      description:
        'Cardápio visual moderno para QR Code de mesa e link na bio do Instagram. O cliente consulta sem baixar aplicativo e a reserva chega pronta no WhatsApp.',
      deliverable: '10 dias úteis',
    },
  ];

  return (
    <section id="cases" className="py-24 sm:py-36 relative z-10 border-b border-white/10 bg-[#030408] overflow-hidden select-none">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Cabeçalho */}
        <div className="max-w-3xl mb-16 sm:mb-24">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/5 border border-white/10 text-xs font-mono text-[#8AB4F8] mb-5">
            <span className="w-2 h-2 rounded-full bg-[#34A853] animate-pulse" />
            <span>Casos Reais & Impacto</span>
          </div>

          <h2 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white leading-tight">
            Como nossos projetos funcionam na rotina de quem vende.
          </h2>

          <p className="mt-4 text-base sm:text-xl text-[#9AA0A6] font-normal leading-relaxed">
            Marcas que trocaram arquivos pesados e redes sociais isoladas por plataformas próprias de alta velocidade:
          </p>
        </div>

        {/* TIMELINE / FLUXO DE CASOS (SEM NENHUM CARD OU CAIXA) */}
        <div className="relative border-l border-white/15 ml-4 sm:ml-8 pl-8 sm:pl-12 space-y-20">
          {cases.map((c, idx) => (
            <div key={idx} className="relative group">
              {/* Ponto indicador no eixo da linha temporal */}
              <div className="absolute -left-[41px] sm:-left-[57px] top-1.5 w-4 h-4 rounded-full bg-[#030408] border-2 border-[#1A73E8] group-hover:border-[#34A853] group-hover:scale-125 transition-all" />

              <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-10 items-baseline">
                {/* Métricas e Cabeçalho do Case */}
                <div className="lg:col-span-5 space-y-2">
                  <span className="text-xs font-mono uppercase tracking-widest text-[#8AB4F8] font-bold block">
                    {c.segment} • {c.client}
                  </span>

                  <div className="flex items-baseline gap-3 pt-1">
                    <span className="text-4xl sm:text-6xl font-black font-mono text-white tracking-tight">
                      {c.metric}
                    </span>
                    <span className="text-xs text-[#8A909E] font-mono leading-tight max-w-[140px]">
                      {c.metricLabel}
                    </span>
                  </div>

                  <span className="text-xs text-[#70757A] font-mono flex items-center gap-1.5 pt-1">
                    <BsClock className="w-3.5 h-3.5 text-[#34A853]" />
                    Entregue em {c.deliverable}
                  </span>
                </div>

                {/* Descrição e Ação */}
                <div className="lg:col-span-7 space-y-4">
                  <h3 className="text-xl sm:text-2xl font-bold text-white tracking-tight">
                    {c.headline}
                  </h3>

                  <p className="text-sm sm:text-base text-[#BDC1C6] leading-relaxed font-normal">
                    {c.description}
                  </p>

                  <div className="pt-2">
                    <button
                      onClick={onContact}
                      className="inline-flex items-center gap-2 text-sm font-semibold text-white hover:text-[#8AB4F8] transition-colors cursor-pointer group-hover:translate-x-1 duration-200"
                    >
                      <BsWhatsapp className="w-4 h-4 text-[#25D366]" />
                      <span>Ver modelo similar para meu negócio</span>
                      <BsArrowRight className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
