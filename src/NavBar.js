import { NavLink } from "react-router-dom";
import React from "react";
import "./NavBar.css";

const NavBar = () => {
  return (
    <div className="NavBar">
      <nav>
        <NavLink exact to="/">
          Home
        </NavLink>
        <NavLink exact to="/soda">
          Soda
        </NavLink>
        <NavLink exact to="/chips">
          Chips
        </NavLink>{" "}
        <NavLink exact to="/candy">
          Candy
        </NavLink>
      </nav>
    </div>
  );
};
export default NavBar;
