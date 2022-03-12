import './App.css';
import { Router } from 'react-router';
import { BroswerRouter as Router, Route } from "react-router-dom"
import Home from "./Home";
import Login from "./Login";
import Signup from "./Signup";

function App() {
  return (
    <Router>
      <div>
        <Route exact path="/" component={Home} />
        <Route exact path="/login" component={Login} />
        <Route exact path="/signup" component={Signup} />
      </div>
    </Router>
  );
}

export default App;
