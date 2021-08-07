import { db } from "../Firebase";

export function addBlog(
  author: string,
  date: string,
  title: string,
  content: string,
  blogpicture: string
) {
  db.collection("blogs")
    .doc()
    .set({
      author: author,
      date: date,
      title: title,
      content: content,
      blogpicture: blogpicture,
    })
    .then(() => {
      console.log("Blog info successfully written!");
    })
    .catch((error) => {
      console.error("Error writing document: ", error);
    });
}
export async function getAllBlogs() {
  var blogposts = new Array();

  db.collection("blogs")
    .get()
    .then((querySnapshot) => {
      querySnapshot.forEach((doc) => {
        console.log(doc.id, "=>", doc.data());
        blogposts.push(doc.data());
      });
      return blogposts;
    })
    .catch((error) => {
      console.log("error getting documents: ", error);
    });
}

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

export async function getAllAvailableStudents() {
  var availableStudents = new Array();

  db.collection("users")
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
