import React from 'react';
import ReactECharts from 'echarts-for-react';

const Page: React.FC = () => {
  const options = {
    grid: { top: 8, right: 8, bottom: 24, left: 36 },
    xAxis: {
      type: 'category',
      data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
    },
    yAxis: {
      type: 'value',
    },
    series: [
      {
        data: [820, 932, 901, 934, 1290, 1330, 1320],
        type: 'line',
        smooth: true,
      },
      {
        data: [120, 832, 701, 634, 1090, 1030, 1340],
        type: 'line',
        smooth: true,
      },
      {
        data: [80, 92, 91, 94, 120, 130, 120],
        type: 'line',
        smooth: true,
      },
    ],
    tooltip: {
      trigger: 'axis',
    },
  };

  return <ReactECharts option={options} />;
};

export default Page;