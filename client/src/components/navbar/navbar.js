import React from 'react';
import './navbar.css';
import logo from "../../logo.svg";
import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <nav className="navbar navbar-expand-lg">
  <div className="container-fluid">
  <img src={logo} className="App-logo" alt="logo" />
    <a className="navbar-brand" href='/'>MERN Google Books</a>
    <div className="empty" id="navbarNav">
      <ul className="navbar-nav">
        <li className="nav-item">
          <Link className="link" to="/">Search</Link>
        </li>
        <li className="nav-item">
          <Link className="link" to="/saved">Saved</Link>
        </li>
      </ul>
    </div>
  </div>
</nav>
    )
}

export default Navbar;