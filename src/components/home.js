import React from "react";
import intro from "../assets/images/intro.png";
import scissors from "../assets/images/scissors.png";
import haircuts from "../assets/images/haircut-service.png";
import barber from "../assets/images/barber-service.png";
import colors from "../assets/images/color-service.png";
import lashes from "../assets/images/eyelashes-service.png";
import braids from "../assets/images/braids-service.png";
import natural from "../assets/images/natural-service.png";
import nails from "../assets/images/nails-service.png";
import wallet from "../assets/images/wallet.png";
import leaves from "../assets/images/leaves.png";
import bottle from "../assets/images/bottle.png";
import client from "../assets/images/client.png";

import { Link } from "react-router-dom";

function Home() {
  return (
    <div className="home-page">
      <div className="red-bg">
        <img src={scissors} alt="scissors" />
      </div>
      <nav>
        <ul>
          <li>
            <Link to="/">Barber?</Link>
          </li>
          <li>
            <Link to="/">Beauty Professional?</Link>
          </li>
          <li>
            <Link to="/">COMPANY LOGO</Link>
          </li>
          <li>
            <Link to="/">Set Up My Business</Link>
          </li>
          <li>
            <Link to="/">Sign Up</Link>
          </li>
          <li>
            <Link to="/">Login</Link>
          </li>
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
      <div className="services">
        <div className="service haircuts">
          <img src={haircuts} alt="haircut" />
          <h3>HAIRCUTS</h3>
          <button>Browse</button>
        </div>
        <div className="service barber">
          <img src={barber} alt="barber" />
          <h3>BARBER</h3>
          <button>Browse</button>
        </div>
        <div className="service barber color">
          <img src={colors} alt="barber" />
          <h3>COLOR</h3>
          <button>Browse</button>
        </div>
        <div className="service barber eyelashes">
          <img src={lashes} alt="barber" />
          <h3>EYELASHES</h3>
          <button>Browse</button>
        </div>
        <div className="service haircuts">
          <img src={braids} alt="barber" />
          <h3>BRAIDS</h3>
          <button>Browse</button>
        </div>
        <div className="service barber">
          <img src={natural} alt="barber" />
          <h3>NATURAL</h3>
          <button>Browse</button>
        </div>
        <div className="service barber">
          <img src={nails} alt="barber" />
          <h3>NAILS</h3>
          <button>Browse</button>
        </div>
      </div>
      <div className="why">
        <div className="why-title">
          <h2>WHY</h2>
          <h2>US?</h2>
        </div>
        <div className="why-body">
          <div className="why-item">
            <img src={wallet} alt="wallet" />
            <h2>TOP UP YOUR WALLET</h2>
            <p>
              Make deposits to your wallet and view current balances and
              transactions.
            </p>
          </div>
          <div className="why-item">
            <img src={wallet} alt="wallet" />
            <h2>TOP UP YOUR WALLET</h2>
            <p>
              Make deposits to your wallet and view current balances and
              transactions.
            </p>
          </div>
          <div className="why-item">
            <img src={wallet} alt="wallet" />
            <h2>TOP UP YOUR WALLET</h2>
            <p>
              Make deposits to your wallet and view current balances and
              transactions.
            </p>
          </div>
          <div className="why-item">
            <img src={wallet} alt="wallet" />
            <h2>TOP UP YOUR WALLET</h2>
            <p>
              Make deposits to your wallet and view current balances and
              transactions.
            </p>
          </div>
        </div>
      </div>
      <div className="olive-oil">
        <div className="olive-title">
          <span>OLIVE</span>
          <span>OIL</span>
        </div>
        <img src={leaves} alt="leaves" id="ol-img-1" />
        <img src={bottle} alt="bottle" id="ol-img-2" />

        <div className="olive-shop">
          <h2>PRODUCTS WE DELIVER TO YOU</h2>
          <p>VISIT OUR SHOP FOR THE BEST HAIR PRODUCTS</p>
          <button>SHOP NOW</button>
        </div>
      </div>
      <div className="pro">
        <div className="pro-1">
          <span>WANT</span>
          <span>TO BE </span>
          <span className="pro-1-p">A PRO?</span>
        </div>
        <div className="pro-2">
          <button>START BUSINESS</button>
        </div>
      </div>
      <div className="clients">
        <h1>FROM OUR CLIENTS</h1>
        <div>
          <div className="client-list">
            <div className="client-item">
              <img src={client} alt="client" />
              <p>
                I got the best manicure in quite a long while. I recommend you
                sign up and get proper client services{" "}
              </p>
            </div>
            <div className="client-item">
              <img src={client} alt="client" />
              <p>
                I got the best manicure in quite a long while. I recommend you
                sign up and get proper client services{" "}
              </p>
            </div>
            <div className="client-item">
              <img src={client} alt="client" />
              <p>
                I got the best manicure in quite a long while. I recommend you
                sign up and get proper client services{" "}
              </p>
            </div>
            <div className="client-item">
              <img src={client} alt="client" />
              <p>
                I got the best manicure in quite a long while. I recommend you
                sign up and get proper client services{" "}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
