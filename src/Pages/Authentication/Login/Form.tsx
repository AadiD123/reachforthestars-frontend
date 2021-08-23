import { useRef, useState, MutableRefObject } from "react";
import styles from "./Login.module.css";
import { useHistory } from "react-router-dom";
import { useAuth } from "../../../Backend/Contexts/AuthContext";

export default function Form() {
  const emailRef = useRef() as MutableRefObject<any>;
  const passwordRef = useRef() as MutableRefObject<any>;
  const { login } = useAuth();
  const [loading, setLoading] = useState(false);
  const history = useHistory();

  async function handleSubmit(e: any) {
    e.preventDefault();

    try {
      setLoading(true);
      await login(emailRef.current.value, passwordRef.current.value);
      history.push("/dashboard");
    } catch {
      console.log("Failed to log in");
    }
    setLoading(false);
  }

  return (
<<<<<<< HEAD
    <form onSubmit={handleSubmit}>
=======
    <form style = {{fontSize: 'medium', margin: 0}} onSubmit={handleSubmit}>
>>>>>>> 78d80cb2eba5221153e14ca118737983308c17cc
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
<<<<<<< HEAD
=======
      <br></br>
>>>>>>> 78d80cb2eba5221153e14ca118737983308c17cc
      <button disabled={loading} className={styles.submitButton} type="submit">
        Login
      </button>
    </form>
  );
<<<<<<< HEAD
}
=======
  
}
 
>>>>>>> 78d80cb2eba5221153e14ca118737983308c17cc
