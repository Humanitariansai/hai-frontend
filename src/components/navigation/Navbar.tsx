import React from 'react';
import { NavLink } from 'react-router-dom';
import { NAV_LINKS } from '../../constants';
import '../../app/css/component/navbar/index.css';

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <NavLink to="/">HUMANS<span>&gt;</span>AI</NavLink>
      </div>

      <ul className="navbar-links">
        {NAV_LINKS.map((link) => (
          link.label !== 'Home' && (
            <li key={link.href}>
            <NavLink 
              to={link.href}
              className={'navbar-title'}
            >{link.label}</NavLink>
          </li>
          )
        ))}
      </ul>

      <div className="navbar-donate">
        <button className="btn btn-small">Donate</button>
      </div>
    </nav>
  );
};

export default Navbar;