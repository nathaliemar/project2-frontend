import { Link, NavLink } from "react-router-dom";

export function Navbar() {
  return (
    <div className="navbar bg-base-100 shadow-sm sticky top-0">
      <div className="flex-1">
        <Link to={"/"} className="btn btn-ghost text-xl">
          getCooked
        </Link>
      </div>
      <div className="flex-none">
        <ul className="menu menu-horizontal px-1">
          <li>
            <Link to={"/"}>Home</Link>
          </li>
          <li>
            <details>
              <summary>Recipes</summary>
              <ul className="bg-base-100 rounded-t-none p-2">
                <li>
                  <Link to={"/explore"}>Explore All</Link>
                </li>
                <li>
                  <Link to={"/cookbook"}>My Cookbook</Link>
                </li>
              </ul>
            </details>
          </li>
        </ul>
      </div>
    </div>
  );
  //   return (
  //     <nav className="navbar rounded-box shadow-base-300/20 shadow-sm">
  //       <div className="nav-left">
  //         <div className="nav-title">getCooked</div>
  //         <Link to={"/"}>
  //           <img className="nav-logo"></img>
  //         </Link>
  //       </div>
  //       <div className="nav-right">
  //         <NavLink to={"/"}>Home</NavLink>
  //         <NavLink to={"/cookbook"}>My Cookbook</NavLink>
  //       </div>
  //     </nav>
  //   );
}
