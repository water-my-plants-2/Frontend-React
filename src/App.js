import React from 'react';
import logo from './logo.svg';
import './App.css';
import Login from './Login';
import { Route, Link } from 'react-router-dom';
import Plants from './Plants-Page/Plants';
import PlantForm from './Plants-Page/Plants-Form'

function App() {
  return (
    <div className="App">
      <nav>
        <h1 className="header">Plant Parenthood</h1>
        <div classname="nav-links">
        <Link to="/">
          Sign Up
          </Link>
        <Link to="/login">
          Login
          </Link>
        <Link to='/plants'>
          Plants
          </Link>
        </div>
      </nav>
      <Route exact path="/">Sign up</Route>
      <Route path="/login" component={Login}/>
      <Route path="/plants" component={Plants}/>
      <Route path="/plants" component={PlantForm}/>
    </div>
  );
}

export default App;
