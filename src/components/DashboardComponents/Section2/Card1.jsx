import { BarChart } from "../../../charts/Barchart";
import Card from "../Card";

function Card2() {
  return (
    <Card className="col-xl-8">
      <div className="flex justify-between">
        <h1 className="text-xl text-[#495057] font-medium mb-2">
          Payment Activity
        </h1>
        <div>
          <button
            style={{ background: "rgba(80, 176, 243, 0.1)" }}
            type="button"
            className="btn btn-soft-info btn-sm text-[#50b0f3] mr-1 text-sm"
          >
            ALL
          </button>
          <button
            style={{ background: "rgba(80, 176, 243, 0.1)" }}
            type="button"
            className="btn btn-soft-info btn-sm text-[#50b0f3] mr-1"
          >
            1M
          </button>
          <button
            style={{ background: "rgba(80, 176, 243, 0.1)" }}
            type="button"
            className="btn btn-soft-info btn-sm text-[#50b0f3] mr-1"
          >
            6M
          </button>
          <button
            type="button"
            className="btn btn-info btn-sm bg-[#50b0f3] text-white"
          >
            1Y
          </button>
        </div>
      </div>
      <div className="row gy-2 text-xl font-medium my-3">
        <div className="col-md-4 ">
          <h4 className="mb-0 text-[#495057]">$23,590.00</h4>
        </div>
        <div className="col-md-8">
          <div className="flex main-chart justify-content-end">
            <div className="px-4 border-end">
              <h4 className="text-[#438A7A] mb-0">
                $584k
                <span className="text-muted inline-block text-base align-middle ms-0 ms-sm-2">
                  Incomes
                </span>
              </h4>
            </div>
            <div className="ps-4">
              <h4 className="text-[#438A7A] mb-0">
                $324k
                <span className="text-muted inline-block text-base align-middle ms-0 ms-sm-2">
                  Expenses
                </span>
              </h4>
            </div>
          </div>
        </div>
      </div>
      <BarChart />
    </Card>
  );
}

export default Card2;
