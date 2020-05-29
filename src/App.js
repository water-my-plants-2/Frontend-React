import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import Login from './Login';
import { Route, Link } from 'react-router-dom';
import Plants from './Plants-Page/Plants';
import PlantsForm from './Plants-Page/Plants-Form'
import Nav from './Nav';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {

  return (
    <div className="App">
      

      <Nav />
       {/* <Link to="/login">
      <button>click here</button></Link> */}
      <Route exact path="/">Home</Route>
      <Route exact path="/about">About</Route>
      <Route exact path="/register">Register</Route>
      <Route exact path="/profile">Profile</Route>
      <Route path="/login" component={Login}/>
      <Route path="/plant-form" component={PlantsForm}/>
      <Route path='/plants' component={Plants}/> 
      
    </div>
  );
}

export default App;
