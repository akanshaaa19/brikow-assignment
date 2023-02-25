import Button from "../../UI/Button";
import Card from "../Card";

function Card1() {
  return (
    <Card className="col-xl-5">
      <div className="flex justify-between">
        <h1 className="text-xl text-[#495057] font-medium mb-2">
          Quick Invoice
        </h1>
        <button className="btn btn-soft-secondary bg-[#477BF929] text-[#477bf9]">
          <i class="las la-plus text-lg"></i>
        </button>
      </div>
      <div className="row">
        <div className="col-6 mb-3">
          <label className="font-medium text-[#212529] mb-2">
            Customer Name
          </label>
          <input
            style={{ padding: "0.5rem 0.9rem" }}
            type="text"
            placeholder="Enter name"
            className="form-control"
          />
        </div>
        <div className="col-6 mb-3">
          <label className="font-medium text-[#212529] mb-2">
            Customer Email
          </label>
          <input
            type="email"
            placeholder="Enter email"
            className="form-control"
          />
        </div>
        <div className="col-12 mb-3">
          <label className="font-medium text-[#212529] mb-2">
            Customer Address
          </label>
          <textarea placeholder="Enter address" className="form-control" />
        </div>
      </div>
      <table class="mb-3 table table-sm text- table-borderless table-nowrap align-middle mb-0 mt-2">
        <tbody>
          <tr>
            <td>Sub Total</td>
            <td class="text-end">$699.96</td>
          </tr>
          <tr>
            <td>Estimated Tax (12.5%)</td>
            <td class="text-end">$44.99</td>
          </tr>
          <tr>
            <td>
              Discount <small class="text-muted">(Invoika15)</small>
            </td>
            <td class="text-end">- $53.99</td>
          </tr>
          <tr>
            <td>Shipping Charge</td>
            <td class="text-end">$65.00</td>
          </tr>
          <tr class="border-top text-sm border-top-dashed fs-15">
            <th scope="row">Total Amount</th>
            <th class="text-end">$755.96</th>
          </tr>
        </tbody>
      </table>
      <div className="row mt-2">
        <div className="col-6">
          <button className="btn btn-light py-2 w-full">Add More Details</button>
        </div>
        <div className="col-6">
          <Button className="w-full py-2">Send Money</Button>
        </div>
      </div>
    </Card>
  );
}

export default Card1;
