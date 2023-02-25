import Donught from "../../../charts/Donught";
import Card from "../Card";
import Tag from "../../UI/Tag";

const items = [{
  title: 'Invoiced',
  price: '$56,236',
  tag: '+ 0.2%'
},
{
  title: 'Collected',
  price: '$12,596',
  tag: '- 0.7%'
},
{
  title: 'Outstanding',
  price: '$1,568',
  tag: '+ 0.4%'
}]

function Card2() {
  return (
    <Card className="col-xl-4">
      <div className="flex mb-2">
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
              Weekly <i class="las la-angle-down"></i>
            </button>
            <ul class="dropdown-menu dropdown-menu">
              <li className="dropdown-item ">Yearly</li>
              <li className="dropdown-item ">Monthly</li>
              <li className="dropdown-item ">Weekly</li>
            </ul>
          </span>
        </p>
      </div>
      <Donught />
      <div>
        <table className="table mt-3 sec">
          <tbody style={{fontSize: '15px', verticalAlign: 'middle'}}>
            {items.map(item=>{
              return <tr>
              <td className="text-[#438a7a] text-lg"><i class="las la-dot-circle"></i></td>
              <td>{item.title}</td>
              <td>{item.price}</td>
              <td><Tag color="green">{item.tag}</Tag></td>
            </tr>
            })}
          </tbody>
        </table>
      </div>
    </Card>
  );
}

export default Card2;
