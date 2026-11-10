import React from 'react';
import { motion, type HTMLMotionProps } from 'motion/react';

interface PrecisionButtonProps extends HTMLMotionProps<'button'> {
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost' | 'blue';
  size?: 'sm' | 'md' | 'lg';
  glowEffect?: boolean;
  children: React.ReactNode;
}

export const PrecisionButton: React.FC<PrecisionButtonProps> = ({
  variant = 'primary',
  size = 'md',
  children,
  className = '',
  onClick,
  ...rest
}) => {
  const getVariantStyles = () => {
    switch (variant) {
      case 'primary':
        return 'bg-white text-black hover:bg-[#F3F4F6] shadow-sm';
      case 'blue':
        return 'bg-[#1A73E8] text-white hover:bg-[#1557B0] shadow-sm';
      case 'secondary':
        return 'bg-white/10 text-white hover:bg-white/15 border border-white/10';
      case 'outline':
        return 'bg-transparent text-white hover:bg-white/5 border border-white/15';
      case 'ghost':
        return 'bg-transparent text-[#9AA0A6] hover:text-white hover:bg-white/5';
      default:
        return 'bg-white text-black';
    }
  };

  const getSizeStyles = () => {
    switch (size) {
      case 'sm':
        return 'text-xs py-1.5 px-3 rounded-md';
      case 'md':
        return 'text-xs sm:text-sm py-2 px-4 rounded-lg';
      case 'lg':
        return 'text-sm sm:text-base py-3 px-6 rounded-lg';
      default:
        return 'text-xs sm:text-sm py-2 px-4 rounded-lg';
    }
  };

  return (
    <button
      onClick={onClick as any}
      className={`inline-flex items-center justify-center font-semibold tracking-tight select-none cursor-pointer transition-colors active:scale-[0.98] ${getVariantStyles()} ${getSizeStyles()} ${className}`}
      {...(rest as any)}
    >
      <span className="flex items-center gap-2">{children}</span>
    </button>
  );
};
