// import * as React from "react";
// import { Route, Redirect } from "react-router-dom";
// import { useAuth } from "./Backend/Contexts/AuthContext";

// export default function PrivateRoute(component: React.Component, ...rest) {
//   const currentUser = useAuth().currentUser;

//   return (
//     <Route
//       {...rest}
//       {(props) => {
//         return currentUser != null ? (
//           <component {...props} />
//         ) : (
//           <Redirect to="/login" />
//         );
//       }}
//     ></Route>
//   );
// }

export {};
