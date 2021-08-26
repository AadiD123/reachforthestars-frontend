import { useEffect, useState } from "react";
import { auth, db } from "../../../../Backend/Firebase";
import styles from "../Dashboard.module.css";

export default function GeneralDashboard() {
  const [yourTutor, setYourTutor] = useState<any>();

  useEffect(() => {
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
                    setYourTutor({
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
  });

  return (
    <div>
      <h1 className={styles.title}>General Volunteers</h1>
      <p className={styles.paragraph}>
        Welcome to the General Volunteer tab! Here you can find all the things
        you can work on and all materials you will need as a general volunteer!
      </p>
      <div style={{ marginBottom: "10px" }}></div>
      <h1 className={styles.title}>Help Us Get More Students</h1>
      <p className={styles.paragraph}>
        Reach out to ALL the parents you know to help us get more students! Find
        local schools and put their emails on this spreadsheet for us to
        contact.{" "}
      </p>
      <button className={styles.button} style={{ width: "200px" }}>
        Outreach Spreadsheet
      </button>
      <h2>Your Tutor</h2>
      <br></br>
      {yourTutor != null ? (
        <div style={{ display: "flex" }}>
          <div className={styles.studentCard}>
            <h2>{yourTutor.firstName}</h2>
            <p>Email: {yourTutor.key}</p>
            <p>Timezone: {yourTutor.timezone}</p>
          </div>
        </div>
      ) : (
        <div>Loading Students</div>
      )}
    </div>
  );
}
