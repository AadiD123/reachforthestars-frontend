import styles from "./ForgotPassword.module.css";
import { useAuth } from "../../../Backend/Contexts/AuthContext";
import { useRef, MutableRefObject, useState } from "react";
import { useHistory } from "react-router-dom";

function ForgotPassword() {
  const emailRef = useRef() as MutableRefObject<any>;
  const [loading, setLoading] = useState(false);
  const history = useHistory();
  const auth = useAuth();

  async function handleSubmit(e: any) {
    e.preventDefault();
    setLoading(false);
    auth.resetPassword(emailRef.current.value);
    history.push("/login");
  }

  return (
    <div className="mainContainer">
      <div className={styles.loginBox}>
        <h1>Reset Password</h1>
        <form style={{ fontSize: "medium", margin: 0 }} onSubmit={handleSubmit}>
          <input
            name="email"
            id="email"
            type="email"
            placeholder="Enter account email"
            required
            className={styles.typingInput}
            ref={emailRef}
          />
          <br></br>
          <button
            disabled={loading}
            className={styles.submitButton}
            type="submit"
          >
            Enter Email
          </button>
        </form>
      </div>
    </div>
  );
}

export default ForgotPassword;
