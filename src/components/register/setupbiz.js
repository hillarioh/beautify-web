import React, { useState } from "react";
import { TextField, ThemeProvider, Checkbox } from "@material-ui/core";
import { theme, useStyles } from "../theme";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import { Link } from "react-router-dom";
import FacebookIcon from "@material-ui/icons/Facebook";
import ggl from "../../assets/images/ggl.png";
import axios from "axios";

function ListBusiness() {
  const classes = useStyles();

  const [checked, setChecked] = useState(false);
  const [user, setUser] = useState({});

  return (
    <div className="list-biz">
      <nav>
        <Link to="/">
          <h2>COMPANYLOGO</h2>
        </Link>
      </nav>
      <div className="list-body">
        <div className="white-bg"></div>
        <div className="list-form">
          <div className="item-1">
            <h2>List Your Business</h2>
            <form>
              <div className="form-container">
                <div className="form-element">
                  <label className="" for="grid-first-name">
                    First Name
                  </label>
                  <input className="" type="text" name="first-name" />
                  <p>{}</p>
                </div>
                <div className="form-element">
                  <label className="" for="grid-first-name">
                    Second Name
                  </label>
                  <input className="" type="text" name="first-name" />
                  <p>{}</p>
                </div>
              </div>
              <div className="form-container">
                <div className="form-element">
                  <label className="" for="phone">
                    Phone Number
                  </label>
                  <input type="phone" name="phone" placeholder="0700000000" />
                  <p>{}</p>
                </div>
                <div className="form-element">
                  <label className="" for="grid-email">
                    Email Address
                  </label>
                  <input
                    className=""
                    id="grid-email"
                    type="email"
                    placeholder=""
                  />
                  <p className="">{}</p>
                </div>
              </div>
              <div className="form-container">
                <div className="form-element">
                  <label className="" for="grid-password">
                    Password
                  </label>
                  <input
                    className=""
                    id="grid-password"
                    type="password"
                    placeholder="******************"
                  />
                  <p className="">{}</p>
                </div>

                <div className="form-element">
                  <label className="" for="grid-confirm-password">
                    Confirm Password
                  </label>
                  <input
                    className=""
                    id="grid-confirm-password"
                    type="password"
                    placeholder="******************"
                  />
                  <p className="">{}</p>
                </div>
              </div>
              <div
                className="form-container"
                style={{ paddingLeft: "1rem", alignItems: "center" }}
              >
                <input type="checkbox" />
                <label style={{ marginLeft: "1rem" }}>
                  Send me your newsletter!
                </label>
              </div>
              <div className="form-container">
                <div className="form-sign">
                  <div className="sign">
                    <Link to="/login/service">SIGN UP</Link>
                    <h5>
                      By signing Up you agree to the terms of service and
                      privacy policy
                    </h5>
                  </div>
                  <div className="sign">
                    <Link to="/login/service">LOG IN</Link>
                    <h5>Already Have an account</h5>
                  </div>
                </div>
                <div className="form-service">
                  <Link to="/login/service">
                    <FacebookIcon style={{ marginRight: "0.5rem" }} />
                    <span>continue with Facebook</span>
                  </Link>{" "}
                  <h4>Or</h4>
                  <Link to="/login/service">
                    <img src={ggl} alt="google" />
                    <span>continue with Google</span>
                  </Link>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ListBusiness;
