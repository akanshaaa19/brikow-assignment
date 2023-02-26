import { useState } from "react";

function SubMenu(props) {
  const [dropdown, setDropdown] = useState(false);
  return (
    <div
      className="py-3 px-6 flex flex-col items-center text-[#5d6064] justify-between"
      onClick={() => {
        setDropdown(!dropdown);
      }}
    >
      <div className="flex items-center justify-between w-full cursor-pointer">
        <span className="flex flex-row">
          <span className="mr-2">{props.component.icon}</span>
          <p className="text-base">{props.component.name}</p>
        </span>
        <i class="las la-angle-right text-sm"></i>
      </div>
      {dropdown && (
        <div className="submenu">
          <ul className="pl-">
            {props.component.dropdown.map((listitem) => {
              return <li className="w-full text-base py-2 px-3">{listitem}</li>;
            })}
          </ul>
        </div>
      )}
    </div>
  );
}

export default SubMenu;
