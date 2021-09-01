import { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import { auth, db } from "../../../../../Backend/Firebase";

import styles from "../../Dashboard.module.css";

export default function AvailableStudents() {
  const [students, setStudents] = useState([]);
  const [loading, setLoading] = useState(true);
  const [currentUserEmail, setCurrentUserEmail] = useState("");
  const history = useHistory();

  type ClickHandler = (
    studentEmail: string,
    tutorEmail: string
  ) => (e: React.MouseEvent) => void;

  useEffect(() => {
    setLoading(true);
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

  auth.onAuthStateChanged(function (user) {
    if (user?.email) {
      setCurrentUserEmail(user.email);
      console.log(currentUserEmail);
    }
  });

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
      history.push("/dashboard");
    };

  if (loading) {
    <div style={{ display: "flex" }}>
      <h3>Loading Students</h3>
    </div>;
  }

  return (
    <div style={{ display: "flex", flexWrap: "wrap" }}>
      {students.length > 0 ? (
        students.map((student: any) => (
          <div key={student.key}>
            <div className={styles.dashCard}>
              <div className="card" style={{ width: "25em" }}>
                <div className="card-body">
                  <h1 className="card-title">
                    {student.firstName} {student.lastName}
                  </h1>
                </div>
                <ul className="list-group list-group-flush">
                  {student.parentFirstName !== "" &&
                  student.parentLastName !== "" ? (
                    <li className="list-group-item">
                      {" "}
                      Parent Email: {student.key}
                    </li>
                  ) : (
                    <li className="list-group-item">
                      {" "}
                      Student Email: {student.key}
                    </li>
                  )}

                  {student.parentFirstName !== "" &&
                  student.parentLastName !== "" ? (
                    <li className="list-group-item">
                      Parent Name:{" "}
                      {student.parentFirstName + " " + student.parentLastName}
                    </li>
                  ) : (
                    <div />
                  )}
                  <li className="list-group-item">Grade: {student.grade}</li>
                  <li className="list-group-item">
                    Timezone: {student.timezone}
                  </li>
                  <li className="list-group-item">
                    Subjects: {student.subjects}
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
