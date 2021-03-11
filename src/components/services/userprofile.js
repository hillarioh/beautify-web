import React from "react";
import { TextField, ThemeProvider } from "@material-ui/core";
import { theme, useStyles } from "../theme";
import Button from "@material-ui/core/Button";

function UserProfile() {
  const classes = useStyles();
  return (
    <div className="list-biz">
      <nav>
        <h2>COMPANYLOGO</h2>
      </nav>
      <div className="list-body"></div>
      <div className="user-form">
        <div className="item-1">
          <h2>ADD SERVICE</h2>

          <ThemeProvider theme={theme}>
            <form className="service-form" noValidate autoComplete="off">
              <div className="form-1">
                <TextField
                  id="standard-basic"
                  label="First Name"
                  className="txt"
                  color="primary"
                />
                <TextField
                  id="standard-basic"
                  className="txt"
                  label="Last Name"
                />
                <TextField
                  id="standard-basic"
                  className="txt"
                  label="Business Name"
                />
              </div>
              <div className="form-1">
                <TextField
                  id="standard-basic"
                  label="Street Address"
                  className="txt"
                  color="primary"
                />
                <TextField id="standard-basic" className="txt" label="City" />
                <TextField
                  id="standard-basic"
                  className="txt"
                  label="Zip Code"
                />
              </div>
            </form>
            <Button
              variant="contained"
              classes={{
                root: classes.root,
              }}
              color="secondary"
            >
              Save & Continue
            </Button>
          </ThemeProvider>
        </div>
      </div>
    </div>
  );
}

export default UserProfile;
