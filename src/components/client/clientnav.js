import React from "react";
import { Link, useRouteMatch } from "react-router-dom";

function Nav() {
  let match = useRouteMatch();
  return (
    <div className="service-nav">
      <h1>
        <Link to="/user">
          COMPANY<span>LOGO</span>
        </Link>
      </h1>
      <ul>
        <li style={{ background: "#EAE8E8" }}>
          <Link to={`${match.url}`}>PROFILE</Link>
        </li>
        <li>
          <Link to={`${match.url}/wallet`}>WALLET</Link>
        </li>

        <li>
          <Link to={`${match.url}/appointment`}>MY APPOINTMENTS</Link>
        </li>
        <li>
          <Link to={`${match.url}/dashboard`}>LOGOUT</Link>
        </li>
      </ul>
    </div>
  );
}

export default Nav;
