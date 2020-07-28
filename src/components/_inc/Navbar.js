import React from "react";
import { NavLink, Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="navbar" role="navigation" aria-label="main navigation">
      <div className="navbar-brand">
        <Link to="/" className="navbar-item">
          <img src="https://bulma.io/images/bulma-logo.png" width="112" height="28" alt="logo" />
        </Link>

        <div
          role="button"
          className="navbar-burger burger"
          aria-label="menu"
          aria-expanded="false"
          data-target="navbarBasicExample"
        >
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
        </div>
      </div>

      <div id="navbarBasicExample" className="navbar-menu">
        <div className="navbar-start">
          <NavLink to="#" className="navbar-item">
            Documentation
          </NavLink>
          <NavLink
            to="/about"
            activeStyle={{
              fontWeight: "bold",
              color: "purple",
            }}
            className="navbar-item"
          >
            About
          </NavLink>

          <div className="navbar-item has-dropdown is-hoverable">
            <div className="navbar-link">More</div>
            <div className="navbar-dropdown">
              <NavLink to="/contact" className="navbar-item">
                Contact
              </NavLink>
              <hr className="navbar-divider" />
              <NavLink to="Issues" className="navbar-item">
                Report an issue
              </NavLink>
            </div>
          </div>
        </div>

        <div className="navbar-end">
          <div className="navbar-item">
            <div className="buttons">
              <Link to="https://github.com/huckbit" className="button is-primary">
                <strong>Star</strong>
              </Link>
              <Link to="/" className="button is-light">
                Something
              </Link>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}
