import React, { useState } from 'react';
import { 
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  Filler,
} from 'chart.js';
import { Line } from 'react-chartjs-2';
import { 
  BsGraphUpArrow, 
  BsShieldCheck,
  BsPhone,
  BsCheckCircle
} from 'react-icons/bs';

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  Filler
);

export const OrdersAnalyticsSection: React.FC = () => {
  const [timeRange, setTimeRange] = useState<'semana' | 'mes'>('semana');

  const lineChartData = {
    labels: timeRange === 'semana' 
      ? ['Seg', 'Ter', 'Qua', 'Qui', 'Sex', 'Sáb', 'Dom']
      : ['Semana 1', 'Semana 2', 'Semana 3', 'Semana 4'],
    datasets: [
      {
        label: 'Pedidos pelo Site (WhatsApp Direto)',
        data: timeRange === 'semana' ? [14, 22, 28, 35, 62, 94, 88] : [112, 168, 245, 343],
        borderColor: '#1A73E8',
        backgroundColor: 'rgba(26, 115, 232, 0.12)',
        fill: true,
        tension: 0.35,
        pointBackgroundColor: '#8AB4F8',
        pointBorderColor: '#030408',
        pointBorderWidth: 2,
        pointRadius: 4,
      },
      {
        label: 'Sem Site (Telefone / Indicação)',
        data: timeRange === 'semana' ? [12, 14, 15, 18, 25, 31, 28] : [70, 78, 85, 92],
        borderColor: '#4A505C',
        backgroundColor: 'transparent',
        borderDash: [4, 4],
        tension: 0.35,
        pointRadius: 3,
      },
    ],
  };

  const chartOptions = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        display: false,
      },
      tooltip: {
        backgroundColor: '#0E131E',
        titleColor: '#FFFFFF',
        bodyColor: '#8AB4F8',
        borderColor: 'rgba(255, 255, 255, 0.15)',
        borderWidth: 1,
        padding: 10,
      },
    },
    scales: {
      x: {
        grid: { color: 'rgba(255, 255, 255, 0.04)' },
        ticks: { color: '#8A909E', font: { size: 11 } },
      },
      y: {
        grid: { color: 'rgba(255, 255, 255, 0.04)' },
        ticks: { color: '#8A909E', font: { size: 11 } },
      },
    },
  };

  const pillars = [
    {
      num: '01',
      metric: '10 a 15 dias',
      label: 'Prazo Real de Entrega',
      desc: 'Tempo hábil para diagramar, tratar imagens e homologar no celular antes da publicação.',
    },
    {
      num: '02',
      metric: '< 1 seg',
      label: 'Carregamento no 4G',
      desc: 'Mais de 90% dos seus clientes usam smartphones. Sem telas travadas que geram abandono.',
    },
    {
      num: '03',
      metric: '+45%',
      label: 'Mais Vendas Concluídas',
      desc: 'O cliente consulta fotos e preços com facilidade e a conversa já chega pronta no balcão.',
    },
    {
      num: '04',
      metric: '0%',
      label: 'Livre de Comissões',
      desc: 'Site 100% de sua propriedade. Sem repassar porcentagens do seu faturamento a intermediários.',
    },
  ];

  return (
    <section id="metricas" className="py-24 sm:py-36 relative z-10 border-b border-white/10 bg-[#030408] overflow-hidden select-none">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Cabeçalho */}
        <div className="max-w-3xl mb-16 sm:mb-24">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/5 border border-white/10 text-xs font-mono text-[#8AB4F8] mb-5">
            <span className="w-2 h-2 rounded-full bg-[#34A853] animate-pulse" />
            <span>Impacto no Faturamento</span>
          </div>

          <h2 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white leading-tight">
            O que acontece quando o seu negócio está acessível no celular.
          </h2>

          <p className="mt-5 text-base sm:text-xl text-[#9AA0A6] font-normal leading-relaxed">
            Dados comparativos médios de empresas que integraram cardápios e vitrines próprias diretamente ao WhatsApp comercial:
          </p>
        </div>

        {/* Gráfico Editorial Integrado com Controles Limpos */}
        <div className="pb-16 sm:pb-20 border-b border-white/10">
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mb-8">
            <div className="flex items-center gap-6 text-xs font-mono">
              <span className="flex items-center gap-2 text-white">
                <span className="w-2.5 h-2.5 rounded-full bg-[#1A73E8]" />
                Com Site Oficial Flint
              </span>
              <span className="flex items-center gap-2 text-[#70757A]">
                <span className="w-2.5 h-2.5 rounded-full bg-[#4A505C]" />
                Sem Site (Apenas Telefone)
              </span>
            </div>

            <div className="flex items-center gap-1 p-1 rounded-full bg-white/5 border border-white/10 text-xs font-mono">
              <button
                onClick={() => setTimeRange('semana')}
                className={`px-3 py-1 rounded-full transition-colors ${
                  timeRange === 'semana' ? 'bg-[#1A73E8] text-white' : 'text-[#8A909E] hover:text-white'
                }`}
              >
                7 Dias
              </button>
              <button
                onClick={() => setTimeRange('mes')}
                className={`px-3 py-1 rounded-full transition-colors ${
                  timeRange === 'mes' ? 'bg-[#1A73E8] text-white' : 'text-[#8A909E] hover:text-white'
                }`}
              >
                30 Dias
              </button>
            </div>
          </div>

          <div className="h-[280px] sm:h-[340px] w-full">
            <Line data={lineChartData} options={chartOptions} />
          </div>
        </div>

        {/* Linhas Editoriais dos 4 Pilares de Impacto */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 pt-16 font-mono">
          {pillars.map((pil, idx) => (
            <div key={idx} className="space-y-2">
              <span className="text-xs text-[#8AB4F8]/70 block">{pil.num}</span>
              <div className="text-3xl sm:text-4xl font-black text-white tracking-tight">
                {pil.metric}
              </div>
              <span className="text-xs text-white font-bold block pt-1">{pil.label}</span>
              <p className="text-xs text-[#8A909E] font-sans leading-relaxed pt-1">
                {pil.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
