import React, { useState } from "react";
import { TextField, ThemeProvider } from "@material-ui/core";
import { theme } from "../theme";
import { Link } from "react-router-dom";

function ClientLogin() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  return (
    <div className="client-login">
      <div className="company">
        <div className="first"></div>
        <div className="second"></div>
        <h1>COMPANYLOGO</h1>
      </div>
      <div className="login">
        <section className="clgn">
          <h3>Log in As a Client</h3>
          <form className="service-form">
            <label for="email">Email Address</label>
            <input
              label="Email Address"
              className="txt"
              type="email"
              value={email}
              placeholder="test@test.com"
              onChange={(e) => setEmail(e.target.value)}
            />
            <label for="password">Password</label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <button style={{ marginTop: "1rem" }}>
              <Link to="/user">LOG IN</Link>
            </button>
          </form>
          <h5>Forgot Password?</h5>
        </section>
      </div>
    </div>
  );
}

export default ClientLogin;
