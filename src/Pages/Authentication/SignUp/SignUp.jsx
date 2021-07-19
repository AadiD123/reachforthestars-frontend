import { useRef, useState } from "react";
import styles from "../Login/Login.module.css";
import { useHistory } from "react-router-dom";
import { useAuth } from "../../../Backend/Contexts/AuthContext";

export default function SignUp() {
  const emailRef = useRef();
  const passwordRef = useRef();
  const passwordConfirmRef = useRef();
  const { signup } = useAuth();
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const history = useHistory();

  async function handleSubmit(e) {
    e.preventDefault();

    if (passwordRef.current.value !== passwordConfirmRef.current.value) {
      return setError("Passwords do not match");
    }

    try {
      setError("");
      setLoading(true);
      await signup(emailRef.current.value, passwordRef.current.value);
      history.push("/");
    } catch (err) {
      setError(err.message);
    }

    setLoading(false);
  }

  return (
    <form onSubmit={handleSubmit}>
      <input
        name="email"
        id="email"
        type="email"
        placeholder="Email"
        required
        className={styles.typingInput}
      />

      <input
        name="password"
        id="password"
        type="password"
        placeholder="Password"
        required
        className={styles.typingInput}
      />
      <input
        name="rememberMe"
        id="rememberMe"
        type="checkbox"
        className={styles.checkingInput}
      />
      <span className={styles.rememberMe}>Remember Me</span>
      <button className={styles.submitButton} type="submit">
        Login
      </button>
    </form>
  );
}
