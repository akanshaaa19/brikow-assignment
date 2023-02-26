import { useState } from "react";
import { NavLink } from "react-router-dom";
import SubMenu from "./SubMenu";

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
              <SubMenu component={item} />
            )}
          </div>
        );
      })}
    </div>
  );
}

export default SidebarComponent;
