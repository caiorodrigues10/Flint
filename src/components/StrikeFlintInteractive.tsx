import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { FlintMark } from './FlintLogo';
import { Zap, Activity, Flame } from 'lucide-react';

interface StrikeFlintInteractiveProps {
  onSparkBurst?: (x: number, y: number) => void;
}

export const StrikeFlintInteractive: React.FC<StrikeFlintInteractiveProps> = ({ onSparkBurst }) => {
  const [strikeCount, setStrikeCount] = useState(0);
  const [isStriking, setIsStriking] = useState(false);
  const [sparkSparks, setSparkSparks] = useState<Array<{ id: number; x: number; y: number; size: number }>>([]);

  const playStrikeSound = () => {
    try {
      const audioCtx = new (window.AudioContext || (window as unknown as { webkitAudioContext: typeof AudioContext }).webkitAudioContext)();
      const osc = audioCtx.createOscillator();
      const gain = audioCtx.createGain();

      osc.type = 'triangle';
      osc.frequency.setValueAtTime(840, audioCtx.currentTime);
      osc.frequency.exponentialRampToValueAtTime(120, audioCtx.currentTime + 0.12);

      gain.gain.setValueAtTime(0.25, audioCtx.currentTime);
      gain.gain.exponentialRampToValueAtTime(0.001, audioCtx.currentTime + 0.14);

      osc.connect(gain);
      gain.connect(audioCtx.destination);

      osc.start();
      osc.stop(audioCtx.currentTime + 0.15);
    } catch {
      // Audio gesture fallback
    }
  };

  const handleStrike = (e: React.MouseEvent<HTMLDivElement>) => {
    setIsStriking(true);
    playStrikeSound();
    setStrikeCount((prev) => prev + 1);

    const rect = e.currentTarget.getBoundingClientRect();
    const clickX = e.clientX - rect.left;
    const clickY = e.clientY - rect.top;

    if (onSparkBurst) {
      onSparkBurst(e.clientX, e.clientY);
    }

    const newSparks = Array.from({ length: 16 }).map((_, i) => ({
      id: Date.now() + i,
      x: clickX + (Math.random() - 0.5) * 80,
      y: clickY + (Math.random() - 0.5) * 80,
      size: Math.random() * 4 + 2,
    }));

    setSparkSparks(newSparks);

    setTimeout(() => {
      setIsStriking(false);
    }, 280);

    setTimeout(() => {
      setSparkSparks([]);
    }, 600);
  };

  return (
    <div className="relative w-full max-w-4xl mx-auto rounded-2xl p-6 sm:p-8 glass-panel border border-[#0052FF]/20 shadow-lg overflow-hidden">
      {/* Background ambient radial glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] bg-blue-600/8 rounded-full blur-[90px] pointer-events-none" />

      <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-6 sm:gap-8">
        {/* Left explanation */}
        <div className="flex-1 text-center md:text-left">
          <div className="inline-flex items-center gap-1.5 text-xs font-medium text-slate-500 dark:text-slate-400 mb-2">
            <Flame className="w-3.5 h-3.5 text-[#0052FF]" />
            <span>Física Tátil em Ação</span>
          </div>
          <h3 className="text-xl sm:text-2xl font-semibold text-slate-900 dark:text-white tracking-tight">
            Golpeie o Flint para gerar a faísca
          </h3>
          <p className="mt-2 text-xs sm:text-sm text-slate-600 dark:text-slate-400 max-w-md font-normal leading-relaxed">
            Experimente o tempo de resposta ultra-baixo. Cada interação é renderizada a 120 quadros por segundo com aceleração gráfica nativa.
          </p>

          <div className="mt-5 flex flex-wrap items-center justify-center md:justify-start gap-2.5">
            <div className="flex items-center gap-1.5 text-xs text-slate-700 dark:text-slate-300 bg-black/5 dark:bg-white/5 px-2.5 py-1 rounded-full border border-black/5 dark:border-white/10">
              <Zap className="w-3 h-3 text-[#0052FF]" />
              <span>Golpes: <strong className="font-mono text-[#0052FF]">{strikeCount}</strong></span>
            </div>
            <div className="flex items-center gap-1.5 text-xs text-slate-700 dark:text-slate-300 bg-black/5 dark:bg-white/5 px-2.5 py-1 rounded-full border border-black/5 dark:border-white/10">
              <Activity className="w-3 h-3 text-emerald-400" />
              <span>Latência: <strong className="font-mono text-emerald-400">0.12ms</strong></span>
            </div>
          </div>
        </div>

        {/* Right interactive Flint target */}
        <div className="relative flex flex-col items-center">
          <motion.div
            onClick={handleStrike}
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.94 }}
            className={`w-36 h-36 sm:w-44 sm:h-44 rounded-2xl cursor-pointer flex items-center justify-center relative select-none transition-all ${
              isStriking
                ? 'bg-blue-600/30 border-2 border-[#0052FF] shadow-[0_0_35px_rgba(0,82,255,0.45)]'
                : 'bg-black/20 hover:bg-black/30 dark:bg-white/5 dark:hover:bg-white/10 border border-slate-300/40 dark:border-white/15'
            }`}
          >
            <FlintMark size={56} />

            {/* Spark bursts */}
            <AnimatePresence>
              {sparkSparks.map((spark) => (
                <motion.span
                  key={spark.id}
                  initial={{ opacity: 1, scale: 0 }}
                  animate={{ opacity: 0, scale: spark.size, x: spark.x - 70, y: spark.y - 70 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.35, ease: 'easeOut' }}
                  className="absolute w-2 h-2 rounded-full bg-[#0052FF] pointer-events-none shadow-[0_0_8px_#0052FF]"
                />
              ))}
            </AnimatePresence>
          </motion.div>
          <span className="mt-3 text-[11px] text-slate-500 font-normal">
            Clique na pedra para descarregar o pulso
          </span>
        </div>
      </div>
    </div>
  );
};
