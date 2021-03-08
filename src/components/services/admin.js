import React from "react";
import ellipse from "../../assets/images/ellipse.png";
import mail from "../../assets/images/mail.png";
import admini from "../../assets/images/admin.png";
import { TextField, createMuiTheme, ThemeProvider } from "@material-ui/core";
import Button from "@material-ui/core/Button";
import { makeStyles } from "@material-ui/core/styles";

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
        color: "#e6e1e1",
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
    padding: "6px 30px",
    marginTop: "1rem",
    alignSelf: "flex-end",
  },
});

function Admin() {
  const classes = useStyles();
  return (
    <>
      <div className="service-page">
        <div className="service-nav">
          <h1>
            COMPANY<span>LOGO</span>
          </h1>
          <ul>
            <li style={{ background: "#EAE8E8" }}>PROFILE</li>
            <li>WALLET</li>
            <li>MY APPOINTMENTS</li>
            <li>LOGOUT</li>
          </ul>
        </div>
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
        </div>
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
        <div className="item-2"></div>
      </div>
      <div className="item_overlay" id="add_product">
        ADD SERVICE
      </div>
      <div className="item_overlay" id="add_time">
        ADD SERVICE
      </div>
      <div className="item_overlay" id="add_image">
        ADD SERVICE
      </div>
      <div className="item_overlay" id="add_profile">
        ADD SERVICE
      </div>
      <div className="item_overlay" id="del_product">
        ADD SERVICE
      </div>
    </>
  );
}

export default Admin;
