import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

//Components
import Sidebar from "./Components/Sidebar/Sidebar";
import Navbar from "./Components/Navbar/Navbar";

//Pages
import Home from "./Pages/Home/Home";
import About from "./Pages/About/About";
import Login from "./Pages/Login/Login";
import Contact from "./Pages/Contact/Contact";
import Donate from "./Pages/Donate/Donate";


function App() {
  return (
    <Router>
      <Navbar />
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/about" exact component={About} />
        <Route path="/login" exact component={Login} />
        <Route path="/contact" exact component={Contact} />
        <Route path="/donate" exact component={Donate} />
        
      </Switch>
    </Router>
  );
}

export default App;
