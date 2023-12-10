import React from "react";
import "bootstrap/dist/css/bootstrap.css";

import { useState } from "react";

function Navbar() {
  const [collapsed, setCollapsed] = useState(true);

  const toggleNavbar = () => {
    setCollapsed(!collapsed);
  };

  return (
    <nav className="navbar navbar-expand-lg navbar-dark fixed-top topbar">
      <div className="container">
        <a className="navbar-brand" href="#">
          The Package
        </a>
        <button
          className="navbar-toggler"
          type="button"
          onClick={toggleNavbar}
          aria-expanded={!collapsed ? "true" : "false"}
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className={`collapse navbar-collapse ${collapsed ? "" : "show"}`}>
          <ul className="navbar-nav ms-auto">
            <li className="nav-item">
              <a className="nav-link" href="./#hero-section">
                Home
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#contact-section">
                Contact
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#skill-section">
                Portfolio
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#about-section">
                About
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
