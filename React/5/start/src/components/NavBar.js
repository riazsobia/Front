import React from "react";
import { NavLink } from "react-router-dom";

function NavBar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <NavLink className="navbar-brand" to="/">
        Course App
      </NavLink>
      <div className="collapse navbar-collapse" id="navbarNavDropdown">
        <ul className="navbar-nav">
          <li className="nav-item">
            <NavLink className="nav-link" to="/">
              Lista kursów
            </NavLink>
          </li>
          <li>
            <NavLink className="nav-link" to="/contact">
              Kontakt
            </NavLink>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default NavBar;
