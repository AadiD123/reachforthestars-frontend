import { useState } from "react";
import { useEffect } from "react";
import { auth, db } from "../../../../../Backend/Firebase";
import styles from "../../Dashboard.module.css";

export default function GeneralDashboard() {
  const [yourStudent, setYourStudent] = useState<any>();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    auth.onAuthStateChanged(function (user) {
      if (user?.email) {
        db.collection("volunteers")
          .doc(user.email)
          .get()
          .then((doc) => {
            if (doc.exists) {
              if (doc.get("student") != null) {
                db.collection("students")
                  .doc(doc.get("student"))
                  .onSnapshot((studentdoc) => {
                    setYourStudent({
                      key: studentdoc.id,
                      ...studentdoc.data(),
                    });
                  });
              }
            } else {
              console.log("Error getting tutor email");
            }
          })
          .catch((error) => {
            console.log("Error getting document:", error);
          });
      }
    });
    console.log(yourStudent);
  });

  return (
    <div style={{ display: "flex", flexDirection: "column", flexWrap: "wrap" }}>
      <h1>General Volunteers</h1>
      <p>
        Welcome to the General Volunteer tab! Here you can find all the things
        you can work on and all materials you will need as a general volunteer!
      </p>
      <h2>Help Us Get More Students</h2>
      <p>
        Reach out to ALL the parents you know to help us get more students! Find
        local schools and put their emails on this spreadsheet for us to contact
      </p>
      <button
        className="buttonStyle"
        style={{ margin: "0", padding: "10px", maxWidth: "200px" }}
      >
        Outreach Spreadsheet
      </button>
      <br />
      <h2>Your Students</h2>
      {yourStudent != null ? (
        <div style={{ display: "flex" }}>
          <br />
          <div className={styles.studentCard}>
            <h3>{yourStudent.firstName}</h3>

            {yourStudent.parentFirstName !== "" &&
            yourStudent.parentLastName !== "" ? (
              <p>Parent Email: {yourStudent.key}</p>
            ) : (
              <p>Student Email: {yourStudent.key}</p>
            )}

            {yourStudent.parentFirstName !== "" &&
            yourStudent.parentLastName !== "" ? (
              <p>
                {" "}
                Parent Name:{" "}
                {yourStudent.parentFirstName +
                  " " +
                  yourStudent.parentLastName}{" "}
              </p>
            ) : (
              <div />
            )}
            <p>Timezone: {yourStudent.timezone}</p>
          </div>
        </div>
      ) : loading != true ? (
        <div>Loading Students</div>
      ) : (
        <div>Not paired with a student</div>
      )}
    </div>
  );
}
