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
  const nameRefParent = useRef() as MutableRefObject<any>;
  const emailRefParent = useRef() as MutableRefObject<any>;
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
      if (volunteer !== false) {
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

  function checkInput(){
    if(document.getElementById("grade") != null){
      var elem = document.getElementById("grade");
      if(elem!=null){
        var x = Number((elem as HTMLInputElement).value);
        console.log(x);
        if(x<8){
          console.log("bruh");
          if(document.getElementById("parentEmail") != null){
            var pElem = document.getElementById("parentEmail");
            if(pElem!=null){
              pElem.style.display = "block";
              if(document.getElementById("parentName") != null){
                var pElem2 = document.getElementById("parentName");
                if(pElem2!=null){
                  pElem2.style.display = "block";
                }
              }
            }
          }
        }
        if(x>=8){
          console.log("bruh");
          if(document.getElementById("parentEmail") != null){
            var pElem = document.getElementById("parentEmail");
            if(pElem!=null){
              pElem.style.display = "none";
              if(document.getElementById("parentName") != null){
                var pElem2 = document.getElementById("parentName");
                if(pElem2!=null){
                  pElem2.style.display = "none";
                }
              }
            }
          }
        }
      }
    }
  }

  return (
    <div>
      <form style={{ fontSize: "medium", margin: 0,  textAlign:"center", marginTop:"30px", padding:"30px"  }} onSubmit={handleSubmit} className={styles.forms}>
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
          onBlur = {checkInput}
          name="grade"
          id="grade"
          type="number"
          placeholder="Grade"
          required
          className={styles.typingInput}
          ref={gradeRef}
        />
         <input
          style={{display :"none"}}
          onBlur = {checkInput}
          name="parentName"
          id="parentName"
          type="text"
          placeholder="Parent Name"
          required
          className={styles.typingInput}
          ref = {nameRefParent}
        />
         <input
          style={{display:"none"}}
          name="parentEmail"
          id="parentEmail"
          type="email"
          placeholder="Parent Email"
          required
          className={styles.typingInput}
          ref = {emailRefParent}
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
          style={{marginLeft:"43%", width:"120%"}}
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
        <button
          disabled={loading}
          className={styles.submitButton}
          type="submit"
          style = {{marginLeft: "85%"}}
        >
          Sign Up
        </button>
      </form>
    </div>
  );
}
