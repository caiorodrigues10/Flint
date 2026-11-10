import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  BsWhatsapp, 
  BsX, 
  BsSendFill, 
  BsCheck2All, 
  BsShieldCheck,
  BsArrowRight,
  BsChevronDown,
  BsTelephoneFill,
  BsEmojiSmile,
  BsPaperclip,
  BsMicFill
} from 'react-icons/bs';

interface Message {
  id: string;
  sender: 'bot' | 'user';
  text: string;
  time: string;
  options?: Array<{ label: string; action: string }>;
  cardPreview?: {
    title: string;
    subtitle: string;
    price: string;
    details: string[];
    tag: string;
  };
}

interface FloatingWhatsAppProps {
  onOpenConsultation: () => void;
  phoneNumber?: string;
}

export const FloatingWhatsApp: React.FC<FloatingWhatsAppProps> = ({
  onOpenConsultation,
  phoneNumber = '5511999999999',
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [showNotification, setShowNotification] = useState(false);
  const [hasInteracted, setHasInteracted] = useState(false);
  const [userInput, setUserInput] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const [simulatedTime, setSimulatedTime] = useState('14:32');
  const [isNearBottom, setIsNearBottom] = useState(true);
  const [hasUnreadBelow, setHasUnreadBelow] = useState(false);
  
  const chatContainerRef = useRef<HTMLDivElement>(null);
  const chatBottomRef = useRef<HTMLDivElement>(null);
  const isNearBottomRef = useRef(true);

  const initialMessages: Message[] = [
    {
      id: '1',
      sender: 'bot',
      text: 'Olá! Seja bem-vindo à Flint Consultoria Digital 👋',
      time: '14:30',
    },
    {
      id: '2',
      sender: 'bot',
      text: 'Qual formato de site você gostaria de avaliar para a sua empresa ou projeto?',
      time: '14:30',
      options: [
        { label: '🚀 Landing Page de Alta Conversão', action: 'Landing Page' },
        { label: '🏢 Site Institucional Completo', action: 'Site Institucional' },
        { label: '📦 Catálogo Digital & Pedidos Diretos', action: 'Catálogo Digital' },
        { label: '💬 Projeto Sob Medida / Outro', action: 'Projeto Sob Medida' },
      ],
    },
  ];

  const [messages, setMessages] = useState<Message[]>(initialMessages);
  const typingTimeoutRef = useRef<NodeJS.Timeout | null>(null);

  // Calcula a duração do efeito "digitando" de forma dinâmica e natural
  const calculateTypingDuration = (replyText: string, extraDelay: number = 0) => {
    const charCount = replyText.length;
    const computed = 550 + charCount * 14 + extraDelay;
    return Math.min(Math.max(computed, 800), 2600);
  };

  // Limpeza de timeout pendente ao desmontar o componente
  useEffect(() => {
    return () => {
      if (typingTimeoutRef.current) {
        clearTimeout(typingTimeoutRef.current);
      }
    };
  }, []);

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      const h = String(now.getHours()).padStart(2, '0');
      const m = String(now.getMinutes()).padStart(2, '0');
      setSimulatedTime(`${h}:${m}`);
    };
    updateTime();
    const interval = setInterval(updateTime, 60000);
    return () => clearInterval(interval);
  }, []);

  const handleScrollMessages = () => {
    const container = chatContainerRef.current;
    if (!container) return;
    const distanceFromBottom = container.scrollHeight - container.scrollTop - container.clientHeight;
    const nearBottom = distanceFromBottom <= 70;
    isNearBottomRef.current = nearBottom;
    setIsNearBottom(nearBottom);
    if (nearBottom) setHasUnreadBelow(false);
  };

  const scrollToBottom = (behavior: ScrollBehavior = 'smooth') => {
    chatBottomRef.current?.scrollIntoView({ behavior });
    setHasUnreadBelow(false);
    isNearBottomRef.current = true;
    setIsNearBottom(true);
  };

  useEffect(() => {
    if (!isOpen) return;
    if (isNearBottomRef.current) {
      const timer = setTimeout(() => scrollToBottom('smooth'), 50);
      return () => clearTimeout(timer);
    } else {
      setHasUnreadBelow(true);
    }
  }, [messages, isTyping, isOpen]);

  useEffect(() => {
    if (isOpen) {
      const timer = setTimeout(() => scrollToBottom('auto'), 40);
      return () => clearTimeout(timer);
    }
  }, [isOpen]);

  useEffect(() => {
    let triggered = false;
    const handleScroll = () => {
      if (triggered || hasInteracted) return;
      if (window.scrollY > 250) {
        triggered = true;
        setShowNotification(true);
      }
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    const timer = setTimeout(() => {
      if (!triggered && !hasInteracted) setShowNotification(true);
    }, 7000);

    return () => {
      window.removeEventListener('scroll', handleScroll);
      clearTimeout(timer);
    };
  }, [hasInteracted]);

  const handleToggle = () => {
    setHasInteracted(true);
    setShowNotification(false);
    setIsOpen(!isOpen);
  };

  const handleSelectOption = (solution: string) => {
    const userMsg: Message = {
      id: String(Date.now()),
      sender: 'user',
      text: solution,
      time: simulatedTime,
    };

    isNearBottomRef.current = true;
    setIsNearBottom(true);
    setMessages((prev) => [...prev, userMsg]);
    setIsTyping(true);

    if (typingTimeoutRef.current) clearTimeout(typingTimeoutRef.current);

    let cardData = {
      title: 'Landing Page de Alta Conversão',
      subtitle: 'Estrutura Completa com WhatsApp Integrado',
      price: 'R$ 790 (pagamento único)',
      details: [
        'Carregamento ultra-rápido no celular (menos de 1 segundo)',
        'Botão inteligente que gera contatos e pedidos no WhatsApp',
        'Galeria de fotos tratadas e apresentação visual de impacto',
        'Localização integrada com Google Maps e Waze',
        'Entrega completa em até 10 a 15 dias úteis',
      ],
      tag: 'Sem Mensalidade',
    };

    if (solution.includes('Institucional')) {
      cardData = {
        title: 'Site Institucional Completo',
        subtitle: 'Presença Corporativa e Múltiplas Soluções',
        price: 'R$ 1.490 (pagamento único)',
        details: [
          'Estrutura com múltiplas páginas: Quem somos, Serviços e Contato',
          'Formulário detalhado para captação de leads e cotações',
          'Otimização técnica para mecanismos de busca no Google (SEO)',
          'Domínio próprio (.com.br) e segurança SSL inclusos',
          'Entrega em até 15 dias úteis',
        ],
        tag: 'Mais Completo',
      };
    } else if (solution.includes('Catálogo')) {
      cardData = {
        title: 'Catálogo Digital Interativo',
        subtitle: 'Consulta de Itens & Pedidos sem Comissões',
        price: 'R$ 950 (pagamento único)',
        details: [
          'Visualização ágil de produtos e preços no smartphone',
          'O cliente seleciona e a cotação chega no seu WhatsApp',
          'Arquivo vetorizado de QR Code pronto para uso e impressão',
          'Zero cobrança de comissões por venda ou atendimento',
          'Entrega personalizada em até 10 a 15 dias úteis',
        ],
        tag: '0% Comissões',
      };
    }

    const botReplyText = `Excelente escolha! Para ${solution}, preparamos esta arquitetura com foco em velocidade e conversão:`;
    const typingDuration = calculateTypingDuration(botReplyText, 250);

    typingTimeoutRef.current = setTimeout(() => {
      setIsTyping(false);

      const botReply: Message = {
        id: String(Date.now() + 1),
        sender: 'bot',
        text: botReplyText,
        time: simulatedTime,
        cardPreview: cardData,
        options: [
          { label: '🚀 Pedir Proposta & Orçamento Detalhado', action: 'DIAGNOSTICO' },
          { label: '💬 Conversar com Especialista no WhatsApp', action: 'CONSULTOR' },
        ],
      };

      setMessages((prev) => [...prev, botReply]);
    }, typingDuration);
  };

  const handleActionClick = (action: string) => {
    if (action === 'DIAGNOSTICO') {
      onOpenConsultation();
      setIsOpen(false);
    } else if (action === 'CONSULTOR') {
      const msg = encodeURIComponent('Olá! Gostaria de conversar com um especialista sobre um projeto de site para minha empresa.');
      window.open(`https://wa.me/${phoneNumber}?text=${msg}`, '_blank');
    } else {
      handleSelectOption(action);
    }
  };

  const handleUserSubmit = (e?: React.FormEvent) => {
    if (e) e.preventDefault();
    const text = userInput.trim();
    if (!text) return;

    const userMsg: Message = {
      id: String(Date.now()),
      sender: 'user',
      text,
      time: simulatedTime,
    };

    isNearBottomRef.current = true;
    setIsNearBottom(true);
    setMessages((prev) => [...prev, userMsg]);
    setUserInput('');
    setIsTyping(true);

    if (typingTimeoutRef.current) clearTimeout(typingTimeoutRef.current);

    const replyText =
      text.length > 50
        ? 'Anotado com todos os detalhes! Já trabalhamos com projetos similares e podemos preparar uma proposta visual sob medida sem compromisso.'
        : 'Perfeito! Anotei seu objetivo e podemos desenhar uma proposta visual para aprovação sem nenhum compromisso.';

    const typingDuration = calculateTypingDuration(replyText);

    typingTimeoutRef.current = setTimeout(() => {
      setIsTyping(false);
      const botResponse: Message = {
        id: String(Date.now() + 1),
        sender: 'bot',
        text: replyText,
        time: simulatedTime,
        options: [
          { label: '📋 Ver Proposta & Diagnóstico Grátis', action: 'DIAGNOSTICO' },
          { label: '📲 Abrir Conversa Direta no WhatsApp', action: 'CONSULTOR' },
        ],
      };
      setMessages((prev) => [...prev, botResponse]);
    }, typingDuration);
  };

  return (
    <div className="floating-whatsapp-container fixed bottom-5 right-5 sm:bottom-6 sm:right-6 z-50 flex flex-col items-end select-none font-sans">
      {/* 1. NOTIFICAÇÃO DISCRETA E ELEGANTE */}
      <AnimatePresence>
        {showNotification && !isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 12, scale: 0.96 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 8, scale: 0.96 }}
            transition={{ duration: 0.25 }}
            onClick={() => {
              setShowNotification(false);
              setIsOpen(true);
            }}
            className="mb-3 max-w-[340px] p-4 rounded-2xl bg-[#111B21]/95 backdrop-blur-xl border border-white/10 shadow-2xl cursor-pointer hover:border-[#25D366]/60 transition-all flex items-center justify-between gap-3"
          >
            <div className="flex items-center gap-3">
              <div className="relative shrink-0">
                <div className="w-12 h-12 rounded-full bg-[#128C7E] flex items-center justify-center text-white shadow-md">
                  <BsWhatsapp className="w-6 h-6 text-white" />
                </div>
                <span className="absolute bottom-0 right-0 w-3.5 h-3.5 rounded-full bg-[#25D366] border-2 border-[#111B21]" />
              </div>
              <div>
                <div className="flex items-center gap-2">
                  <span className="text-base font-semibold text-[#E9EDEF]">Flint Consultoria</span>
                  <span className="text-xs font-semibold text-[#25D366] bg-[#25D366]/15 px-2 py-0.5 rounded font-mono">
                    online
                  </span>
                </div>
                <p className="text-sm text-[#8696A0] mt-0.5 leading-snug">
                  Dúvidas sobre o site da sua empresa? Fale conosco agora.
                </p>
              </div>
            </div>

            <button
              onClick={(e) => {
                e.stopPropagation();
                setShowNotification(false);
                setHasInteracted(true);
              }}
              className="text-[#8696A0] hover:text-white p-1.5 rounded-full hover:bg-white/10"
              aria-label="Fechar notificação"
            >
              <BsX className="w-5 h-5" />
            </button>
          </motion.div>
        )}
      </AnimatePresence>

      {/* 2. CHAT POPUP EM TAMANHO AMPLO, CONFORTÁVEL E COM FONTE MAIOR */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 25, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 15, scale: 0.95 }}
            transition={{ duration: 0.28, ease: [0.16, 1, 0.3, 1] }}
            className="mb-3 w-[94vw] sm:w-[450px] md:w-[480px] h-[660px] max-h-[88vh] rounded-2xl overflow-hidden bg-[#0B141A] border border-white/10 shadow-[0_25px_70px_rgba(0,0,0,0.9)] flex flex-col relative z-50 font-sans"
          >
            {/* Header Fiel ao WhatsApp Web/App com Status Dinâmico de 'digitando...' */}
            <div className="bg-[#202C33] px-4 py-3.5 flex items-center justify-between shrink-0 border-b border-black/40">
              <div className="flex items-center gap-3.5">
                <div className="relative cursor-pointer">
                  <div className="w-12 h-12 rounded-full bg-[#128C7E] flex items-center justify-center text-white shadow">
                    <BsWhatsapp className="w-6 h-6 text-white" />
                  </div>
                  <span className="absolute bottom-0 right-0 w-3.5 h-3.5 rounded-full bg-[#25D366] border-2 border-[#202C33]" />
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-[#E9EDEF] leading-snug tracking-tight">
                    Flint Consultoria Digital
                  </h4>
                  <div className="flex items-center gap-2 text-sm">
                    {isTyping ? (
                      <span className="text-[#25D366] font-medium flex items-center gap-1.5 transition-all">
                        <span>digitando</span>
                        <span className="flex items-center gap-0.5">
                          <span className="w-1.5 h-1.5 rounded-full bg-[#25D366] animate-pulse" />
                          <span className="w-1.5 h-1.5 rounded-full bg-[#25D366] animate-pulse [animation-delay:0.2s]" />
                          <span className="w-1.5 h-1.5 rounded-full bg-[#25D366] animate-pulse [animation-delay:0.4s]" />
                        </span>
                      </span>
                    ) : (
                      <div className="flex items-center gap-2 text-[#8696A0]">
                        <span className="text-[#25D366] font-medium flex items-center gap-1">
                          <span className="w-2 h-2 rounded-full bg-[#25D366] animate-pulse" />
                          online
                        </span>
                        <span>•</span>
                        <span>tempo de resposta &lt; 1 min</span>
                      </div>
                    )}
                  </div>
                </div>
              </div>

              {/* Botões do Top Bar no padrão WhatsApp */}
              <div className="flex items-center gap-1.5 text-[#AEBAC1]">
                <button
                  type="button"
                  onClick={() => handleActionClick('CONSULTOR')}
                  title="Ligar no WhatsApp"
                  className="w-10 h-10 rounded-full hover:bg-white/10 flex items-center justify-center cursor-pointer transition-colors"
                  aria-label="Iniciar chamada"
                >
                  <BsTelephoneFill className="w-4.5 h-4.5" />
                </button>
                <button
                  type="button"
                  onClick={() => setIsOpen(false)}
                  title="Fechar conversa"
                  className="w-10 h-10 rounded-full hover:text-white hover:bg-white/10 flex items-center justify-center cursor-pointer transition-colors"
                  aria-label="Fechar conversa"
                >
                  <BsX className="w-8 h-8" />
                </button>
              </div>
            </div>

            {/* Faixa Oficial de Criptografia & Garantia */}
            <div className="bg-[#111B21] px-4 py-2 text-xs text-[#8696A0] border-b border-white/5 flex items-center justify-between font-mono shrink-0">
              <span className="flex items-center gap-1.5 font-medium">
                <BsShieldCheck className="w-4 h-4 text-[#25D366]" />
                Canal Comercial Oficial
              </span>
              <span className="text-[#25D366] font-medium">Entrega em até 15 dias</span>
            </div>

            {/* Fundo Oficial com Textura de Papel de Parede Escuro WhatsApp */}
            <div
              ref={chatContainerRef}
              onScroll={handleScrollMessages}
              className="flex-1 p-4 sm:p-5 overflow-y-auto space-y-4 bg-[#0B141A] text-base relative"
              style={{
                backgroundImage: `radial-gradient(rgba(255, 255, 255, 0.04) 1px, transparent 0)`,
                backgroundSize: '24px 24px',
              }}
            >
              {/* Badge Inicial Centralizado estilo WhatsApp */}
              <div className="flex justify-center mb-3">
                <span className="px-4 py-2 rounded-xl bg-[#182229] text-xs sm:text-sm text-[#8696A0] shadow-sm text-center max-w-[92%] leading-relaxed">
                  🔒 As mensagens são protegidas com criptografia de ponta a ponta. Atendimento consultivo sem custo.
                </span>
              </div>

              {messages.map((m) => {
                const isUser = m.sender === 'user';
                return (
                  <div
                    key={m.id}
                    className={`flex flex-col ${isUser ? 'items-end' : 'items-start'} space-y-2`}
                  >
                    {/* Balão WhatsApp com Cauda, Proporção Autêntica e FONTE MAIOR */}
                    <div
                      className={`relative px-4.5 py-3.5 rounded-2xl max-w-[88%] sm:max-w-[85%] leading-relaxed shadow ${
                        isUser
                          ? 'bg-[#005C4B] text-[#E9EDEF] rounded-tr-none'
                          : 'bg-[#202C33] text-[#E9EDEF] rounded-tl-none'
                      }`}
                    >
                      <p className="text-[15.5px] sm:text-[16.5px] leading-relaxed select-text font-normal">
                        {m.text}
                      </p>

                      <div className="flex items-center justify-end gap-1.5 text-xs text-[#8696A0] mt-1.5 select-none font-mono">
                        <span>{m.time}</span>
                        {isUser && <BsCheck2All className="w-4 h-4 text-[#53BDEB]" />}
                      </div>
                    </div>

                    {/* Card de Proposta Visual / Orçamento Fiel com Letras Maiores */}
                    {m.cardPreview && (
                      <div className="w-[94%] sm:w-[90%] rounded-2xl p-4.5 bg-[#1F2C34] border border-[#25D366]/40 shadow-lg space-y-3">
                        <div className="flex items-center justify-between pb-2 border-b border-white/10">
                          <span className="text-xs sm:text-sm font-bold text-[#25D366] bg-[#25D366]/15 px-3 py-0.5 rounded-full uppercase tracking-wider font-mono">
                            {m.cardPreview.tag}
                          </span>
                          <span className="text-xs sm:text-sm text-[#8696A0]">Formato Ideal</span>
                        </div>

                        <div>
                          <h5 className="text-base sm:text-lg font-bold text-[#E9EDEF] tracking-tight leading-snug">
                            {m.cardPreview.title}
                          </h5>
                          <span className="text-xs sm:text-sm text-[#8696A0] block mt-1">
                            {m.cardPreview.subtitle}
                          </span>
                        </div>

                        <div className="text-xl sm:text-2xl font-extrabold text-[#25D366] font-mono">
                          {m.cardPreview.price}
                        </div>

                        <div className="space-y-2 pt-1 text-sm sm:text-[14.5px] text-[#CFD6DA] leading-relaxed">
                          {m.cardPreview.details.map((det, dIdx) => (
                            <div key={dIdx} className="flex items-start gap-2.5">
                              <span className="text-[#25D366] font-bold mt-0.5">✓</span>
                              <span>{det}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    )}

                    {/* Botões de Ação no Chat com Texto Ampliado */}
                    {m.options && (
                      <div className="flex flex-col gap-2.5 w-[92%] sm:w-[88%] pt-1">
                        {m.options.map((opt, oIdx) => (
                          <button
                            key={oIdx}
                            onClick={() => handleActionClick(opt.action)}
                            className="px-4.5 py-3 rounded-xl bg-[#202C33] hover:bg-[#2A3942] active:bg-[#182229] text-[#E9EDEF] text-sm sm:text-[15px] font-semibold border border-white/10 transition-colors text-left flex items-center justify-between group cursor-pointer shadow-sm"
                          >
                            <span>{opt.label}</span>
                            <BsArrowRight className="w-4.5 h-4.5 text-[#25D366] group-hover:translate-x-1 transition-transform shrink-0 ml-2" />
                          </button>
                        ))}
                      </div>
                    )}
                  </div>
                );
              })}

              {/* Indicador de Digitação Dinâmico Autêntico WhatsApp com Onda Suave */}
              {isTyping && (
                <div className="flex items-center px-4.5 py-3.5 rounded-2xl rounded-tl-none bg-[#202C33] w-[80px] shadow-md border border-white/5">
                  <div className="flex items-center justify-between w-full h-3">
                    <span className="w-2.5 h-2.5 rounded-full bg-[#8696A0] wa-typing-dot wa-typing-dot-1" />
                    <span className="w-2.5 h-2.5 rounded-full bg-[#8696A0] wa-typing-dot wa-typing-dot-2" />
                    <span className="w-2.5 h-2.5 rounded-full bg-[#8696A0] wa-typing-dot wa-typing-dot-3" />
                  </div>
                </div>
              )}

              <div ref={chatBottomRef} />
            </div>

            {/* Botão de Scroll para o Fim */}
            <AnimatePresence>
              {(!isNearBottom || hasUnreadBelow) && (
                <motion.button
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.8 }}
                  onClick={() => scrollToBottom('smooth')}
                  className="absolute bottom-22 right-5 z-20 px-3.5 py-2 rounded-full bg-[#202C33] text-[#AEBAC1] hover:text-white flex items-center gap-1.5 shadow-lg border border-white/10 cursor-pointer text-xs sm:text-sm font-medium"
                  aria-label="Ir para o final"
                >
                  <span>{hasUnreadBelow ? 'Nova mensagem' : 'Final'}</span>
                  <BsChevronDown className="w-4 h-4 text-[#25D366]" />
                </motion.button>
              )}
            </AnimatePresence>

            {/* Input Bar Estilo WhatsApp Web / Mobile Nativo com Ícones Adicionais e Fonte Maior */}
            <form
              onSubmit={handleUserSubmit}
              className="p-3.5 bg-[#202C33] flex items-center gap-2.5 shrink-0 border-t border-black/30"
            >
              <button
                type="button"
                className="text-[#8696A0] hover:text-[#E9EDEF] p-2 rounded-full hover:bg-white/5 transition-colors cursor-pointer"
                title="Emojis"
                aria-label="Inserir emoji"
              >
                <BsEmojiSmile className="w-5.5 h-5.5" />
              </button>

              <button
                type="button"
                className="text-[#8696A0] hover:text-[#E9EDEF] p-2 rounded-full hover:bg-white/5 transition-colors cursor-pointer hidden sm:block"
                title="Anexar arquivo"
                aria-label="Anexar arquivo"
              >
                <BsPaperclip className="w-5.5 h-5.5" />
              </button>

              <input
                type="text"
                value={userInput}
                onChange={(e) => setUserInput(e.target.value)}
                placeholder="Mensagem"
                className="flex-1 px-4 py-3 rounded-xl bg-[#2A3942] text-[#E9EDEF] text-base placeholder:text-[#8696A0] focus:outline-none focus:ring-1 focus:ring-[#00A884] transition-all"
              />

              {userInput.trim() ? (
                <button
                  type="submit"
                  className="w-11 h-11 rounded-full bg-[#00A884] hover:bg-[#02906F] active:scale-95 text-white flex items-center justify-center transition-all cursor-pointer shadow shrink-0"
                  aria-label="Enviar mensagem"
                >
                  <BsSendFill className="w-4.5 h-4.5 text-white ml-0.5" />
                </button>
              ) : (
                <button
                  type="button"
                  onClick={() => handleActionClick('CONSULTOR')}
                  className="w-11 h-11 rounded-full bg-[#2A3942] hover:bg-[#00A884] text-[#8696A0] hover:text-white flex items-center justify-center transition-all cursor-pointer shadow shrink-0"
                  title="Mensagem de voz / WhatsApp direto"
                  aria-label="Enviar áudio"
                >
                  <BsMicFill className="w-5 h-5" />
                </button>
              )}
            </form>
          </motion.div>
        )}
      </AnimatePresence>

      {/* 3. BOTÃO FLUTUANTE DO WHATSAPP (Visual Limpo e Conhecido) */}
      <button
        onClick={handleToggle}
        className="w-14 h-14 sm:w-16 sm:h-16 rounded-full bg-[#25D366] hover:bg-[#20BA5A] active:scale-95 text-white shadow-[0_8px_30px_rgba(37,211,102,0.45)] flex items-center justify-center transition-all duration-200 cursor-pointer z-10"
        aria-label="Abrir WhatsApp"
      >
        {isOpen ? (
          <BsX className="w-9 h-9 text-white" />
        ) : (
          <BsWhatsapp className="w-8 h-8 text-white" />
        )}
      </button>
    </div>
  );
};
