import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

//Components
import Sidebar from "./Components/Sidebar/Sidebar";
import Navbar from "./Components/Navbar/Navbar";

//Pages
import Home from "./Pages/Home/Home";
import About from "./Pages/About/About";

function App() {
  return (
    <Router>
      <Navbar />
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/about" exact component={About} />
      </Switch>
    </Router>
  );
}

export default App;
