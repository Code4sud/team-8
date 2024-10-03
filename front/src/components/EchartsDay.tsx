import React, { useEffect, useState } from "react";
import ReactECharts from "echarts-for-react";
import { dataActions } from "@/services/dataService";

const localData = [
  ["2010-05-01", 5],
  ["2014-06-02", 16],
  ["2014-07-03", 7],
  ["2014-08-04", 8],
  ["2014-09-05", 9],
  ["2014-10-06", 2],
  ["2014-11-07", 11],
  ["2014-12-08", 12],
  ["2015-01-09", 3],
  ["2018-02-10", 14],
];
const localData1 = [
  ["2010-05-01", 10],
  ["2014-06-02", 12],
  ["2014-07-03", 17],
  ["2014-08-04", 8],
  ["2014-09-05", 19],
  ["2014-10-06", 22],
  ["2014-11-07", 18],
  ["2014-12-08", 19],
  ["2015-01-09", 13],
  ["2018-02-10", 12],
];
const localData2 = [
  ["2024-06-01", 3],
  ["2024-06-02", 4],
  ["2024-06-03", 5],
  ["2024-06-04", 4],
  ["2024-06-05", 7],
  ["2024-06-06", 8],
  ["2024-06-07", 9],
  ["2024-06-08", 6],
  ["2024-06-09", 11],
  ["2024-06-10", 12],
];

const EChartsDay = () => {
  const [datas, setDatas] = useState({});
  const [isloading, setIsLoading] = useState(false);
  const [error, setError] = useState("");

  async function fetchData() {
    setIsLoading(true);
    const data = await dataActions.getAverageDayData("marseille");
    console.log("data", data);
  }

  useEffect(() => {
    fetchData();
  }, []);

  // useEffect(() => {
  //   setIsLoading(false);
  //   setError("");
  //   const options = {
  //     method: "GET",
  //     headers: {
  //       accept: "application/json",
  //     },
  //   };
  //   fetch("url/backend", options)
  //     .then((response) => response.json())
  //     .then((response) => {
  //       console.log(response);
  //       setDatas(response);
  //       setIsLoading(true);
  //     })
  //     .catch((err) => {
  //       setError(err.message);
  //       console.log("connexion non établie..." + err.message);
  //     });
  // }, []);

  const xAxisData = localData.map((item) => item[0]);
  const seriesData = localData.map((item) => item[1]);

  const chartOption = {
    title: {
      text: "Mesures de pollution de l'air",
      left: "1%",
    },
    tooltip: {
      trigger: "axis",
    },
    grid: {
      left: "10%",
      right: "10%",
      bottom: "10%",
    },
    xAxis: {
      data: xAxisData,
    },
    yAxis: {},
    toolbox: {
      right: 10,
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
    visualMap: {
      top: 50,
      right: 10,
      //   pieces: [
      //     {
      //       gt: 0,
      //       lte: 5,
      //       color: "#93CE07",
      //     },
      // {
      //   gt: 5,
      //   lte: 10,
      //   color: "#FBDB0F",
      // },
      // {
      //   gt: 10,
      //   lte: 15,
      //   color: "#FC7D02",
      // },
      // {
      //   gt: 15,
      //   lte: 20,
      //   color: "#FD0100",
      // },
      // {
      //   gt: 20,
      //   lte: 30,
      //   color: "#AA069F",
      // },
      // {
      //   gt: 40,
      //   color: "#AC3B2A",
      // },
      //   ],
      outOfRange: {
        color: "#999",
      },
    },
    series: [
      {
        name: "SO2",
        type: "line",
        data: seriesData,
        markLine: {
          silent: true,
          lineStyle: {
            color: "#333",
          },
          //   data: [
          //     {
          //       yAxis: 5,
          //     },
          //     {
          //       yAxis: 10,
          //     },
          //     {
          //       yAxis: 15,
          //     },
          //     {
          //       yAxis: 20,
          //     },
          //     {
          //       yAxis: 30,
          //     },
          //     {
          //       yAxis: 40,
          //     },
          //   ],
        },
      },
      {
        name: "NO2",
        type: "line",
        data: localData1.map((item) => item[1]),
        lineStyle: {
          color: "blue",
        },
      },
      {
        name: "NOx",
        type: "line",
        data: localData2.map((item) => item[1]),
        lineStyle: {
          color: "red",
        },
      },
    ],
  };

  return (
    <>
      {error != "" && <p style={{ color: "red" }}>{error} !</p>}
      {isloading && (
        <>
          <p className="loading">Loading...</p>
          {/* <span className="loader"></span> */}
        </>
      )}
      {/* {datas.length > 0 && ( */}
      <div>
        <ReactECharts
          option={chartOption}
          notMerge={true}
          lazyUpdate={true}
          style={{ height: "400px", width: "100%" }}
        />
      </div>
      {/* )} */}
    </>
  );
};

export default EChartsDay;
