import React, { useState, useEffect, useRef, MutableRefObject } from "react";
import styles from "./Dashboard.module.css";
import profile from "./../../../profile.svg";

import { auth, db } from "../../../Backend/Firebase";
import { getUser } from "../../../Backend/db/dbfunctions";
import { useHistory } from "react-router-dom";
import { updateStudent } from "../../../Backend/db/dbfunctions";
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

  const firstNameRef = useRef() as MutableRefObject<any>;
  const lastNameRef = useRef() as MutableRefObject<any>;
  const timezoneRef = useRef() as MutableRefObject<any>;

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
        ></div>
        {/* <h1 className={styles.title}>Available Students</h1>
        <p className={styles.paragraph}>
          Welcome to the Available Students tab!
        </p> */}
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
