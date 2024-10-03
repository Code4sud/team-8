import { dataActions } from "@/services/dataService";
import ReactECharts from "echarts-for-react";
import { useEffect, useState } from "react";

interface EChartsDayProps {
  town: string;
}

const EChartsDay = ({ town }: EChartsDayProps) => {
  const [datas, setDatas] = useState([]);
  const [options, setOptions] = useState({});
  const [isloading, setIsLoading] = useState(false);

  async function fetchData() {
    let tableName;
    if (town === "Marseille") {
      tableName = "marseille";
    } else {
      tableName = "boucBelAir";
    }

    setIsLoading(true);
    const data = await dataActions.getAverageDayData(tableName);
    console.log("data", data.data);
    setDatas(data.data);
  }

  function formatDate(date: string) {
    // mettre la date au format "dd/mm/yyyy"
    const dateObj = new Date(date);
    const day = dateObj.getDate();
    const month = dateObj.getMonth() + 1;
    const year = dateObj.getFullYear();
    return `${day}/${month}/${year}`;
  }

  function makeOptions() {
    const keys = Object.keys(datas[0]);
    keys.shift(); // enlever la clé "jour"

    const days = datas.map((item: any) => formatDate(item.jour));

    const option = {
      title: {
        text: "Concentration moyenne journalière de certains polluants",
        left: "1%",
      },
      legend: {
        data: keys,
        top: "8%",
      },
      tooltip: {
        trigger: "axis",
      },
      grid: {
        left: "10%",
        right: "10%",
        // bottom: "10%",
      },
      xAxis: {
        data: days,
      },
      yAxis: {},
      toolbox: {
        right: "10%",
        feature: {
          dataZoom: {
            yAxisIndex: "none",
          },
          restore: {},
          saveAsImage: {},
        },
      },
      dataZoom: [
        {
          startValue: "2024-01-01",
        },
        {
          type: "inside",
        },
      ],
      series: keys.map((key: string) => ({
        name: key,
        type: "line",
        data: datas.map((item: any) => item[key]),
      })),
    };

    setOptions(option);
  }

  useEffect(() => {
    fetchData();
  }, [town]);

  useEffect(() => {
    if (datas.length === 0) return;
    setIsLoading(false);

    makeOptions();
  }, [datas]);

  return (
    <>
      {isloading && (
        <>
          <p className="loading">Loading...</p>
        </>
      )}
      <div>
        <ReactECharts option={options} notMerge={true} lazyUpdate={true} />
      </div>
    </>
  );
};

export default EChartsDay;
