import React from 'react';
import { 
  BsPhone, 
  BsWhatsapp, 
  BsGeoAltFill, 
  BsCheckCircleFill,
  BsLaptop
} from 'react-icons/bs';

export const MotionPlayground: React.FC = () => {
  return (
    <section id="demonstracao" className="py-24 sm:py-32 relative z-10 border-t border-white/5 bg-[#05060A]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Cabeçalho Limpo sem Badges Artificiais de IA */}
        <div className="max-w-3xl mb-14 sm:mb-18">
          <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-white leading-tight">
            Veja seu site funcionando em telas reais
          </h2>
          <p className="mt-4 text-base sm:text-xl text-[#BDC1C6] font-normal leading-relaxed">
            Seus clientes vão acessar tanto pelo celular quanto pelo computador. Veja como o layout responde com perfeição em ambos:
          </p>
        </div>

        {/* Visualização Direta Lado a Lado / Empilhada por Scroll (Sem tabs que escondem dados) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* MOCKUP 1: TELA NO SMARTPHONE (4 colunas) */}
          <div className="lg:col-span-5 flex flex-col items-center">
            <div className="flex items-center gap-2 mb-4 text-sm font-bold text-white font-mono uppercase">
              <BsPhone className="w-4 h-4 text-[#8AB4F8]" />
              <span>Visualização no Celular (iPhone & Android)</span>
            </div>

            <div className="w-[310px] sm:w-[340px] rounded-[48px] bg-[#1C1E24] p-3.5 border-4 border-[#323644] shadow-[0_20px_60px_rgba(0,0,0,0.85)] relative">
              <div className="relative rounded-[38px] overflow-hidden bg-[#0A0C10] border border-white/10 min-h-[490px] flex flex-col justify-between">
                <div className="pt-2 pb-1 bg-[#0A0C10] z-20 flex justify-center">
                  <div className="w-20 h-3.5 bg-black rounded-full flex items-center justify-end px-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#1A73E8]/80 animate-pulse" />
                  </div>
                </div>

                <div className="p-4 space-y-3.5 text-xs overflow-y-auto">
                  <div className="flex items-center justify-between pb-2.5 border-b border-white/10">
                    <div>
                      <div className="text-sm font-extrabold text-white">PADARIA PÃO D'OURO</div>
                      <div className="text-xs text-[#34A853] flex items-center gap-1.5 mt-0.5 font-medium">
                        <span className="w-2 h-2 rounded-full bg-[#34A853]" /> Aberto hoje até 20h
                      </div>
                    </div>
                  </div>

                  <div className="p-3 rounded-xl bg-white/5 border border-white/10 space-y-1">
                    <span className="text-[10px] uppercase text-[#8AB4F8] font-mono font-bold">Fornada Quentinha</span>
                    <div className="text-xs font-bold text-white">Pães de Fermentação Natural & Bolos</div>
                    <div className="text-[11px] text-[#BDC1C6]">Receita artesanal com ingredientes nobres.</div>
                  </div>

                  <div className="space-y-2">
                    <div className="text-[11px] font-bold text-white uppercase">Destaques do Dia</div>
                    <div className="p-2.5 rounded-lg bg-black/60 border border-white/10 flex items-center justify-between">
                      <span className="text-white">Bolo de Cenoura c/ Chocolate</span>
                      <span className="font-mono font-bold text-[#8AB4F8]">R$ 38,00</span>
                    </div>
                    <div className="p-2.5 rounded-lg bg-black/60 border border-white/10 flex items-center justify-between">
                      <span className="text-white">Combo Café + Pão na Chapa</span>
                      <span className="font-mono font-bold text-[#8AB4F8]">R$ 16,50</span>
                    </div>
                  </div>

                  <div className="flex items-center gap-2 text-xs text-[#BDC1C6] pt-1">
                    <BsGeoAltFill className="w-3.5 h-3.5 text-[#EA4335] shrink-0" />
                    <span>Rua das Flores, 142 · Rota no Waze</span>
                  </div>
                </div>

                <div className="p-3 border-t border-white/10 bg-[#0A0C10]">
                  <div className="w-full py-2.5 px-3 rounded-xl bg-[#25D366] text-black font-bold text-xs flex items-center justify-center gap-2 shadow-lg">
                    <BsWhatsapp className="w-4 h-4 fill-black" />
                    <span>Fazer Pedido no WhatsApp</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* MOCKUP 2: TELA NO COMPUTADOR / MACBOOK (7 colunas) */}
          <div className="lg:col-span-7 flex flex-col items-center">
            <div className="flex items-center gap-2 mb-4 text-sm font-bold text-white font-mono uppercase">
              <BsLaptop className="w-4 h-4 text-[#8AB4F8]" />
              <span>Visualização no Computador & Notebook</span>
            </div>

            <div className="w-full rounded-2xl bg-[#1C1E24] p-3 border-2 border-[#323644] shadow-2xl">
              <div className="flex items-center justify-between pb-2 px-2 border-b border-white/10 text-xs text-[#9AA0A6]">
                <div className="flex items-center gap-1.5">
                  <span className="w-3 h-3 rounded-full bg-[#EA4335]" />
                  <span className="w-3 h-3 rounded-full bg-[#FBBC05]" />
                  <span className="w-3 h-3 rounded-full bg-[#34A853]" />
                </div>
                <div className="px-5 py-1 rounded-md bg-black/40 text-[11px] font-mono text-[#BDC1C6] border border-white/5">
                  https://www.villarealeventos.com.br
                </div>
                <div className="w-8" />
              </div>

              <div className="bg-[#0B0C10] p-6 min-h-[360px] rounded-b-xl space-y-5">
                <div className="flex items-center justify-between pb-3 border-b border-white/10">
                  <div className="text-lg font-extrabold text-white">VILLA REAL ESPAÇO & EVENTOS</div>
                  <div className="flex items-center gap-3">
                    <span className="text-xs text-[#BDC1C6]">Galeria</span>
                    <span className="text-xs text-[#BDC1C6]">Datas</span>
                    <span className="px-3.5 py-1.5 rounded-full bg-[#25D366] text-black font-bold text-xs flex items-center gap-1.5">
                      <BsWhatsapp /> Orçamento Rápido
                    </span>
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 items-center">
                  <div className="space-y-3">
                    <span className="text-xs font-mono font-bold text-[#8AB4F8] uppercase tracking-wider">
                      Espaço Para Casamentos & Festas
                    </span>
                    <h4 className="text-xl font-bold text-white leading-snug">
                      Salão climatizado com área verde para até 250 convidados
                    </h4>
                    <p className="text-xs sm:text-sm text-[#9AA0A6] leading-relaxed">
                      Tour fotográfico, calendário de datas disponíveis e botão rápido para agendar visita presencial.
                    </p>
                  </div>

                  <div className="p-4 rounded-xl bg-white/5 border border-white/10 space-y-2.5 text-xs text-[#BDC1C6]">
                    <div className="text-white font-bold uppercase mb-1">Destaques da Estrutura</div>
                    <div className="flex items-center gap-2">
                      <BsCheckCircleFill className="text-[#34A853]" /> Estacionamento monitorado
                    </div>
                    <div className="flex items-center gap-2">
                      <BsCheckCircleFill className="text-[#34A853]" /> Cozinha industrial de alta capacidade
                    </div>
                    <div className="flex items-center gap-2">
                      <BsCheckCircleFill className="text-[#34A853]" /> Iluminação cênica e pista de dança
                    </div>
                  </div>
                </div>
              </div>

              <div className="h-3.5 bg-[#2A2E38] rounded-b-xl border-x-2 border-b-2 border-[#3A3F50] flex justify-center">
                <div className="w-16 h-1 bg-[#14161C] rounded-b" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
