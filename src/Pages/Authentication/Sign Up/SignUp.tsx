import styles from "./SignUp.module.css";
import Form from "./Form";

function SignUp() {
  // defining the initial state for the form

  return (
    <div className={styles.main} style={{}}>
      <div className={styles.loginBox}>
        <h1>Sign Up</h1>
        <div className={styles.loginButtons}>
          <Form />
        </div>
        <div className={styles.oAuth}>
          <button className={styles.signInWithGoogleButton}>
            <img src="https://www.freepnglogos.com/uploads/google-logo-png/google-logo-png-google-icon-logo-png-transparent-svg-vector-bie-supply-14.png" />
            <span>Sign In With Google</span>
          </button>
        </div>
      </div>
    </div>
  );
}

export default SignUp;
