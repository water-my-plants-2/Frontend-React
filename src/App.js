import React from 'react';
import logo from './logo.svg';
import './App.css';
import Login from './Login';
import { Route, Link } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <nav>
        <h1 className="header">Plant Parenthood</h1>
        <div classname="nav-links">
        <Link to="/">Sign Up</Link>
        <Link to="/login">Login</Link>
        </div>
      </nav>
      <Route exact path="/">Sign up</Route>
      <Route path="/login" component={Login}/>
    
    </div>
  );
}

export default App;
