import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { BsX, BsPlayFill, BsPauseFill, BsVolumeUpFill } from 'react-icons/bs';
import { FlintMark } from './FlintLogo';

interface VideoModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const VideoModal: React.FC<VideoModalProps> = ({ isOpen, onClose }) => {
  const [isPlaying, setIsPlaying] = useState(true);
  const [progress, setProgress] = useState(48);
  const [currentChapter, setCurrentChapter] = useState(1);

  if (!isOpen) return null;

  const chapters = [
    { id: 1, title: '01. Como um site atrai clientes da sua cidade', duration: '01:45' },
    { id: 2, title: '02. Configurando o cardápio e o botão de WhatsApp', duration: '02:10' },
    { id: 3, title: '03. Como colocar sua empresa no topo do Google', duration: '02:30' },
  ];

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
        {/* Backdrop */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="fixed inset-0 bg-black/80 backdrop-blur-md"
        />

        {/* Modal Video Window */}
        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.96 }}
          transition={{ duration: 0.18, ease: 'easeOut' }}
          className="relative w-full max-w-3xl glass-panel rounded-2xl overflow-hidden border border-white/10 shadow-2xl z-10 bg-black"
        >
          {/* Header */}
          <div className="px-5 py-3 flex items-center justify-between border-b border-white/10 bg-black/60">
            <div className="flex items-center gap-2.5">
              <FlintMark size={24} />
              <span className="font-semibold text-white text-xs sm:text-sm">
                Demonstração em Vídeo · Sites que Vendem
              </span>
            </div>
            <button
              onClick={onClose}
              className="p-1 rounded-full text-slate-400 hover:text-white hover:bg-white/10 transition-colors cursor-pointer"
            >
              <BsX className="w-5 h-5" />
            </button>
          </div>

          {/* Video Player Mock with Interactive Animation */}
          <div className="relative aspect-video bg-gradient-to-tr from-[#05060A] via-[#0E121B] to-[#05060A] flex items-center justify-center overflow-hidden">
            <div className="text-center p-6 space-y-3 z-10">
              <div className="w-16 h-16 rounded-full bg-[#1A73E8]/20 border border-[#1A73E8]/40 flex items-center justify-center mx-auto text-white shadow-lg cursor-pointer hover:scale-105 transition-transform"
                onClick={() => setIsPlaying(!isPlaying)}
              >
                {isPlaying ? <BsPauseFill className="w-7 h-7" /> : <BsPlayFill className="w-7 h-7 ml-0.5" />}
              </div>
              <p className="text-sm font-medium text-white">
                Como seu negócio ganha visibilidade profissional na internet
              </p>
              <p className="text-xs text-[#9AA0A6]">
                Capítulo {currentChapter}: {chapters[currentChapter - 1].title}
              </p>
            </div>
          </div>

          {/* Controls */}
          <div className="p-4 bg-black/90 border-t border-white/10 space-y-3">
            <div className="flex items-center gap-3">
              <button
                onClick={() => setIsPlaying(!isPlaying)}
                className="text-white hover:text-[#1A73E8] cursor-pointer"
              >
                {isPlaying ? <BsPauseFill className="w-4 h-4" /> : <BsPlayFill className="w-4 h-4" />}
              </button>

              {/* Progress Bar */}
              <div
                className="flex-1 h-1.5 bg-white/10 rounded-full cursor-pointer overflow-hidden"
                onClick={(e) => {
                  const rect = e.currentTarget.getBoundingClientRect();
                  const pos = (e.clientX - rect.left) / rect.width;
                  setProgress(Math.round(pos * 100));
                }}
              >
                <div
                  className="h-full bg-[#1A73E8] rounded-full transition-all"
                  style={{ width: `${progress}%` }}
                />
              </div>

              <div className="flex items-center gap-1.5 text-xs text-[#9AA0A6]">
                <BsVolumeUpFill className="w-4 h-4" />
                <span>100%</span>
              </div>
            </div>

            {/* Chapters list */}
            <div className="flex flex-wrap gap-2 pt-2 border-t border-white/5">
              {chapters.map((ch) => (
                <button
                  key={ch.id}
                  onClick={() => {
                    setCurrentChapter(ch.id);
                    setProgress(ch.id * 30);
                  }}
                  className={`text-xs px-3 py-1 rounded-full cursor-pointer transition-colors ${
                    currentChapter === ch.id
                      ? 'bg-[#1A73E8] text-white font-medium'
                      : 'bg-white/5 text-[#9AA0A6] hover:bg-white/10'
                  }`}
                >
                  {ch.title} ({ch.duration})
                </button>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};
