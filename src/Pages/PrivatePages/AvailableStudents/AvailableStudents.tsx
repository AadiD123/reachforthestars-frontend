import { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import { auth, db } from "../../../Backend/Firebase";

// import styles from "./AvailableStudents.module.css";

export default function AvailableStudents() {
  const [students, setStudents] = useState([]);
  const [loading, setLoading] = useState(true);

  const history = useHistory();

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

  const handleSignOut = () => {
    auth.signOut().then(
      function () {
        console.log("Signed Out");
        history.push("/");
      },
      function (error) {
        console.error("Sign Out Error", error);
      }
    );
  };

  if (loading) {
    return <h1>Loading Available Students</h1>;
  }

  return (
    <div>
      <h1>Available Students:</h1>
      {students.length > 0 ? (
        students.map((student: any) => (
          <div key={student.key}>{student.firstName}</div>
        ))
      ) : (
        <h1>No Students Yet</h1>
      )}
      <div>
        <button onClick={handleSignOut}>Sign out</button>
      </div>
    </div>
  );
}
