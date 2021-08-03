// import React, { useContext, useState, useEffect } from "react";
import { db } from "../Firebase";
// import firebase from "firebase";

export function addStudent(
  firstName: string,
  lastName: string,
  email: string,
  timezone: string,
  role: string,
  grade: number,
  available: boolean
) {
  db.collection("students")
    .doc(email)
    .set({
      firstName: firstName,
      lastName: lastName,
      timezone: timezone,
      role: role,
      grade: grade,
      available: available,
    })
    .then(() => {
      console.log("User info successfully written!");
    })
    .catch((error) => {
      console.error("Error writing document: ", error);
    });
}

export function addTutor(
  firstName: string,
  lastName: string,
  email: string,
  timezone: string,
  role: string
) {
  db.collection("tutors")
    .doc(email)
    .set({})
    .then(() => {
      console.log("User info successfully written!");
    })
    .catch((error) => {
      console.error("Error writing document: ", error);
    });
}

export async function getAllAvailableStudents() {
  // db.collection("students")
  //   .doc(email)
  //   .get()
  //   .then((doc) => {
  //     if (doc.exists) {
  //       console.log("Document data:", doc.data());
  //       return doc.data();
  //     } else {
  //       // doc.data() will be undefined in this case
  //       console.log("No such document!");
  //       return null;
  //     }
  //   })
  //   .catch((error) => {
  //     console.log("Error getting document:", error);
  //     return null;
  //   });
  var availableStudents = new Array();

  db.collection("students")
    .get()
    .then((querySnapshot) => {
      querySnapshot.forEach((doc) => {
        console.log(doc.id, "=>", doc.data());
        availableStudents.push(doc.data());
      });
      return availableStudents;
    })
    .catch((error) => {
      console.log("error getting documents: ", error);
    });
}
