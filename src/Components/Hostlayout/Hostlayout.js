import React from "react";
import { Outlet, Link, NavLink } from "react-router-dom";
import "./index.css";
const Hostlayout = () => {
  return (
    <div>
      <div className="d-flex justify-content-around">
        <Link className="nav-links" to="/host">
          Dashboard
        </Link>
        <NavLink className="nav-links" to="income">
          Income
        </NavLink>
        <NavLink className="nav-links" to="vans">
          Vans
        </NavLink>

        <Link className="nav-links" to="reviews">
          Reviews
        </Link>
      </div>
      <Outlet />
    </div>
  );
};

export default Hostlayout;
