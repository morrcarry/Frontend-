import React from "react";
import { Link } from "react-router-dom";
import logo from "../../assets/logo.png";

import "./navbar.css";

const Navbar = () => {
  return (
    <div>
      <nav className="navbar">
        <div className="navbar-logo">
          <img src={logo} alt="Logo" />
        </div>
        <div>
          <ul className="navbar-items">
            <li className="navbar-item">Products</li>
            <li className="navbar-item">Solution</li>
            <li className="navbar-item">Pricing</li>
            <li className="navbar-item">Resource</li>
            <li className="navbar-item">Support</li>
          </ul>
        </div>

        <div className="navbar-buttons">
          <button className="navbar-signin">
            <Link to="/login">Sign In</Link>
          </button>
          <button className="navbar-get-started">Get Started</button>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
