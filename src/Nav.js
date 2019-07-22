import React, { Component } from 'react'
import logo from './superologo.jpg';
import { Link } from 'react-router-dom'
class Nav extends Component {
  render () {
    return (
    <nav className="navbar fixed-top navbar-expand-sm navbar-dark bg-dark">
        <Link to={"/"}>
      <div className="navbar-brand col-1">
        <img src={logo} className="Navbar-logo" alt="logo" />
      </div>
      </Link>
      <div className="form-group justify-content-center row col-10 my-2">
      </div>
 
    </nav>
  );
 }
}


export default (Nav)