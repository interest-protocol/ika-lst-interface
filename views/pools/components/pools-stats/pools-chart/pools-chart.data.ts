export const poolsChartOptions = {
  responsive: true,
  maintainAspectRatio: false,
  plugins: {
    legend: {
      display: false,
    },
  },
  elements: {
    line: {
      tension: 0.4,
      borderColor: '#FF4D4F',
      borderWidth: 2,
      fill: true,
    },
    point: {
      radius: 0,
    },
  },
  scales: {
    y: {
      grid: {
        display: false,
      },
      ticks: {
        display: false,
      },
    },
    x: {
      grid: {
        color: 'rgba(255, 255, 255, 0.1)',
        borderDash: [5, 5],
        drawTicks: true,
        tickLength: 5,
      },
      ticks: {
        color: '#ACB5BB',
        font: {
          size: 12,
        },
      },
    },
  },
};
