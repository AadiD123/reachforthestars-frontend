import { useEffect, useState } from "react";
import { useAuth } from "../../../Backend/Contexts/AuthContext";
import { getAllAvailableStudents } from "../../../Backend/db/dbfunctions";
import { db } from "../../../Backend/Firebase";

type StudentData = {
  id: string;
  firstName: string;
  lastName: string;
  timeZone: string;
  grade: number;
  available: boolean;
  role: string;
};

export default function Dashboard() {
  const [students, setStudents] = useState<any[]>([]);

  // const getData = () => {
  //   db.collection("students").onSnapshot((snapshot) => {
  //     const newStudents = snapshot.docs.map((doc) => ({
  //       id: doc.id,
  //       ...doc.data(),
  //     }));
  //     setStudents(newStudents);
  //     console.log(students);
  //   });
  // };

  useEffect(() => {
    db.collection("students").onSnapshot((snapshot) => {
      const newStudents = snapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));

      setStudents(newStudents);
      console.log(students);
    });
  }, []);

  return (
    <div>
      <div>Dashboard</div>
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      {/* <button onClick={getData}> Click to get data </button> */}
      {students != [] ? (
        students.map((student) => {
          <li>
            <li>{student?.id}</li>
            <div>{student?.firstName}</div>
            <div>{student?.lastName}</div>
          </li>;
        })
      ) : (
        // <div>{students[0]?.lastName}</div>
        <div>loading...</div>
      )}
      <ul>
        {students.map((student) => {
          <li>
            <div>{student.id}</div>
          </li>;
        })}
      </ul>
    </div>
  );
}
