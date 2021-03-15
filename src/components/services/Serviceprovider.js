import React from "react";
import { useRouteMatch, Switch, Route } from "react-router-dom";
import Profile from "./profile";
import Nav from "./nav";
import Dashboard from "./dashboard";
import Wallet from "./wallet";
import Appointment from "./appointment";

function ServiceProvider() {
  let match = useRouteMatch();
  return (
    <div className="service-page">
      <Nav />
      <Switch>
        <Route path={`${match.path}/profile`} component={Profile} />
        <Route path={`${match.path}/dashboard`} component={Dashboard} />
        <Route path={`${match.path}/wallet`} component={Wallet} />
        <Route path={`${match.path}/appointment`} component={Appointment} />
        <Route path={match.path} component={Profile} />
      </Switch>
    </div>
  );
}

export default ServiceProvider;
