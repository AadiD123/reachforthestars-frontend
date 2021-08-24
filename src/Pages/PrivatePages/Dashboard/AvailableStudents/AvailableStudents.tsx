import { useState, useRef, MutableRefObject, useEffect } from "react";
import { auth, db } from "../../../../Backend/Firebase";

import styles from "../Dashboard.module.css";

export default function AvailableStudents() {
  const [students, setStudents] = useState([]);
  const [loading, setLoading] = useState(true);
  const [currentUserEmail, setCurrentUserEmail] = useState("");
  const [currentUser, setUser] = useState(null);

  type ClickHandler = (
    studentEmail: string,
    tutorEmail: string
  ) => (e: React.MouseEvent) => void;

  useEffect(() => {
    var availableStudents: any = [];
    db.collection("students")
      .where("available", "==", true)
      .onSnapshot((querySnapshot) => {
        querySnapshot.forEach((doc) => {
          availableStudents.push({ key: doc.id, ...doc.data() });
        });
        setStudents(availableStudents);
        setLoading(false);
      });
  });

  // auth.onAuthStateChanged(function (user) {
  //   if (user?.email) {
  //     setCurrentUserEmail(user.email);
  //     db.collection("users")
  //       .doc(user.email)
  //       .get()
  //       .then((doc) => {
  //         if (doc.exists) {
  //         }
  //       })
  //       .catch((error) => {
  //         console.log("Error getting document:", error);
  //       });
  //   }
  // });

  const connectTutorAndStudent: ClickHandler =
    (studentEmail: string, tutorEmail: string) => (e: any) => {
      e.preventDefault();
      db.collection("students").doc(studentEmail).update({
        available: false,
        tutor: currentUserEmail,
      });

      db.collection("volunteers").doc(tutorEmail).update({
        student: studentEmail,
      });
    };

  return (
    <div style={{ display: "flex" }}>
      {students.length > 0 ? (
        students.map((student: any) => (
          <div key={student.key}>
            <div className={styles.dashCard}>
              <div className="card">
                <div className="card-body">
                  <h1 className="card-title">
                    {student.firstName} {student.lastName}
                  </h1>
                </div>
                <ul className="list-group list-group-flush">
                  <li className="list-group-item">{student.key}</li>
                  <li className="list-group-item">
                    Timezone: {student.timezone}
                  </li>
                </ul>
                <div className="card-body">
                  <button
                    className="buttonStyle"
                    onClick={connectTutorAndStudent(
                      student.key,
                      currentUserEmail
                    )}
                  >
                    Connect
                  </button>
                </div>
              </div>
            </div>
          </div>
        ))
      ) : (
        <h1>No available students</h1>
      )}
    </div>
  );
}
