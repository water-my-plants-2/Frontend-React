import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import Login from './Login';
import { Route, Link } from 'react-router-dom';
import Plants from './Plants-Page/Plants';
import PlantsForm from './Plants-Page/Plants-Form'

function App() {

const [plantList, setPlantList] = useState({
  name: '',
        nickname: '',
        species: '',
        h20frequency: '',
});

const addPlant = newPlant => {
  setPlantList([...plantList, newPlant]);
};



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
          Your Plants
          </Link>
          <Link to='/plant-form'>
          Add Plants
          </Link>
        </div>
      </nav>
      <Route exact path="/">Sign up</Route>
      <Route path="/login" component={Login}/>
      <Route path="/plant-form" component={PlantsForm}/>
      <Route path='/plants' component={Plants}/>
    
    </div>
  );
}

export default App;
