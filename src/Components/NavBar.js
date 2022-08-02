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
          <NavLink to="/" className="nav-logo">
            Bröllop
          </NavLink>

          <ul className={click ? "nav-menu active" : "nav-menu"}>
            <li className="nav-item">
              <NavLink to="/" className="nav-links" onClick={handleClick}>
                Home
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
            <li className="nav-item">
              <NavLink
                to="/location"
                className="nav-links"
                onClick={handleClick}
              >
                Plats
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                to="/dresscode"
                className="nav-links"
                onClick={handleClick}
              >
                Dresscode
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink to="/gifts" className="nav-links" onClick={handleClick}>
                Presenter
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                to="/timeplace"
                className="nav-links"
                onClick={handleClick}
              >
                Tid, Plats
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