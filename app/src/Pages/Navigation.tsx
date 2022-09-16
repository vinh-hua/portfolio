import { Outlet, Link } from "react-router-dom";
import "./Navigation.css";

export function Navigation() {
  return (
    <div className="nav-menu">
      <ul className="nav-items">
        <li className="nav-item">
          <Link to="/portfolio/">home</Link>
        </li>
        <li className="nav-item">
          <Link to="/portfolio/about">about</Link>
        </li>
        <li className="nav-item">
          <Link to="/portfolio/work">work</Link>
        </li>
      </ul>
      <Outlet />
    </div>
  );
}
