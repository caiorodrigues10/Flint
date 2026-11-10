import React from 'react';
import { 
  BsShieldCheck, 
  BsCalendarCheck, 
  BsPhone, 
  BsGraphUpArrow, 
  BsCheckCircleFill 
} from 'react-icons/bs';

export const MetricsSection: React.FC = () => {
  const superCards = [
    {
      metric: '15 Dias',
      title: 'Por que o prazo seguro é de até 15 dias úteis?',
      highlight: 'Tempo ideal para qualidade técnica e sem correria descuidada',
      icon: BsCalendarCheck,
      iconColor: 'text-[#1A73E8]',
      explanation:
        'Não fazemos sites com geradores automáticos nem jogamos seus dados em moldes genéricos. Em até 15 dias úteis, nossa equipe escreve os textos persuasivos, trata suas fotos em alta resolução, configura o domínio oficial (.com.br) e testa o site em celulares Android e iPhone para que tudo funcione perfeitamente.',
      bullets: [
        'Planejamento visual dedicado ao seu segmento local',
        'Registro seguro e ativação do domínio oficial (.com.br)',
        'Testes de velocidade no WhatsApp e navegação antes da entrega',
      ],
    },
    {
      metric: '100%',
      title: 'Por que 100% adaptado para celulares?',
      highlight: 'Design pensado com prioridade mobile (Mobile First)',
      icon: BsPhone,
      iconColor: 'text-[#34A853]',
      explanation:
        'Hoje, mais de 92% das pessoas que pesquisam restaurantes, padarias ou salões de festas estão usando um smartphone no 4G ou 5G. Seu site é construído para carregar em menos de 1 segundo, com botões fáceis de tocar pelo polegar e sem necessidade de dar zoom na tela.',
      bullets: [
        'Abre instantaneamente mesmo em conexões móveis fracas',
        'Sem arquivos pesados em PDF que travam o telefone',
        'Botão do WhatsApp sempre visível na parte inferior da tela',
      ],
    },
    {
      metric: '+45%',
      title: 'Por que relatamos mais de 45% de contatos no WhatsApp?',
      highlight: 'Menos atrito entre o interesse e a conversa',
      icon: BsGraphUpArrow,
      iconColor: 'text-[#FBBC05]',
      explanation:
        'Quando o cliente vê o preço, as fotos das fornadas ou do espaço e já tem um botão com uma mensagem pronta, a barreira de entrada cai drasticamente. Ele não precisa salvar seu número na agenda nem preencher formulários longos; com um clique ele já está conversando com seu balcão.',
      bullets: [
        'Mensagem pré-formatada: o cliente já chega dizendo o que deseja',
        'Cardápio visual que desperta desejo imediato',
        'Tráfego vindo de anúncios no Instagram e Google vai direto para a venda',
      ],
    },
    {
      metric: '0 Dor de Cabeça',
      title: 'Por que você não precisa se preocupar com nada técnico?',
      highlight: 'Cuidamos de 100% da infraestrutura para você focar nas vendas',
      icon: BsShieldCheck,
      iconColor: 'text-[#8AB4F8]',
      explanation:
        'Você não precisa entender de servidores, hospedagem, DNS ou código. Nós configuramos tudo: segurança SSL (o cadeado verde), carregamento rápido e garantimos que o site fique no ar 24 horas por dia sem dor de cabeça.',
      bullets: [
        'Hospedagem ultra-rápida inclusa na entrega',
        'Certificado de segurança SSL para proteger os visitantes',
        'Suporte direto por WhatsApp para tirar dúvidas futuras',
      ],
    },
  ];

  return (
    <section className="py-24 sm:py-32 relative z-10 border-t border-white/5 bg-[#030407]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Cabeçalho limpo e direto, sem badges artificiais de IA */}
        <div className="max-w-3xl mb-16 sm:mb-20">
          <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-white leading-tight">
            Por que cada detalhe do seu site é pensado para dar resultado?
          </h2>
          <p className="mt-4 text-base sm:text-xl text-[#BDC1C6] font-normal leading-relaxed">
            Entenda como construímos páginas que trazem retorno prático para o comércio local sem promessas irreais:
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {superCards.map((card, idx) => {
            const Icon = card.icon;
            return (
              <div
                key={idx}
                className="agency-card p-8 sm:p-9 flex flex-col justify-between border border-white/10"
              >
                <div>
                  <div className="flex items-start justify-between gap-4 mb-6">
                    <div>
                      <div className="text-4xl sm:text-5xl font-extrabold text-white font-mono tracking-tight">
                        {card.metric}
                      </div>
                      <div className="text-xs sm:text-sm font-semibold text-[#8AB4F8] mt-1 font-mono">
                        {card.highlight}
                      </div>
                    </div>
                    <div className="w-12 h-12 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center shrink-0">
                      <Icon className={`w-6 h-6 ${card.iconColor}`} />
                    </div>
                  </div>

                  <h3 className="text-xl sm:text-2xl font-bold text-white mb-3 tracking-tight">
                    {card.title}
                  </h3>

                  <p className="text-base text-[#9AA0A6] leading-relaxed mb-6 font-normal">
                    {card.explanation}
                  </p>
                </div>

                <div className="pt-5 border-t border-white/10 space-y-2.5">
                  {card.bullets.map((bullet, bIdx) => (
                    <div key={bIdx} className="flex items-center gap-2.5 text-xs sm:text-sm text-[#E8EAED]">
                      <BsCheckCircleFill className="w-4 h-4 text-[#34A853] shrink-0" />
                      <span>{bullet}</span>
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
