// src/components/BarChart.tsx
import React, { useEffect, useRef } from 'react';
import * as echarts from 'echarts';

const BarChart: React.FC = () => {
  const chartRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    // Initialiser l'instance d'ECharts avec le DOM que nous avons préparé
    const chartInstance = echarts.init(chartRef.current!);

    // Spécifier les options pour le graphique
    const option = {
      legend: {
        data: ['SO2', 'NO', 'NO2', 'NOx', 'PM10', 'PM2.5', 'PM1'],
        top: '5%',
      },
      xAxis: {
        data: ['2018', '2019', '2020', '2021', '2022', '2023']
      },
      yAxis: {},
      series: [
        {
          name: "Marseille",
          data: [4.81, 2.20, 2.14, 1.45, 1.47, 1.45],
          type: 'line',
          smooth: true,
          animationDuration: 1000,  // Durée de l'animation (en ms)
          animationEasing: 'cubicOut',  // Fonction d'assouplissement de l'animation
          animationDelay: (idx: number) => idx * 100
        },
        {
          name: "Bouc Belair",
          data: [0, 0, 0, 2.45, 1.91, 0.75],
          type: 'line',
          smooth: true,
          animationDuration: 1000,  // Durée de l'animation (en ms)
          animationEasing: 'cubicOut',  // Fonction d'assouplissement de l'animation
          animationDelay: (idx: number) => idx * 100
        },
        {
          name: "NO",
          data: [44.15, 10.92, 8.84, 11.55, 10.18, 11.28],
          type: 'line',
          smooth: true,
          animationDuration: 1000,  // Durée de l'animation (en ms)
          animationEasing: 'cubicOut',  // Fonction d'assouplissement de l'animation
          animationDelay: (idx: number) => idx * 100
        },
        {
          name: "NO2",
          data: [46.46, 32.03, 29.10, 31.28, 32.41, 32.70],
          type: 'line',
          smooth: true,
          animationDuration: 1000,  // Durée de l'animation (en ms)
          animationEasing: 'cubicOut',  // Fonction d'assouplissement de l'animation
          animationDelay: (idx: number) => idx * 100
        },
        {
          name: "NOx",
          data: [114.29, 48.79, 42.66, 49.00, 48.02, 50.01],
          type: 'line',
          smooth: true,
          animationDuration: 1000,  // Durée de l'animation (en ms)
          animationEasing: 'cubicOut',  // Fonction d'assouplissement de l'animation
          animationDelay: (idx: number) => idx * 100,
          markLine: {
            data: [
              {
                yAxis: 40,  // Placer la ligne à la valeur 40 sur l'axe des Y
                label: {
                  formatter: "NOx limite",  // Texte du label pour la ligne
                },
                lineStyle: {
                  color: 'red',  // Couleur de la ligne
                  type: 'solid',  // Style de la ligne (solid, dashed, etc.)
                },
              },
            ],
          },
        },
        {
          name: "PM10",
          data: [42.00, 26.90, 27.19, 16.72, 19.25, 21.82],
          type: 'line',
          smooth: true,
          animationDuration: 1000,  // Durée de l'animation (en ms)
          animationEasing: 'cubicOut',  // Fonction d'assouplissement de l'animation
          animationDelay: (idx: number) => idx * 100
        },
        {
          name: "PM2.5",
          data: [0, 0, 11.85, 10.64, 10.32, 13.72],
          type: 'line',
          smooth: true,
          animationDuration: 1000,  // Durée de l'animation (en ms)
          animationEasing: 'cubicOut',  // Fonction d'assouplissement de l'animation
          animationDelay: (idx: number) => idx * 100
        },
        {
          name: "PM1",
          data: [0, 0, 0, 6.67, 7.57, 11.80],
          type: 'line',
          smooth: true,
          animationDuration: 1000,  // Durée de l'animation (en ms)
          animationEasing: 'cubicOut',  // Fonction d'assouplissement de l'animation
          animationDelay: (idx: number) => idx * 100          
        },
        
      ]
    };

    // Appliquer les options et afficher le graphique
    chartInstance.setOption(option);

    // Nettoyage pour éviter les fuites de mémoire
    return () => {
      chartInstance.dispose();
    };
  }, []);

  return (
    <div>
      <h2>Emmissions annuels</h2>
      <div
        ref={chartRef}
        style={{ width: '600px', height: '400px' }}
      />
    </div>
  );
};

export default BarChart;
