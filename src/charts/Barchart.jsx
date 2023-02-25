import React from "react";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Bar } from "react-chartjs-2";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

export const options = {
  responsive: true,
  scales: {
    xAxes: [
      {
        barPercentage: 0.2,
      },
    ],
  },
  plugins: {
    legend: {
      //   position: 'top',
      display: false,
    },
    datalabels: {
      display: false,
    },
    title: {
      display: false,
      text: "Chart.js Bar Chart",
    },
  },
  scales: {
    x: {
      grid: {
        display: false,
      },
    },
    y: {
      grid: {
        display: false,
      },
    },
  },
};

const labels = [
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
];

export const data = {
  labels,
  datasets: [
    {
      data: [38, 48, 41, 52, 22, 43, 36, 48, 24, 28, 26, 44],
      backgroundColor: "rgba(67, 138, 122)",
      barThickness: 10,
    },
    {
      data: [13, 20, 20, 8, 13, 27, 18, 22, 15, 16, 24, 22],
      backgroundColor: "#e4e4e4",
      barThickness: 10,
    },
  ],
};

export function BarChart() {
  return <Bar options={options} data={data} />;
}
