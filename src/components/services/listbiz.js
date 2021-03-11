import React, { useState } from "react";
import { TextField, ThemeProvider, Checkbox } from "@material-ui/core";
import { theme, useStyles } from "../theme";
import FormControlLabel from "@material-ui/core/FormControlLabel";

function ListBusiness() {
  const classes = useStyles();

  const [checked, setChecked] = useState(false);

  return (
    <div className="list-biz">
      <nav>
        <h2>COMPANYLOGO</h2>
      </nav>
      <div className="list-body">
        <div className="white-bg"></div>
        <div className="list-form">
          <div className="item-1">
            <h2>ADD SERVICE</h2>
            <ThemeProvider theme={theme}>
              <form className="service-form" noValidate autoComplete="on">
                <TextField
                  id="standard-basic"
                  label="Full Names"
                  className="txt"
                  color="primary"
                />
                <TextField
                  id="standard-basic"
                  className="txt"
                  label="Phone Number"
                  type="phone"
                />
                <TextField
                  id="standard-basic"
                  className="txt"
                  label="Email Address"
                  type="text"
                />
                <TextField
                  id="standard-basic"
                  className="txt"
                  label="Password"
                  type="password"
                />

                <TextField
                  id="standard-basic"
                  className="txt"
                  label="Confirm Password"
                  type="password"
                />

                <FormControlLabel
                  control={
                    <Checkbox
                      checked={checked}
                      onChange={() => setChecked(!checked)}
                      inputProps={{ "aria-label": "primary checkbox" }}
                    />
                  }
                  label="Receive notifications on new booking?"
                />
              </form>
            </ThemeProvider>
          </div>
          <div className="sign">
            <div>See facebook</div>
            <section>
              <article>
                <button>SIGN UP</button>
                <p>
                  By signing Up you agree to the terms of service and privacy
                  policy
                </p>
              </article>
              <article>
                <button>LOG IN</button>
                <p>Already Have an account</p>
              </article>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ListBusiness;
