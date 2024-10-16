import React from 'react';
import '../app/css/navbar.css'

const NavigationBar: React.FC = () => {
  return (
    <nav className="navbar">
      <div className="navbar-logo">
        HUMANS<span>&gt;</span>AI
      </div>
      <ul className="navbar-links">
        <li><a href="#about">About</a></li>
        <li><a href="#projects">Projects</a></li>
        <li><a href="#fellows">Fellows</a></li>
        <li><a href="#mentors">Mentors</a></li>
        <li><a href="#donate">Donate</a></li>
        <li><a href="#connect">Connect</a></li>
      </ul>
      <div className="navbar-donate">
        <button className="donate-button">Donate</button>
      </div>
    </nav>
  );
};

export default NavigationBar;
