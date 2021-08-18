import React, { useState, useEffect } from "react";
import styles from "./Dashboard.module.css";
import profile from "./../../../profile.svg";

import { auth, db } from "../../../Backend/Firebase";
import { getUser } from "../../../Backend/db/dbfunctions";
import { useHistory } from "react-router-dom";
import Iframe from "react-iframe";

function clickDashboard() {
  var dashboard = document.getElementById("dashboard");
  var logtutoringsession = document.getElementById("logtutoringsession");
  var faqs = document.getElementById("faqs");
  var settings = document.getElementById("settings");
  var dashboardsection = document.getElementById("dashboardsection");
  var logtutoringsessionssection = document.getElementById(
    "logtutoringsessionssection"
  );
  var faqssection = document.getElementById("faqssection");
  var settingssection = document.getElementById("settingssection");
  if (
    dashboard != null &&
    logtutoringsession != null &&
    faqs != null &&
    settings != null &&
    dashboardsection != null &&
    logtutoringsessionssection != null &&
    faqssection != null &&
    settingssection != null
  ) {
    dashboard.style.backgroundColor = "#001E3D";
    dashboard.style.color = "white";
    logtutoringsession.style.backgroundColor = "#F0F0F0";
    logtutoringsession.style.color = "black";
    faqs.style.backgroundColor = "#F0F0F0";
    faqs.style.color = "black";
    settings.style.backgroundColor = "#F0F0F0";
    settings.style.color = "black";
    dashboardsection.style.display = "block";
    logtutoringsessionssection.style.display = "none";
    faqssection.style.display = "none";
    settingssection.style.display = "none";
  }
}

function Dashboard() {
  const [students, setStudents] = useState([]);
  const [loading, setLoading] = useState(true);
  const [currentUserEmail, setCurrentUserEmail] = useState("");
  const [currentUser, setUser] = useState(null);

  const history = useHistory();
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

  auth.onAuthStateChanged(function (user) {
    if (user?.email) {
      setCurrentUserEmail(user.email);
      db.collection("users")
        .doc(user.email)
        .get()
        .then((doc) => {
          if (doc.exists) {
          }
        })
        .catch((error) => {
          console.log("Error getting document:", error);
        });
    }
  });

  const connectTutorAndStudent: ClickHandler =
    (studentEmail: string, tutorEmail: string) => (e: any) => {
      e.preventDefault();
      db.collection("students").doc(studentEmail).update({
        available: false,
        tutor: currentUserEmail,
      });
    };

  return (
    <div className={styles.grid}>
      <div className={styles.toggle}>
        <div className={styles.options}>
          <img src={profile} alt="profile " />
          <h1
            style={{ backgroundColor: "#001E3D", color: "white" }}
            onClick={clickDashboard}
            id="dashboard"
          >
            Dashboard
          </h1>
          <h1 onClick={clickLogTutoringSession} id="logtutoringsession">
            Tutoring FAQ
          </h1>
          <h1 onClick={clickFaqs} id="faqs">
            Log Tutoring Session
          </h1>
          <h1 onClick={clickSettings} id="settings">
            Account Settings
          </h1>
          <h1 onClick={clickAvailableStudents} id="availableStudents">
            Available Students
          </h1>
        </div>
      </div>
      <div className={styles.content}>
        <div
          style={{ display: "block" }}
          id="dashboardsection"
          className={styles.dashboard}
        >
          <h1 className={styles.title}>General Volunteers</h1>
          <p className={styles.paragraph}>
            Welcome to the General Volunteer tab! Here you can find all the
            things you can work on and all materials you will need as a general
            volunteer!
          </p>
          <h1 className={styles.title}>Log Service Hours</h1>
          <Iframe
            url="https://clockify.me/tracker"
            width="100%"
            height="450px"
            id="myId"
            className="myClassname"
            display="block"
            position="relative"
          />
          <div style={{ marginBottom: "10px" }}></div>
          <h1 className={styles.title}>Help Us Get More Students</h1>
          <p className={styles.paragraph}>
            Reach out to ALL the parents you know to help us get more students!
            Find local schools and put their emails on this spreadsheet for us
            to contact.{" "}
          </p>
          <button className={styles.button} style={{ width: "200px" }}>
            Outreach Spreadsheet
          </button>
        </div>
        <div
          style={{ display: "none" }}
          id="logtutoringsessionssection"
          className={styles.dashboard}
        >
          <h1 className={styles.title}>Get Started</h1>
          <p
            className={styles.paragraph}
            style={{ marginTop: "20px", fontSize: "21px" }}
          >
            Click these if you are new or have any additional questions.
          </p>
          <div className={styles.buttons}>
            <button className={styles.button} style={{ width: "200px" }}>
              FAQ (Start Here!)
            </button>
            <button
              className={styles.button}
              style={{ marginLeft: "20px", width: "300px" }}
            >
              Tutoring Orientation (Read First)
            </button>
          </div>

          <h1 className={styles.title} style={{ marginTop: "20px" }}>
            Get Paired with a Student!
          </h1>
          <p
            className={styles.paragraph}
            style={{ marginTop: "20px", fontSize: "21px" }}
          >
            Don't have a student? Student pairing information down below.{" "}
          </p>
          <div className={styles.buttons}>
            <button className={styles.button} style={{ width: "200px" }}>
              Meet Students
            </button>
            <button
              className={styles.button}
              style={{ marginLeft: "20px", width: "250px" }}
            >
              Pre-Tutoring Form
            </button>
            <button
              className={styles.button}
              style={{ marginLeft: "20px", width: "300px" }}
            >
              Tutoring Initiation Form
            </button>
          </div>
          <button
            className={styles.button}
            style={{ marginTop: "20px", width: "400px" }}
          >
            Dropping a Student Form
          </button>
          <p
            className={styles.paragraph}
            style={{ marginTop: "20px", fontSize: "21px" }}
          >
            Tutors, use the tutor password to view available students or access
            the tutoring forms. Email us at tutoring.reachstars@gmail.com to get
            your password if you do not have one already.
          </p>
          <h1 className={styles.title}>Tutoring Resources</h1>
          <p
            className={styles.paragraph}
            style={{ marginTop: "20px", fontSize: "21px" }}
          >
            Need help with formulating your lessons? View helpful resources
            here!
          </p>
          <div className={styles.buttons}>
            <button className={styles.button} style={{ width: "250px" }}>
              Request Lesson Plan
            </button>
            <button
              className={styles.button}
              style={{ marginLeft: "20px", width: "200px" }}
            >
              Tutoring Resources
            </button>
            <button
              className={styles.button}
              style={{ marginLeft: "20px", width: "170px" }}
            >
              Reading
            </button>
          </div>
          <button
            className={styles.button}
            style={{ marginTop: "20px", width: "330px" }}
          >
            Parent Email Template
          </button>
        </div>
        <div
          style={{ display: "none" }}
          id="faqssection"
          className={styles.dashboard}
        >
          <h1 className={styles.title}>FAQs</h1>
          <p className={styles.paragraph}>
            Welcome to the General Volunteer tab! Here you can find all the
            things you can work on and all materials you will need as a general
            volunteer!
          </p>
          <h1 className={styles.title}>Log Service Hours</h1>
          <textarea className={styles.box}></textarea>
          <h1 className={styles.title}>Help Us Get More Students</h1>
          <p className={styles.paragraph}>
            Reach out to ALL the parents you know to help us get more students!
            Find local schools and put their emails on this spreadsheet for us
            to contact.{" "}
          </p>
          <button className={styles.button}>Outreach Spreadsheet</button>
        </div>
        <div
          style={{ display: "none" }}
          id="settingssection"
          className={styles.dashboard}
        >
          <h1 className={styles.title}>My Account</h1>
          <p>Update and Edit the information you share with community</p>
          <p className={styles.paragraph}>
            Login Email: <br />
            User Email <br />
            Your email address cannot be changed <br />
          </p>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr" }}>
            <div>
              <label>First Name</label>
              <br />
              <input style={{ width: "80%" }} type="text" />
              <br />
              <label style={{ marginTop: "20px" }}>Timezone</label>
              <br />
              <input
                style={{ width: "80%" }}
                value={currentUserEmail}
                type="text"
              />
            </div>
            <div>
              <label>Last Name</label>
              <br />
              <input style={{ width: "80%" }} type="text" />
              <br />
              <br />
              <br />

              <button
                style={{
                  color: "black",
                  border: "none",
                  background: "grey",
                  width: "120px",
                  marginRight: "20px",
                }}
              >
                Cancel
              </button>
              <button
                style={{
                  color: "white",
                  border: "none",
                  background: "#001E3D",
                  width: "120px",
                }}
              >
                Save
              </button>
            </div>
          </div>
        </div>
        {/* <h1 className={styles.title}>Available Students</h1>
        <p className={styles.paragraph}>
          Welcome to the Available Students tab!
        </p> */}
        {students.length > 0 ? (
          students.map((student: any) => (
            <div key={student.key}>
              <div
                style={{ display: "none" }}
                id="availableStudentsSection"
                className={styles.dashboard}
              >
                <div className={`card ${styles.dashCard}`}>
                  <div className="card-body">
                    <h1 className="card-title">
                      <strong>{student.firstName}</strong>
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
                      className="btn btn-primary"
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
    </div>
  );
}

function clickLogTutoringSession() {
  var dashboard = document.getElementById("dashboard");
  var logtutoringsession = document.getElementById("logtutoringsession");
  var faqs = document.getElementById("faqs");
  var settings = document.getElementById("settings");
  var dashboardsection = document.getElementById("dashboardsection");
  var logtutoringsessionssection = document.getElementById(
    "logtutoringsessionssection"
  );
  var faqssection = document.getElementById("faqssection");
  var settingssection = document.getElementById("settingssection");
  var availableStudents = document.getElementById("availableStudents");
  var availableStudentsSection = document.getElementById(
    "availableStudentsSection"
  );
  if (
    dashboard != null &&
    logtutoringsession != null &&
    faqs != null &&
    settings != null &&
    dashboardsection != null &&
    logtutoringsessionssection != null &&
    faqssection != null &&
    settingssection != null &&
    availableStudents != null &&
    availableStudentsSection != null
  ) {
    dashboard.style.backgroundColor = "#F0F0F0";
    dashboard.style.color = "black";
    logtutoringsession.style.backgroundColor = "#001E3D";
    logtutoringsession.style.color = "white";
    faqs.style.backgroundColor = "#F0F0F0";
    faqs.style.color = "black";
    settings.style.backgroundColor = "#F0F0F0";
    settings.style.color = "black";
    dashboardsection.style.display = "none";
    logtutoringsessionssection.style.display = "block";
    faqssection.style.display = "none";
    settingssection.style.display = "none";
    availableStudents.style.backgroundColor = "#F0F0F0";
    availableStudents.style.color = "black";
    availableStudentsSection.style.display = "none";
  }
}

function clickFaqs() {
  var dashboard = document.getElementById("dashboard");
  var logtutoringsession = document.getElementById("logtutoringsession");
  var faqs = document.getElementById("faqs");
  var settings = document.getElementById("settings");
  var dashboardsection = document.getElementById("dashboardsection");
  var logtutoringsessionssection = document.getElementById(
    "logtutoringsessionssection"
  );
  var faqssection = document.getElementById("faqssection");
  var settingssection = document.getElementById("settingssection");
  var availableStudents = document.getElementById("availableStudents");
  var availableStudentsSection = document.getElementById(
    "availableStudentsSection"
  );
  if (
    dashboard != null &&
    logtutoringsession != null &&
    faqs != null &&
    settings != null &&
    dashboardsection != null &&
    logtutoringsessionssection != null &&
    faqssection != null &&
    settingssection != null &&
    availableStudents != null &&
    availableStudentsSection != null
  ) {
    dashboard.style.backgroundColor = "#F0F0F0";
    dashboard.style.color = "black";
    logtutoringsession.style.backgroundColor = "#F0F0F0";
    logtutoringsession.style.color = "black";
    faqs.style.backgroundColor = "#001E3D";
    faqs.style.color = "white";
    settings.style.backgroundColor = "#F0F0F0";
    settings.style.color = "black";
    dashboardsection.style.display = "none";
    logtutoringsessionssection.style.display = "none";
    faqssection.style.display = "block";
    settingssection.style.display = "none";
    availableStudents.style.backgroundColor = "#F0F0F0";
    availableStudents.style.color = "black";
    availableStudentsSection.style.display = "none";
  }
}

function clickSettings() {
  var dashboard = document.getElementById("dashboard");
  var logtutoringsession = document.getElementById("logtutoringsession");
  var faqs = document.getElementById("faqs");
  var settings = document.getElementById("settings");
  var dashboardsection = document.getElementById("dashboardsection");
  var logtutoringsessionssection = document.getElementById(
    "logtutoringsessionssection"
  );
  var faqssection = document.getElementById("faqssection");
  var settingssection = document.getElementById("settingssection");
  var availableStudents = document.getElementById("availableStudents");
  var availableStudentsSection = document.getElementById(
    "availableStudentsSection"
  );
  if (
    dashboard != null &&
    logtutoringsession != null &&
    faqs != null &&
    settings != null &&
    dashboardsection != null &&
    logtutoringsessionssection != null &&
    faqssection != null &&
    settingssection != null &&
    availableStudents != null &&
    availableStudentsSection != null
  ) {
    dashboard.style.backgroundColor = "#F0F0F0";
    dashboard.style.color = "black";
    logtutoringsession.style.backgroundColor = "#F0F0F0";
    logtutoringsession.style.color = "black";
    faqs.style.backgroundColor = "#F0F0F0";
    faqs.style.color = "black";
    settings.style.backgroundColor = "#001E3D";
    settings.style.color = "white";
    dashboardsection.style.display = "none";
    logtutoringsessionssection.style.display = "none";
    faqssection.style.display = "none";
    settingssection.style.display = "block";
    faqs.style.backgroundColor = "#F0F0F0";
    faqs.style.color = "black";
    faqssection.style.display = "none";
    availableStudents.style.backgroundColor = "#F0F0F0";
    availableStudents.style.color = "black";
    availableStudentsSection.style.display = "none";
  }
}

function clickAvailableStudents() {
  var dashboard = document.getElementById("dashboard");
  var logtutoringsession = document.getElementById("logtutoringsession");
  var faqs = document.getElementById("faqs");
  var settings = document.getElementById("settings");
  var dashboardsection = document.getElementById("dashboardsection");
  var logtutoringsessionssection = document.getElementById(
    "logtutoringsessionssection"
  );
  var availableStudents = document.getElementById("availableStudents");
  var availableStudentsSection = document.getElementById(
    "availableStudentsSection"
  );
  var faqssection = document.getElementById("faqssection");
  var settingssection = document.getElementById("settingssection");
  if (
    dashboard != null &&
    logtutoringsession != null &&
    faqs != null &&
    settings != null &&
    dashboardsection != null &&
    logtutoringsessionssection != null &&
    faqssection != null &&
    settingssection != null &&
    availableStudents != null &&
    availableStudentsSection != null
  ) {
    dashboard.style.backgroundColor = "#F0F0F0";
    dashboard.style.color = "black";
    logtutoringsession.style.backgroundColor = "#F0F0F0";
    logtutoringsession.style.color = "black";
    faqs.style.backgroundColor = "#F0F0F0";
    faqs.style.color = "black";
    settings.style.backgroundColor = "#F0F0F0";
    settings.style.color = "black";
    settingssection.style.display = "none";
    dashboardsection.style.display = "none";
    logtutoringsessionssection.style.display = "none";
    faqssection.style.display = "none";
    availableStudents.style.backgroundColor = "#001E3D";
    availableStudents.style.color = "white";
    availableStudentsSection.style.display = "block";
  }
}

export default Dashboard;
