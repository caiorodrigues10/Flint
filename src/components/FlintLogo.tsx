import React from 'react';
import flintLogoWhite from '../assets/images/flint-logo-white.png';
import flintLogoDark from '../assets/images/flint-logo-dark.png';
import flintMark from '../assets/images/flint-mark.png';

interface FlintLogoProps {
  className?: string;
  size?: 'sm' | 'md' | 'lg' | 'xl' | number;
  variant?: 'light' | 'dark' | 'auto';
  showWordmark?: boolean;
}

/**
 * FlintMark: Renderiza o arquivo PNG com a pedra facetada e a faísca azul
 */
export const FlintMark: React.FC<{ size?: number; className?: string }> = ({
  size = 42,
  className = '',
}) => {
  // Proporção de 450:420 (~1.07)
  const height = (size * 420) / 450;

  return (
    <div
      className={`relative inline-flex items-center justify-center shrink-0 select-none ${className}`}
      style={{ width: size, height }}
      aria-label="Flint Mark"
    >
      <img
        src={flintMark}
        alt="Flint Mark"
        className="w-full h-full object-contain pointer-events-none drop-shadow-sm"
        draggable={false}
      />
    </div>
  );
};

/**
 * FlintLogo: Renderiza o arquivo PNG oficial da logo Flint idêntico à imagem enviada
 * Proporção 1240 x 420 (~2.95:1)
 * - flintLogoWhite: Letras brancas para modo escuro (exatamente como na imagem enviada)
 * - flintLogoDark: Letras escuras para modo claro
 */
export const FlintLogo: React.FC<FlintLogoProps> = ({
  className = '',
  size = 'md',
  variant = 'auto',
  showWordmark = true,
}) => {
  const pixelSizes = {
    sm: 34,
    md: 46,
    lg: 60,
    xl: 78,
  };

  const baseHeight = typeof size === 'number' ? size : pixelSizes[size] || 46;
  const aspectWidth = showWordmark ? (baseHeight * 1240) / 420 : (baseHeight * 450) / 420;

  if (!showWordmark) {
    return <FlintMark size={(baseHeight * 450) / 420} className={className} />;
  }

  return (
    <div
      className={`inline-flex items-center shrink-0 select-none ${className}`}
      style={{ width: aspectWidth, height: baseHeight }}
      role="img"
      aria-label="Flint Logo"
    >
      {/* Versão PNG em alta resolução com a palavra Flint branca (para tema escuro) */}
      <img
        src={flintLogoWhite}
        alt="Flint Logo"
        className={`w-full h-full object-contain pointer-events-none ${
          variant === 'dark'
            ? 'block'
            : variant === 'light'
            ? 'hidden'
            : 'hidden dark:block'
        }`}
        draggable={false}
      />

      {/* Versão PNG em alta resolução com a palavra Flint escura (para tema claro) */}
      <img
        src={flintLogoDark}
        alt="Flint Logo"
        className={`w-full h-full object-contain pointer-events-none ${
          variant === 'light'
            ? 'block'
            : variant === 'dark'
            ? 'hidden'
            : 'block dark:hidden'
        }`}
        draggable={false}
      />
    </div>
  );
};
