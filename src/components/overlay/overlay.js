import React from "react";
import bottle from "../../assets/images/bottle.png";
import leaf from "../../assets/images/leaves.png";
import caution from "../../assets/images/caution.png";
import { TextField, ThemeProvider } from "@material-ui/core";
import Button from "@material-ui/core/Button";
import ImageUpload from "../services/imageUpload";
import sciove from "../../assets/images/scyov.png";

import { theme, useStyles } from "../theme";

const AddService = () => {
  const classes = useStyles();
  return (
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
  );
};

const AddProduct = () => {
  const classes = useStyles();
  return (
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
  );
};
const AddTime = () => {
  const classes = useStyles();
  return (
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
  );
};
const AddImage = () => {
  return (
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
  );
};
const AddProfile = () => {
  return (
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
  );
};
const DelProduct = () => {
  return (
    <div className="item_overlay" id="del_product">
      <div className="item-1 item-4">
        <p>Are you sure you want to delete this product ?</p>
        <button>proceed</button>
      </div>
      <div className="item-2">
        <img src={caution} alt="scissor" />
      </div>
    </div>
  );
};

export { AddService, AddProduct, AddTime, AddImage, AddProfile, DelProduct };
