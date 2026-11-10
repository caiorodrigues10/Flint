import React, { useState } from 'react';
import { SparkCanvas } from './components/SparkCanvas';
import { Navbar } from './components/Navbar';
import { ScrollProgressBar } from './components/ScrollProgressBar';
import { HeroSection } from './components/HeroSection';
import { OrdersAnalyticsSection } from './components/OrdersAnalyticsSection';
import { AgencyCasesSection } from './components/AgencyCasesSection';
import { AgencyServicesSection } from './components/AgencyServicesSection';
import { FeatureComparison } from './components/FeatureComparison';
import { PricingSection } from './components/PricingSection';
import { FaqSection } from './components/FaqSection';
import { CtaSection } from './components/CtaSection';
import { Footer } from './components/Footer';
import { CheckoutModal } from './components/CheckoutModal';
import { VideoModal } from './components/VideoModal';
import { FloatingWhatsApp } from './components/FloatingWhatsApp';
import { FadeInView } from './components/FadeInView';

export default function App() {
  const [checkoutOpen, setCheckoutOpen] = useState(false);
  const [videoOpen, setVideoOpen] = useState(false);
  const [selectedPlan, setSelectedPlan] = useState<{ name: string; price: string }>({
    name: 'Landing Page de Alta Conversão',
    price: 'R$ 790 (pagamento único)',
  });

  const handleOpenPlan = (name: string, price: string) => {
    setSelectedPlan({ name, price });
    setCheckoutOpen(true);
  };

  const handleOpenContact = () => {
    setSelectedPlan({ name: 'Orçamento com Diagnóstico Técnico', price: 'Sob Medida' });
    setCheckoutOpen(true);
  };

  return (
    <div className="min-h-screen bg-[#07090E] text-[#EDEDED] antialiased selection:bg-[#1A73E8] selection:text-white relative flex flex-col font-sans overflow-x-hidden">
      {/* Animação interativa de partículas de fundo reativa ao cursor */}
      <SparkCanvas interactive />

      {/* Linha indicadora de scroll discreta no topo */}
      <ScrollProgressBar />

      {/* Navegação Fixa */}
      <Navbar
        darkMode={true}
        setDarkMode={() => {}}
        sparkFx={true}
        setSparkFx={() => {}}
        onOpenWaitlist={handleOpenContact}
      />

      <main className="flex-1 relative z-10">
        {/* 1. HERO: Promessa Clara e Direta */}
        <FadeInView direction="up" distance={16} duration={0.6}>
          <HeroSection
            onOpenWaitlist={handleOpenContact}
            onOpenVideo={() => setVideoOpen(true)}
          />
        </FadeInView>

        {/* 2. PROJETOS REAIS: Mostre o trabalho primeiro */}
        <FadeInView direction="up" distance={20} duration={0.6}>
          <AgencyCasesSection onContact={handleOpenContact} />
        </FadeInView>

        {/* 3. RESULTADOS & DASHBOARD: Métricas reais de comércio */}
        <FadeInView direction="up" distance={20} duration={0.6}>
          <OrdersAnalyticsSection />
        </FadeInView>

        {/* 4. SOLUÇÕES DIGITAIS */}
        <FadeInView direction="up" distance={20} duration={0.6}>
          <AgencyServicesSection onContact={handleOpenContact} />
        </FadeInView>

        {/* 5. COMPARATIVO DIRETO: O que muda na prática */}
        <FadeInView direction="up" distance={20} duration={0.6}>
          <FeatureComparison onContact={handleOpenContact} />
        </FadeInView>

        {/* 6. PLANOS E PREÇOS: Valores transparentes sem mensalidade */}
        <FadeInView direction="up" distance={20} duration={0.6}>
          <PricingSection onSelectPlan={handleOpenPlan} />
        </FadeInView>

        {/* 7. DÚVIDAS FREQUENTES */}
        <FadeInView direction="up" distance={20} duration={0.6}>
          <FaqSection />
        </FadeInView>

        {/* 8. CTA FINAL: Contato direto e sem rodeios */}
        <FadeInView direction="up" distance={20} duration={0.6}>
          <CtaSection onSuccess={() => setCheckoutOpen(true)} />
        </FadeInView>
      </main>

      {/* FOOTER LIMPO E HUMANO */}
      <Footer darkMode={true} />

      {/* Modal de Questionário e Diagnóstico */}
      <CheckoutModal
        isOpen={checkoutOpen}
        onClose={() => setCheckoutOpen(false)}
        selectedPlan={selectedPlan}
      />

      {/* Modal de Vídeo */}
      <VideoModal
        isOpen={videoOpen}
        onClose={() => setVideoOpen(false)}
      />

      {/* Widget Flutuante de WhatsApp */}
      <FloatingWhatsApp
        onOpenConsultation={handleOpenContact}
      />
    </div>
  );
}
