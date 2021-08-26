import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { DashboardComponent } from "../../../Components/StudentDash/DashboardComponent";
import AccountSettings from "./AccountSettings/AccountSettings";
import GeneralDashboard from "./GeneralDashboard/GeneralDashboard";

export default function StudentDashboard() {
  return (
    <Router>
      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          marginTop: "5em",
          marginBottom: "15em",
        }}
      >
        <DashboardComponent />
        <Switch>
          <Route path="/dashboard" exact component={GeneralDashboard} />
          <Route
            path="/dashboard/accountsettings"
            component={AccountSettings}
          />
        </Switch>
      </div>
    </Router>
  );
}
