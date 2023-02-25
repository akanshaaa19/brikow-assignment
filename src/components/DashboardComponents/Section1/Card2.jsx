import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Doughnut } from "react-chartjs-2";

import Card from "../Card";
import Tag from "../../UI/Tag";

ChartJS.register(ArcElement, Tooltip, Legend);

const options = {
  responsive: true,
  plugins: {
    datalabels:{
      display: false,
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

const data1 = {
  datasets: [
    {
      data: [60, 40],
      backgroundColor: ["rgb(67, 138, 122)", "rgb(245, 245, 245)"],
        cutout: 25,
    },
  ],
};
const data2 = {
  datasets: [
    {
      data: [35, 80],
      backgroundColor: ["rgb(67, 138, 122)", "rgb(245, 245, 245)"],
      cutout: 25,
    },
  ],
};

const data3 = {
  datasets: [
    {
      data: [70, 30],
      backgroundColor: ["rgb(67, 138, 122)", "rgb(245, 245, 245)"],
      cutout: 25,
    },
  ],
};

const items = [{
  value: 197,
  title: "Clients Added",
  tag: "1.15%",
  tagColor: 'blue',
  data: data1
},
{
  value: 634,
  title: "Contracts Signed",
  tag: "1.15%",
  tagColor: 'red',
  data: data2
},
{
  value: 512,
  title: "Invoice Sent",
  tag: "3.14%",
  tagColor: 'blue',
  data: data3
}]

function Card2() {
  return (
    <Card className="col-xl-7 flex flex-col">
      <div className="flex items-center justify-between w-full">
        <h4 class="card-title mb-0 flex-grow-1 text-xl text-truncate text-[#495057] font-medium mb-2">
          This Week's Overview
        </h4>
        <p className="text-sm ">
          SORT BY:
          <span>
            <button
              class="dropdown-toggle dropdown"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              Current Week <i class="las la-angle-down"></i>
            </button>
            <ul class="dropdown-menu dropdown-menu">
              <li className="dropdown-item ">Today</li>
              <li className="dropdown-item ">Last Week</li>
              <li className="dropdown-item ">Last Month</li>
              <li className="dropdown-item ">Current Week</li>
            </ul>
          </span>
        </p>
      </div>
      <div className="row justify-around">
        {items.map(item=>{
          return <div className="row flex flex-row items-start relative h-full col-lg-4 justify-between border-r-2 p-2">
          <div className="col-lg-4 w-1/2">
            <h1 className="text-2xl text-[#495057]">{item.value}</h1>
            <p className="text-muted text-sm text-nowrap">{item.title}</p>
            <p className="text-muted flex absolute bottom-0">
              <Tag className="text-sm" color={item.tagColor}>{item.tag}</Tag> since last week
            </p>
          </div>
          <div className="chart ml- col-6">
            <Doughnut options={options} width={85} height={88} data={item.data} />
          </div>
        </div>
        })}
      </div>
    </Card>
  );
}

export default Card2;
