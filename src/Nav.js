import React from 'react'
import * as ReactBootStrap from 'react-bootstrap'
import './App.css';





export default function NavDropdownExample() {
    // const handleSelect = (eventKey) => alert(`selected ${eventKey}`);
    return (
        <div>
      <ReactBootStrap.Nav variant="pills" activeKey="1">
          <h3>Plant Parenthood</h3>
        <ReactBootStrap.Nav.Item>
          <ReactBootStrap.Nav.Link href="/">
            Home
          </ReactBootStrap.Nav.Link>
        </ReactBootStrap.Nav.Item>
        <ReactBootStrap.Nav.Item>
          <ReactBootStrap.Nav.Link eventKey="2" title="Item" href="/about">
            About
          </ReactBootStrap.Nav.Link>
        </ReactBootStrap.Nav.Item>
        <ReactBootStrap.NavDropdown title="Login/Register" id="nav-dropdown">
          <ReactBootStrap.NavDropdown.Item href="/login">Login</ReactBootStrap.NavDropdown.Item>
          <ReactBootStrap.NavDropdown.Item href="/register">Register</ReactBootStrap.NavDropdown.Item>
        </ReactBootStrap.NavDropdown>
        <ReactBootStrap.NavDropdown title="Profile" id="nav-dropdown">
          <ReactBootStrap.NavDropdown.Item href="/profile">Profile</ReactBootStrap.NavDropdown.Item>
          <ReactBootStrap.NavDropdown.Item href="/plants">Plants</ReactBootStrap.NavDropdown.Item>
         
        </ReactBootStrap.NavDropdown>
      </ReactBootStrap.Nav>
      </div>
    );
  }


