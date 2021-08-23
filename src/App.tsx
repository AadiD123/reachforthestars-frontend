import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

//Auth
import PrivateRoute from "./Backend/PrivateAuth";
import { AuthProvider } from "./Backend/Contexts/AuthContext";

//Components
import Navbar from "./Components/Navbar/Navbar";
import Footer from "./Components/Footer/Footer";

//Pages
import Home from "./Pages/Home/Home";
import IndividualAbout from "./Pages/IndividualAbout/IndividualAbout";
import About from "./Pages/About/About";
import JoinOurTeam from "./Pages/JoinOurTeam/JoinOurTeam";
import Login from "./Pages/Authentication/Login/Login";
import Events from "./Pages/Events/Events";
import Blog from "./Pages/Blog/Blog";
import Registration from "./Pages/Registration/Registration";
import BlogPage from "./Pages/Blog-Page/Blog-Page";
import BlogPageEdit from "./Pages/BlogPageEdit/BlogPageEdit";
import SignUp from "./Pages/Authentication/Sign Up/SignUp";

//Private Pages
import OldDashboard from "./Pages/PrivatePages/OldDashboard/Dashboard";
import Dashboard from "./Pages/PrivatePages/Dashboard/Dashboard";
import { useEffect } from "react";
import { auth } from "./Backend/Firebase";
import ForgotPassword from "./Pages/Authentication/ForgotPassword/ForgotPassword";

function App() {
  useEffect(() => {
    auth.onAuthStateChanged(function (user) {
      if (user?.email) {
        localStorage.setItem("userEmail", user.email);
      }
    });
  });

  return (
    <Router>
      <Navbar />
      <AuthProvider>
        <Switch>
          <Route path="/dashboard" component={Dashboard} />
          <Route path="/" exact component={Home} />
          <Route path="/events" component={Events} />
          <Route path="/about" component={About} />
          <Route path="/join-our-team" component={JoinOurTeam} />
          <Route path="/blog" component={Blog} />
          <Route path="/blogpage/:id" exact component={BlogPage} />
          <Route
            path="/individual-about/:name/:text"
            exact
            component={IndividualAbout}
          />
          <Route path="/login" component={Login} />
          <Route path="/signup" component={SignUp} />
          <Route path="/forgotpassword" component={ForgotPassword} />

          <Route path="/blog-edit" component={BlogPageEdit} />
          <Route path="/registration" component={Registration} />
          <Route path="/individual-about" component={IndividualAbout} />
        </Switch>
      </AuthProvider>
      <Footer />
    </Router>
  );
}

export default App;
function setCurrentUserEmail(email: string) {
  throw new Error("Function not implemented.");
}
