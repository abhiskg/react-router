import { Link, NavLink } from "react-router-dom";
export const Navbar = () => {
  return (
    <header className="flex justify-between">
      <Link to={"/"}>React Router</Link>
      <nav>
        <ul className="flex gap-5">
          <li>
            <NavLink
              className={({ isActive }) =>
                isActive ? "text-blue-500" : "text-black"
              }
              to="/home"
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              className={({ isActive }) =>
                isActive ? "text-blue-500" : "text-black"
              }
              to="/about"
            >
              About
            </NavLink>
          </li>
          <li>
            <NavLink
              className={({ isActive }) =>
                isActive ? "text-blue-500" : "text-black"
              }
              to="/users"
            >
              Users
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
};
