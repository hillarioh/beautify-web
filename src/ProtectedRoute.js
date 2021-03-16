import React from "react";
import { Route, Redirect } from "react-router-dom";

function ProtectedClientRoute({
  component: Component,
  authDetails,
  logout,
  ...rest
}) {
  return (
    <Route
      {...rest}
      render={(props) => {
        if (authDetails.isAuthenticated && authDetails.userType === "client") {
          return <Component logout={logout} type="client" />;
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
  authDetails,
  logout,
  ...rest
}) {
  return (
    <Route
      {...rest}
      render={(props) => {
        if (
          authDetails.isAuthenticated &&
          authDetails.userType === "serviceProvider"
        ) {
          return <Component logout={logout} type="serviceProvider" />;
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

function ProtectedRoute({
  component: Component,
  authDetails,
  logout,
  ...rest
}) {
  return (
    <Route
      {...rest}
      render={(props) => {
        if (authDetails.isAuthenticated) {
          return <Component logout={logout} type={authDetails.userType} />;
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
