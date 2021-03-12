import React from "react";
import { Switch, Route, Link, useRouteMatch } from "react-router-dom";
import ServiceLogin from "./servicelogin";
import ClientLogin from "./clientlogin";

function Login() {
  let match = useRouteMatch();
  return (
    <>
      <Switch>
        <Route path={`${match.path}/client`}>
          <ClientLogin />
        </Route>
        <Route path={`${match.path}/service`}>
          <ServiceLogin />
        </Route>
        <Route path={match.path} exact>
          <LogPage />
        </Route>
      </Switch>
    </>
  );
}

function LogPage() {
  let match = useRouteMatch();
  return (
    <div className="client-login">
      <div className="company">
        <div className="first"></div>
        <div className="second"></div>
        <h1>COMPANYLOGO</h1>
      </div>
      <div className="login">
        <section className="lgn">
          <h2>Log In </h2>
          <button>
            <Link to={`${match.url}/client`}>AS CLIENT</Link>
          </button>
          <button>
            <Link to={`${match.url}/service`}>AS SERVICE PROVIDER</Link>
          </button>
          <h4>Forgot Password?</h4>
        </section>
      </div>
    </div>
  );
}

export default Login;
