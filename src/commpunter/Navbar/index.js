import { NavLink } from "react-router-dom";
import "./index.css";

const navbarheader = () => {
  return (
    <div className="nav-link-wrapper" justify="center">
      <NavLink
        to={"/"}
        className={({ isActive }) => `nav-link ${isActive ? "nav-active" : ""}`}
        justify="center" >
        Books
      </NavLink>
      <NavLink
        to={"/Shelves"}
        className={({ isActive }) => `nav-link ${isActive ? "nav-active" : ""}`}
      >
        Shelves
      </NavLink> <NavLink
        to={"/Authors"}
        className={({ isActive }) => `nav-link ${isActive ? "nav-active" : ""}`}
      >
        Authors
      </NavLink>
      
    </div>
  );
};

export default navbarheader;
