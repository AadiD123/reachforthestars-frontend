import React, { useRef, useState, MutableRefObject } from "react";
import { useForm } from "./useForm";
import styles from "./Login.module.css";
import { Link, useHistory } from "react-router-dom";
import { useAuth } from "../../../Backend/Contexts/AuthContext.js";

export default function Form() {
  // const initialState = {
  //   email: "",
  //   password: "",
  // };

  const emailRef = useRef();
  const passwordRef = useRef();
  const { login } = useAuth();
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const history = useHistory();

  async function handleSubmit(e) {
    e.preventDefault();

    try {
      setError("");
      setLoading(true);
      console.log("login clicked");
      await login(emailRef.current.value, passwordRef.current.value);
      history.push("/blog");
    } catch {
      setError("Failed to log in");
    }

    setLoading(false);
  }

  // getting the event handlers from our custom hook
  //   const {
  //     onChange,
  //     onSubmit,
  //     formValues: values,
  //   } = useForm(loginUserCallback, initialState);

  // a submit function that will execute upon form submission
  //   async function loginUserCallback() {
  //     // send "values" to database
  //     signInUser(values);
  //   }

  return (
    <form onSubmit={handleSubmit}>
      <input
        name="email"
        id="email"
        type="email"
        placeholder="Email"
        required
        className={styles.typingInput}
        ref={emailRef}
      />

      <input
        name="password"
        id="password"
        type="password"
        placeholder="Password"
        required
        className={styles.typingInput}
        ref={passwordRef}
      />
      <input
        name="rememberMe"
        id="rememberMe"
        type="checkbox"
        className={styles.checkingInput}
      />
      <span className={styles.rememberMe}>Remember Me</span>
      <button disabled={loading} className={styles.submitButton} type="submit">
        Login
      </button>
    </form>
  );
}
