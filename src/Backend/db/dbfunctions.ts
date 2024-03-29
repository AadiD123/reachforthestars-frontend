import { db } from "../Firebase";
import firebase from "firebase";

export function addBlog(
  author: string,
  date: string,
  title: string,
  content: HTMLCollection,
  image: string
) {
  db.collection("blogs")
    .doc()
    .set({
      author: author,
      date: date,
      title: title,
      content: content,
      image: image,
    })
    .then(() => {
      console.log("Blog info successfully written!");
    })
    .catch((error) => {
      console.error("Error writing document: ", error);
    });
}
export async function getBlog(id: string) {
  db.collection("blogs")
    .doc(id)
    .get()
    .then((doc) => {
      if (doc.exists) {
        return doc.data();
      } else {
        // doc.data() will be undefined in this case
        console.log("No such document!");
      }
    })
    .catch((error) => {
      console.log("Error getting document:", error);
    });
}

export function addStudent(
  firstName: string,
  lastName: string,
  email: string,
  timezone: string,
  role: string,
  grade: number,
  subjects: string,
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
      subjects: subjects,
      available: available,
    })
    .then(() => {
      console.log("User info successfully written!");
    })
    .catch((error) => {
      console.error("Error writing document: ", error);
    });
}

export function addStudentParent(
  firstName: string,
  lastName: string,
  parentFirstName: string,
  parentLastName: string,
  email: string,
  timezone: string,
  role: string,
  grade: number,
  subjects: string,
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
      subjects: subjects,
      parentFirstName: parentFirstName,
      parentLastName: parentLastName,
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
  db.collection("volunteers")
    .doc(email)
    .set({
      firstName: firstName,
      lastName: lastName,
      timezone: timezone,
      role: role,
    })
    .then(() => {
      console.log("User info successfully written!");
    })
    .catch((error) => {
      console.error("Error writing document: ", error);
    });
}

export function addAdmin(
  firstName: string,
  lastName: string,
  email: string,
  timezone: string,
  role: string
) {
  db.collection("admin")
    .doc(email)
    .set({
      firstName: firstName,
      lastName: lastName,
      timezone: timezone,
      role: role,
    })
    .then(() => {
      console.log("User info successfully written!");
    })
    .catch((error) => {
      console.error("Error writing document: ", error);
    });
}

export function addUsers(
  firstName: string,
  lastName: string,
  email: string,
  role: string
) {
  db.collection("users")
    .doc(email)
    .set({
      firstName: firstName,
      lastName: lastName,
      role: role,
    })
    .then(() => {
      console.log("User info successfully written!");
    })
    .catch((error) => {
      console.error("Error writing document: ", error);
    });
}

interface BioInterface {
  name: string;
  location: firebase.firestore.GeoPoint;
  bio: string;
}
export async function getAllBios() {
  let allBios: BioInterface[] = [];
  db.collection("bios")
    .get()
    .then((querySnapshot) => {
      querySnapshot.forEach((doc) => {
        allBios.push({
          name: doc.get("name"),
          location: doc.get("location"),
          bio: doc.get("bio"),
        });
      });
      return allBios;
    })
    .catch((error) => {
      console.log("error getting documents: ", error);
      return null;
    });
}

export async function updateStudent(id: string | null, data: Object) {
  if (id == null) {
    return null;
  }
  db.collection("students")
    .doc(id)
    .update({ firstName: "128eddhd" })
    .then((value) => {
      alert(value);
    })
    .catch((e) => {
      alert(e);
    });
}

export async function getUser(id: string) {}
