// import React, { useContext, useState, useEffect } from "react";
// import { auth } from "../Firebase";
// import firebase from "firebase";

// interface AuthContextType {
//   currentUser: firebase.User | null;
//   login: Function;
//   signup: ;
//   logout: Function;
//   resetPassword: Function;
// }

// // const AuthContext = React.createContext<AuthContextType>(null);

// const AuthContext = React.createContext<AuthContextType>({
//   currentUser: null,
//   login: () => {},
//   signup: () => {},
//   logout: () => {},
//   resetPassword: () => {},
// });

// export function AuthProvider(children: any) {
//   const [currentUser, setCurrentUser] = useState<firebase.User | null>(null);
//   const [loading, setLoading] = useState(true);

//   AuthContext.signup(email: string, password: string) {
//     console.log("signup clicked in");
//     return auth.createUserWithEmailAndPassword(email, password);
//   }

//   function login(email: string, password: string) {
//     return auth
//       .signInWithEmailAndPassword(email, password)
//       .catch(function (error) {
//         // Handle Errors here.
//         var errorCode = error.code;
//         var errorMessage = error.message;
//         if (errorCode == "auth/weak-password") {
//           alert("The password is too weak.");
//         } else {
//           alert(errorMessage);
//         }
//         console.log(error);
//       });
//   }

//   function logout() {
//     return auth.signOut();
//   }

//   function resetPassword(email: string) {
//     return auth.sendPasswordResetEmail(email);
//   }

//   useEffect(() => {
//     const unsubscribe = auth.onAuthStateChanged((user) => {
//       setCurrentUser(user);
//       setLoading(false);
//     });

//     return unsubscribe;
//   }, []);

//   return (
//     <AuthContext.Provider
//       value={{
//         currentUser: currentUser,
//         login: login,
//         signup: signup,
//         logout: logout,
//         resetPassword: resetPassword,
//       }}
//     >
//       {!loading && children}
//     </AuthContext.Provider>
//   );
// }

export {};
