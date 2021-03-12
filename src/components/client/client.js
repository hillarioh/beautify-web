import React from "react";
import { useRouteMatch, Switch, Route } from "react-router-dom";
import Nav from "./clientnav";
import Profile from "./profile";
import Wallet from "./wallet";
import Appointment from "./appointment";

function Logout() {
  return <div>LOGOUT</div>;
}

function Client() {
  let match = useRouteMatch();
  return (
    <div className="client-page">
      <Nav />
      <Switch>
        <Route path={`${match.path}/profile`} component={Profile} />
        <Route path={`${match.path}/wallet`} component={Wallet} />
        <Route path={`${match.path}/appointment`} component={Appointment} />
        <Route path={match.path} component={Profile} />
      </Switch>
    </div>
  );
}

export default Client;
