import { Outlet, Link } from "react-router-dom";
import "./Navigation.css";

export function Navigation() {
  return (
    <>
      <ul className="nav-menu">
        <li className="logo">
          <Link to="/portfolio">
            <button>home</button>
          </Link>
        </li>
        <li className="link">
          <Link to="/portfolio/about">about</Link>
        </li>
        <li className="link">
          <Link to="/portfolio/work">work</Link>
        </li>
      </ul>
      <Outlet />
    </>
  );
}
