import { Outlet, Link } from "react-router-dom";
import "./Navigation.css";

export function Navigation() {
  return (
    <>
      <ul className="nav-menu">
        <li className="logo">
          <Link to="/portfolio">
            <button>Vinh</button>
          </Link>
        </li>
        <li className="link">
          <Link to="/portfolio/about">About</Link>
        </li>
        <li className="link">
          <Link to="/portfolio/work">Work</Link>
        </li>
      </ul>
      <Outlet />
    </>
  );
}
