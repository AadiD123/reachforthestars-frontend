import { useRef, useState, MutableRefObject } from "react";
import styles from "./SignUp.module.css";
import { useHistory } from "react-router-dom";
import { useAuth } from "../../../Backend/Contexts/AuthContext";

export default function Form() {
  const firstNameRef = useRef() as MutableRefObject<any>;
  const lastNameRef = useRef() as MutableRefObject<any>;
  const gradeRef = useRef() as MutableRefObject<any>;
  const timezoneRef = useRef() as MutableRefObject<any>;
  const emailRef = useRef() as MutableRefObject<any>;
  const passwordRef = useRef() as MutableRefObject<any>;
  const { signup } = useAuth();
  const [loading, setLoading] = useState(false);
  const history = useHistory();

  async function handleSubmit(e: any) {
    e.preventDefault();

    try {
      setLoading(true);
      await signup(
        firstNameRef.current.value,
        lastNameRef.current.value,
        emailRef.current.value,
        passwordRef.current.value,
        gradeRef.current.value,
        timezoneRef.current.value,
        "student"
      );
      history.push("/dashboard");
    } catch {
      console.log("Failed to sign up");
    }
    setLoading(false);
  }

  return (
    <form onSubmit={handleSubmit}>
      <input
        name="firstName"
        id="firstName"
        type="string"
        placeholder="First Name"
        required
        className={styles.typingInput}
        ref={firstNameRef}
      />
      <input
        name="lastName"
        id="lastName"
        type="string"
        placeholder="Last Name"
        required
        className={styles.typingInput}
        ref={lastNameRef}
      />
      <input
        name="grade"
        id="grade"
        type="number"
        placeholder="Grade"
        required
        className={styles.typingInput}
        ref={gradeRef}
      />
      <input
        name="timezone"
        id="timezone"
        type="timezone"
        placeholder="Timezone"
        required
        className={styles.typingInput}
        ref={timezoneRef}
      />
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
      <button disabled={loading} className={styles.submitButton} type="submit">
        Sign Up
      </button>
    </form>
  );
}
