import React, { Component } from "react";
import { NavLink, Link } from "react-router-dom";

export default class Navbar extends Component {
  state = { activeMenu: false };

  toggleMenu = () => {
    this.setState({ activeMenu: !this.state.activeMenu });
  };

  render() {
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
              this.state.activeMenu ? "is-active" : ""
            }`}
            aria-label="menu"
            aria-expanded="false"
            onClick={this.toggleMenu}
          >
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
          </div>
        </div>
        {/* show the class to based on state to show the dropdown */}
        <div
          className={`navbar-menu ${this.state.activeMenu ? "is-active" : ""}`}
        >
          <div className="navbar-start"></div>

          <div className="navbar-end">
            <NavLink
              to="/docs"
              activeStyle={{
                fontWeight: "bold",
                borderBottom: "4px solid #3298dc",
              }}
              className="navbar-item"
            >
              Documentation
            </NavLink>
            <div className="navbar-item">
              <div className="buttons">
                <Link
                  to="https://www.instagram.com/css3loaders/"
                  className="button is-light is-small"
                >
                  <i class="fab fa-instagram mr-2"></i>{" "}
                  <span>Follow me on instagram</span>
                </Link>
                <Link
                  to="https://twitter.com/css3loaders"
                  className="button is-info is-small"
                >
                  <i class="fab fa-twitter mr-2"></i>Follow me on twitter
                </Link>
              </div>
            </div>
          </div>
        </div>
      </nav>
    );
  }
}
