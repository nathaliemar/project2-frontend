import { Link } from "react-router-dom";

export function Navbar() {
  return (
    <div className="navbar bg-base-100 shadow-sm sticky top-0 z-50">
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
          <li className="min-w-[140px]">
            <details>
              <summary>Recipes</summary>
              <ul className="bg-base-100 rounded-t-none p-2">
                <li>
                  <Link to={"/explore"}>Explore All</Link>
                </li>
                <li>
                  <Link to={"/favorites"}>View Favorites</Link>
                </li>
                <li>
                  <Link to={"/cookbook"}>My Cookbook</Link>
                </li>
                <li>
                  <Link to={"/cookbook/add"}>Add recipe</Link>
                </li>
              </ul>
            </details>
          </li>
        </ul>
      </div>
    </div>
  );
}
