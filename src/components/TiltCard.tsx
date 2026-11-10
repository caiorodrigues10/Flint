import React, { useRef } from 'react';
import { motion, useMotionValue, useSpring, useTransform } from 'motion/react';

interface TiltCardProps {
  children: React.ReactNode;
  className?: string;
}

export const TiltCard: React.FC<TiltCardProps> = ({ children, className = '' }) => {
  const ref = useRef<HTMLDivElement>(null);

  // Raw cursor position normalized [-0.5, 0.5]
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  // Smooth spring physics for natural tactile feel (high stiffness, smooth damping)
  const mouseXSpring = useSpring(x, { stiffness: 220, damping: 22 });
  const mouseYSpring = useSpring(y, { stiffness: 220, damping: 22 });

  // 3D rotation transforms: tilt up/down (rotateX) and left/right (rotateY)
  const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ['9deg', '-9deg']);
  const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ['-9deg', '9deg']);

  // Dynamic specular light reflection coordinates (0% to 100%)
  const glareX = useTransform(mouseXSpring, [-0.5, 0.5], ['0%', '100%']);
  const glareY = useTransform(mouseYSpring, [-0.5, 0.5], ['0%', '100%']);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;

    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;

    // Convert to range [-0.5, 0.5]
    const xPct = mouseX / width - 0.5;
    const yPct = mouseY / height - 0.5;

    x.set(xPct);
    y.set(yPct);
  };

  const handleMouseLeave = () => {
    // Return smoothly to flat equilibrium
    x.set(0);
    y.set(0);
  };

  return (
    <div style={{ perspective: 1100 }} className="h-full">
      <motion.div
        ref={ref}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        style={{
          rotateX,
          rotateY,
          transformStyle: 'preserve-3d',
        }}
        whileHover={{ scale: 1.018 }}
        transition={{ duration: 0.2 }}
        className={`relative h-full overflow-hidden transition-shadow duration-300 ${className}`}
      >
        {/* Dynamic Specular Radial Light Follower */}
        <motion.div
          className="pointer-events-none absolute -inset-px rounded-[inherit] opacity-0 transition-opacity duration-300 group-hover:opacity-100 z-30"
          style={{
            background: useTransform(
              [glareX, glareY],
              ([gx, gy]) =>
                `radial-gradient(550px circle at ${gx} ${gy}, rgba(26, 115, 232, 0.18), transparent 65%)`
            ),
          }}
        />

        {/* Dynamic Border Shimmer Glow */}
        <motion.div
          className="pointer-events-none absolute inset-0 rounded-[inherit] opacity-0 transition-opacity duration-300 group-hover:opacity-100 z-20"
          style={{
            background: useTransform(
              [glareX, glareY],
              ([gx, gy]) =>
                `radial-gradient(350px circle at ${gx} ${gy}, rgba(138, 180, 248, 0.35), transparent 70%)`
            ),
            mask: 'linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)',
            maskComposite: 'exclude',
            WebkitMaskComposite: 'xor',
            padding: '1px',
          }}
        />

        {/* Content Container preserving 3D z-depth */}
        <div style={{ transform: 'translateZ(20px)' }} className="h-full flex flex-col justify-between">
          {children}
        </div>
      </motion.div>
    </div>
  );
};
