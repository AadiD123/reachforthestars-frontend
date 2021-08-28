import { useEffect, useState } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { auth, db } from "../../../Backend/Firebase";
import { DashboardComponent } from "../../../Components/Dash/DashboardComponent";
import AccountSettings from "./Tutor/AccountSettings/AccountSettings";
import AvailableStudents from "./Tutor/AvailableStudents/AvailableStudents";
import GeneralDashboard from "./Tutor/GeneralDashboard/GeneralDashboard";
import LogTutoringHours from "./Tutor/LogTutoringHours/LogTutoringHours";
import TutoringFAQ from "./Tutor/TutoringFaq/TutoringFAQ";
import { StudentDashboardComponent } from "../../../Components/StudentDash/DashboardComponent";
import { StudentGeneralDashboard } from "./Student/StudentGeneralDashboard/GeneralDashboard";
import { StudentAccountSettings } from "./Student/StudentAccountSettings/AccountSettings";

export default function Dashboard() {
  const [volunteer, setVolunteer] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    auth.onAuthStateChanged(function (user) {
      if (user?.email) {
        db.collection("users")
          .doc(user.email)
          .get()
          .then((doc) => {
            if (doc.exists && doc.data() != null) {
              if (doc.data()?.role == "volunteer") {
                setVolunteer(true);
              }
            }
          })
          .catch((error) => {
            console.log("Error getting document:", error);
          });
      }
    });
    setLoading(false);
  });

  if (loading) {
    <div>
      <h1>Loading your dashboard</h1>
    </div>;
  }

  return (
    <div>
      {volunteer ? (
        <Router>
          <div
            style={{
              display: "flex",
              marginTop: "5em",
              marginBottom: "20em",
              marginInline: "20px",
            }}
          >
            <div style={{ marginRight: "50px" }}>
              <DashboardComponent />
            </div>

            <div>
              <Switch>
                <Route path="/dashboard" exact component={GeneralDashboard} />
                <Route path="/dashboard/tutoring-faq" component={TutoringFAQ} />
                <Route
                  path="/dashboard/log-tutoringhours"
                  component={LogTutoringHours}
                />
                <Route
                  path="/dashboard/available-students"
                  component={AvailableStudents}
                />
                <Route
                  path="/dashboard/accountsettings"
                  component={AccountSettings}
                />
              </Switch>
            </div>
          </div>
        </Router>
      ) : (
        <Router>
          <div
            style={{
              display: "flex",
              marginTop: "5em",
              marginBottom: "20em",
              marginInline: "20px",
            }}
          >
            <div style={{ marginRight: "50px" }}>
              <StudentDashboardComponent />
            </div>

            <div>
              <Switch>
                <Route
                  path="/dashboard"
                  exact
                  component={StudentGeneralDashboard}
                />
                <Route
                  path="/dashboard/accountsettings"
                  component={StudentAccountSettings}
                />
              </Switch>
            </div>
          </div>
        </Router>
      )}
    </div>
  );
}
