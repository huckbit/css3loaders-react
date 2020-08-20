import React, { useState } from "react";
import { NavLink, Link } from "react-router-dom";

export default () => {
  const [activeMenu, setActiveMenu] = useState(false);

  const toggleMenu = () => {
    setActiveMenu(!activeMenu);
  };

    return (
      <nav className="navbar" role="navigation" aria-label="main navigation">
        <div className="navbar-brand">
          <Link to="/" className="navbar-item">
            <img
              src="/images/css3loaders-logo.png"
              width="112"
              height="28"
              alt="logo"
            />
          </Link>

          {/* show the class to based on state to show animation on button */}
          <div
            role="button"
            className={`navbar-burger burger ${
              activeMenu ? "is-active" : ""
            }`}
            aria-label="menu"
            aria-expanded="false"
            onClick={toggleMenu}
          >
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
          </div>
        </div>
        {/* show the class to based on state to show the dropdown */}
        <div
          className={`navbar-menu ${activeMenu ? "is-active" : ""}`}
        >
          <div className="navbar-start"></div>

          <div className="navbar-end">
            <NavLink
              to="/docs"
              activeStyle={{
                borderBottom: "2px solid #3298dc",
              }}
              className="navbar-item"
            >
              Documentation
            </NavLink>
            <div className="navbar-item">
              <div className="buttons">
                <a
                  href="https://www.instagram.com/css3loaders/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="button is-light is-small"
                >
                  <i className="fab fa-instagram mr-2"></i>{" "}
                  <span>Follow me on instagram</span>
                </a>
                <a
                  href="https://twitter.com/css3loaders"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="button is-info is-small"
                >
                  <i className="fab fa-twitter mr-2"></i>Follow me on twitter
                </a>
              </div>
            </div>
          </div>
        </div>
      </nav>
    );
  }
