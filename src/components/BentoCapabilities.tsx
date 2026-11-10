import React from 'react';
import { 
  BsCheckCircleFill, 
  BsGeoAltFill, 
  BsWhatsapp,
  BsPhone,
  BsSpeedometer2,
  BsShieldLockFill,
  BsImages
} from 'react-icons/bs';

export const BentoCapabilities: React.FC = () => {
  return (
    <section id="recursos" className="py-24 sm:py-32 relative border-t border-white/5 bg-[#030407]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Cabeçalho limpo sem badges artificiais de IA */}
        <div className="max-w-3xl mb-16 sm:mb-20">
          <h2 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white leading-tight [text-wrap:balance]">
            Tudo o que o seu cliente precisa para comprar ou agendar
          </h2>
          <p className="mt-4 text-base sm:text-xl text-[#BDC1C6] font-normal leading-relaxed">
            Sites pensados no dia a dia: práticos para você divulgar fotos e preços, e super simples para o seu cliente encontrar.
          </p>
        </div>

        {/* Layout fluído direto por scroll (Sem tabs que escondem conteúdo) */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Card 1 (Span 2): Integração Direta com WhatsApp */}
          <div className="lg:col-span-2 relative agency-card p-8 sm:p-10 flex flex-col justify-between border border-white/10">
            <div>
              <div className="flex items-center justify-between">
                <span className="text-base font-bold text-[#8AB4F8] flex items-center gap-2.5">
                  <BsWhatsapp className="w-5 h-5 text-[#25D366]" />
                  Conversão Direta no WhatsApp
                </span>
                <span className="text-xs font-mono font-semibold text-[#34A853] bg-[#34A853]/15 px-3 py-1 rounded-full border border-[#34A853]/30">
                  Sem Intermediários
                </span>
              </div>

              <h3 className="text-2xl sm:text-3xl font-bold text-white mt-4 leading-snug tracking-tight">
                O cliente clica no item e o pedido já chega pronto no seu WhatsApp
              </h3>

              <p className="mt-3 text-base text-[#9AA0A6] max-w-xl leading-relaxed font-normal">
                Chega de mensagens confusas no direct do Instagram. O visitante escolhe o que quer na sua padaria, restaurante ou espaço de festas e a mensagem pronta chega direto no seu WhatsApp comercial formatada com sabor, quantidade ou data.
              </p>
            </div>

            {/* Demonstração visual direta lado a lado */}
            <div className="mt-8 pt-6 border-t border-white/10 bg-black/50 p-5 sm:p-6 rounded-2xl space-y-3">
              <div className="text-xs font-mono uppercase text-[#8AB4F8] tracking-wider font-bold">
                Exemplos de como a mensagem chega para você:
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs sm:text-sm">
                <div className="p-3.5 rounded-xl bg-white/5 border border-white/10 text-[#E8EAED]">
                  <span className="text-[#34A853] font-bold block mb-1">Para Padaria & Café:</span>
                  "Olá! Gostaria de reservar 1 Bolo de Cenoura Vulcânico e saber as opções de tortas para retirar hoje."
                </div>
                <div className="p-3.5 rounded-xl bg-white/5 border border-white/10 text-[#E8EAED]">
                  <span className="text-[#34A853] font-bold block mb-1">Para Festas & Eventos:</span>
                  "Olá! Gostaria de saber os valores para locação do salão para 150 pessoas no próximo sábado."
                </div>
              </div>
            </div>
          </div>

          {/* Card 2: 100% Adaptado para Celular */}
          <div className="relative agency-card p-8 flex flex-col justify-between border border-white/10">
            <div>
              <span className="text-base font-bold text-[#8AB4F8] flex items-center gap-2.5">
                <BsPhone className="w-5 h-5 text-[#8AB4F8]" />
                Foco Total no Celular
              </span>

              <h3 className="text-2xl font-bold text-white mt-4 tracking-tight">
                92% das pessoas navegam pelo smartphone
              </h3>

              <p className="mt-3 text-base text-[#9AA0A6] leading-relaxed font-normal">
                Por isso, seu site é desenhado para telas de telefone: botões grandes e fáceis de tocar com o polegar, letras legíveis e carregamento super rápido no 4G.
              </p>
            </div>

            <div className="my-6 p-4 rounded-xl bg-white/5 border border-white/10 space-y-3 text-sm text-[#BDC1C6]">
              <div className="flex items-center justify-between font-medium">
                <span>Velocidade no 4G/5G</span>
                <span className="text-[#34A853] font-bold">Instantâneo</span>
              </div>
              <div className="flex items-center justify-between font-medium">
                <span>Toque para WhatsApp</span>
                <span className="text-[#34A853] font-bold">1 Toque</span>
              </div>
              <div className="flex items-center justify-between font-medium">
                <span>Cardápio & Fotos</span>
                <span className="text-[#34A853] font-bold">Sem baixar PDF</span>
              </div>
            </div>

            <div className="pt-4 border-t border-white/10 text-xs text-[#9AA0A6]">
              Funciona com perfeição no iPhone e no Android
            </div>
          </div>

          {/* Card 3: Google Maps e Waze */}
          <div className="relative agency-card p-8 flex flex-col justify-between border border-white/10">
            <div>
              <span className="text-base font-bold text-[#8AB4F8] flex items-center gap-2.5">
                <BsGeoAltFill className="w-5 h-5 text-[#EA4335]" />
                Como Chegar Sem Erro
              </span>

              <h3 className="text-2xl font-bold text-white mt-4 tracking-tight">
                Integração com Google Maps e Waze
              </h3>

              <p className="mt-3 text-base text-[#9AA0A6] leading-relaxed font-normal">
                Facilite para que os convidados do evento ou clientes da padaria abram a rota direto pelo GPS com apenas um toque no endereço do seu site.
              </p>
            </div>

            <div className="pt-5 border-t border-white/10 text-sm text-[#BDC1C6] flex items-center justify-between font-medium">
              <span>Rotas no Google & Waze</span>
              <span className="text-[#34A853] font-bold font-mono">Incluso</span>
            </div>
          </div>

          {/* Card 4 (Span 2): Fotos e Apresentação Visual */}
          <div className="lg:col-span-2 relative agency-card p-8 sm:p-10 flex flex-col justify-between border border-white/10">
            <div>
              <span className="text-base font-bold text-[#8AB4F8] flex items-center gap-2.5">
                <BsImages className="w-5 h-5 text-[#FBBC05]" />
                Visual que Desperta Desejo
              </span>

              <h3 className="text-2xl sm:text-3xl font-bold text-white mt-4 tracking-tight">
                Fotos atraentes dos seus produtos ou do seu salão de eventos
              </h3>

              <p className="mt-3 text-base text-[#9AA0A6] max-w-xl leading-relaxed font-normal">
                Nós organizamos as fotos dos seus pães, bolos, decorações e ambientes em galerias limpas que valorizam a qualidade do seu trabalho e impressionam quem visita.
              </p>
            </div>

            <div className="mt-8 pt-6 border-t border-white/10 flex flex-wrap items-center justify-between gap-4 text-sm text-[#BDC1C6]">
              <div className="flex items-center gap-2.5">
                <span className="w-2.5 h-2.5 rounded-full bg-[#34A853]" />
                <span className="font-medium">Fotos tratadas e otimizadas para carregar sem travar</span>
              </div>
              <span className="font-mono text-[#8AB4F8] font-semibold">
                Galeria responsiva inclusa
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
