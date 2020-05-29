import React from "react";
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
import Login from "./components/Login";
import AddPlant from "./components/AddPlant.js";
import PlantsList from "./components/PlantsList";
import SignUp from "./components/SignUp"
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
         <Link to="/signup">SignUp </Link>
          <button  onClick={logout}>Log Out</button>
          
        </div>
         
        <Route  exact path="/login" component={Login} />
        <Route path="/signup" component={SignUp} />
        <Switch> 
          <PrivateRoute exact path="/protected" component={PlantsList} />
          <PrivateRoute exact path="/protected" component={AddPlant} />
          
         
           
          
        </Switch>
      </Router>
    </section>
  );
}
export default App;