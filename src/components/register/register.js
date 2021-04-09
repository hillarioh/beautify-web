import React from "react";
import { Switch, Route, Link, useRouteMatch } from "react-router-dom";
import Service from "./service";
import Client from "./client";

function Register() {
  let match = useRouteMatch();
  return (
    <>
      <Switch>
        <Route path={`${match.path}/service`}>
          <Service />
        </Route>
        <Route path={`${match.path}/client`}>
          <Client />
        </Route>
        <Route path={match.path} exact>
          <SignUp />
        </Route>
      </Switch>
    </>
  );
}

function SignUp() {
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
          <h2>Sign Up</h2>
          <button>
            <Link to={`${match.url}/client`}>AS CLIENT</Link>
          </button>
          <button>
            <Link to={`${match.url}/service`}>AS SERVICE PROVIDER</Link>
          </button>
          <Link>
            <h5>Forgot Password?</h5>
          </Link>
        </section>
      </div>
    </div>
  );
}

export default Register;
