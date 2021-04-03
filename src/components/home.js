import React, { useEffect } from "react";
import intro from "../assets/images/intro.png";
import scissors from "../assets/images/scissors.png";
import haircuts from "../assets/images/haircut-service.png";
import barber from "../assets/images/barber-service.png";
import colors from "../assets/images/color-service.png";
import lashes from "../assets/images/eyelashes-service.png";
import facial from "../assets/images/facial.png";
import braids from "../assets/images/braids-service.png";
import natural from "../assets/images/natural-service.png";
import nails from "../assets/images/nails-service.png";
import wallet from "../assets/images/wallet.png";
import leaves from "../assets/images/leaves.png";
import bottle from "../assets/images/bottle.png";
import client from "../assets/images/client.png";
import locate from "../assets/images/locate.png";
import appstore from "../assets/images/app.png";
import google from "../assets/images/google.png";
import shopping from "../assets/images/shopping.png";
import navy from "../assets/images/nav.png";
import leaf from "../assets/images/dwn-leaf.png";
import can from "../assets/images/dwn-can.png";

import { TextField } from "@material-ui/core";

import FacebookIcon from "@material-ui/icons/Facebook";
import InstagramIcon from "@material-ui/icons/Instagram";
import PinterestIcon from "@material-ui/icons/Pinterest";
import TwitterIcon from "@material-ui/icons/Twitter";
import { Link } from "react-router-dom";

function Home() {
  const addStickyNav = () => {
    let header = document.getElementById("nav");
    if (header) {
      header.classList.toggle("sticky", window.scrollY > 0);
    }
  };
  useEffect(() => {
    window.addEventListener("scroll", addStickyNav);
    return () => {
      window.removeEventListener("scroll", addStickyNav);
    };
  }, []);

  return (
    <div className="home-page">
      <div className="red-bg">
        <img src={scissors} alt="scissors" />
      </div>
      <nav className="nav" id="nav">
        <ul>
          <li>
            <Link to="/set-up">Barber?</Link>
          </li>
          <li>
            <Link to="/set-up">Beauty Professional?</Link>
          </li>
          <li>
            <Link to="/">COMPANY LOGO</Link>
          </li>
          <li>
            <Link to="/set-up">Set Up My Business</Link>
          </li>
          <li>
            <Link to="/signup">Sign Up</Link>
          </li>
          <li>
            <Link to="/login">Login</Link>
          </li>
        </ul>
      </nav>
      <div className="header">
        <div className="header-1">
          <div className="top">
            <h2>
              DISCOVER &<br /> BOOK{" "}
            </h2>
            <h2 className="beauty">Beauty &</h2>
            <p>Barber Appointments</p>
          </div>

          <Link to="/signup">Get Started</Link>
        </div>

        <div className="header-2">
          <img src={intro} alt="girl smiling" />
        </div>
      </div>
      <div className="step-swagger">
        <h1>STEP</h1>
        <h1 style={{ color: "#605f5f" }}>INTO</h1>
        <h1 className="your">YOUR</h1>
        <h1 className="swag">SWAGGER</h1>
      </div>
      <div className="services">
        <div className="service haircuts right-part ">
          <img src={haircuts} alt="haircut" />
          <h3>HAIRCUTS</h3>
          <button>
            <Link to="/book">Browse</Link>
          </button>
        </div>
        <div className="service barber left-part">
          <img src={barber} alt="barber" />
          <h3>BARBER</h3>
          <button>
            <Link to="/book">Browse</Link>
          </button>
        </div>
        <div className="service color left-part">
          <img src={colors} alt="barber" />
          <h3>COLOR</h3>
          <button>
            <Link to="/book">Browse</Link>
          </button>
        </div>
        <div className="service eyelashes left-part">
          <img src={lashes} alt="barber" />
          <h3>EYELASHES</h3>
          <button>
            <Link to="/book">Browse</Link>
          </button>
        </div>
        <div className="service facials">
          <img src={facial} alt="barber" />
          <h3>FACIALS</h3>
          <button>
            <Link to="/book">Browse</Link>
          </button>
        </div>
        <div className="service braids right-part ">
          <img src={braids} alt="barber" />
          <h3>BRAIDS</h3>
          <button>
            <Link to="/book">Browse</Link>
          </button>
        </div>
        <div className="service natural left-part">
          <img src={natural} alt="barber" />
          <h3>NATURAL</h3>
          <button>
            <Link to="/book">Browse</Link>
          </button>
        </div>
        <div className="service nails left-part">
          <img src={nails} alt="barber" />
          <h3>NAILS</h3>
          <button>
            <Link to="/book">Browse</Link>
          </button>
        </div>
      </div>
      <div className="why">
        <div className="why-title">
          <h3>WHY</h3>
          <h2>US?</h2>
        </div>
        <div className="why-body">
          <div className="why-item">
            <img src={wallet} alt="wallet" />
            <h3>TOP UP YOUR WALLET</h3>
            <p>
              Make deposits to your wallet and view current balances and
              transactions.
            </p>
          </div>
          <div className="why-item">
            <img src={wallet} alt="wallet" />
            <h3>TOP UP YOUR WALLET</h3>
            <p>
              Make deposits to your wallet and view current balances and
              transactions.
            </p>
          </div>
          <div className="why-item">
            <img src={wallet} alt="wallet" />
            <h3>TOP UP YOUR WALLET</h3>
            <p>
              Make deposits to your wallet and view current balances and
              transactions.
            </p>
          </div>
          <div className="why-item">
            <img src={wallet} alt="wallet" />
            <h3>TOP UP YOUR WALLET</h3>
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
        <div className="olive-img">
          <img src={leaves} alt="leaves" id="ol-img-1" />
          <img src={bottle} alt="bottle" id="ol-img-2" />
        </div>
        <div className="olive-shop">
          <h2>PRODUCTS WE DELIVER TO YOU</h2>
          <h3>VISIT OUR SHOP FOR THE BEST HAIR PRODUCTS</h3>
          <Link to="/shop">SHOP NOW</Link>
        </div>
      </div>
      <div className="pro">
        <div className="pro-1">
          <h2>WANT</h2>
          <h2>TO BE </h2>
          <h2 className="pro-1-p">A PRO?</h2>
        </div>
        <div className="pro-2">
          <Link to="/set-up">START BUSINESS</Link>
        </div>
      </div>
      <div className="clients">
        <h2>FROM OUR CLIENTS</h2>
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
      <div className="browse">
        <div className="population">
          <h1>BROWSE POPULAR</h1>
          <p>SERVICES</p>
        </div>
        <div className="locate">
          <div>
            <span>Nairobi</span>
            <img src={locate} alt="location" />
          </div>
        </div>
      </div>
      <div className="download">
        <div className="down-1">
          <p>
            Download our app To discover new Services and providers, Faster.
          </p>
          <div>
            <img src={appstore} alt="apple store" />
            <img src={google} alt="google store" />
          </div>
        </div>
        <div className="down-2">
          <div className="phone-download">
            <div className="phone-bg">
              <header>
                <img src={navy} alt="navigation" />
                <img src={shopping} alt="shopping" />
              </header>
              <div>
                <span>Home</span>
                <span>Featured Products</span>
              </div>
              <p>
                SHOP
                <br />
                BRANDS
              </p>
              <div>
                <img className="dwn-lf" src={leaf} alt="leaf" />
                <img className="dwn-cn" src={can} alt="can" />
              </div>
              <h5>OLIVE OIL</h5>
              <h5>HAIR</h5>
              <h5>POLISHER</h5>
              <h6>$ 25.00</h6>

              <button>ADD TO CART</button>
            </div>
          </div>
        </div>
      </div>
      <footer className="footer">
        <div className="social">
          <div className="ft-bg">
            <TwitterIcon className="twt" />
            <InstagramIcon className="inst" />
            <PinterestIcon className="pin" />
            <FacebookIcon className="fab" />
            <div className="shine"></div>
          </div>
        </div>
        <div className="bio">
          <h3>COMPANY LOGO</h3>
          <h5>
            Company Name here is Comprised of beauty professionals all around
            the country. Clients can Acquire services from the comfortOf their
            home.
          </h5>
        </div>
        <div className="contact">
          <div className="quick">
            <h4>Quick Links</h4>
            <ul>
              <li>
                <Link to="/shop">
                  <h5>Shop</h5>
                </Link>
              </li>
              <li>
                <Link to="/set-up">
                  <h5>Barber?</h5>
                </Link>
              </li>
              <li>
                <Link to="/set-up">
                  <h5>Beauty Professional</h5>
                </Link>
              </li>
            </ul>
          </div>
          <div className="talk">
            <h4>Talk To Us</h4>
            <ul>
              <li>
                <h5>info@companyname.com</h5>
              </li>
              <li>
                <h5>+254 711223344</h5>
              </li>
              <li>
                <h5>Help Centre</h5>
              </li>
            </ul>
          </div>
          <div className="subscribe">
            <h4>FOR LATEST NEWS AND UPDATES</h4>
            <form action="">
              <input type="email" name="email" placeholder="email address" />
              <input type="button" value="subscribe" />
            </form>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default Home;
