import React, { useState } from 'react';
import './App.css';
import Login from './Login';
import { Route } from 'react-router-dom';
import Plants from './Plants-Page/Plants';
import Nav from './Nav';
import Registration from './Registration'
import Profile from './Profile';
import About from './About';
import Home from './Home';


function App() {

  return (
    <div className="App">
      

      <Nav />
    
      <Route exact path="/" component={Home}/>
      <Route exact path="/about" component={About}/>
      <Route exact path="/register" component={Registration} />
      <Route exact path="/profile" component={Profile} />
      <Route path="/login" component={Login}/>
      <Route path='/plants' component={Plants}/> 
      
    </div>
  );
}

export default App;
