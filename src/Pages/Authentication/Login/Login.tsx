import styles from "./Login.module.css";
import Form from "./Form";

function Login() {
  return (
    <div className="mainContainer">
      <div className={styles.loginBox}>
        <h1>Login</h1>
        <Form />
      </div>
    </div>
  );
}

export default Login;
