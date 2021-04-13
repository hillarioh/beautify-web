import React from "react";
import { Route, Redirect } from "react-router-dom";

const token = localStorage.getItem("token");
const user = localStorage.getItem("user");

function ProtectedClientRoute({ component: Component, ...rest }) {
  return (
    <Route
      {...rest}
      render={(props) => {
        if (token && user === "client") {
          return <Component type="client" />;
        } else {
          return (
            <Redirect
              to={{
                pathname: "/login/client",
                state: { from: props.location },
              }}
            />
          );
        }
      }}
    />
  );
}

function ProtectedServiceRoute({ component: Component, ...rest }) {
  return (
    <Route
      {...rest}
      render={(props) => {
        if (token && user === "serviceProvider") {
          return <Component type="serviceProvider" />;
        } else {
          return (
            <Redirect
              to={{
                pathname: "/login/service",
                state: { from: props.location },
              }}
            />
          );
        }
      }}
    />
  );
}

function ProtectedRoute({ component: Component, ...rest }) {
  return (
    <Route
      {...rest}
      render={(props) => {
        if (token) {
          return <Component type={user} />;
        } else {
          return (
            <Redirect
              to={{
                pathname: "/login",
                state: { from: props.location },
              }}
            />
          );
        }
      }}
    />
  );
}

export { ProtectedClientRoute, ProtectedServiceRoute, ProtectedRoute };
