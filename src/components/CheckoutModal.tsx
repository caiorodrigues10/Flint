import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  BsX, 
  BsCheckCircleFill, 
  BsWhatsapp, 
  BsArrowRight, 
  BsArrowLeft,
  BsGlobe2, 
  BsServer, 
  BsRobot, 
  BsShop, 
  BsLightningChargeFill,
  BsPercent
} from 'react-icons/bs';
import { BiLoaderAlt } from 'react-icons/bi';

interface CheckoutModalProps {
  isOpen: boolean;
  onClose: () => void;
  selectedPlan: { name: string; price: string };
}

export const CheckoutModal: React.FC<CheckoutModalProps> = ({
  isOpen,
  onClose,
  selectedPlan,
}) => {
  const [step, setStep] = useState<1 | 2>(1);

  // Dados do Negócio e Contato
  const [name, setName] = useState('');
  const [whatsapp, setWhatsapp] = useState('');
  const [businessName, setBusinessName] = useState('');
  const [businessType, setBusinessType] = useState('padaria');

  // Questionário Técnico & Serviços Existentes (desconto de desenvolvimento)
  const [hasDomain, setHasDomain] = useState<'yes' | 'no' | 'dont_know'>('no');
  const [hasHosting, setHasHosting] = useState<'yes' | 'no' | 'dont_know'>('no');
  const [wantsWhatsAppAutomation, setWantsWhatsAppAutomation] = useState(false);
  const [customDevType, setCustomDevType] = useState('landing_page');

  const [isProcessing, setIsProcessing] = useState(false);
  const [isComplete, setIsComplete] = useState(false);

  // Cálculo de desconto e estimativa dinâmica se já possui domínio/hospedagem
  const hasExistingAssets = hasDomain === 'yes' || hasHosting === 'yes';

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!whatsapp) return;

    setIsProcessing(true);
    setTimeout(() => {
      setIsProcessing(false);
      setIsComplete(true);
    }, 1000);
  };

  const handleReset = () => {
    setIsComplete(false);
    setIsProcessing(false);
    setStep(1);
    setWhatsapp('');
    setName('');
    setBusinessName('');
    onClose();
  };

  if (!isOpen) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
        {/* Backdrop escuro com blur */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={handleReset}
          className="fixed inset-0 bg-black/85 backdrop-blur-md"
        />

        {/* Modal Window Ampliada */}
        <motion.div
          initial={{ opacity: 0, scale: 0.96, y: 10 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.96, y: 10 }}
          transition={{ duration: 0.2, ease: 'easeOut' }}
          className="relative w-full max-w-xl rounded-3xl border border-white/15 shadow-[0_20px_60px_rgba(0,0,0,0.9)] p-6 sm:p-9 z-10 overflow-hidden bg-[#0D0F17]"
        >
          {/* Close button */}
          <button
            onClick={handleReset}
            className="absolute top-5 right-5 p-2 rounded-full text-slate-400 hover:text-white hover:bg-white/10 transition-colors cursor-pointer"
            aria-label="Fechar questionário"
          >
            <BsX className="w-6 h-6" />
          </button>

          {!isComplete ? (
            <div>
              {/* Header do Questionário */}
              <div className="mb-6">
                <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-[#8AB4F8] mb-1">
                  <span>Diagnóstico Rápido</span>
                  <span>&bull;</span>
                  <span>Etapa {step} de 2</span>
                </div>
                <h3 className="text-2xl font-bold text-white tracking-tight">
                  {step === 1 ? 'Sobre o Seu Negócio' : 'Estrutura Técnica & Automações'}
                </h3>
                <p className="text-sm text-[#9AA0A6] mt-1">
                  {step === 1 
                    ? 'Conte um pouco sobre o que você vende para calcularmos o orçamento ideal.'
                    : 'Já tem domínio ou hospedagem? Economize só com a taxa de desenvolvimento.'}
                </p>
              </div>

              {/* Progress indicator */}
              <div className="w-full h-1.5 bg-white/10 rounded-full mb-6 overflow-hidden">
                <div
                  className="h-full bg-[#1A73E8] transition-all duration-300"
                  style={{ width: step === 1 ? '50%' : '100%' }}
                />
              </div>

              {step === 1 ? (
                /* ETAPA 1: Dados do Cliente e Tipo de Negócio */
                <form
                  onSubmit={(e) => {
                    e.preventDefault();
                    setStep(2);
                  }}
                  className="space-y-4"
                >
                  <div>
                    <label className="block text-xs font-bold text-[#E8EAED] uppercase tracking-wide mb-1.5">
                      Seu Nome
                    </label>
                    <input
                      type="text"
                      required
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      placeholder="Ex: Carlos Oliveira"
                      className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/15 text-white placeholder:text-slate-500 text-sm focus:outline-none focus:border-[#1A73E8] transition-all"
                    />
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-bold text-[#E8EAED] uppercase tracking-wide mb-1.5">
                        WhatsApp (com DDD)
                      </label>
                      <input
                        type="tel"
                        required
                        value={whatsapp}
                        onChange={(e) => setWhatsapp(e.target.value)}
                        placeholder="(11) 99999-9999"
                        className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/15 text-white placeholder:text-slate-500 text-sm focus:outline-none focus:border-[#1A73E8] transition-all"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-[#E8EAED] uppercase tracking-wide mb-1.5">
                        Nome da Sua Empresa
                      </label>
                      <input
                        type="text"
                        required
                        value={businessName}
                        onChange={(e) => setBusinessName(e.target.value)}
                        placeholder="Ex: Padaria Central"
                        className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/15 text-white placeholder:text-slate-500 text-sm focus:outline-none focus:border-[#1A73E8] transition-all"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-[#E8EAED] uppercase tracking-wide mb-1.5">
                      Qual é o seu nicho?
                    </label>
                    <select
                      value={businessType}
                      onChange={(e) => setBusinessType(e.target.value)}
                      className="w-full px-4 py-3 rounded-xl bg-[#141724] border border-white/15 text-white text-sm focus:outline-none focus:border-[#1A73E8] transition-all cursor-pointer"
                    >
                      <option value="padaria">Padaria, Café ou Confeitaria</option>
                      <option value="eventos">Espaço de Eventos, Salão de Festas ou Buffet</option>
                      <option value="restaurante">Restaurante, Bar ou Hamburgueria</option>
                      <option value="servicos">Prestador de Serviços (Clínica, Advocacia, Mecânica...)</option>
                      <option value="comercio">Loja ou Comércio Local</option>
                      <option value="outro">Outro Tipo de Negócio</option>
                    </select>
                  </div>

                  <div className="pt-3">
                    <button
                      type="submit"
                      className="ag-btn-primary w-full text-sm py-3.5 flex items-center justify-center gap-2 cursor-pointer font-bold"
                    >
                      <span>Avançar para Questões Técnicas</span>
                      <BsArrowRight className="w-4 h-4" />
                    </button>
                  </div>
                </form>
              ) : (
                /* ETAPA 2: Perguntas de Domínio, Hospedagem e Automações */
                <form onSubmit={handleSubmit} className="space-y-4">
                  {/* Pergunta 1: Domínio */}
                  <div className="p-4 rounded-2xl bg-white/[0.03] border border-white/10 space-y-2">
                    <div className="flex items-center gap-2 text-sm font-bold text-white">
                      <BsGlobe2 className="w-4 h-4 text-[#1A73E8]" />
                      <span>Sua empresa já possui um domínio registrado (.com.br)?</span>
                    </div>
                    <div className="grid grid-cols-3 gap-2 pt-1">
                      {[
                        { key: 'yes', label: 'Sim, já tenho' },
                        { key: 'no', label: 'Não tenho ainda' },
                        { key: 'dont_know', label: 'Não sei informar' },
                      ].map((item) => (
                        <button
                          type="button"
                          key={item.key}
                          onClick={() => setHasDomain(item.key as any)}
                          className={`py-2 px-2 rounded-xl text-xs font-semibold transition-all border text-center ${
                            hasDomain === item.key
                              ? 'bg-[#1A73E8] border-[#1A73E8] text-white shadow-md'
                              : 'bg-white/5 border-white/10 text-[#BDC1C6] hover:bg-white/10'
                          }`}
                        >
                          {item.label}
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Pergunta 2: Hospedagem / Servidor */}
                  <div className="p-4 rounded-2xl bg-white/[0.03] border border-white/10 space-y-2">
                    <div className="flex items-center gap-2 text-sm font-bold text-white">
                      <BsServer className="w-4 h-4 text-[#34A853]" />
                      <span>Você já possui servidor de hospedagem ativo?</span>
                    </div>
                    <div className="grid grid-cols-3 gap-2 pt-1">
                      {[
                        { key: 'yes', label: 'Sim, já pago' },
                        { key: 'no', label: 'Não tenho' },
                        { key: 'dont_know', label: 'Não tenho certeza' },
                      ].map((item) => (
                        <button
                          type="button"
                          key={item.key}
                          onClick={() => setHasHosting(item.key as any)}
                          className={`py-2 px-2 rounded-xl text-xs font-semibold transition-all border text-center ${
                            hasHosting === item.key
                              ? 'bg-[#1A73E8] border-[#1A73E8] text-white shadow-md'
                              : 'bg-white/5 border-white/10 text-[#BDC1C6] hover:bg-white/10'
                          }`}
                        >
                          {item.label}
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Pergunta 3: Automação de WhatsApp e Tipo de Desenvolvimento */}
                  <div className="p-4 rounded-2xl bg-white/[0.03] border border-white/10 space-y-3">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2 text-sm font-bold text-white">
                        <BsRobot className="w-4 h-4 text-[#8AB4F8]" />
                        <span>Automação Inteligente no WhatsApp</span>
                      </div>
                      <input
                        type="checkbox"
                        checked={wantsWhatsAppAutomation}
                        onChange={(e) => setWantsWhatsAppAutomation(e.target.checked)}
                        className="w-5 h-5 accent-[#1A73E8] cursor-pointer rounded"
                      />
                    </div>
                    <p className="text-xs text-[#9AA0A6] leading-relaxed">
                      Responde automaticamente com cardápio, fotos dos ambientes ou tabela de preços 24h por dia mesmo com seu telefone desligado.
                    </p>
                  </div>

                  {/* Banner de Desconto se já tem Domínio/Hospedagem */}
                  {hasExistingAssets && (
                    <div className="p-3.5 rounded-xl bg-[#34A853]/15 border border-[#34A853]/30 flex items-center gap-3 text-xs text-[#E8EAED]">
                      <BsPercent className="w-5 h-5 text-[#34A853] shrink-0" />
                      <div>
                        <strong className="text-white font-bold block">Desconto Especial Aplicado!</strong>
                        Como você já tem domínio/hospedagem, cobramos apenas o desenvolvimento do design e a integração dos links e rotas.
                      </div>
                    </div>
                  )}

                  {/* Botões de Ação */}
                  <div className="pt-2 flex items-center gap-3">
                    <button
                      type="button"
                      onClick={() => setStep(1)}
                      className="py-3 px-4 rounded-full bg-white/5 border border-white/10 text-white text-xs font-semibold hover:bg-white/10 transition-colors flex items-center gap-1.5 cursor-pointer"
                    >
                      <BsArrowLeft className="w-3.5 h-3.5" />
                      <span>Voltar</span>
                    </button>

                    <button
                      type="submit"
                      disabled={isProcessing}
                      className="ag-btn-primary flex-1 text-sm py-3.5 font-bold cursor-pointer flex items-center justify-center gap-2"
                    >
                      {isProcessing ? (
                        <>
                          <BiLoaderAlt className="w-5 h-5 animate-spin mr-1.5" />
                          <span>Calculando Orçamento...</span>
                        </>
                      ) : (
                        <>
                          <BsWhatsapp className="w-4 h-4 text-[#25D366]" />
                          <span>Receber Orçamento com Desconto</span>
                          <BsArrowRight className="w-4 h-4 ml-1" />
                        </>
                      )}
                    </button>
                  </div>
                </form>
              )}
            </div>
          ) : (
            /* Conclusão */
            <div className="py-8 text-center space-y-4">
              <div className="w-16 h-16 rounded-full bg-[#34A853]/20 border border-[#34A853]/40 flex items-center justify-center mx-auto text-[#34A853]">
                <BsCheckCircleFill className="w-8 h-8" />
              </div>

              <div>
                <h3 className="text-2xl font-bold text-white tracking-tight">
                  Orçamento Calculado com Sucesso!
                </h3>
                <p className="mt-2 text-sm text-[#BDC1C6] max-w-sm mx-auto leading-relaxed">
                  Olá {name || 'amigo(a)'}, registramos que <strong>{businessName || 'sua empresa'}</strong> {hasExistingAssets ? 'já possui estrutura técnica' : 'precisa de pacote completo com domínio'}.
                </p>
                <p className="text-xs text-[#8AB4F8] mt-2 font-mono">
                  Entraremos em contato no WhatsApp ({whatsapp}) em instantes com a prévia visual e o valor promocional.
                </p>
              </div>

              <button
                onClick={handleReset}
                className="ag-btn-primary text-sm py-3 px-8 mt-4 font-bold"
              >
                Concluir
              </button>
            </div>
          )}
        </motion.div>
      </div>
    </AnimatePresence>
  );
};
