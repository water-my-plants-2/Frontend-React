import React from 'react';
import './App.css';
import FormReg2 from './FormReg2'
import Nav from './Nav'
import Profile from './Profile';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'


function App() {
  return (
    <Router>
    <div className="App">
     <Nav />
     <Route path='/Register' component={FormReg2}/>
     <Route path='/Profile' component={Profile}/>
    </div>
    </Router>
  );
}

export default App;
