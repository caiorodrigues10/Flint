import React from 'react';
import { motion, useScroll, useSpring } from 'motion/react';

/**
 * ScrollProgressBar:
 * Uma linha ultrafina de alta precisão fixada no topo exato da viewport.
 * Acompanha o progresso vertical de rolagem da página com amortecimento elástico
 * (spring physics) e gradiente luminoso sutil estilo publicação editorial tech.
 */
export const ScrollProgressBar: React.FC = () => {
  const { scrollYProgress } = useScroll();

  // Mola para suavizar a leitura de scroll em 60/120fps sem saltos bruscos
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 280,
    damping: 30,
    restDelta: 0.001,
  });

  return (
    <div className="fixed top-0 left-0 right-0 h-[2.5px] z-[999] pointer-events-none bg-transparent">
      {/* Linha de progresso em gradiente vibrante Antigravity */}
      <motion.div
        style={{ scaleX, transformOrigin: '0%' }}
        className="w-full h-full bg-gradient-to-r from-[#1A73E8] via-[#4285F4] to-[#00E5FF] shadow-[0_0_10px_rgba(66,133,244,0.85)]"
      />
    </div>
  );
};
