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
          marginTop: "5em",
          marginBottom: "20em",
          flexWrap: "wrap",
        }}
      >
        <DashboardComponent />
        <div style={{ marginInline: "5%" }}>
          <Switch>
            <Route path="/dashboard" exact component={GeneralDashboard} />
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
