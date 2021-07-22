import React, { useContext, useState, useEffect } from "react";
import { auth, db } from "../Firebase";
import firebase from "firebase";

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

export function readUserData(uid: any) {
  db.collection("users").doc(uid);
}
