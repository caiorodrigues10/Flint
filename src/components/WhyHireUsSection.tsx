import React from 'react';
import { 
  BsCheckCircleFill, 
  BsXCircleFill, 
  BsWhatsapp, 
  BsSearch, 
  BsCashCoin,
  BsArrowRight
} from 'react-icons/bs';
import { RiStore3Line } from 'react-icons/ri';
import { PrecisionButton } from './PrecisionButton';

export const WhyHireUsSection: React.FC<{ onContact: () => void }> = ({ onContact }) => {
  const reasons = [
    {
      problem: 'Depender apenas do Instagram ou do boca a boca de conhecidos',
      solution: 'Aparecer no topo do Google quando o cliente já está pronto para comprar',
      desc: 'No Instagram, as pessoas se distraem com vídeos e esquecem de comprar. Quando alguém digita "padaria artesanal perto de mim" ou "espaço para casamento na cidade", quem tem site ganha o cliente na hora.',
      icon: BsSearch,
    },
    {
      problem: 'Perder horas respondendo "Qual o preço e cardápio?" no WhatsApp',
      solution: 'Cardápio interativo e fotos que tiram todas as dúvidas sozinhos',
      desc: 'Seu cliente já chega no seu WhatsApp sabendo exatamente o que você oferece, os sabores disponíveis e quanto custa. Você gasta menos tempo digitando e fecha mais vendas.',
      icon: BsWhatsapp,
    },
    {
      problem: 'Passar imagem de negócio amador ou improvisado',
      solution: 'Autoridade imediata com domínio próprio (.com.br) e visual impecável',
      desc: 'Cobrar R$ 2.000 a R$ 6.000 por uma locação de evento ou festa enviando fotos soltas gera desconfiança. O site transmite a credibilidade necessária para o cliente assinar o contrato.',
      icon: RiStore3Line,
    },
    {
      problem: 'Pagar comissões abusivas de 15% a 27% para aplicativos de entrega',
      solution: 'Canal de pedidos 100% próprio e livre de taxas sobre as suas vendas',
      desc: 'Com seu próprio cardápio digital, os clientes pedem diretamente para o seu WhatsApp e você fica com 100% do lucro da sua comida, bolo ou serviço.',
      icon: BsCashCoin,
    },
  ];

  return (
    <section id="por-que-fazer" className="py-24 sm:py-32 relative z-10 border-t border-white/5 bg-[#05060A]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Cabeçalho Limpo e Direto Sem Badges Artificiais de IA */}
        <div className="max-w-3xl mb-16 sm:mb-20">
          <h2 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white leading-tight [text-wrap:balance]">
            Por que ter um site próprio não é luxo, é sobrevivência?
          </h2>
          <p className="mt-5 text-base sm:text-xl text-[#BDC1C6] font-normal leading-relaxed">
            Se você ainda não tem um site profissional, todo dia seu negócio perde clientes quentes para os concorrentes da sua rua ou bairro:
          </p>
        </div>

        {/* Grid de 4 Motivos Reais com Alto Impacto */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {reasons.map((r, idx) => (
            <div
              key={idx}
              className="agency-card p-8 sm:p-10 flex flex-col justify-between border border-white/10 hover:border-white/20 transition-all shadow-xl"
            >
              <div>
                <div className="flex items-start gap-3 p-4 rounded-2xl bg-[#EA4335]/10 border border-[#EA4335]/25 text-[#FF8B8B] text-xs sm:text-sm mb-6">
                  <BsXCircleFill className="w-4 h-4 text-[#EA4335] shrink-0 mt-0.5" />
                  <div>
                    <span className="font-bold uppercase tracking-wider block text-[10px] text-[#EA4335] font-mono mb-0.5">Problema Comum:</span>
                    <span>{r.problem}</span>
                  </div>
                </div>

                <div className="flex items-start gap-3 mb-4">
                  <BsCheckCircleFill className="w-5 h-5 text-[#34A853] shrink-0 mt-1" />
                  <h3 className="text-lg sm:text-xl font-bold text-white leading-snug tracking-tight">
                    {r.solution}
                  </h3>
                </div>

                <p className="text-base text-[#9AA0A6] leading-relaxed mb-6 font-normal">
                  {r.desc}
                </p>
              </div>

              <div className="pt-5 border-t border-white/10 flex items-center justify-between text-xs text-[#8AB4F8] font-mono font-medium">
                <span>Resultado comprovado</span>
                <span className="text-[#34A853] font-bold">100% no seu controle</span>
              </div>
            </div>
          ))}
        </div>

        {/* Chamada para Ação Intermediária */}
        <div className="mt-14 sm:mt-16 text-center">
          <PrecisionButton
            variant="blue"
            size="lg"
            onClick={onContact}
            className="text-base font-bold py-4 px-8 shadow-lg"
          >
            <BsWhatsapp className="w-5 h-5 text-white mr-2.5" />
            <span>Quero Parar de Perder Clientes no Google</span>
            <BsArrowRight className="w-4 h-4 ml-2" />
          </PrecisionButton>
        </div>
      </div>
    </section>
  );
};
