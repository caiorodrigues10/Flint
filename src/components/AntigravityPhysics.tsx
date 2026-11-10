import React, { useEffect, useRef, useState } from 'react';

interface Particle {
  baseX: number;
  baseY: number;
  x: number;
  y: number;
  vx: number;
  vy: number;
  size: number;
  alpha: number;
  color: string;
}

interface PhysicsElement {
  id: string;
  el: HTMLElement;
  x: number;
  y: number;
  vx: number;
  vy: number;
  rotation: number;
  angularVelocity: number;
  width: number;
  height: number;
  isDragging: boolean;
  origTransform: string;
}

interface AntigravityPhysicsProps {
  active: boolean;
  onToggle: () => void;
}

/**
 * Real Google Antigravity Experience:
 * Quando o modo 'Zero Gravity' é acionado (ou ao clicar no botão flutuante 'Antigravity'):
 * 1. Todos os cards, botões, títulos e seções da página se desprendem e flutuam livremente
 *    no espaço com gravidade zero (ou caem com física real de choque e colisão).
 * 2. O usuário pode clicar, arrastar com o mouse e jogar qualquer elemento da tela!
 * 3. Elementos quicam nas paredes e colidem com inércia real.
 */
export const AntigravityPhysics: React.FC<AntigravityPhysicsProps> = ({ active, onToggle }) => {
  const elementsRef = useRef<PhysicsElement[]>([]);
  const animationFrameRef = useRef<number | null>(null);
  const dragRef = useRef<{
    activeId: string | null;
    startX: number;
    startY: number;
    offsetX: number;
    offsetY: number;
    lastMouseX: number;
    lastMouseY: number;
    mouseVx: number;
    mouseVy: number;
  }>({
    activeId: null,
    startX: 0,
    startY: 0,
    offsetX: 0,
    offsetY: 0,
    lastMouseX: 0,
    lastMouseY: 0,
    mouseVx: 0,
    mouseVy: 0,
  });

  useEffect(() => {
    if (!active) {
      // Restaurar posições originais dos elementos
      elementsRef.current.forEach((item) => {
        item.el.style.transform = item.origTransform || '';
        item.el.style.position = '';
        item.el.style.zIndex = '';
        item.el.style.pointerEvents = '';
      });
      elementsRef.current = [];
      if (animationFrameRef.current) cancelAnimationFrame(animationFrameRef.current);
      return;
    }

    // Coletar elementos interativos principais para descolar na gravidade zero
    const targets = Array.from(
      document.querySelectorAll<HTMLElement>(
        '.ag-card, h1, .ag-btn-primary, .ag-btn-secondary, .ag-code-pill, header > div'
      )
    );

    const physicsElements: PhysicsElement[] = [];

    targets.forEach((el, index) => {
      const rect = el.getBoundingClientRect();
      const origTransform = el.style.transform;

      physicsElements.push({
        id: `phys-${index}`,
        el,
        x: rect.left,
        y: rect.top,
        vx: (Math.random() - 0.5) * 5,
        vy: (Math.random() - 0.5) * 5 - 2,
        rotation: (Math.random() - 0.5) * 0.2,
        angularVelocity: (Math.random() - 0.5) * 0.05,
        width: rect.width,
        height: rect.height,
        isDragging: false,
        origTransform,
      });

      el.style.position = 'fixed';
      el.style.left = '0px';
      el.style.top = '0px';
      el.style.width = `${rect.width}px`;
      el.style.margin = '0';
      el.style.zIndex = '50';
      el.style.cursor = 'grab';
    });

    elementsRef.current = physicsElements;

    // Handlers de Arrastar e Arremessar
    const handleMouseDown = (e: MouseEvent) => {
      const mouseX = e.clientX;
      const mouseY = e.clientY;

      for (let i = elementsRef.current.length - 1; i >= 0; i--) {
        const item = elementsRef.current[i];
        if (
          mouseX >= item.x &&
          mouseX <= item.x + item.width &&
          mouseY >= item.y &&
          mouseY <= item.y + item.height
        ) {
          item.isDragging = true;
          item.vx = 0;
          item.vy = 0;
          item.angularVelocity = 0;
          item.el.style.cursor = 'grabbing';
          item.el.style.zIndex = '100';

          dragRef.current.activeId = item.id;
          dragRef.current.offsetX = mouseX - item.x;
          dragRef.current.offsetY = mouseY - item.y;
          dragRef.current.lastMouseX = mouseX;
          dragRef.current.lastMouseY = mouseY;
          e.preventDefault();
          return;
        }
      }
    };

    const handleMouseMove = (e: MouseEvent) => {
      const mouseX = e.clientX;
      const mouseY = e.clientY;
      const d = dragRef.current;

      d.mouseVx = mouseX - d.lastMouseX;
      d.mouseVy = mouseY - d.lastMouseY;
      d.lastMouseX = mouseX;
      d.lastMouseY = mouseY;

      if (d.activeId) {
        const item = elementsRef.current.find((el) => el.id === d.activeId);
        if (item) {
          item.x = mouseX - d.offsetX;
          item.y = mouseY - d.offsetY;
          item.rotation += d.mouseVx * 0.005;
        }
      }
    };

    const handleMouseUp = () => {
      const d = dragRef.current;
      if (d.activeId) {
        const item = elementsRef.current.find((el) => el.id === d.activeId);
        if (item) {
          item.isDragging = false;
          // Arremesso com inércia
          item.vx = d.mouseVx * 0.65;
          item.vy = d.mouseVy * 0.65;
          item.angularVelocity = d.mouseVx * 0.005;
          item.el.style.cursor = 'grab';
          item.el.style.zIndex = '50';
        }
        d.activeId = null;
      }
    };

    window.addEventListener('mousedown', handleMouseDown);
    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('mouseup', handleMouseUp);

    // Loop de física
    const winWidth = window.innerWidth;
    const winHeight = window.innerHeight;

    const updatePhysics = () => {
      const currentWinWidth = window.innerWidth;
      const currentWinHeight = window.innerHeight;

      elementsRef.current.forEach((item) => {
        if (!item.isDragging) {
          // Gravidade zero com flutuação livre e suave atrito
          item.x += item.vx;
          item.y += item.vy;
          item.rotation += item.angularVelocity;

          item.vx *= 0.99;
          item.vy *= 0.99;
          item.angularVelocity *= 0.99;

          // Colisões elásticas com as 4 bordas da janela
          if (item.x < 0) {
            item.x = 0;
            item.vx = -item.vx * 0.8;
          } else if (item.x + item.width > currentWinWidth) {
            item.x = currentWinWidth - item.width;
            item.vx = -item.vx * 0.8;
          }

          if (item.y < 0) {
            item.y = 0;
            item.vy = -item.vy * 0.8;
          } else if (item.y + item.height > currentWinHeight) {
            item.y = currentWinHeight - item.height;
            item.vy = -item.vy * 0.8;
          }
        }

        item.el.style.transform = `translate3d(${item.x}px, ${item.y}px, 0px) rotate(${item.rotation}rad)`;
      });

      animationFrameRef.current = requestAnimationFrame(updatePhysics);
    };

    animationFrameRef.current = requestAnimationFrame(updatePhysics);

    return () => {
      window.removeEventListener('mousedown', handleMouseDown);
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mouseup', handleMouseUp);
      if (animationFrameRef.current) cancelAnimationFrame(animationFrameRef.current);
    };
  }, [active]);

  return (
    <div className="fixed bottom-6 right-6 z-50">
      <button
        onClick={onToggle}
        className={`px-4 py-2.5 rounded-full text-xs font-mono font-medium shadow-2xl transition-all cursor-pointer flex items-center gap-2 border ${
          active
            ? 'bg-red-500 text-white border-red-400 animate-pulse'
            : 'bg-white text-black border-white/20 hover:scale-105'
        }`}
        title="Ativar/Desativar Efeito Google Antigravity"
      >
        <span className="w-2 h-2 rounded-full bg-current" />
        <span>{active ? 'Restaurar Gravidade' : 'Modo Antigravity'}</span>
      </button>
    </div>
  );
};
