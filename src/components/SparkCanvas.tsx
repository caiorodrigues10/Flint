import React, { useEffect, useRef } from 'react';

interface Particle {
  baseX: number;
  baseY: number;
  x: number;
  y: number;
  vx: number;
  vy: number;
  size: number;
  color: string;
  glowColor: string;
  alpha: number;
  responseLag: number;
}

interface TrailNode {
  x: number;
  y: number;
  vx: number;
  vy: number;
  age: number;
}

interface SparkCanvasProps {
  interactive?: boolean;
}

export const SparkCanvas: React.FC<SparkCanvasProps> = ({ interactive = true }) => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const animationFrameRef = useRef<number | null>(null);
  const particlesRef = useRef<Particle[]>([]);
  const trailRef = useRef<TrailNode[]>([]);
  const mouseRef = useRef<{
    x: number;
    y: number;
    prevX: number;
    prevY: number;
    vx: number;
    vy: number;
    active: boolean;
  }>({
    x: -9999,
    y: -9999,
    prevX: -9999,
    prevY: -9999,
    vx: 0,
    vy: 0,
    active: false,
  });

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d', { alpha: true });
    if (!ctx) return;

    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    const handleResize = () => {
      if (!canvas) return;
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
      buildUniformGrid();
    };

    window.addEventListener('resize', handleResize, { passive: true });

    // Cores vibrantes em tons de Azul e Antigravity
    const blueColorVariants = [
      { fill: '#4285F4', glow: 'rgba(66, 133, 244, 0.95)' },
      { fill: '#1A73E8', glow: 'rgba(26, 115, 232, 0.9)' },
      { fill: '#8AB4F8', glow: 'rgba(138, 180, 248, 1)' },
      { fill: '#38BDF8', glow: 'rgba(56, 189, 248, 0.95)' },
      { fill: '#2563EB', glow: 'rgba(37, 99, 235, 0.85)' },
      { fill: '#60A5FA', glow: 'rgba(96, 165, 250, 0.95)' },
    ];

    const buildUniformGrid = () => {
      const particles: Particle[] = [];
      const spacing = 26;
      const xCount = Math.ceil(width / spacing) + 2;
      const yCount = Math.ceil(height / (spacing * 0.866)) + 2;

      let index = 0;
      for (let row = 0; row < yCount; row++) {
        const y = row * (spacing * 0.866);
        const offsetX = (row % 2 === 1) ? spacing * 0.5 : 0;

        for (let col = 0; col < xCount; col++) {
          const x = col * spacing + offsetX;
          const colVariant = blueColorVariants[index % blueColorVariants.length];

          // 100% invisível em repouso (alpha 0) — acende estritamente no hover do cursor
          const isHighlight = index % 3 === 0;
          const size = isHighlight ? 2.4 : 1.6;

          particles.push({
            baseX: x,
            baseY: y,
            x,
            y,
            vx: 0,
            vy: 0,
            size,
            color: colVariant.fill,
            glowColor: colVariant.glow,
            alpha: 0,
            responseLag: 0.9 + Math.random() * 0.3,
          });

          index++;
        }
      }

      particlesRef.current = particles;
    };

    buildUniformGrid();

    const handleMouseMove = (e: MouseEvent) => {
      if (!interactive) return;
      const m = mouseRef.current;
      const currentX = e.clientX;
      const currentY = e.clientY;

      if (m.prevX === -9999) {
        m.prevX = currentX;
        m.prevY = currentY;
      } else {
        m.vx = currentX - m.prevX;
        m.vy = currentY - m.prevY;
      }

      m.x = currentX;
      m.y = currentY;
      m.active = true;

      trailRef.current.unshift({
        x: currentX,
        y: currentY,
        vx: m.vx,
        vy: m.vy,
        age: 0,
      });

      if (trailRef.current.length > 22) {
        trailRef.current.pop();
      }

      m.prevX = currentX;
      m.prevY = currentY;
    };

    const handleMouseLeave = () => {
      const m = mouseRef.current;
      m.active = false;
      m.x = -9999;
      m.y = -9999;
      m.prevX = -9999;
      m.prevY = -9999;
      m.vx = 0;
      m.vy = 0;
    };

    window.addEventListener('mousemove', handleMouseMove, { passive: true });
    document.addEventListener('mouseleave', handleMouseLeave);

    const render = () => {
      ctx.clearRect(0, 0, width, height);

      const m = mouseRef.current;
      const particles = particlesRef.current;
      const trail = trailRef.current;
      const pLen = particles.length;

      // Amortece velocidade do mouse
      m.vx *= 0.88;
      m.vy *= 0.88;

      // Atualiza trail
      for (let t = 0; t < trail.length; t++) {
        trail[t].age += 1;
        trail[t].vx *= 0.86;
        trail[t].vy *= 0.86;
      }
      while (trail.length > 0 && trail[trail.length - 1].age > 26) {
        trail.pop();
      }

      const revealRadius = 190;
      const trailInfluenceRadius = 160;

      for (let i = 0; i < pLen; i++) {
        const p = particles[i];
        let targetAlpha = 0; // Padrão repouso: 100% invisível

        // 1. Revelação EXCLUSIVA pelo cursor (Hover direto)
        if (m.active && m.x !== -9999) {
          const dx = p.x - m.x;
          const dy = p.y - m.y;
          const dist = Math.hypot(dx, dy);

          if (dist < revealRadius) {
            const norm = 1 - dist / revealRadius;
            targetAlpha = Math.pow(norm, 1.15) * 1.0;

            // Força de repulsão rápida e enérgica
            const repelForce = Math.pow(norm, 1.8) * 4.4;
            if (dist > 0) {
              p.vx += (dx / dist) * repelForce * p.responseLag;
              p.vy += (dy / dist) * repelForce * p.responseLag;
            }

            // Transferência rápida de velocidade
            const draftStrength = norm * 0.085;
            p.vx += m.vx * draftStrength;
            p.vy += m.vy * draftStrength;
          }
        }

        // 2. Rastro efêmero deixado pelo hover
        const tLen = trail.length;
        for (let t = 0; t < tLen; t++) {
          const node = trail[t];
          const nodeWeight = 1 - (node.age / 26);
          if (nodeWeight <= 0) continue;

          const tdx = p.x - node.x;
          const tdy = p.y - node.y;
          const tDist = Math.hypot(tdx, tdy);

          if (tDist < trailInfluenceRadius) {
            const tNorm = (1 - tDist / trailInfluenceRadius) * nodeWeight;
            const trailAlpha = Math.pow(tNorm, 1.15) * 0.85;
            if (trailAlpha > targetAlpha) {
              targetAlpha = trailAlpha;
            }

            const trailDraft = tNorm * 0.10;
            p.vx += node.vx * trailDraft;
            p.vy += node.vy * trailDraft;
          }
        }

        // 3. Resposta de Opacidade: acende instantaneamente no hover e apaga suavemente ao afastar
        if (targetAlpha > p.alpha) {
          p.alpha += (targetAlpha - p.alpha) * 0.45;
        } else {
          p.alpha += (targetAlpha - p.alpha) * 0.10;
        }

        // 4. Retorno elástico com mola ágil
        const springX = p.baseX - p.x;
        const springY = p.baseY - p.y;
        p.vx += springX * 0.085;
        p.vy += springY * 0.085;

        // Fricção controlada
        p.vx *= 0.88;
        p.vy *= 0.88;

        p.x += p.vx;
        p.y += p.vy;

        // 5. Desenho da Partícula (apenas se estiver ativa pelo hover)
        if (p.alpha > 0.01) {
          ctx.save();
          ctx.globalAlpha = Math.min(1.0, p.alpha);

          ctx.shadowBlur = p.size * 3.5;
          ctx.shadowColor = p.glowColor;

          ctx.fillStyle = p.color;
          ctx.beginPath();
          ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
          ctx.fill();
          ctx.restore();
        }
      }

      animationFrameRef.current = requestAnimationFrame(render);
    };

    render();

    return () => {
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseleave', handleMouseLeave);
      if (animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current);
      }
    };
  }, [interactive]);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 pointer-events-none z-1"
      aria-hidden="true"
    />
  );
};
