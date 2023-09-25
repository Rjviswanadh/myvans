import React from "react";
import { Link } from "react-router-dom";
import "./index.css";
const Header = () => {
  return (
    <>
      <nav className="d-flex justify-content-around header mb-3 bg-info p-3">
        <h1>#VANLIFE</h1>
        <div className="nav-bar">
          <Link className="nav-links" to="/">
            Home
          </Link>
          <Link className="nav-links" to="/login">
            Login
          </Link>
          <Link className="nav-links" to="/vans">
            Vans
          </Link>
          <Link className="nav-links" to="/host">
            Host
          </Link>
        </div>
      </nav>
    </>
  );
};

export default Header;
