import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { TestDashboard } from "../../../Components/TestDashboard/TestDashboard";
import AccountSettings from "./AccountSettings/AccountSettings";
import AvailableStudents from "./AvailableStudents/AvailableStudents";
import GeneralDashboard from "./GeneralDashboard/GeneralDashboard";
import LogTutoringHours from "./LogTutoringHours/LogTutoringHours";
import TutoringFAQ from "./TutoringFaq/TutoringFAQ";

export default function Dashboard() {
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
        <TestDashboard />
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
    </Router>
  );
}
