import Button from "../../UI/Button";
import Card from "../Card";
import invoiceWidget from '../../../images/invoice-widget.png'

function Card1() {
  return (
    <Card className="col-xl-5 ">
      <div className="flex items-center">
        <div className="col-sm-8">
          <h1 className="text-xl text-truncate text-[#495057] font-medium mb-2">
            Professional Invoices Made Easy.
          </h1>
          <p style={{fontSize: '15px'}} className="text-muted mb-4">
            Quickly understand who your best customers little and motivation to
            pay thair bills.
          </p>
          <Button>Watch Tutorial</Button>
        </div>
        <img
          style={{ height: "140px" }}
          className="img-fluid col-sm-4"
          src={invoiceWidget}
        />
      </div>
    </Card>
  );
}

export default Card1;
