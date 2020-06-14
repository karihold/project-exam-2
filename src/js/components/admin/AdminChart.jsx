import React from 'react';
import Highcharts from 'highcharts';
import HighchartsReact from 'highcharts-react-official';

const options = {
  credits: false,

  colors: ['#009FDA', '#FABCC5'],

  chart: {
    zoomType: 'xy',
    backgroundColor: '#272727',
  },
  title: {
    text: 'USERS: LAST 7 DAYS USING MEDIAN',
    style: { color: '#FFF' },
  },

  legend: {
    layout: 'horizontal',
    align: 'center',

    verticalAlign: 'bottom',
    itemStyle: { color: '#FFF' },
  },

  xAxis: [
    {
      categories: [0, 2.5, 5, 7.5, 10, 12.5, 15, 17.5],
      crosshair: true,
    },
  ],
  yAxis: [
    {
      // Primary yAxis
      labels: {
        format: '{value}K',
        style: {
          color: '#009FDA',
        },
      },
      title: {
        text: 'Median Page Load (LUX)',
        style: {
          color: '#009FDA',
        },
      },
      max: 75,
    },
    {
      // Secondary yAxis
      title: {
        text: 'Bounce Rate',
        style: {
          color: '#FABCC5',
        },
      },
      labels: {
        format: '{value}%',
        style: {
          color: '#FABCC5',
        },
      },
      max: 100,
      opposite: true,
    },
  ],
  tooltip: {
    shared: true,
  },

  series: [
    {
      name: 'Median Page Load (LUX)',
      type: 'column',
      yAxis: 1,
      data: [49.9, 71.5, 106.4, 129.2, 144.0, 176.0, 135.6, 148.5].reverse(),
      tooltip: {
        valueSuffix: 'K',
      },
    },
    {
      name: 'Bounce Rate',
      type: 'spline',
      data: [7.0, 6.9, 9.5, 14.5, 18.2, 21.5, 25.2, 26.5].reverse(),
      tooltip: {
        valueSuffix: '%',
      },
    },
  ],
};

const lineOption = {
  credits: false,

  colors: ['#009FDA', '#A74DA1', '#FABCC5'],

  chart: {
    type: 'spline',
    backgroundColor: '#272727',
  },
  title: {
    text: 'PAGE VIEWS VS ONLOAD',
    style: { color: '#FFF' },
  },

  legend: {
    layout: 'horizontal',
    backgroundColor: '#272727',
    align: 'center',
    verticalAlign: 'top',
    itemDistance: 60,
    itemStyle: { color: '#FFF' },
  },

  yAxis: [
    {
      // left y axis
      title: {
        text: null,
      },
      labels: {
        align: 'left',
        x: 3,
        y: 16,
        format: '{value}s',
      },
      showFirstLabel: false,
    },
    {
      // right y axis
      linkedTo: 0,
      gridLineWidth: 0,
      opposite: true,
      title: {
        text: null,
      },
      labels: {
        align: 'right',
        x: -3,
        y: 16,
        format: '{value:.,0f}K',
      },
      showFirstLabel: false,
      margin: 500,
    },
    {
      // right y axis
      linkedTo: 0,
      gridLineWidth: 0,
      opposite: true,
      title: {
        text: null,
      },
      labels: {
        align: 'right',
        x: -3,
        y: 16,
        format: '{value:.,0f}%',
      },

      showFirstLabel: false,
    },
  ],

  xAxis: { visible: false },

  series: [
    {
      name: 'Page Load (LUX)',
      data: [43934, 52503, 57177, 69658, 97031, 119931, 137133, 154175],
    },
    {
      name: 'Page Views (LUX)',
      data: [24916, 24064, 29742, 29851, 32490, 30282, 38121, 40434],
    },
    {
      name: 'Bounce Rate (LUX)',
      data: [11744, 17722, 16005, 19771, 20185, 24377, 32147, 39387],
    },
  ],

  responsive: {
    rules: [
      {
        condition: {
          maxWidth: 500,
        },
        chartOptions: {
          legend: {
            layout: 'horizontal',
            align: 'center',
            verticalAlign: 'bottom',
          },
        },
      },
    ],
  },
};

const AdminChart = ({}) => {
  return (
    <section className="admin-chart-section">
      <HighchartsReact highcharts={Highcharts} options={options} />
      <HighchartsReact highcharts={Highcharts} options={lineOption} />
    </section>
  );
};

export default AdminChart;
