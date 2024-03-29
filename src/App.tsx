import {
  BrowserRouter as Router,
  Switch,
  Route,
  withRouter,
} from "react-router-dom";

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
import ForgotPassword from "./Pages/Authentication/ForgotPassword/ForgotPassword";

//Private Pages
import Dashboard from "./Pages/PrivatePages/Dashboard/Dashboard";
import { Donate } from "./Pages/Donate/Donate";

function App() {
  // useEffect(() => {
  //   auth.onAuthStateChanged(function (user) {
  //     if (user?.email) {
  //       localStorage.setItem("userEmail", user.email);
  //     }
  //   });
  // });

  return (
    <Router>
      <Navbar />
      <AuthProvider>
        <Switch>
          <PrivateRoute path="/dashboard" component={Dashboard} />
          <PrivateRoute path="/blog-edit" component={BlogPageEdit} />
          {/* <Route path="/events" component={Events} /> */}
          <Route path="/about" component={About} />
          <Route path="/donate" component={Donate} />
          <Route path="/join-our-team" component={JoinOurTeam} />
          <Route path="/blog" component={Blog} />
          <Route path="/blogpage/:id" exact component={withRouter(BlogPage)} />
          <Route
            path="/individual-about/:name/:text"
            exact
            component={IndividualAbout}
          />
          <Route path="/login" component={Login} />
          <Route path="/signup" component={SignUp} />
          <Route path="/forgotpassword" component={ForgotPassword} />
          <Route path="/registration" component={Registration} />
          <Route path="/individual-about" component={IndividualAbout} />
          <Route path="/" exact component={Home} />
        </Switch>
      </AuthProvider>
      <Footer />
    </Router>
  );
}

export default App;
