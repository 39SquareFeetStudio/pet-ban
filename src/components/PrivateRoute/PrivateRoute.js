import React from "react";
import { Route, Navigate, useLocation } from "react-router-dom";

export const PrivateRoute = ({ component, isAuthenticated, ...rest }) => {
  let location = useLocation();
  const routeComponent = (props) => {
    return isAuthenticated ? (
      React.createElement(component, props)
    ) : (
      <Navigate to="/auth" state={{ from: location }} />
    );
  };
  return <Route render={routeComponent} {...rest} />;
};

//v6版本
//{ children }: { children: JSX.Element }
export const RequireAuth = ({ children }) => {
  let location = useLocation();

  if (true) {
    // Redirect them to the /login page, but save the current location they were
    // trying to go to when they were redirected. This allows us to send them
    // along to that page after they login, which is a nicer user experience
    // than dropping them off on the home page.
    return <Navigate to="/auth" state={{ from: location }} />;
  }

  return children;
};
