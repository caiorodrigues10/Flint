import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { BsPlus, BsDash } from 'react-icons/bs';

export const FaqSection: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs = [
    {
      num: '01',
      question: 'Eu não entendo de tecnologia. Vocês criam os textos e escolhem as fotos?',
      answer:
        'Sim, cuidamos de toda a estrutura! Você só precisa nos enviar as fotos que tiver do seu espaço, produtos ou serviços e a sua tabela de preços ou cardápio. Nós organizamos a arquitetura de informação, tratamos as imagens, escrevemos os textos de forma persuasiva e deixamos a prévia pronta para sua validação.',
    },
    {
      num: '02',
      question: 'Qual é o prazo real para o meu site ficar pronto e publicado?',
      answer:
        'O prazo padrão e transparente é de até 15 dias úteis após o envio dos materiais básicos. Esse período garante design exclusivo, diagramação cuidadosa, testes em múltiplos smartphones (Android e iOS) e configuração do seu domínio oficial (.com.br).',
    },
    {
      num: '03',
      question: 'Como funciona o botão de WhatsApp? O cliente fala direto comigo?',
      answer:
        'Sim, 100% direto no seu número ou no número da sua equipe comercial. Quando o cliente clica no botão ou em um produto específico, o WhatsApp abre automaticamente com a mensagem pré-formatada para você responder e fechar a venda.',
    },
    {
      num: '04',
      question: 'Eu preciso pagar alguma mensalidade obrigatória para manter o site?',
      answer:
        'Não cobramos mensalidades pelo desenvolvimento. O valor do site é único. A única taxa padrão anual da internet é a renovação do seu próprio domínio (.com.br, cerca de R$ 40/ano no Registro.br) e o servidor de hospedagem sem taxas de agência.',
    },
    {
      num: '05',
      question: 'Se eu precisar alterar um preço ou colocar uma foto nova no futuro, é fácil?',
      answer:
        'Muito simples! Nós fornecemos orientação direta e oferecemos suporte ágil para pequenas alterações sempre que você lançar novos produtos, atualizar preços ou criar promoções sazonais.',
    },
  ];

  return (
    <section id="faq" className="py-24 sm:py-36 relative z-10 border-b border-white/10 bg-[#030408] overflow-hidden select-none">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Cabeçalho */}
        <div className="max-w-3xl mb-16 sm:mb-24">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/5 border border-white/10 text-xs font-mono text-[#8AB4F8] mb-5">
            <span className="w-2 h-2 rounded-full bg-[#34A853] animate-pulse" />
            <span>Dúvidas Frequentes</span>
          </div>

          <h2 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white leading-tight">
            Tudo explicado de forma simples e transparente.
          </h2>

          <p className="mt-5 text-base sm:text-xl text-[#9AA0A6] font-normal leading-relaxed">
            Sem termos técnicos difíceis ou letras miúdas:
          </p>
        </div>

        {/* Linhas Editoriais Divididas de FAQ (Sem caixas) */}
        <div className="divide-y divide-white/10">
          {faqs.map((faq, idx) => {
            const isOpen = openIndex === idx;

            return (
              <div key={idx} className="py-8 sm:py-10 transition-colors">
                <button
                  onClick={() => setOpenIndex(isOpen ? null : idx)}
                  className="w-full flex items-start justify-between gap-6 text-left cursor-pointer group"
                >
                  <div className="flex items-baseline gap-4 sm:gap-6">
                    <span className="text-lg sm:text-xl font-mono font-bold text-[#8AB4F8]/70">
                      {faq.num}
                    </span>
                    <h3 className="text-lg sm:text-2xl font-bold text-white tracking-tight group-hover:text-[#8AB4F8] transition-colors">
                      {faq.question}
                    </h3>
                  </div>

                  <div className="w-9 h-9 rounded-full bg-white/5 group-hover:bg-white/10 border border-white/10 flex items-center justify-center shrink-0 text-white transition-colors mt-0.5">
                    {isOpen ? <BsDash className="w-5 h-5" /> : <BsPlus className="w-5 h-5" />}
                  </div>
                </button>

                <AnimatePresence>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.25, ease: 'easeInOut' }}
                      className="overflow-hidden"
                    >
                      <div className="pl-9 sm:pl-12 pr-4 pt-4 text-sm sm:text-base text-[#BDC1C6] leading-relaxed font-normal max-w-3xl">
                        {faq.answer}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
