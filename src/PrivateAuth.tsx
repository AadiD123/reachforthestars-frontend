<<<<<<< HEAD
=======
import * as React from "react";
>>>>>>> faeea914d8b4d3b38cacf357dd65e0d385ae3988
import { Route, Redirect, RouteProps } from "react-router-dom";

export interface ProtectedRouteProps extends RouteProps {
  isAuthenticated: boolean;
}

export default function PrivateRoute({
  isAuthenticated,
  ...routeProps
}: ProtectedRouteProps) {
  if (isAuthenticated) {
    return <Route {...routeProps} />;
  } else {
    return <Redirect to="/login" />;
  }
}
