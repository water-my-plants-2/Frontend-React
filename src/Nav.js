import React from 'react'
import * as ReactBootStrap from 'react-bootstrap'
import { useDarkMode } from './useDarkMode'

export default function NavDropdownExample() {
  // const handleSelect = (eventKey) => alert(`selected ${eventKey}`);
  const [darkMode, setDarkMode] = useDarkMode(false)
  const toggleMode = e =>{
    e.preventDefault()
    setDarkMode(!darkMode)
  }
  return (
    <div>
    <ReactBootStrap.Nav variant="pills" activeKey="1">
        <h3>Plant Parenthood</h3>
      <ReactBootStrap.Nav.Item>
        <ReactBootStrap.Nav.Link eventKey="1"href="/">
          Home
        </ReactBootStrap.Nav.Link>
      </ReactBootStrap.Nav.Item>
      <ReactBootStrap.Nav.Item>
        <ReactBootStrap.Nav.Link eventKey="2" title="Item" href="/about">
          About
        </ReactBootStrap.Nav.Link>
      </ReactBootStrap.Nav.Item>
      <ReactBootStrap.NavDropdown title="Login/Sign-Up" id="nav-dropdown">
        <ReactBootStrap.NavDropdown.Item href="/login">Login</ReactBootStrap.NavDropdown.Item>
        <ReactBootStrap.NavDropdown.Item href="/Register">Register</ReactBootStrap.NavDropdown.Item>
        <ReactBootStrap.NavDropdown.Item href="/Profile">Profile</ReactBootStrap.NavDropdown.Item>
      </ReactBootStrap.NavDropdown>
      <ReactBootStrap.NavDropdown title="Plants" id="nav-dropdown">
        <ReactBootStrap.NavDropdown.Item href="/plants">Your Plants</ReactBootStrap.NavDropdown.Item>
        <ReactBootStrap.NavDropdown.Item href="/plant-form">Add Plants</ReactBootStrap.NavDropdown.Item>
      </ReactBootStrap.NavDropdown>
    </ReactBootStrap.Nav>
    <ReactBootStrap.Nav.Item class='dark-mode__toggle'
          onClick={toggleMode}
          className={darkMode ? 'toggle toggled' : 'toggle'}>
    </ReactBootStrap.Nav.Item>
    </div>
  )
}