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
          <h2>Sign Up As Client</h2>
          <ThemeProvider theme={theme}>
            <form className="service-form" noValidate autoComplete="off">
              <TextField
                id="outline-text-input"
                label="Full Name"
                className="txt"
                autoComplete="off"
                variant="outlined"
                type="text"
                color="primary"
              />
              <TextField
                id="outline-email-input"
                label="Email Address"
                className="txt"
                autoComplete="off"
                variant="outlined"
                type="email"
                placeholder="test@test.com"
                color="primary"
              />
              <TextField
                id="outlined-password-input"
                label="Password"
                type="password"
                autoComplete="off"
                variant="outlined"
                className="txt"
              />
            </form>
          </ThemeProvider>
          <button>
            <Link to="/login/client">SIGN UP</Link>
          </button>
          <h4>Forgot Password?</h4>
        </section>
      </div>
    </div>
  );
}

export default Client;
