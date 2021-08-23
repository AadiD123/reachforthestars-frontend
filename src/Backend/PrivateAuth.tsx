import { Route, Redirect, RouteProps } from "react-router-dom";
import { auth } from "./Firebase";

export default function PrivateRoute({ ...routeProps }: RouteProps) {
  if (auth.currentUser != null) {
    return <Route {...routeProps} />;
  } else {
    return <Redirect to="/login" />;
  }
}
