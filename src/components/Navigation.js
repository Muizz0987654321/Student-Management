import React from 'react'
import {BrowserRouter, Route, Switch,NavLink} from 'react-router-dom';

function Navigation() {
    return (
        <>
          <nav className="navbar navbar-expand-sm bg-light navbar-dark">
        <ul className="navbar-nav">
          <li className="nav-item- m-1">
            <NavLink className="btn btn-light btn-outline-primary" to="/home">
              Home
            </NavLink>
          </li>
          <li className="nav-item- m-1">
            <NavLink className="btn btn-light btn-outline-primary" to="/student">
              Student
            </NavLink>
          </li>
          <li className="nav-item- m-1">
            <NavLink className="btn btn-light btn-outline-primary" to="/class">
              Class
            </NavLink>
          </li>
        </ul>
      </nav>  
        </>
    )
}

export default Navigation
