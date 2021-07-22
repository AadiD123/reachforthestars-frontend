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
