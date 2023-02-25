import flag from "../../../../images/flag.svg";
import user from "../../../../images/avatar-4.jpg";

import italy from "../../../../images/italy.svg";
import spain from "../../../../images/spain.svg";
import french from "../../../../images/french.svg";
import russia from "../../../../images/russia.svg";
import arabia from "../../../../images/ae.svg";

const headerItem = [
  { icon: <i class="mr-1 las la-user"></i>, name: "Profile" },
  { icon: <i class="mr-1 las la-wallet"></i>, name: "My Wallet" },
  { icon: <i class="mr-1 las la-wrench"></i>, name: "Settings" },
  { icon: <i class="mr-1 las la-lock"></i>, name: "Lock Screen" },
];

function UserSec() {
  return (
    <div className="flex items-center ">
      <div class="dropdown ">
        <button
          class="btn  dropdown-toggle"
          type="button"
          data-bs-toggle="dropdown"
          aria-expanded="false"
        >
          <img className="rounded mr-2" height="20" width="20" src={flag} />
        </button>
        <ul class="dropdown-menu lang-dropdown">
        <li className="flex py-2 dropdown-item">
            <img
              className="rounded mr-2 "
              height="20"
              width="20"
              src={flag}
            />
            <p>Espanola</p>
          </li>
          <li className="flex py-2 dropdown-item">
            <img
              className="rounded mr-2 "
              height="20"
              width="20"
              src={italy}
            />
            <p>Deutsche</p>
          </li>{" "}
          <li className="flex py-2 dropdown-item">
            <img
              className="rounded mr-2 "
              height="20"
              width="20"
              src={spain}
            />
            <p>Italiana</p>
          </li>{" "}
          <li className="flex py-2 dropdown-item">
            <img
              className="rounded mr-2 "
              height="20"
              width="20"
              src={french}
            />
            <p>Francais</p>
          </li>
          <li className="flex py-2 dropdown-item">
            <img
              className="rounded mr-2 "
              height="20"
              width="20"
              src={russia}
            />
            <p>русский</p>
          </li>
          <li className="flex  dropdown-item py-2">
            <img
              className="rounded mr-2"
              height="20"
              width="20"
              src={arabia}
            />
            <p>Arabic</p>
          </li>
        </ul>
      </div>

      <i style={{width: '42px'}} className="las la-expand fs-24"></i>
      <i style={{width: '42px'}} className="las la-moon fs-24"></i>
      <div className="relative" style={{width: '42px'}}>
        <i className="las la-bell fs-24"></i>
        <span
          style={{ fontSize: "9px", top: "-7px", left: "12px" }}
          className="bg-red-600 text-white py-1 px-2 rounded-full absolute"
        >
          3
        </span>
      </div>
      <span  className="flex ml-2">
        <img className="rounded-full mr-3" src={user} height="36" width="36" />
        <button
          className="dropdown-toggle dropdown"
          data-bs-toggle="dropdown"
          aria-expanded="false"
        >
          Calvin D.
          <i class="las la-angle-down"></i>
        </button>
        <ul
          style={{
            border: "none",
            boxShadow: "0 5px 10px rgb(30 32 37 / 12%)",
          }}
          className="dropdown-menu dropdown-menu z-50"
        >
          {headerItem.map((item) => {
            return (
              <li>
                <a
                  className=" py-1.5 !px-5 flex items-center"
                  href="#"
                >
                  {item.icon}
                  <span>{item.name}</span>
                </a>
              </li>
            );
          })}

          <li className="border-[#e9ebec] border-t-2 pt-2">
            <a
              className=" py-1.5 !px-5 flex items-center text-danger"
              href="#"
            >
              <i class="mr-1 las la-power-off"></i>
              <span>Logout</span>
            </a>
          </li>
        </ul>
      </span>
    </div>
  );
}

export default UserSec;
