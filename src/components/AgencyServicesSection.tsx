import React from 'react';
import { 
  BsArrowRight, 
  BsCheckCircleFill, 
  BsLightningChargeFill, 
  BsWhatsapp, 
  BsPhone, 
  BsQrCode, 
  BsGlobe2, 
  BsShieldCheck,
  BsSearch,
  BsBuildings,
  BsSpeedometer2,
  BsCpu,
  BsLockFill,
  BsFileEarmarkCheck,
  BsArrowRepeat
} from 'react-icons/bs';

interface AgencyServicesProps {
  onContact: () => void;
}

export const AgencyServicesSection: React.FC<AgencyServicesProps> = ({ onContact }) => {
  const engineeringSpecs = [
    {
      num: '01',
      metric: '< 800ms',
      title: 'Tempo de Carregamento Global',
      subtitle: 'Sem perda de visitantes no celular',
      icon: <BsLightningChargeFill className="w-5 h-5 text-[#34A853]" />,
      desc: 'Mais de 53% dos usuários abandonam sites que demoram mais de 3 segundos para abrir. Nossos códigos são desenvolvidos em React + Vite puro, sem peso de plugins desnecessários.',
      badge: 'Core Web Vitals Aprovado',
    },
    {
      num: '02',
      metric: 'Direto no Zap',
      title: 'Conversão Imediata em 1 Toque',
      subtitle: 'Sem formulários de e-mail frios',
      icon: <BsWhatsapp className="w-5 h-5 text-[#25D366]" />,
      desc: 'Gatilhos inteligentes com mensagem pré-formatada do produto ou serviço. O cliente clica e já cai na conversa com a informação pronta para você fechar a venda.',
      badge: 'Zero Fricção de Contato',
    },
    {
      num: '03',
      metric: '100% SEO',
      title: 'Indexação Orgânica no Google',
      subtitle: 'Encontrado por clientes da sua região',
      icon: <BsSearch className="w-5 h-5 text-[#8AB4F8]" />,
      desc: 'Estruturação técnica com metatags semânticas, OpenGraph para compartilhamento e Schema.org para o Google entender exatamente onde e o que sua empresa oferece.',
      badge: 'Visibilidade Local',
    },
    {
      num: '04',
      metric: 'HTTPS 256-bit',
      title: 'Certificado SSL & Domínio Oficial',
      subtitle: 'Máxima autoridade e credibilidade',
      icon: <BsShieldCheck className="w-5 h-5 text-[#4285F4]" />,
      desc: 'Configuração do seu endereço próprio (.com.br ou .com) com cadeado verde de segurança bancária. Transmite credibilidade imediata ao consumidor mais exigente.',
      badge: 'Segurança Criptografada',
    },
    {
      num: '05',
      metric: 'Físico + Digital',
      title: 'QR Code Vetorizado & Rotas',
      subtitle: 'Conexão para mesas, balcões e frotas',
      icon: <BsQrCode className="w-5 h-5 text-[#FABB05]" />,
      desc: 'Integração de traçado de rotas direto no Google Maps, Waze e Uber, além de arquivo vetorizado de QR Code pronto para aplicação em materiais impressos.',
      badge: 'Multi-Canal',
    },
    {
      num: '06',
      metric: '0% Aluguel',
      title: 'Sem Mensalidades Forçadas',
      subtitle: 'O site é 100% de propriedade da sua marca',
      icon: <BsLockFill className="w-5 h-5 text-[#34A853]" />,
      desc: 'Você paga apenas pelo desenvolvimento do projeto. Sem taxas abusivas de retenção de domínio, comissões sobre pedidos ou contratos com multa rescisória.',
      badge: 'Pagamento Único',
    },
  ];

  return (
    <section id="servicos" className="py-24 sm:py-36 relative z-10 border-b border-white/10 bg-[#030408] overflow-hidden select-none">
      {/* Luz ambiente de fundo */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[1100px] h-[600px] bg-gradient-to-r from-[#1A73E8]/12 via-[#4285F4]/8 to-[#25D366]/10 blur-[180px] rounded-full pointer-events-none -z-10" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* CABEÇALHO EDITORIAL E LIMPO */}
        <div className="max-w-3xl mb-16 sm:mb-24">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/5 border border-white/10 text-xs font-mono text-[#8AB4F8] mb-5">
            <span className="w-2 h-2 rounded-full bg-[#25D366] animate-pulse" />
            <span>Engenharia & Soluções</span>
          </div>

          <h2 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white leading-tight">
            Três caminhos pensados para quem quer vender mais na internet.
          </h2>

          <p className="mt-5 text-base sm:text-xl text-[#9AA0A6] font-normal leading-relaxed">
            Nada de designs empilhados ou genéricos. Cada solução foi estruturada para um momento específico do seu negócio:
          </p>
        </div>

        {/* =========================================================================
            FLUXO EDITORIAL DOS 3 FORMATOS (SEM BLOCOS EMPILHADOS)
            ========================================================================= */}
        <div className="divide-y divide-white/10">

          {/* ITEM 01: LANDING PAGE DE ALTA CONVERSÃO */}
          <div className="py-14 sm:py-20 group">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-14 items-start">
              <div className="lg:col-span-3 flex lg:flex-col items-baseline justify-between lg:justify-start gap-2">
                <span className="text-4xl sm:text-6xl font-black font-mono text-transparent bg-clip-text bg-gradient-to-br from-[#8AB4F8] to-[#1A73E8] tracking-tight">
                  01
                </span>
                <span className="text-xs uppercase font-mono tracking-widest text-[#8AB4F8] font-bold">
                  Conversão Rápida
                </span>
                <span className="text-xs text-[#70757A] font-mono hidden lg:block mt-2">
                  Abertura &lt; 0.8s
                </span>
              </div>

              <div className="lg:col-span-6 space-y-4">
                <h3 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-white tracking-tight leading-snug">
                  Landing Page de Alta Conversão
                </h3>

                <p className="text-base sm:text-lg text-[#BDC1C6] leading-relaxed font-normal">
                  Uma página única e veloz desenhada para levar quem clica no seu anúncio direto para o WhatsApp. Sem caminhos confusos, com fotos em alta resolução e carregamento instantâneo no celular.
                </p>

                <div className="flex flex-wrap gap-x-6 gap-y-2 text-xs sm:text-sm text-[#8A909E] pt-2">
                  <span className="flex items-center gap-1.5 text-white/90">
                    <span className="text-[#34A853]">✓</span> Botão inteligente de WhatsApp
                  </span>
                  <span className="flex items-center gap-1.5 text-white/90">
                    <span className="text-[#34A853]">✓</span> Otimizada para Google Ads e Meta Ads
                  </span>
                  <span className="flex items-center gap-1.5 text-white/90">
                    <span className="text-[#34A853]">✓</span> Rápida no 4G/5G
                  </span>
                </div>
              </div>

              <div className="lg:col-span-3 flex flex-col items-start lg:items-end justify-between self-stretch pt-2 lg:pt-0">
                <span className="text-xs text-[#70757A] font-mono mb-4 lg:text-right block">
                  Prazo: 10 a 15 dias úteis
                </span>
                <button
                  onClick={onContact}
                  className="inline-flex items-center gap-2.5 px-6 py-3.5 rounded-full bg-white/5 hover:bg-[#1A73E8] text-white text-sm font-semibold border border-white/10 hover:border-[#1A73E8] transition-all cursor-pointer group-hover:bg-[#1A73E8]"
                >
                  <BsWhatsapp className="w-4 h-4" />
                  <span>Pedir Landing Page</span>
                  <BsArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>

          {/* ITEM 02: SITE INSTITUCIONAL COMPLETO */}
          <div className="py-14 sm:py-20 group">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-14 items-start">
              <div className="lg:col-span-3 flex lg:flex-col items-baseline justify-between lg:justify-start gap-2">
                <span className="text-4xl sm:text-6xl font-black font-mono text-transparent bg-clip-text bg-gradient-to-br from-[#CBD5E1] to-[#64748B] tracking-tight">
                  02
                </span>
                <span className="text-xs uppercase font-mono tracking-widest text-[#CBD5E1] font-bold">
                  Autoridade & Marca
                </span>
                <span className="text-xs text-[#70757A] font-mono hidden lg:block mt-2">
                  Multi-Páginas & SEO
                </span>
              </div>

              <div className="lg:col-span-6 space-y-4">
                <h3 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-white tracking-tight leading-snug">
                  Site Institucional Completo
                </h3>

                <p className="text-base sm:text-lg text-[#BDC1C6] leading-relaxed font-normal">
                  A presença online definitiva para empresas, escritórios e marcas que precisam transmitir confiança imediata, apresentar múltiplos serviços e ser encontradas organicamente no Google.
                </p>

                <div className="flex flex-wrap gap-x-6 gap-y-2 text-xs sm:text-sm text-[#8A909E] pt-2">
                  <span className="flex items-center gap-1.5 text-white/90">
                    <span className="text-[#34A853]">✓</span> Múltiplas abas: Sobre, Serviços, Portfólio
                  </span>
                  <span className="flex items-center gap-1.5 text-white/90">
                    <span className="text-[#34A853]">✓</span> Otimização técnica para o Google (SEO)
                  </span>
                  <span className="flex items-center gap-1.5 text-white/90">
                    <span className="text-[#34A853]">✓</span> Formulário de briefing e cotação
                  </span>
                </div>
              </div>

              <div className="lg:col-span-3 flex flex-col items-start lg:items-end justify-between self-stretch pt-2 lg:pt-0">
                <span className="text-xs text-[#70757A] font-mono mb-4 lg:text-right block">
                  Prazo: até 15 dias úteis
                </span>
                <button
                  onClick={onContact}
                  className="inline-flex items-center gap-2.5 px-6 py-3.5 rounded-full bg-white/5 hover:bg-white hover:text-black text-white text-sm font-semibold border border-white/10 hover:border-white transition-all cursor-pointer group-hover:bg-white group-hover:text-black"
                >
                  <BsBuildings className="w-4 h-4" />
                  <span>Pedir Site Completo</span>
                  <BsArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>

          {/* ITEM 03: CATÁLOGO DIGITAL & PEDIDOS DIRETOS */}
          <div className="py-14 sm:py-20 group">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-14 items-start">
              <div className="lg:col-span-3 flex lg:flex-col items-baseline justify-between lg:justify-start gap-2">
                <span className="text-4xl sm:text-6xl font-black font-mono text-transparent bg-clip-text bg-gradient-to-br from-[#86EFAC] to-[#25D366] tracking-tight">
                  03
                </span>
                <span className="text-xs uppercase font-mono tracking-widest text-[#25D366] font-bold">
                  Zero Comissões
                </span>
                <span className="text-xs text-[#70757A] font-mono hidden lg:block mt-2">
                  QR Code & WhatsApp
                </span>
              </div>

              <div className="lg:col-span-6 space-y-4">
                <h3 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-white tracking-tight leading-tight">
                  Catálogo Digital & Pedidos Diretos
                </h3>

                <p className="text-base sm:text-lg text-[#BDC1C6] leading-relaxed font-normal">
                  Seus produtos e catálogo disponíveis na ponta dos dedos por QR Code ou link na bio. O cliente seleciona os itens e o pedido chega pronto para você fechar no WhatsApp — sem intermediários cobrando taxas de 15% a 25%.
                </p>

                <div className="flex flex-wrap gap-x-6 gap-y-2 text-xs sm:text-sm text-[#8A909E] pt-2">
                  <span className="flex items-center gap-1.5 text-white/90">
                    <span className="text-[#34A853]">✓</span> Arquivo de QR Code pronto para impressão
                  </span>
                  <span className="flex items-center gap-1.5 text-white/90">
                    <span className="text-[#34A853]">✓</span> 100% de lucro seu em cada pedido
                  </span>
                  <span className="flex items-center gap-1.5 text-white/90">
                    <span className="text-[#34A853]">✓</span> Fácil atualização de itens e preços
                  </span>
                </div>
              </div>

              <div className="lg:col-span-3 flex flex-col items-start lg:items-end justify-between self-stretch pt-2 lg:pt-0">
                <span className="text-xs text-[#70757A] font-mono mb-4 lg:text-right block">
                  Prazo: 10 a 15 dias úteis
                </span>
                <button
                  onClick={onContact}
                  className="inline-flex items-center gap-2.5 px-6 py-3.5 rounded-full bg-white/5 hover:bg-[#25D366] hover:text-black text-white text-sm font-semibold border border-white/10 hover:border-[#25D366] transition-all cursor-pointer group-hover:bg-[#25D366] group-hover:text-black"
                >
                  <BsQrCode className="w-4 h-4" />
                  <span>Pedir Catálogo</span>
                  <BsArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* =========================================================================
            PADRÃO DE ENGENHARIA FLINT — EM GRANDE DESTAQUE EDITORIAL COM AUTORIDADE
            ========================================================================= */}
        <div className="pt-24 sm:pt-32 mt-16 sm:mt-24 border-t border-white/15">
          {/* Cabeçalho do Padrão de Engenharia com Badge de Tecnologia */}
          <div className="max-w-3xl mb-14 sm:mb-20">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#1A73E8]/10 border border-[#1A73E8]/30 text-xs font-mono text-[#8AB4F8] mb-4">
              <BsCpu className="w-3.5 h-3.5 text-[#1A73E8]" />
              <span className="font-bold text-white">Padrão de Engenharia Flint</span>
              <span>• Incluso de Fábrica</span>
            </div>

            <h3 className="text-3xl sm:text-5xl font-black tracking-tight text-white leading-tight">
              A infraestrutura técnica que separa um site comum de uma máquina de vendas.
            </h3>

            <p className="mt-4 text-base sm:text-xl text-[#9AA0A6] font-normal leading-relaxed">
              Sem custos ocultos e sem taxas extras. Todo projeto entregue pela Flint já inclui de série os requisitos mais rigorosos de performance, indexação e conversão:
            </p>
          </div>

          {/* Grid de Alta Densidade e Autoridade Técnica (6 Especificações em Linhas Fortes) */}
          <div className="divide-y divide-white/10 border-t border-b border-white/10">
            {engineeringSpecs.map((spec, sIdx) => (
              <div
                key={sIdx}
                className="py-8 sm:py-10 grid grid-cols-1 md:grid-cols-12 gap-4 md:gap-8 items-start group hover:bg-white/[0.015] transition-colors"
              >
                {/* Coluna 1: Numeração e Métrica Chave */}
                <div className="md:col-span-3 space-y-1">
                  <div className="flex items-baseline gap-2">
                    <span className="text-xs font-mono font-bold text-[#8AB4F8]/70">
                      {spec.num}
                    </span>
                    <span className="text-xs font-mono uppercase tracking-wider text-[#34A853] font-bold">
                      {spec.badge}
                    </span>
                  </div>

                  <div className="text-2xl sm:text-3xl font-black font-mono text-white tracking-tight pt-1">
                    {spec.metric}
                  </div>
                </div>

                {/* Coluna 2: Título e Subtítulo */}
                <div className="md:col-span-4 space-y-1">
                  <div className="flex items-center gap-2">
                    {spec.icon}
                    <h4 className="text-base sm:text-lg font-bold text-white tracking-tight">
                      {spec.title}
                    </h4>
                  </div>
                  <span className="text-xs text-[#8AB4F8] font-mono block">
                    {spec.subtitle}
                  </span>
                </div>

                {/* Coluna 3: Explicação Técnica Profunda */}
                <div className="md:col-span-5">
                  <p className="text-xs sm:text-sm text-[#BDC1C6] leading-relaxed font-normal">
                    {spec.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Faixa Inferior de Compromisso e Segurança Técnica */}
          <div className="pt-10 sm:pt-14 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-[#34A853]/15 border border-[#34A853]/30 flex items-center justify-center text-[#34A853] shrink-0 font-bold text-sm">
                ✓
              </div>
              <div>
                <span className="text-sm font-bold text-white block">Homologação Técnica Garantida</span>
                <span className="text-xs text-[#8A909E]">Testado em navegadores Chrome, Safari, iOS e Android antes do lançamento.</span>
              </div>
            </div>

            <button
              onClick={onContact}
              className="inline-flex items-center gap-2 text-sm font-semibold text-white hover:text-[#8AB4F8] transition-colors cursor-pointer group"
            >
              <BsWhatsapp className="w-4 h-4 text-[#25D366]" />
              <span>Conferir requisitos para meu negócio</span>
              <BsArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};
