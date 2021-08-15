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
import Dashboard from "./Pages/PrivatePages/Dashboard/Dashboard";
import AvailableStudents from "./Pages/PrivatePages/AvailableStudents/AvailableStudents";

function App() {
  return (
    <Router>
      <Navbar />
      <AuthProvider>
        <Switch>
          <PrivateRoute path="/dashboard" component={Dashboard} />
          <PrivateRoute
            path="/available-students"
            component={AvailableStudents}
          />
          <Route path="/" exact component={Home} />
          <Route path="/events" component={Events} />
          <Route path="/about" component={About} />
          <Route path="/join-our-team" component={JoinOurTeam} />
          <Route path="/blog" component={Blog} />
          <Route path="/blogpage/:id" exact component={BlogPage} />
          <Route path="/login" component={Login} />
          <Route path="/signup" component={SignUp} />

          <Route path="/blog-page-edit" component={BlogPageEdit} />
          <Route path="/registration" component={Registration} />
          <Route path="/individual-about" component={IndividualAbout} />
        </Switch>
      </AuthProvider>
      <Footer />
    </Router>
  );
}

export default App;
