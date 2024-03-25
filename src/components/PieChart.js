import React from 'react'
import Chart from 'chart.js/auto' // Necessary to display the chart automatically without registering
import { Pie } from 'react-chartjs-2'

const PieChart = ({ data }) => {
  const chartData = {
    labels: ['Walking', 'Sit/Standing'],
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
            size: 8, // Set the font size for the legend text
          },
        },
        padding: 20, // Set the padding to provide enough space for legend labels
      },
      tooltip: {
        bodyFont: {
          size: 8, // Set the font size for the tooltip text
        },
      },
    },
  }

  return (
    <div style={{ width: '200px' }}> {/* Adjust the width as needed */}
      <Pie data={chartData} options={options} width={200} height={150} />
    </div>
  )}

export default PieChart
