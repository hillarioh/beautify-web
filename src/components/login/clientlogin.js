import React, { useState } from "react";
import { Link, withRouter } from "react-router-dom";
import { useToasts } from "react-toast-notifications";

function ClientLogin() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { addToast } = useToasts();

  const handleValidation = () => {
    let valid = false;
    if (email && password) {
      valid = true;
    }
    return valid;
  };

  const login = () => {
    localStorage.clear();
    localStorage.setItem("token", "129u98ru398rhufiddjvb");
    localStorage.setItem("user", "client");
  };

  const handleLog = (e) => {
    e.preventDefault();
    if (handleValidation()) {
      addToast("Successfully Logged In", {
        appearance: "success",
        autoDismiss: true,
      });
      login();

      setTimeout(() => {
        window.location.href = "/user";
      }, 3000);
    } else {
      addToast("Missing fields", {
        appearance: "error",
        autoDismiss: true,
      });
    }
  };

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
          <div className="service-form">
            <label htmlFor="email">Email Address</label>
            <input
              className="txt"
              type="email"
              value={email}
              placeholder="test@test.com"
              onChange={(e) => setEmail(e.target.value)}
            />
            <label htmlFor="password">Password</label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <input
              type="submit"
              value="LOG IN"
              onClick={(e) => handleLog(e)}
              style={{
                marginTop: "1rem",
                cursor: "pointer",
                background: "#be5050",
              }}
            />
          </div>
          <h5>Forgot Password?</h5>
        </section>
      </div>
    </div>
  );
}

export default ClientLogin;
