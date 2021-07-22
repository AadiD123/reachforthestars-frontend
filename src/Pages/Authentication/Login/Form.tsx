import { useRef, useState, MutableRefObject } from "react";
import styles from "./Login.module.css";
import { useHistory } from "react-router-dom";
import { useAuth } from "../../../Backend/Contexts/AuthContext";

export default function Form() {
  const emailRef = useRef() as MutableRefObject<any>;
  const passwordRef = useRef() as MutableRefObject<any>;
  const { login } = useAuth();
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const history = useHistory();

  async function handleSubmit(e: any) {
    e.preventDefault();

    try {
      setError("");
      setLoading(true);
      await login(emailRef.current.value, passwordRef.current.value);
      history.push("/blog");
    } catch {
      setError("Failed to log in");
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
