import Card from "../Card";

import jsVectorMap from 'jsvectormap'
import 'jsvectormap/dist/maps/world.js'
import World from "./WorldMap";

import map from '../../../images/map.png'

// const map = new jsVectorMap({
//   selector: '#map',
//   map: 'world',
// })

import flag from '../../../images/flag.svg'
import italy from '../../../images/italy.svg'
import spain from '../../../images/spain.svg'
import french from '../../../images/french.svg'
import russia from '../../../images/russia.svg'
import arabia from '../../../images/ae.svg'


const tableItems = [
  {flag: flag, earning: '$26,524', order: 6253, country: 'US'},
  {flag: italy, earning: '$32,562', order: 5563, country: 'Italy'},
  {flag: spain, earning: '$65,214', order: 3258, country: 'Spain'},
  {flag: french, earning: '$53,621', order: 8652, country: 'French'},
  {flag: russia, earning: '$63,254', order: 6325, country: 'Russia'},
  {flag: arabia, earning: '$86,526', order: 4256, country: 'Arabic'},

]

function Card1() {
  return (
    <Card className="col-xl-7">
      <div className="flex pb-4">
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
      <div className="row items-center p-4">
        <div className="col-xl-7">
          <img src={map} />
        </div>
        <div className="col-xl-5">
          <table className="table table-centered align-middle table-nowrap mb-0 sec-0401">
            <thead>
              <tr className="uppercase text-sm">
                <th style={{width: '500px'}}>Country</th>
                <th style={{width: '30%'}}>Order</th>
                <th style={{width: '15%'}}>Earning</th>
              </tr>
            </thead>
            <tbody style={{fontSize: '15px'}}>
              {tableItems.map(item=>{
                return <tr>
                  <td className="flex"><img className="rounded mr-3" height='20' width='20' src={item.flag} />{item.country}</td>
                  <td>{item.order}</td>
                  <td>{item.earning}</td>
                </tr>
              })}
            </tbody>
          </table>
        </div>
        </div>
    </Card>
  );
}

export default Card1;
