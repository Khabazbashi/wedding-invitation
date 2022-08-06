import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import "./NavBar.css";

function NavBar() {
  const [click, setClick] = useState(false);

  const handleClick = () => setClick(!click);
  return (
    <>
      <nav className="navbar">
        <div className="nav-container">
          <NavLink to="/" className="nav-logo"></NavLink>

          <ul className={click ? "nav-menu active" : "nav-menu"}>
            <li className="nav-item">
              <NavLink to="/" className="nav-links" onClick={handleClick}>
                Hem
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                to="/location"
                className="nav-links"
                onClick={handleClick}
              >
                Hitta Hit
              </NavLink>
            </li>

            <li className="nav-item">
              <NavLink to="/about" className="nav-links" onClick={handleClick}>
                Om herrgården
              </NavLink>
            </li>

            <li className="nav-item">
              <NavLink
                to="/contact"
                className="nav-links"
                onClick={handleClick}
              >
                Kontakt
              </NavLink>
            </li>
          </ul>
          <div className="nav-icon" onClick={handleClick}>
            <i className={click ? "fas fa-times" : "fas fa-bars"}></i>
          </div>
        </div>
      </nav>
    </>
  );
}

export default NavBar;
