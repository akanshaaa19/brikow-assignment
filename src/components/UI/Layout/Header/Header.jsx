import UserSec from "./User";
function Header() {
  return (
    <header className="header w-screen bg-white fixed top-0 flex items-center px-6 justify-between py-3 right-0 z-2">
      <div className="flex items-center justify-between">
        <div className="pr-6 ">
          <span className="hamburger inline-flex relative cursor-pointer left-0">
            <span className="hamburger-1"></span>
            <span className="hamburger-2"></span>
            <span className="hamburger-3"></span>
          </span>
        </div>
        <div className="input-div bg-[#f9f9f9] px-3 flex items-center rounded-lg">
          <i className="las la-search text-lg"></i>
          <input
            className="bg-transparent border-0 form-control"
            type="text"
            placeholder="Search..."
          />
        </div>
      </div>
      <UserSec />
    </header>
  );
}

export default Header;
