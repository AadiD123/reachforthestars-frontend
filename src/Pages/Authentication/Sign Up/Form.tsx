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
  const pinRef = useRef() as MutableRefObject<any>;
  const { signup } = useAuth();
  const [loading, setLoading] = useState(false);
  const history = useHistory();

  const [volunteer, setVolunteer] = useState(false);

  async function handleSubmit(e: any) {
    e.preventDefault();
    setLoading(true);
    try {
      if (volunteer != false) {
        if (pinRef.current.value === "1234") {
          await signup(
            firstNameRef.current.value,
            lastNameRef.current.value,
            emailRef.current.value,
            passwordRef.current.value,
            gradeRef.current.value,
            timezoneRef.current.value,
            "volunteer"
          );
          history.push("/dashboard");
        } else {
          alert("Wrong Pin");
        }
      } else {
        await signup(
          firstNameRef.current.value,
          lastNameRef.current.value,
          emailRef.current.value,
          passwordRef.current.value,
          gradeRef.current.value,
          timezoneRef.current.value,
          "student"
        );
        history.push("/student-dashboard");
      }
    } catch (e) {
      alert(e);
    }
    setLoading(false);
  }

  const selectVolunteer = (e: any) => {
    setVolunteer(!volunteer);
  };

  return (
    <div >
    <form style = {{fontSize: 'medium', margin: 0}}onSubmit={handleSubmit}>
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
      <select
        onChange={selectVolunteer}
        required
        name="role"
        id="role"
        className={styles.typingInput}
      >
        <option value="student">Student</option>
        <option value="volunteer">General Volunteer</option>
      </select>
      {volunteer ? (
        <div>
        <input
          name="pin"
          id="pin"
          type="password"
          placeholder="Enter Pin"
          className={styles.typingInput}
          ref={pinRef} 
        />
        {/* <br></br> */}
        </div>
      ) : (
        <div></div>
      )}
      <button disabled={loading} className={styles.submitButton} type="submit">
        Sign Up
      </button>
    </form>
    </div>
  );
}
