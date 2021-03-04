import React from "react";
import intro from "../assets/images/intro.png";
import scissors from "../assets/images/scissors.png";

function Home() {
  return (
    <div className="home-page">
      <div className="red-bg">
        <img src={scissors} alt="scissors" />
      </div>
      <nav>
        <ul>
          <li>Barber?</li>
          <li>Beauty Professional?</li>
          <li>COMPANY LOGO</li>
          <li>Set Up My Business</li>
          <li>Sign Up</li>
          <li>Login</li>
        </ul>
      </nav>
      <div className="header">
        <div className="header-1">
          <p>
            DISCOVER &<br /> BOOK{" "}
          </p>
          <span className="beauty">Beauty &</span>
          <h3>Barber Appointments</h3>

          <button>Get Started</button>
        </div>

        <div className="header-2">
          <img src={intro} alt="girl smiling" />
        </div>
      </div>
      <div className="step-swagger">
        <p className="step">STEP</p>
        <p className="step" style={{ color: "#605f5f" }}>
          INTO
        </p>
        <p className="your">YOUR</p>
        <p className="swag">SWAGGER</p>
      </div>
    </div>
  );
}

export default Home;
