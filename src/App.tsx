import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

//Components
import Navbar from "./Components/Navbar/Navbar";
import Footer from "./Components/Footer/Footer";

//Pages
import Home from "./Pages/Home/Home";
import About from "./Pages/About/About";
import JoinOurTeam from "./Pages/JoinOurTeam/JoinOurTeam";
import Login from "./Pages/Authentication/Login/Login";
import Events from "./Pages/Events/Events";
import Blog from "./Pages/Blog/Blog";
import BlogPage from "./Pages/Blog-Page/Blog-Page";
import SignUp from "./Pages/Authentication/Sign Up/SignUp";
import { AuthProvider, useAuth } from "./Backend/Contexts/AuthContext";
import PrivateRoute from "./PrivateAuth";

function App() {
  return (
    <Router>
      <Navbar />
      <AuthProvider>
        <Switch>
          <PrivateRoute path="/blog" component={Blog} />
          <Route path="/" exact component={Home} />
          <Route path="/events" component={Events} />
          <Route path="/about" component={About} />
          <Route path="/join-our-team" component={JoinOurTeam} />
          <Route path="/login" component={Login} />
          <Route path="/signup" component={SignUp} />
          <Route path="/blog-page" component={BlogPage} />
        </Switch>
      </AuthProvider>
      <Footer />
    </Router>
  );
}

export default App;
