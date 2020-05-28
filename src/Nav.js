import React from 'react'
import * as ReactBootStrap from 'react-bootstrap'
import Login from './Login';
import { Route, Link } from 'react-router-dom';
import Plants from './Plants-Page/Plants';
import PlantsForm from './Plants-Page/Plants-Form'
import NavDropdown from 'react-bootstrap/NavDropdown'
import Nav from 'react-bootstrap/Nav'


export default function NavDropdownExample() {
    const handleSelect = (eventKey) => alert(`selected ${eventKey}`);
    return (
    //   <ReactBootStrap.Nav variant="pills" activeKey="1" onSelect={handleSelect}>
    //     <ReactBootStrap.Nav.Item>
    //       <ReactBootStrap.Nav.Link eventKey="1" href="#/home">
    //         Home
    //       </ReactBootStrap.Nav.Link>
    //     </ReactBootStrap.Nav.Item>
    //     <ReactBootStrap.Nav.Item>
    //       <ReactBootStrap.Nav.Link eventKey="2" href="#/plants">
    //         Plants
    //       </ReactBootStrap.Nav.Link>
    //     </ReactBootStrap.Nav.Item>
    //     <ReactBootStrap.NavDropdown title="Login/Sign-Up" id="nav-dropdown">
    //       <ReactBootStrap.NavDropdown.Item eventKey="4.1">Login</ReactBootStrap.NavDropdown.Item>
    //       <ReactBootStrap.NavDropdown.Item eventKey="4.2">Resgister</ReactBootStrap.NavDropdown.Item>
    //       <ReactBootStrap.NavDropdown.Item eventKey="4.1">Profile</ReactBootStrap.NavDropdown.Item>
    //     </ReactBootStrap.NavDropdown>
    // </ReactBootStrap.Nav>


        <Nav variant="pills" activeKey="1" onSelect={handleSelect}>
             <h3>PLANT PARENTHOOD</h3>
      <Nav.Item>
          <Link to="/" />
        <Nav.Link eventKey="1" href="#/home">
          Home
        </Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link eventKey="2" title="Item">
          About
        </Nav.Link>
      </Nav.Item>
      <NavDropdown title="Account" id="nav-dropdown">
        <NavDropdown.Item eventKey="4.1">Register</NavDropdown.Item>
        <NavDropdown.Item eventKey="4.1">Login</NavDropdown.Item>
        <NavDropdown.Divider />
        <NavDropdown.Item eventKey="4.4">Profile</NavDropdown.Item>
      </NavDropdown>
      <NavDropdown title="Plants" id="nav-dropdown">
        {/* <NavDropdown.Item eventKey="4.1">Plants</NavDropdown.Item> */}
        <NavDropdown.Divider />
        <NavDropdown.Item eventKey="4.3">Your Plants</NavDropdown.Item>
        <NavDropdown.Item eventKey="4.4">Add Plants</NavDropdown.Item>
      </NavDropdown>
    </Nav>


        // <Route exact path="/">Sign up</Route>
        // <Route path="/login" component={Login}/>
        // <Route path="/plant-form" component={PlantsForm}/>
        // <Route path='/plants' component={Plants}/> 



    );
  }