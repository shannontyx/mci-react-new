// MetricsChart.js

import React from 'react'
import { Chart, LinearScale, BarController, BarElement, Tooltip, Legend, TimeScale } from 'chart.js'
import { Bar } from 'react-chartjs-2'
import { AdapterDateFns } from 'chartjs-adapter-date-fns' // If removed it breaks
import annotationPlugin from 'chartjs-plugin-annotation'
import { findMedian } from '../utils'
import { constants } from '../data/constants'

const MetricsChart = ({ data, metricName, cohortMedian }) => {
  Chart.register(
    LinearScale,
    BarController,
    BarElement,
    Tooltip,
    Legend,
    TimeScale,
    annotationPlugin,
  )

  const constantObject = constants.find(item => item.name === metricName)
  const subjectMedian = findMedian(Object.values(data))

  const chartData = {
    labels: Object.keys(data),
    datasets: [
      {
        label: metricName,
        data: Object.values(data),
        backgroundColor: 'rgba(75, 192, 192, 0.4)',
        borderColor: 'rgba(75, 192, 192, 1)',
        borderWidth: 1,
      },
    ],
  }

  const options = {
    legend: {
      display: false,
    },
    scales: {
      x: {
        type: 'time',
        time: {
          unit: 'day',
        },
        title: {
          display: true,
          text: 'Date',
        },
      },
      y: {
        min: Math.min(...Object.values(data)) * 1.5,
        max: Math.max(...Object.values(data)) * 1.5,
        title: {
          display: true,
          text: metricName,
        },
      },
    },
    plugins: {
      annotation: {
        annotations: {
          line1: {
            type: 'line',
            mode: 'horizontal',
            scaleID: 'y',
            value: constantObject.cohortMedian, // <----------------- The cohort median
            borderColor: 'red',
            borderWidth: 1,
          },
          line2: {
            type: 'line',
            mode: 'horizontal',
            scaleID: 'y',
            value: subjectMedian, // <----------------- The subject median
            borderColor: 'green',
            borderWidth: 1,
          },
          area: {
            type: 'box',
            yScaleID: 'y',
            yMin: constantObject.healthyArea[0], // <----------------- The cohort std min
            yMax: constantObject.healthyArea[1], // <----------------- The cohort std max
            backgroundColor: 'rgba(234, 219, 110, 0.3)',
            borderWidth: 0,
          },
        },
      },
    },
  }

  return (
    <div>
      <Bar data={chartData} options={options} />
    </div>
  )
}
export default MetricsChart
