import React, { useContext, useState, useEffect } from "react";
import { auth } from "../Firebase";
import firebase from "firebase";
import {
  addAdmin,
  addStudent,
  addTutor,
  addUsers,
  addStudentParent,
} from "../db/dbfunctions";

interface AuthContextType {
  currentUser: firebase.User | null;
  login: Function;
  signup: Function;
  logout: Function;
  resetPassword: Function;
}

const AuthContext = React.createContext<AuthContextType>({
  currentUser: null,
  login: () => {},
  signup: () => {},
  logout: () => {},
  resetPassword: () => {},
});

export function useAuth() {
  return useContext(AuthContext);
}

export function AuthProvider({ children }: any) {
  const [currentUser, setCurrentUser] = useState<firebase.User | null>(null);
  const [loading, setLoading] = useState(true);

  async function signup(
    firstName: string,
    lastName: string,
    email: string,
    password: string,
    grade: number,
    timezone: string,
    role: string,
    parentFirstName: string | null,
    parentLastName: string | null
  ) {
    console.log("signup clicked in");
    return auth.createUserWithEmailAndPassword(email, password).then(() => {
      addUsers(firstName, lastName, email, role);
      if (role === "volunteer") {
        addTutor(firstName, lastName, email, timezone, role);
      } else if (role === "student") {
        parentFirstName === null || parentLastName === null
          ? addStudent(firstName, lastName, email, timezone, role, grade, true)
          : addStudentParent(
              firstName,
              lastName,
              parentFirstName,
              parentLastName,
              email,
              timezone,
              role,
              grade,
              true
            );
      } else if (role === "admin") {
        addAdmin(firstName, lastName, email, timezone, role);
      }
      localStorage.setItem("useremail", email);
    });
  }

  async function login(email: string, password: string) {
    return auth
      .signInWithEmailAndPassword(email, password)
      .catch(function (error) {
        // Handle Errors here.
        var errorCode = error.code;
        var errorMessage = error.message;
        if (errorCode === "auth/weak-password") {
          alert("The password is too weak.");
        } else {
          alert(errorMessage);
        }
        console.log(error);
      });
  }

  function logout() {
    return auth.signOut();
  }

  async function resetPassword(email: string) {
    return auth
      .sendPasswordResetEmail(email)
      .then(() => {
        return true;
      })
      .catch((error) => {
        console.log(error);
      });
  }

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      setCurrentUser(user);
      setLoading(false);
    });

    return unsubscribe;
  }, []);

  return (
    <AuthContext.Provider
      value={{
        currentUser: currentUser,
        login: login,
        signup: signup,
        logout: logout,
        resetPassword: resetPassword,
      }}
    >
      {!loading && children}
    </AuthContext.Provider>
  );
}
