import { Route, Redirect, RouteProps } from "react-router-dom";
import { auth } from "./Backend/Firebase";

export interface ProtectedRouteProps extends RouteProps {
  // isAuthenticated: boolean;
}

export default function PrivateRoute({ ...routeProps }: ProtectedRouteProps) {
  if (auth.currentUser != null) {
    return <Route {...routeProps} />;
  } else {
    return <Redirect to="/login" />;
  }
}
