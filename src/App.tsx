import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

//Components
import Sidebar from "./Components/Sidebar/Sidebar";

//Pages
import Home from "./Pages/Home/Home";
import About from "./Pages/About/About";
import JoinOurTeam from "./Pages/JoinOurTeam/JoinOurTeam";
import Login from "./Pages/Authentication/Login/Login";
import Events from "./Pages/Events/Events";
import Blog from "./Pages/Blog/Blog";
import BlogPage from "./Pages/Blog-Page/Blog-Page";

function App() {
  return (
    <Router>
      <Sidebar />
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/events" component={Events} />
        <Route path="/blog" component={Blog} />
        <Route path="/about" component={About} />
        <Route path="/join-our-team" component={JoinOurTeam} />
        <Route path="/login" component={Login} />
        <Route path="/blog-page" component={BlogPage} />

      </Switch>
    </Router>
  );
}

export default App;
