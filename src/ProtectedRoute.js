import React from "react";
import { Route, Redirect } from "react-router-dom";

function ProtectedClientRoute({
  component: Component,
  authDetails: authDetails,
  logout: logout,
  ...rest
}) {
  return (
    <Route
      {...rest}
      render={(props) => {
        if (authDetails.isAuthenticated && authDetails.userType === "client") {
          return <Component logout={logout} />;
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

function ProtectedServiceRoute({
  component: Component,
  authDetails: authDetails,
  logout: logout,
  ...rest
}) {
  return (
    <Route
      {...rest}
      render={(props) => {
        if (authDetails.isAuthenticated && authDetails.userType === "service") {
          return <Component logout={logout} />;
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

export { ProtectedClientRoute, ProtectedServiceRoute };
