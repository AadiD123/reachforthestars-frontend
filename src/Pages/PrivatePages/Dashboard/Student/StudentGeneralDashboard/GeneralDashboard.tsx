import { useEffect, useState } from "react";
import { auth, db } from "../../../../../Backend/Firebase";
import styles from "../../Dashboard.module.css";

export function StudentGeneralDashboard() {
  const [yourTutor, setYourTutor] = useState<any>(null);
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
                    setLoading(false);
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
      <h2>Welcome Students</h2>
      <p>
        Welcome to the Student tab! Here you can find contact info for the tutor
        that is assigned to you!
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
