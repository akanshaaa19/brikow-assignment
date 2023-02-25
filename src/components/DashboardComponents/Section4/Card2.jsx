import Card from "../Card";

import avatar1 from "../../../images/avatar-1.jpg";
import avatar2 from "../../../images/avatar-2.jpg";
import avatar3 from "../../../images/avatar-3.jpg";
import avatar5 from "../../../images/avatar-5.jpg";
import avatar6 from "../../../images/avatar-6.jpg";
import avatar7 from "../../../images/avatar-7.jpg";
import Tag from "../../UI/Tag";

const users = [
  {
    invoiceId: "Lec-2152",
    avatar: avatar1,
    name: "Donald Risher",
    date: "20 Sep, 2022",
    status: "Paid",
    tagColor: "purple",
  },
  {
    invoiceId: "Lec-2153",
    avatar: avatar2,
    name: "Brody Holman",
    date: "12 Arl, 2022	",
    status: "Unpaid",
    tagColor: "yellow",
  },
  {
    invoiceId: "Lec-2154",
    avatar: avatar3,
    name: "Jolie Hood",
    date: "12 Arl, 2022",
    status: "Paid",
    tagColor: "purple",
  },
  {
    invoiceId: "Lec-2155",
    avatar: avatar5,
    name: "Howard Lyons",
    date: "18 Sep, 2022",
    status: "Refund",
    tagColor: "softBlue",
  },
  {
    invoiceId: "Lec-2156",
    avatar: avatar6,
    name: "Howard Oneal",
    date: "12 Feb, 2022",
    status: "Paid",
    tagColor: "purple",
  },
  {
    invoiceId: "Lec-2157",
    avatar: avatar7,
    name: " Jena Hall",
    date: "30 Nov, 2022",
    status: "Cancel",
    tagColor: "softRed",
  },
];

function Card2() {
  return (
    <Card className="col-xl-5 ">
      <div className="flex" style={{ paddingBottom: "1rem" }}>
        <h4 class="card-title mb-0 flex-grow-1 text-xl text-truncate text-[#495057] font-medium">
          Invoice List
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

      <div className="card-body" style={{ paddingTop: "0.5rem" }}>
        <div
          style={{ margin: "-1rem" }}
          className="table-responsive table-card overflow-x-auto"
        >
          <table class="sec04-02 table table-nowrap align-middle table-stripped">
            <thead>
              <tr
                style={{ verticalAlign: "middle" }}
                className="text-sm text-[#76797e] font-medium"
              >
                <th className="formcheck" scope="col">
                  <input
                    class="form-check-input"
                    type="checkbox"
                    id="checkAll"
                    value="option"
                  />
                </th>
                <th scope="col">INVOICE ID</th>
                <th scope="col">CLIENT</th>
                <th scope="col">DATE</th>
                <th style={{ width: "16%" }} scope="col">
                  STATUS
                </th>
                <th style={{ width: "12%" }} scope="col">
                  ACTION
                </th>
              </tr>
            </thead>
            <tbody
              style={{ fontSize: "15px", verticalAlign: "middle" }}
              className="txt-sm  text-"
            >
              {users.map((user) => {
                return (
                  <tr className="">
                    <th className="formcheck" scope="row p-4">
                      <input
                        class="form-check-input "
                        type="checkbox"
                        id="checkAll"
                        value="option"
                      />
                    </th>
                    <td className="">{user.invoiceId}</td>
                    <td className="flex items-center py3 text-body w-max">
                      <img
                        className="rounded-full mr-2"
                        src={user.avatar}
                        height="32px"
                        width="32px"
                      />{" "}
                      <p>{user.name}</p>
                    </td>
                    <td className=" w-max">{user.date}</td>
                    <td className=" text-xs w-max">
                      <Tag color={user.tagColor}>{user.status}</Tag>
                    </td>
                    <td>
                      <Tag color="softBlue" className="p- mr-0">
                        {" "}
                        <i class="las la-ellipsis-h text-sm"></i>
                      </Tag>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
    </Card>
  );
}

export default Card2;
