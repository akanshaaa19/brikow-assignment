import React from "react";
// import "./styles.css";

import { Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  LineElement,
  CategoryScale,
  LinearScale,
  PointElement,
} from "chart.js";

ChartJS.register(LineElement, CategoryScale, LinearScale, PointElement);

const data = {
  labels: [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "June",
    "July",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ],
  datasets: [
    {
      label: "First dataset",
      data: [0, 20, 35, 45, 35, 55, 65, 50, 65, 74, 60, 75],
      fill: {
        target: 'origin',
        above: 'rgb(255, 0, 0)',   // Area will be red above the origin
        below: 'rgb(0, 0, 255)'    // And blue below the origin
      },
      backgroundColor: "transparent",
      borderWidth: 4,
      pointBorderWidth: 0,
      borderColor: "#438a7a",
      pointBorderColor: "transparent",
      pointHoverBackgroundColor: "#438a7a",
      pointHoverBorderColor: "#438a7a",
      pointHoverRadius: 5,
      pointHoverBorderWidth: 1,
      tension: 0.5,
      borderJoinStyle: "round",
    },
    {
      label: "Second dataset",
      data: [15, 9, 17, 32, 25, 68, 80, 68, 84, 94, 74, 62],
      // borderColor: "#e4e4e4",
      borderWidth: 4,
      // fill: false,
      pointHoverBackgroundColor: "#e4e4e4",
      pointHoverBorderColor: "#e4e4e4",
      pointHoverRadius: 5,
      pointHoverBorderWidth: 1,
      // backgroundColor: "transparent",
      pointBorderColor: "transparent",
      pointBorderWidth: 4,
      borderJoinStyle: "round",
      tension: 0.5,
      borderColor: "#e4e4e4",
      backgroundColor: "#e4e4e4",
    },
  ],
};

const options = {
  responsive: true,
  maintainAspectRatio: false,
  plugins: {
    datalabels: {
      display: false,
    },
    legend: false,
    // display
  },

  scales: {
    x: {
      grid: {
        display: false,
      },
      // labels:{
      //   font:{
      //     size: '5px'
      //   }
      // }  ,
      ticks: {
        stepSize: 20,
      },
    },
    y: {
      min: 0,
      max: 100,
      ticks: {
        stepSize: 20,
      },
      grid: {
        // display: false
        borderDash: [10],
      },
    },
  },
};

export default function LineChart() {
  return (
    <div
      class="chart-container"
      style={{ position: "relative", height: "100%", width: "100%" }}
    >
      <Line options={options} data={data} />
    </div>
  );
}
