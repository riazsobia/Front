import React from "react";
import { useTranslation } from "react-i18next";
import { NavLink } from "react-router-dom";

function NavBar() {
  const { i18n } = useTranslation();
  const lngs = ["en", "pl"];

  function handleLanguageChange({ target }) {
    i18n.changeLanguage(target.value);
  }
  
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
          <li className="nav-item">
            <select
              className="form-select"
              id="language"
              name="language"
              value={i18n.language}
              onChange={handleLanguageChange}
            >
              {lngs.map((option) => {
                return (
                  <option key={option} value={option}>
                    {option}
                  </option>
                );
              })}
            </select>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default NavBar;
