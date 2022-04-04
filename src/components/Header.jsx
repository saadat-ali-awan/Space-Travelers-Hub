import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import logo from '../assets/logo.png';
import './Header.css';

const Header = () => (
  <header className="header-container">
    <div className="header-inner">
      <Link to="/" className="header-logo">
        <img src={logo} alt="Logo" />
        <div>
          Space Travelers&apos; Hub
        </div>
      </Link>
      <nav className="header-nav">
        <ul>
          <li>
            <NavLink to="/rockets">
              Rockets
            </NavLink>
          </li>
          <li>
            <NavLink to="/dragons">
              Dragons
            </NavLink>
          </li>
          <li>
            <NavLink to="/missions">
              Missions
            </NavLink>
          </li>
          <li>
            <NavLink to="/profile">
              My Profile
            </NavLink>
          </li>
        </ul>
      </nav>
    </div>
  </header>
);

export default Header;
