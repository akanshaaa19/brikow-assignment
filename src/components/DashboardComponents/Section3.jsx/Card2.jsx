import LineChart from "../../../charts/Line";
import Card from "../Card";

function Card2() {
  return (
    <Card className="col-xl-4">
      <div className="flex">
        <h4 class="card-title mb-0 flex-grow-1 text-xl text-truncate text-[#495057] font-medium mb-2">
          Structure
        </h4>
        <p className="text-sm ">
          <b>SORT BY: </b>
          <span>
            <button
              class="dropdown-toggle dropdown text-muted"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              Monthly <i class="las la-angle-down"></i>
            </button>
            <ul class="dropdown-menu dropdown-menu">
              <li className="dropdown-item ">Monthly</li>
              <li className="dropdown-item ">Yearly</li>
            </ul>
          </span>
        </p>
      </div>

        <LineChart />
        <div className="row mt-3 text-center">
          <div className="col-6 text-center border-end">
            <p className="text-muted mb-2">Recieved Amount</p>
            <p className="mt-2 text-xl">$45,070.00</p>
          </div>
          <div className="col-6 text-center">
          <p className="text-muted mb-2">Due Amount</p>
            <p className="mt-2 text-xl">$32,400.00</p>
          </div>

        </div>
    </Card>
  );
}

export default Card2;
