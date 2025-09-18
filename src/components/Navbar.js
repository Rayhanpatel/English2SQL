import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import './NavbarStyles.css';

const Navbar = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const location = useLocation();

  return (
    <div>
      <nav className="navbar">
        <div className="navbar-menu">
          <ul className="navbar-nav">
            <li className={`nav-item ${location.pathname === '/' ? 'active' : ''}`}>
              <Link className="nav-link" to="/">
                Home
              </Link>
            </li>
            <br/>
            <br/>
            {/* <li className={`nav-item ${location.pathname === '/login' || location.pathname === '/registration' ? 'active' : ''}`}>
              <Link className="nav-link" to="/login">
                Login / Register
              </Link>
            </li> */}
            <li className={`nav-item ${location.pathname === '/database' ? 'active' : ''}`}>
              <Link
                className={`nav-link ${!isLoggedIn ? 'show-tooltip' : ''}`}
                to="/database"
                data-tooltip="Please login first"
              >
                Connect / Change Database
              </Link>
            </li>
            <li className={`nav-item ${location.pathname === '/query' ? 'active' : ''}`}>
              <Link
                className={`nav-link ${!isLoggedIn ? 'show-tooltip' : ''}`}
                to="/query"
                data-tooltip="Please login first"
              >
                Generate Query
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
