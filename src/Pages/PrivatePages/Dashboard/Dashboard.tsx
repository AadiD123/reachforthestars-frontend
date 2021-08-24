import { useState } from "react";
import { useEffect } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { auth, db } from "../../../Backend/Firebase";
import { DashboardComponent } from "../../../Components/Dash/DashboardComponent";
import AccountSettings from "./AccountSettings/AccountSettings";
import AvailableStudents from "./AvailableStudents/AvailableStudents";
import GeneralDashboard from "./GeneralDashboard/GeneralDashboard";
import LogTutoringHours from "./LogTutoringHours/LogTutoringHours";
import TutoringFAQ from "./TutoringFaq/TutoringFAQ";

export default function Dashboard() {
  // const [image, setImage] = useState<any>(null);

  // useEffect(() => {
  //   auth.onAuthStateChanged(function (user) {
  //     if (user?.email) {
  //       db.collection("bios")
  //         .doc(user.email)
  //         .get()
  //         .then((doc) => {
  //           if (doc.exists && doc.data() != null) {
  //             setImage(doc.data()?.img);
  //           }
  //         })
  //         .catch((error) => {
  //           console.log("Error getting document:", error);
  //         });
  //     }
  //   });
  // });

  return (
    <Router>
      <div
        style={{
          display: "flex",
          marginTop: "5em",
          marginBottom: "20em",
          flexWrap: "wrap",
        }}
      >
        {/* {image != null ? (
          <DashboardComponent image={image} />
        ) : (
          
        )} */}

        <DashboardComponent />

        <div style={{ marginInline: "5%" }}>
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
  );
}
