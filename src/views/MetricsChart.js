// MetricsChart.js

import React from 'react';
import { Bar } from 'react-chartjs-2';

const MetricsChart = ({ data, metricName }) => {
  const chartData = {
    labels: Object.keys(data),
    datasets: [
      {
        label: metricName,
        data: Object.values(data),
        backgroundColor: 'rgba(75, 192, 192, 0.2)',
        borderColor: 'rgba(75, 192, 192, 1)',
        borderWidth: 1,
      },
    ],
  };

  const options = {
    scales: {
      x: {
        type: 'time',
        time: {
          unit: 'day', // Set the time unit as per your requirement
        },
        title: {
          display: true,
          text: 'Date',
        },
      },
      y: {
        beginAtZero: true,
        title: {
          display: true,
          text: metricName,
        },
      },
    },
  };
  return <Bar data={chartData} options={options} />;
};

export default MetricsChart;
