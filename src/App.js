import React from "react";
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
import Login from "./components/Login";
import AddPlant from "./components/AddPlant.js";
import PlantsList from "./components/PlantsList";
import PrivateRoute from "./components/PrivateRoute";
import "./App.css";

function App() {
  const logout = (e) => {
    e.preventDefault();
    localStorage.clear("token");
    window.location.reload(false);
  };
  return (
    <section className="App"  >
      <Router>
        <div>
         <Link  to="/login">Login </Link> 
          <Link  to="/plantslist">Plants List</Link>
          <Link  to="/addplant">Add Plant</Link>
          <button  onClick={logout}>Log Out</button>
        </div>

        <Switch> 
          <PrivateRoute exact path="/plantslist" component={PlantsList} />
          <PrivateRoute exact path="/addplant" component={AddPlant} />
          <Route path="/login" component={Login} />
          <Route component={Login} />
        </Switch>
      </Router>
    </section>
  );
}
export default App;