import React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Login from "./components/Login";
import AddPlant from "./components/AddPlant.js";
import PlantsList from "./components/PlantsList";
import SignUp from "./components/SignUp";
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
          <Link className="sign" to="/login">
            Login{" "}
          </Link>
          <Link className="sign" to="/signup">
            SignUp{" "}
          </Link>

          <button className="sign" onClick={logout}>
            Log Out
          </button>
        </div>

        <Route exact path="/login" component={Login} />
        <Route path="/signup" component={SignUp} />
        <Route path="/plantlist" component={PlantsList} />
        {/* <div className="align1"><h5>Add Plant</h5></div> */}
        <PrivateRoute exact path="/protected" component={AddPlant} />
        {/*<div className="align"><h5>Plants List</h5></div>*/}
        <PrivateRoute exact path="/protected" component={PlantsList} />

        <PrivateRoute exact path="/plants/:id" component={UpdatePlant} />
      </Router>
    </section>
  );
}
export default App;
