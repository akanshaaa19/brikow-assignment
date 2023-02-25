import { useState } from "react";
import { NavLink } from "react-router-dom";

function SidebarComponent(props) {
  const [dropdown, setDropdown] = useState(false);
  return (
    <div className="sidebar-component" {...props}>
      <label
        style={{ fontSize: "11px", letterSpacing: "0.5px" }}
        className="block uppercase text-[#919da9] py-3 px-5 font-bold py-2 px-6"
      >
        {props.component.label}
      </label>
      {props.component.components.map((item) => {
        // console.log(item)
        return (
          <div className="nav-item ">
            {item.link ? (
              <a
                to={"/" + item.name}
                activeClassName="active"
                className="py-3 px-6 flex items-center text-[#5d6064]"
              >
                <span className="mr-2">{item.icon}</span>
                <p className="text-base">{item.name}</p>
              </a>
            ) : (
              <>
                <div
                  className="py-3 px-6 flex flex-col items-center text-[#5d6064] justify-between"
                  onClick={() => {
                    setDropdown(!dropdown);
                  }}
                >
                  <button
                    class=" btn-toggle align-items-center rounded flex items-center justify-between w-full cursor-pointer"
                    data-bs-toggle="collapse"
                    data-bs-target={`#${item.id}`}
                    aria-expanded="true"
                  >
                    <span className="flex flex-row">
                      <span className="mr-2">{item.icon}</span>
                      <p className="text-base">{item.name}</p>
                    </span>
                    {item.dropdown.length !== 0 && (
                      <i class="las la-angle-right text-sm"></i>
                    )}
                  </button>
                  <div  class="collapse show" id={item.id} >
                    <ul class="btn-toggle-nav list-unstyled fw-normal pb-1 small">
                      {item.dropdown.map((listitem) => {
                        return (
                          <li className="w-full text-base py-2 px-3">
                            {listitem}
                          </li>
                        );
                      })}
                    </ul>
                  </div>
                </div>
                {/* <div
                  className="py-3 px-6 flex flex-col items-center text-[#5d6064] justify-between"
                  onClick={() => {
                    setDropdown(!dropdown);
                  }}
                >
                  <div
                    data-bs-toggle="collapse"
                    href="#collapseExample"
                    role="button"
                    aria-expanded="false"
                    aria-controls="collapseExample"
                    className="flex items-center justify-between w-full cursor-pointer"
                  >
                    <span className="flex flex-row">
                      <span className="mr-2">{item.icon}</span>
                      <p className="text-base">{item.name}</p>
                    </span>
                    {item.dropdown.length !== 0 && (
                      <i class="las la-angle-right text-sm"></i>
                    )}
                  </div>
                  {dropdown && (
                    <div className="dropdown-menuu">
                      <ul className="pl-">
                        {item.dropdown.map((listitem) => {
                          return (
                            <li className="w-full text-base py-2 px-3">
                              {listitem}
                            </li>
                          );
                        })}
                      </ul>
                    </div>
                  )}
                </div> */}
              </>
            )}
          </div>
        );
      })}
    </div>
  );
}

export default SidebarComponent;
