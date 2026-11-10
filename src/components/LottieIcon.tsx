import React from 'react';
import { Lottie } from 'lottie-react';

interface LottieIconProps {
  animationData: any;
  className?: string;
  size?: number;
  loop?: boolean;
}

export const LottieIcon: React.FC<LottieIconProps> = ({
  animationData,
  className = '',
  size = 48,
  loop = true,
}) => {
  return (
    <div
      style={{ width: size, height: size }}
      className={`flex items-center justify-center shrink-0 ${className}`}
    >
      <Lottie
        src={animationData}
        loop={loop}
        autoplay={true}
        style={{ width: '100%', height: '100%' }}
      />
    </div>
  );
};
