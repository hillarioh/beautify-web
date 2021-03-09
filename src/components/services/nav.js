import React from "react";
import { Link } from "react-router-dom";

function Nav() {
  return (
    <div className="service-nav">
      <h1>
        COMPANY<span>LOGO</span>
      </h1>
      <ul>
        <li style={{ background: "#EAE8E8" }}>
          <Link to="/admin">PROFILE</Link>
        </li>
        <li>
          <Link to="/wallet">WALLET</Link>
        </li>
        <li>
          <Link to="/dashboard">DASHBOARD</Link>
        </li>
        <li>
          <Link to="/appointment">MY APPOINTMENTS</Link>
        </li>
      </ul>
    </div>
  );
}

export default Nav;
