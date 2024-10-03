// src/components/BarChart.tsx
import React, { useEffect, useRef, useState } from "react";
import * as echarts from "echarts";
import { dataActions } from "../services/dataService";

const BarChart: React.FC = () => {
  const chartRef = useRef<HTMLDivElement | null>(null);
  const [data, setData] = useState<any>([]);

  const getData = async () => {
    const data = await dataActions.getAverageData("marseille");
    console.log(data);
    setData(data.data);
  };

  useEffect(() => {
    getData();
  }, []);

  useEffect(() => {
    if (data.length === 0) return;
    //récupérer les keys de l'objet data
    const keys = Object.keys(data[0]);
    // enlever la clé "year"
    keys.shift();

    // récupérer les années
    const years = data.map((item: any) => item.year);

    // Initialiser l'instance d'ECharts avec le DOM que nous avons préparé
    const chartInstance = echarts.init(chartRef.current!);

    // Spécifier les options pour le graphique
    const option = {
      legend: {
        data: keys,
        top: "5%",
      },
      xAxis: {
        data: years,
      },
      yAxis: {},
      series: keys.map((key: string) =>
        key === "NOx"
          ? {
              name: key,
              type: "line",
              data: data.map((item: any) => item[key]),
              smooth: true,
              animationDuration: 1000,
              animationEasing: "cubicOut",
              animationDelay: (idx: number) => idx * 100,
              markLine: {
                data: [
                  {
                    yAxis: 40, // Placer la ligne à la valeur 40 sur l'axe des Y
                    label: {
                      formatter: "NOx limite", // Texte du label pour la ligne
                    },
                    lineStyle: {
                      color: "red", // Couleur de la ligne
                      type: "solid", // Style de la ligne (solid, dashed, etc.)
                    },
                  },
                ],
              },
            }
          : {
              name: key,
              type: "line",
              data: data.map((item: any) => item[key]),
              smooth: true,
              animationDuration: 1000,
              animationEasing: "cubicOut",
              animationDelay: (idx: number) => idx * 100,
            }
      ),
    };

    // Appliquer les options et afficher le graphique
    chartInstance.setOption(option);

    // Nettoyage pour éviter les fuites de mémoire
    return () => {
      chartInstance.dispose();
    };
  }, [data]);

  return (
    <div>
      <h2>Emmissions annuels</h2>
      <div ref={chartRef} style={{ width: "600px", height: "400px" }} />
    </div>
  );
};

export default BarChart;
