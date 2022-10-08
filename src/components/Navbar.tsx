import { Link } from "react-router-dom";
export const Navbar = () => {
  return (
    <header className="flex justify-between">
      <div>React Router</div>
      <nav>
        <ul className="flex gap-5">
          <li>
            <Link to="/home">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/work">Work</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};
