import { Outlet, Link } from "react-router-dom";
import "./Navigation.css";

export function Navigation() {
  return (
    <div className="nav-menu">
      <ul className="nav-items">
        <li className="nav-item">
          <Link to="/">Home</Link>
        </li>
        <li className="nav-item">
          <Link to="/about">About</Link>
        </li>
        <li className="nav-item">
          <Link to="/portfolio">Portfolio</Link>
        </li>
      </ul>
      <Outlet />
    </div>
  );
}
