import React from "react";

import ImageUpload from "./imageUpload";
import ellipse from "../../assets/images/ellipse.png";
import mail from "../../assets/images/mail.png";
import admini from "../../assets/images/admin.png";
import bottle from "../../assets/images/bottle.png";
import leaf from "../../assets/images/leaves.png";
import caution from "../../assets/images/caution.png";
import { TextField, createMuiTheme, ThemeProvider } from "@material-ui/core";
import Button from "@material-ui/core/Button";
import { makeStyles } from "@material-ui/core/styles";
import sciove from "../../assets/images/scyov.png";

const theme = createMuiTheme({
  palette: {
    primary: {
      main: "#be5050",
    },
    secondary: {
      main: "#be5050",
    },
  },
  overrides: {
    MuiInputLabel: {
      root: {
        color: "#bbb8b8",
        fontWeight: "800",

        "&$focused": {
          // increase the specificity for the pseudo class
          color: "#be5050",
          fontWeight: "900",
        },
      },
    },
    MuiInputBase: {
      root: {
        color: "#686464",
        fontWeight: "800",
        "&$focused": {
          // increase the specificity for the pseudo class
        },
      },
    },
  },
});

const useStyles = makeStyles({
  root: {
    padding: "3px 30px",
    marginTop: "1rem",
    alignSelf: "flex-end",
    marginRight: "1rem",
    fontWeight: "800",
  },
});

function Profile() {
  const classes = useStyles();
  return (
    <div className="service-body">
      <div className="user-details">
        <h3>Username</h3>
        <img src={ellipse} alt="ellipse" />
        <img src={mail} alt="mail" />
      </div>
      <div className="service-info">
        <ul className="title-details">
          <li>SERVICES</li>
          <li>REVIEWS</li>
          <li>ABOUT</li>
        </ul>
        <div className="title-body"></div>
        <div className="prof-details">
          <img src={admini} alt="profile " />
          <h3>CASTORIS BABERSHOP</h3>
          <h5>PROFESSIONAL</h5>
          <p>STARS</p>
          <button>Message</button>
          <h4>BUSINESS HOURS</h4>
          <div className="biz-time">
            <ul>
              <li>SUN:</li>
              <li>MON:</li>
              <li>TUE:</li>
              <li>WED:</li>
              <li>THUR:</li>
              <li>FRI:</li>
              <li>SAT:</li>
            </ul>
            <ul>
              <li className="time">9AM -2PM</li>
              <li className="time">9AM -2PM</li>
              <li className="time">9AM -2PM</li>
              <li className="time">9AM -2PM</li>
              <li className="time">9AM -2PM</li>
              <li className="time">9AM -2PM</li>
              <li className="time">9AM -2PM</li>
            </ul>
          </div>
        </div>
        <div className="map-details"></div>
      </div>
      <div className="item_overlay" id="add_service">
        <div className="item-1">
          <h2>ADD SERVICE</h2>
          <ThemeProvider theme={theme}>
            <form className="service-form" noValidate autoComplete="off">
              <TextField
                id="standard-basic"
                label="Service Name"
                className="txt"
                color="primary"
              />
              <TextField
                id="standard-basic"
                className="txt"
                label="Description"
              />
              <TextField
                id="standard-basic"
                className="txt"
                type="number"
                label="Charge"
              />
              <TextField
                id="standard-basic"
                className="txt"
                label="Duration of Service"
              />
            </form>
            <Button
              variant="contained"
              classes={{
                root: classes.root,
              }}
              color="secondary"
            >
              Save
            </Button>
          </ThemeProvider>
        </div>
        <div className="item-2">
          <img src={sciove} alt="scissor" className="img-ov" />
        </div>
      </div>
      <div className="item_overlay" id="add_product">
        <div className="item-1">
          <h2>ADD PRODUCT</h2>
          <ThemeProvider theme={theme}>
            <form className="service-form" noValidate autoComplete="off">
              <TextField
                id="standard-basic"
                label="Product Name"
                className="txt"
                color="primary"
              />
              <TextField
                id="standard-basic"
                className="txt"
                label="Description"
              />
              <TextField
                id="standard-basic"
                className="txt"
                type="number"
                label="Price"
              />
            </form>
            <Button
              variant="contained"
              classes={{
                root: classes.root,
              }}
              color="secondary"
            >
              Save
            </Button>
          </ThemeProvider>
        </div>
        <div className="item-3">
          <img src={leaf} alt="scissor" />
          <img src={bottle} alt="bottle" />
        </div>
      </div>
      <div className="item_overlay" id="add_time">
        <div className="item-1 biz-hours">
          <h2>BUSINESS HOURS</h2>
          <ThemeProvider theme={theme}>
            <form className="hour-form" noValidate autoComplete="off">
              <div className="biz-tym">
                <span>Monday</span>
                <div>
                  <TextField id="standard-basic" type="time" />
                  <span>to</span>
                  <TextField id="standard-basic" type="time" />
                </div>
              </div>
              <div className="biz-tym">
                <span>Tuesday</span>
                <div>
                  <TextField id="standard-basic" type="time" />
                  <span>to</span>
                  <TextField id="standard-basic" type="time" />
                </div>
              </div>
              <div className="biz-tym">
                <span>Wednesday</span>
                <div>
                  <TextField id="standard-basic" type="time" />
                  <span>to</span>
                  <TextField id="standard-basic" type="time" />
                </div>
              </div>
              <div className="biz-tym">
                <span>Thursday</span>
                <div>
                  <TextField id="standard-basic" type="time" />
                  <span>to</span>
                  <TextField id="standard-basic" type="time" />
                </div>
              </div>
              <div className="biz-tym">
                <span>Friday</span>
                <div>
                  <TextField id="standard-basic" type="time" />
                  <span>to</span>
                  <TextField id="standard-basic" type="time" />
                </div>
              </div>
              <div className="biz-tym">
                <span>Saturday</span>
                <div>
                  <TextField id="standard-basic" type="time" />
                  <span>to</span>
                  <TextField id="standard-basic" type="time" />
                </div>
              </div>
              <div className="biz-tym">
                <span>Sunday</span>
                <div>
                  <TextField id="standard-basic" type="time" />
                  <span>to</span>
                  <TextField id="standard-basic" type="time" />
                </div>
              </div>
            </form>
            <Button
              variant="contained"
              classes={{
                root: classes.root,
              }}
              color="secondary"
            >
              Save
            </Button>
          </ThemeProvider>
        </div>
        <div className="item-2">
          <img src={sciove} alt="scissor" />
        </div>
      </div>
      <div className="item_overlay" id="add_image">
        <div className="item-1 biz-hours">
          <h2>ADD IMAGES</h2>
          <div className="imgadd">
            <ImageUpload />
          </div>
        </div>
        <div className="item-2">
          <img src={sciove} alt="scissor" />
        </div>
      </div>
      <div className="item_overlay" id="add_profile">
        <div className="item-1 biz-hours">
          <h2>ADD PROFILE</h2>
          <div className="imgadd">
            <ImageUpload />
          </div>
        </div>
        <div className="item-2">
          <img src={sciove} alt="scissor" />
        </div>
      </div>
      <div className="item_overlay" id="del_product">
        <div className="item-1 item-4">
          <p>Are you sure you want to delete this product ?</p>
          <button>proceed</button>
        </div>
        <div className="item-2">
          <img src={caution} alt="scissor" />
        </div>
      </div>
    </div>
  );
}

export default Profile;
