import React, { useState, useEffect } from "react";
import styles from "./StudentDashboard.module.css";
import profile from "./../../../profile.svg";

import { auth, db } from "../../../Backend/Firebase";
import { useHistory } from "react-router-dom";
import Iframe from "react-iframe";

function clickDashboard() {
  var dashboard = document.getElementById("dashboard");
  var settings = document.getElementById("settings");
  var dashboardsection = document.getElementById("dashboardsection");

  var settingssection = document.getElementById("settingssection");
  if (
    dashboard != null &&
    settings != null &&
    dashboardsection != null &&
    settingssection != null
  ) {
    dashboard.style.backgroundColor = "#001E3D";
    dashboard.style.color = "white";
    settings.style.backgroundColor = "#F0F0F0";
    settings.style.color = "black";
    dashboardsection.style.display = "block";
    settingssection.style.display = "none";
  }
}

function StudentDashboard() {
  const [students, setStudents] = useState([]);
  const [currentUserEmail, setCurrentUserEmail] = useState("");

  type ClickHandler = (
    studentEmail: string,
    tutorEmail: string
  ) => (e: React.MouseEvent) => void;

  useEffect(() => {});

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
          <h1 className={styles.title}>Hello Students</h1>
          <p className={styles.paragraph}>Welcome to the Student Dashboard!</p>

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
        <div style={{ display: "none" }} className={styles.dashboard}>
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
        <div style={{ display: "none" }} className={styles.dashboard}>
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
      </div>
    </div>
  );
}

function clickSettings() {
  var dashboard = document.getElementById("dashboard");
  var settings = document.getElementById("settings");
  var dashboardsection = document.getElementById("dashboardsection");
  var settingssection = document.getElementById("settingssection");
  var availableStudents = document.getElementById("availableStudents");
  var availableStudentsSection = document.getElementById(
    "availableStudentsSection"
  );
  if (
    dashboard != null &&
    settings != null &&
    dashboardsection != null &&
    settingssection != null &&
    availableStudents != null &&
    availableStudentsSection != null
  ) {
    dashboard.style.backgroundColor = "#F0F0F0";
    dashboard.style.color = "black";
    settings.style.backgroundColor = "#001E3D";
    settings.style.color = "white";
    dashboardsection.style.display = "none";
    settingssection.style.display = "block";
    availableStudents.style.backgroundColor = "#F0F0F0";
    availableStudents.style.color = "black";
    availableStudentsSection.style.display = "none";
  }
}

function clickAvailableStudents() {
  var dashboard = document.getElementById("dashboard");
  var settings = document.getElementById("settings");
  var dashboardsection = document.getElementById("dashboardsection");
  var availableStudents = document.getElementById("availableStudents");
  var availableStudentsSection = document.getElementById(
    "availableStudentsSection"
  );
  var settingssection = document.getElementById("settingssection");
  if (
    dashboard != null &&
    settings != null &&
    dashboardsection != null &&
    settingssection != null &&
    availableStudents != null &&
    availableStudentsSection != null
  ) {
    dashboard.style.backgroundColor = "#F0F0F0";
    dashboard.style.color = "black";
    settings.style.backgroundColor = "#F0F0F0";
    settings.style.color = "black";
    settingssection.style.display = "none";
    dashboardsection.style.display = "none";
    availableStudents.style.backgroundColor = "#001E3D";
    availableStudents.style.color = "white";
    availableStudentsSection.style.display = "block";
  }
}

export default StudentDashboard;
