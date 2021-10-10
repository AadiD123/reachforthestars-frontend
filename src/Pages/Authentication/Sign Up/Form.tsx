import { useRef, useState, MutableRefObject } from "react";
import styles from "./SignUp.module.css";
import { useHistory } from "react-router-dom";
import { useAuth } from "../../../Backend/Contexts/AuthContext";
import TimezoneSelect from "react-timezone-select";

const timezones = [
  "GMT",
  "UTC",
  "ECT",
  "EET",
  "ART",
  "EAT",
  "MET",
  "NET",
  "PLT",
  "IST",
  "BST",
  "VST",
  "CTT",
  "JST",
  "ACT",
  "AET",
  "SST",
  "NST",
  "MIT",
  "HST",
  "AST",
  "PST",
  "PNT",
];

export default function Form() {
  const firstNameRef = useRef() as MutableRefObject<any>;
  const lastNameRef = useRef() as MutableRefObject<any>;
  const gradeRef = useRef() as MutableRefObject<any>;
  const [selectedTimezone, setSelectedTimezone] = useState("");
  const emailRef = useRef() as MutableRefObject<any>;
  const firstNameRefParent = useRef() as MutableRefObject<any>;
  const lastNameRefParent = useRef() as MutableRefObject<any>;
  const passwordRef = useRef() as MutableRefObject<any>;
  const subjectsRef = useRef() as MutableRefObject<any>;
  const pinRef = useRef() as MutableRefObject<any>;
  const { signup } = useAuth();
  const [loading, setLoading] = useState(false);
  const history = useHistory();

  const [volunteer, setVolunteer] = useState(false);
  const [parentEmailPlaceholder, setParentEmailPlaceholder] = useState("Email");

  async function handleSubmit(e: any) {
    e.preventDefault();
    setLoading(true);
    try {
      if (volunteer !== false) {
        if (pinRef.current.value === "1234") {
          await signup(
            firstNameRef.current.value,
            lastNameRef.current.value,
            emailRef.current.value,
            passwordRef.current.value,
            gradeRef.current.value,
            selectedTimezone,
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
          selectedTimezone,
          "student",
          firstNameRefParent.current.value,
          lastNameRefParent.current.value,
          subjectsRef.current.value
        );
        history.push("/dashboard");
      }
    } catch (e) {
      alert(e);
    }
    setLoading(false);
  }

  const selectVolunteer = (e: any) => {
    setVolunteer(!volunteer);
  };

  function checkInput() {
    if (document.getElementById("grade") != null) {
      var elem = document.getElementById("grade");
      if (elem != null) {
        let x = Number((elem as HTMLInputElement).value);
        console.log(x);
        if (x <= 8) {
          setParentEmailPlaceholder("Parent Email");
          if (document.getElementById("parentFirstName") != null) {
            let pElem2 = document.getElementById(
              "parentFirstName"
            ) as HTMLInputElement;
            if (pElem2 != null) {
              pElem2.style.display = "block";
              pElem2.required = true;
            }
          }
          if (document.getElementById("parentLastName") != null) {
            let pElem2 = document.getElementById(
              "parentLastName"
            ) as HTMLInputElement;
            if (pElem2 != null) {
              pElem2.style.display = "block";
              pElem2.required = true;
            }
          }
        }
        if (x > 8) {
          setParentEmailPlaceholder("Email");

          if (document.getElementById("parentFirstName") != null) {
            var pElem2 = document.getElementById(
              "parentFirstName"
            ) as HTMLInputElement;
            if (pElem2 != null) {
              pElem2.style.display = "none";
              pElem2.required = false;
            }
          }
          if (document.getElementById("parentLastName") != null) {
            var pElem2 = document.getElementById(
              "parentLastName"
            ) as HTMLInputElement;
            if (pElem2 != null) {
              pElem2.style.display = "none";
              pElem2.required = false;
            }
          }
        }
      }
    }
  }

  return (
    <div>
      <form
        style={{
          fontSize: "small",
          margin: 0,
          textAlign: "center",
          marginTop: "30px",
          padding: "30px",
        }}
        onSubmit={handleSubmit}
        className={styles.forms}
      >
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
          onBlur={checkInput}
          name="grade"
          id="grade"
          type="number"
          placeholder="Grade"
          required
          className={styles.typingInput}
          ref={gradeRef}
        />
        <TimezoneSelect
          value={selectedTimezone}
          onChange={setSelectedTimezone}
        />
        <input
          style={{ display: "none" }}
          onBlur={checkInput}
          name="parentFirstName"
          id="parentFirstName"
          type="text"
          placeholder="Parent First Name"
          className={styles.typingInput}
          ref={firstNameRefParent}
        />
        <input
          style={{ display: "none" }}
          onBlur={checkInput}
          name="parentLastName"
          id="parentLastName"
          type="text"
          placeholder="Parent Last Name"
          className={styles.typingInput}
          ref={lastNameRefParent}
        />
        <input
          name="email"
          id="email"
          type="email"
          placeholder={parentEmailPlaceholder}
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
          style={{ width: "100%" }}
        >
          <option value="member">Member</option>
          <option value="volunteer">Volunteer</option>
        </select>
        {volunteer ? (
          <div>
            <input
              name="pin"
              id="pin"
              type="password"
              placeholder="Enter Volunteer Pin"
              className={styles.typingInput}
              ref={pinRef}
              style={{ width: "100%" }}
            />
          </div>
        ) : (
          <div>
            <input
              name="subjects"
              id="subjects"
              type="text"
              placeholder="Enter subjects you want to be tutored in"
              className={styles.typingInput}
              required
              ref={subjectsRef}
              style={{ width: "100%" }}
            />
          </div>
        )}

        <button
          disabled={loading}
          className={styles.submitButton}
          type="submit"
          style={{ marginLeft: "85%" }}
        >
          Sign Up
        </button>
      </form>
    </div>
  );
}
