import React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Login from "./components/Login";
import AddPlant from "./components/AddPlant.js";
import PlantsList from "./components/PlantsList";
import SignUp from "./components/SignUp";
//import Plants from "./components/Plants"
import PrivateRoute from "./components/PrivateRoute";
import "./App.css";
import UpdatePlant from "./components/UpdatePlant";

function App() {
  const logout = (e) => {
    e.preventDefault();
    localStorage.clear("token");
    window.location.reload(false);
  };
  return (
    <section className="App">
      <Router>
        <div>
          <Link to="/login">Login </Link>
          <Link to="/signup">SignUp </Link>
          
          <button onClick={logout}>Log Out</button>
        </div>

        <Route exact path="/login" component={Login} />
        <Route path="/signup" component={SignUp} />

        <PrivateRoute exact path="/protected" component={PlantsList} />
        <PrivateRoute exact path="/protected" component={AddPlant} />
        
        <PrivateRoute exact path="/protected" component={UpdatePlant} />
      </Router>
    </section>
  );
}
export default App;
