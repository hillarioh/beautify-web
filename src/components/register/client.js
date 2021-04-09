import React from "react";
import { TextField, ThemeProvider } from "@material-ui/core";
import { theme } from "../theme";
import { Link } from "react-router-dom";

function Client() {
  return (
    <div className="client-login">
      <div className="company">
        <div className="first"></div>
        <div className="second"></div>
        <h1>COMPANYLOGO</h1>
      </div>
      <div className="login">
        <section className="clgn">
          <h3>Sign Up As Client</h3>
          <form className="service-form">
            <label for="first-name">First Name</label>
            <input className="txt" type="text" />
            <label for="last-name">Last Name</label>
            <input className="txt" type="text" />
            <label for="email">Email Address</label>
            <input
              label="Email Address"
              className="txt"
              type="email"
              placeholder="test@test.com"
            />
            <label for="password">Password</label>
            <input label="Password" type="password" className="txt" />
            <label for="password">Confirm Password</label>
            <input label="Password" type="password" className="txt" />
            <button>
              <Link to="/login/client">SIGN UP</Link>
            </button>
          </form>
          <h5>Forgot Password?</h5>
        </section>
      </div>
    </div>
  );
}

export default Client;
