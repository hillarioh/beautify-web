import React, { useState } from "react";
import { TextField, ThemeProvider, Checkbox } from "@material-ui/core";
import { theme, useStyles } from "../theme";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import { Link } from "react-router-dom";

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
            <form className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
              <h2>List Your Business</h2>
              <div className="flex flex-wrap -mx-3 mb-6">
                <div className="w-full px-3 ">
                  <label
                    className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                    for="grid-first-name"
                  >
                    First Name
                  </label>
                  <input
                    className="appearance-none block w-full bg-gray-200 text-gray-700 border-2  rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
                    id="grid-first-name"
                    type="text"
                    placeholder="Jane"
                  />
                  <p className="text-red-500 text-xs italic">
                    Please fill out this field.
                  </p>
                </div>
              </div>
              <div className="flex flex-wrap -mx-3 mb-6">
                <div className="w-full px-3">
                  <label
                    className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                    for="grid-hone-number"
                  >
                    Phone Number
                  </label>
                  <input
                    className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                    id="grid-phone-number"
                    type="phone"
                    placeholder="0700000000"
                  />
                  <p className="text-gray-600 text-xs italic">{}</p>
                </div>
              </div>
              <div className="flex flex-wrap -mx-3 mb-6">
                <div className="w-full px-3">
                  <label
                    className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                    for="grid-email"
                  >
                    Email Address
                  </label>
                  <input
                    className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                    id="grid-email"
                    type="email"
                    placeholder=""
                  />
                  <p className="text-gray-600 text-xs italic">{}</p>
                </div>
              </div>
              <div className="flex flex-wrap -mx-3 mb-6">
                <div className="w-full px-3">
                  <label
                    className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                    for="grid-password"
                  >
                    Password
                  </label>
                  <input
                    className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                    id="grid-password"
                    type="password"
                    placeholder="******************"
                  />
                  <p className="text-gray-600 text-xs italic">
                    Make it as long and as crazy as you'd like
                  </p>
                </div>
              </div>
              <div className="flex flex-wrap -mx-3 mb-6">
                <div className="w-full px-3">
                  <label
                    className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                    for="grid-confirm-password"
                  >
                    Confirm Password
                  </label>
                  <input
                    className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                    id="grid-confirm-password"
                    type="password"
                    placeholder="******************"
                  />
                  <p className="text-gray-600 text-xs italic">{}</p>
                </div>
              </div>
              <div className="flex -mx-3 mb-6">
                <label className="block text-gray-500 font-bold">
                  <input className="mr-2 leading-tight" type="checkbox" />
                  <span className="text-sm">Send me your newsletter!</span>
                </label>
              </div>
            </form>
          </div>
          <div className="sign">
            <div>See facebook</div>
            <section>
              <article>
                <Link to="/login/service">SIGN UP</Link>
                <p>
                  By signing Up you agree to the terms of service and privacy
                  policy
                </p>
              </article>
              <article>
                <Link to="/login/service">LOG IN</Link>
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
