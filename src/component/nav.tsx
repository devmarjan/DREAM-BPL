import navlogo from "../assets/logo.png";

const Nav = () => {
  return (
    <div>
      <div className="navbar md:container md:mx-auto bg-base-100 relative flex justify-between">
        <div className="navbar-start w-auto">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                aria-label="Menu"
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {" "}
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />{" "}
              </svg>
            </div>
            <ul
              tabIndex={-1}
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
            >
              <li>
                <a href="#">HOME</a>
              </li>
              <li>
                <a href="#">FIXTURE</a>
              </li>
              <li>
                <a href="#">TEAMS</a>
              </li>
              <li>
                <a href="#">SCHEDULE</a>
              </li>
            </ul>
          </div>
          <div className=" absolute left-1/2 transform -translate-x-1/2 md:static md:transform-none">
            <img src={navlogo} alt="Logo" className="h-10 w-10  gap-2" />
          </div>
        </div>
        <div className="navbar-end hidden lg:flex">
          <ul className="menu menu-horizontal px-1">
            <li>
                <a href="#">HOME</a>
              </li>
              <li>
                <a href="#">FIXTURE</a>
              </li>
              <li>
                <a href="#">TEAMS</a>
              </li>
              <li>
                <a href="#">SCHEDULE</a>
              </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Nav;
