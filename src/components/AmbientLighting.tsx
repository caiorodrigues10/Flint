import React from 'react';

export const AmbientLighting: React.FC = () => {
  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden z-0" aria-hidden="true">
      {/* Luz ambiente azul superior central (Hero Glow) */}
      <div className="absolute -top-[120px] left-1/2 -translate-x-1/2 w-[900px] h-[550px] bg-gradient-to-b from-[#1A73E8]/20 via-[#4285F4]/12 to-transparent blur-[140px] rounded-full" />

      {/* Luz ambiente azul/ciano lateral esquerda (Seções centrais) */}
      <div className="absolute top-[32%] -left-[200px] w-[650px] h-[650px] bg-gradient-to-tr from-[#1A73E8]/14 via-[#38BDF8]/08 to-transparent blur-[160px] rounded-full" />

      {/* Luz ambiente violeta/azul lateral direita (Cases & Comparativo) */}
      <div className="absolute top-[58%] -right-[220px] w-[700px] h-[700px] bg-gradient-to-tl from-[#4285F4]/15 via-[#8AB4F8]/10 to-transparent blur-[170px] rounded-full" />

      {/* Luz ambiente suave inferior (Preços & CTA) */}
      <div className="absolute bottom-[5%] left-1/3 w-[850px] h-[500px] bg-gradient-to-t from-[#1A73E8]/16 via-[#1557B0]/08 to-transparent blur-[150px] rounded-full" />

      {/* Malha de micropontos sutis de profundidade (Grid Overlay) */}
      <div 
        className="absolute inset-0 opacity-[0.025]"
        style={{
          backgroundImage: 'radial-gradient(rgba(255, 255, 255, 0.7) 1px, transparent 1px)',
          backgroundSize: '36px 36px',
        }}
      />
    </div>
  );
};
