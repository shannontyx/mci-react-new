import React from 'react'
import Chart from 'chart.js/auto' // Necessary to display the chart automatically without registering
import { Pie } from 'react-chartjs-2'

const PieChart = ({ data }) => {
  const chartData = {
    labels: ['Active', 'Inactive'],
    datasets: [
      {
        data: [20, 80],
        backgroundColor: ['rgba(75, 192, 192, 0.4)', 'rgba(75, 75, 75, 0.4)'],
        borderWidth: 1,
      },
    ],
  }

  const options = {
    plugins: {
      legend: {
        // display: false,
        position: 'right',
        labels: {
          font: {
            size: 12, // Set the font size for the legend text
          },
        },
      },
      tooltip: {
        bodyFont: {
          size: 12, // Set the font size for the tooltip text
        },
      },
    },
  }

  return <Pie data={chartData} options={options} width={200} height={150} />
}

export default PieChart
