import React, { useState } from "react";
import { useToasts } from "react-toast-notifications";

function Servicelogin() {
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
    localStorage.setItem("user", "serviceProvider");
  };

  const handleLogin = (e) => {
    e.preventDefault();
    if (handleValidation()) {
      addToast("Successfully Logged In", {
        appearance: "success",
        autoDismiss: true,
      });
      login();

      setTimeout(() => {
        window.location.href = "/service-provider";
      }, 2500);
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
          <h3>Log in As Service Provider</h3>
          <form className="service-form">
            <label>Email Address</label>
            <input
              className="txt"
              type="email"
              value={email}
              placeholder="test@test.com"
              onChange={(e) => setEmail(e.target.value)}
            />
            <label>Password</label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <button
              style={{ marginTop: "1rem", cursor: "pointer" }}
              onClick={(e) => handleLogin(e)}
            >
              Log In
            </button>
          </form>
          <h5>Forgot Password?</h5>
        </section>
      </div>
    </div>
  );
}

export default Servicelogin;
