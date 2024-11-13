import React, { useState } from 'react';
import '../../app/css/component/footer/footer.css';
import { FaLinkedin, FaFacebook, FaInstagram, FaTwitter } from 'react-icons/fa';

const Footer = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: ''
  });

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    console.log('Form submitted:', formData);
  };

  return (
    <footer className="footer">
      <div className="contact-form-container">
        <h3 className="form-heading">Connect with us</h3>
        <form onSubmit={handleSubmit} className="contact-form">
          <input
            type="text"
            name="name"
            placeholder="Name"
            value={formData.name}
            onChange={handleChange}
            className="form-input"
          />
          <input
            type="email"
            name="email"
            placeholder="Email"
            value={formData.email}
            onChange={handleChange}
            className="form-input"
          />
          <button type="submit" className="form-button">
            Submit
          </button>
        </form>
      </div>

      <div className="footer-links-container">
        <nav className="footer-nav">
          <a href="/about" className="footer-link">About</a>
          <a href="/projects" className="footer-link">Projects</a>
          <a href="/fellows" className="footer-link">Fellows</a>
          <a href="/" className="footer-link bold-link">HUMANS&gt;AI</a>
          {/* <h3 >HUMANS&gt;AI</h3> */}
          <a href="/mentors" className="footer-link">Mentors</a>
          <a href="/donate" className="footer-link">Donate</a>
          <a href="/" className="footer-link">Contact</a>
        </nav>
        <hr className="footer-divider" />
        <div className="footer-socials">
      <div className="circle">
        <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
          <FaLinkedin />
        </a>
      </div>
      <div className="circle">
        <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
          <FaFacebook />
        </a>
      </div>
      <div className="circle">
        <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
          <FaInstagram />
        </a>
      </div>
      <div className="circle">
        <a href="https://www.x.com" target="_blank" rel="noopener noreferrer" aria-label="X (formerly Twitter)">
          <FaTwitter />
        </a>
      </div>
    </div>
        <div className="footer-terms">
          <p>&copy; 2024 Humanitarians AI. All rights reserved. Humanitarians AI is a 501(c)(3) organization</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
