import styles from "./SignUp.module.css";
import Form from "./Form";

function SignUp() {
  return (
    <div className="mainContainer">
      <div className={styles.signUpBox}>
        <h1>Sign Up</h1>
        <Form />
      </div>
    </div>
  );
}

export default SignUp;
