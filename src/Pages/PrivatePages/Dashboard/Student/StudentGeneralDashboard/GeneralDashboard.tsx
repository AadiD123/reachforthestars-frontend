import { useEffect, useState } from "react";
import { auth, db } from "../../../../../Backend/Firebase";
import styles from "../../Dashboard.module.css";

export function StudentGeneralDashboard() {
  const [yourTutor, setYourTutor] = useState<any>();
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
    setLoading(false);
  });

  return (
    <div>
      <h2>Welcome Students</h2>
      <p>
        Welcome to the General Volunteer tab! Here you can find all the things
        you can work on and all materials you will need as a general volunteer!
      </p>
      <div style={{ marginBottom: "10px" }}></div>
      <h2>Your Tutor</h2>
      {yourTutor != null ? (
        <div style={{ display: "flex" }}>
          <div className={styles.studentCard}>
            <h2>{yourTutor.firstName}</h2>
            <p>Email: {yourTutor.key}</p>
            <p>Timezone: {yourTutor.timezone}</p>
          </div>
        </div>
      ) : loading != true ? (
        <div>Loading your tutor</div>
      ) : (
        <div>You haven't been picked by a tutor yet!</div>
      )}
    </div>
  );
}
