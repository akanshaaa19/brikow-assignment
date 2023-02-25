import React from "react";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import ChartDataLabels from 'chartjs-plugin-datalabels';
import { Doughnut } from "react-chartjs-2";


ChartJS.register(ArcElement, Tooltip, Legend, ChartDataLabels);

export const data = {
  labels: ["Invoiced", "Collected", "Outstanding"],
  datasets: [
    {
      data: [56.3, 25.4, 18.3],
      cutout: 100,
      backgroundColor: [
        "rgb(67, 138, 122)",
        "rgba(67, 138, 122, 0.7)",
        "rgb(245, 245, 245)",
      ],
    },
  ],
};

const options = {
  responsive: true,
  plugins: {
    datalabels:{
      display: true,
      color: '#fff',
      backgroundColor: '#438a7a',
      font:{
        weight: 'bold'
      }
    },
    legend: {
      //   position: 'top',
      display: false,
    },
    title: {
      display: false,
    },
  },
};

export default function Donught() {
  return (
    <div className="donut-container flex justify-center mb-3">
      <Doughnut options={options} data={data} />
    </div>
  );
}
