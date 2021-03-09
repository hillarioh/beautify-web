import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Profile from "./profile";
import Nav from "./nav";
import Dashboard from "./dashboard";
import Wallet from "./wallet";
import Appointment from "./appointment";

function Admin() {
  return (
    <Router>
      <div className="service-page">
        <Nav />
        <Switch>
          <Route path="/admin" exact component={Profile} />
          <Route path="/dashboard" exact component={Dashboard} />
          <Route path="/wallet" component={Wallet} />
          <Route path="/appointment" exact component={Appointment} />
        </Switch>
      </div>
    </Router>
  );
}

export default Admin;
