import React from 'react';
import { BsArrowRight, BsWhatsapp } from 'react-icons/bs';

export const FeatureComparison: React.FC<{ onContact?: () => void }> = ({ onContact }) => {
  const comparisons = [
    {
      num: '01',
      aspect: 'Tempo de Carregamento',
      flint: 'Abre em menos de 1 segundo em conexões 4G/5G sem travar o celular.',
      flintTag: '< 0.8s',
      traditional: 'Demora de 6 a 12 segundos para abrir ou trava o navegador.',
      traditionalTag: '6s a 12s',
    },
    {
      num: '02',
      aspect: 'Fechamento do Pedido',
      flint: 'O cliente escolhe o item e o pedido já vai pronto direto no WhatsApp.',
      flintTag: '1 Toque no Zap',
      traditional: 'Formulários demorados por e-mail ou telefone que vive ocupado.',
      traditionalTag: 'Com atrito',
    },
    {
      num: '03',
      aspect: 'Apresentação Visual',
      flint: 'Galeria visual tratada, leve de navegar e com dados atualizados.',
      flintTag: 'Fotos HD Leves',
      traditional: 'PDF pesado de 15MB que o cliente precisa baixar no aparelho.',
      traditionalTag: 'PDF Lento',
    },
    {
      num: '04',
      aspect: 'Taxas e Comissões',
      flint: '0% de taxas. O lucro total da operação permanece na sua empresa.',
      flintTag: '100% Seu',
      traditional: 'Aplicativos cobram de 15% a 27% sobre cada pedido recebido.',
      traditionalTag: 'Até 27%',
    },
    {
      num: '05',
      aspect: 'Custos Recorrentes',
      flint: 'Pagamento único pelo desenvolvimento. O site é 100% seu.',
      flintTag: 'Sem Mensalidade',
      traditional: 'Mensalidades infinitas de plataformas que prendem o seu domínio.',
      traditionalTag: 'Aluguel eterno',
    },
  ];

  return (
    <section id="comparativo" className="py-24 sm:py-36 relative z-10 border-b border-white/10 bg-[#030408] overflow-hidden select-none">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Cabeçalho */}
        <div className="max-w-3xl mb-16 sm:mb-24">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/5 border border-white/10 text-xs font-mono text-[#8AB4F8] mb-5">
            <span className="w-2 h-2 rounded-full bg-[#34A853] animate-pulse" />
            <span>Raio-X Técnico</span>
          </div>

          <h2 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white leading-tight">
            A diferença prática para o seu dia a dia.
          </h2>

          <p className="mt-4 text-base sm:text-xl text-[#9AA0A6] font-normal leading-relaxed">
            Veja o que muda na experiência do seu cliente e no resultado financeiro da sua empresa:
          </p>
        </div>

        {/* ESTRUTURA EDITORIAL REFINADA: Matriz Tipográfica com Hairline Dividers */}
        <div className="divide-y divide-white/10 border-t border-b border-white/10">
          {/* Cabeçalho da Matriz (visível em telas médias e grandes) */}
          <div className="hidden md:grid grid-cols-12 py-4 text-xs font-mono font-bold uppercase tracking-wider text-[#70757A]">
            <div className="col-span-4">Critério</div>
            <div className="col-span-4 text-[#34A853] flex items-center gap-1.5">
              <span className="w-1.5 h-1.5 rounded-full bg-[#34A853]" />
              <span>Com a Flint Studio</span>
            </div>
            <div className="col-span-4 text-[#70757A]">Mercado Comum / Sem Site</div>
          </div>

          {/* Linhas da Matriz */}
          {comparisons.map((row, idx) => (
            <div
              key={idx}
              className="py-8 sm:py-9 grid grid-cols-1 md:grid-cols-12 gap-4 md:gap-8 items-start group hover:bg-white/[0.015] transition-colors"
            >
              {/* Coluna 1: Critério & Número */}
              <div className="md:col-span-4 flex items-baseline gap-3">
                <span className="text-sm font-mono font-bold text-[#8AB4F8]/70">
                  {row.num}
                </span>
                <div>
                  <h3 className="text-base sm:text-lg font-bold text-white tracking-tight">
                    {row.aspect}
                  </h3>
                </div>
              </div>

              {/* Coluna 2: Padrão Flint Studio (Tipografia limpa, acento verde sutil) */}
              <div className="md:col-span-4 space-y-1.5">
                <span className="text-[11px] font-mono px-2 py-0.5 rounded bg-[#34A853]/10 text-[#34A853] border border-[#34A853]/30 font-bold inline-block md:hidden mb-1">
                  Flint: {row.flintTag}
                </span>
                <p className="text-sm sm:text-base text-white font-medium leading-relaxed">
                  {row.flint}
                </p>
                <span className="hidden md:inline-block text-xs font-mono text-[#34A853] font-semibold">
                  ✓ {row.flintTag}
                </span>
              </div>

              {/* Coluna 3: Mercado Tradicional (Sóbrio e discreto) */}
              <div className="md:col-span-4 space-y-1.5">
                <span className="text-[11px] font-mono px-2 py-0.5 rounded bg-white/5 text-[#70757A] font-bold inline-block md:hidden mb-1">
                  Comum: {row.traditionalTag}
                </span>
                <p className="text-sm sm:text-base text-[#8A909E] leading-relaxed">
                  {row.traditional}
                </p>
                <span className="hidden md:inline-block text-xs font-mono text-[#70757A]">
                  ✕ {row.traditionalTag}
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Chamada sutil no rodapé da seção */}
        <div className="pt-12 sm:pt-16 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
          <p className="text-xs sm:text-sm text-[#8A909E] max-w-xl">
            Todos esses diferenciais já acompanham de fábrica qualquer projeto desenvolvido pela Flint, sem custo adicional.
          </p>

          <button
            onClick={onContact}
            className="inline-flex items-center gap-2 text-sm font-semibold text-white hover:text-[#8AB4F8] transition-colors cursor-pointer group"
          >
            <BsWhatsapp className="w-4 h-4 text-[#25D366]" />
            <span>Tirar dúvidas com especialista</span>
            <BsArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </button>
        </div>
      </div>
    </section>
  );
};
