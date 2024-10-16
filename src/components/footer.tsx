import React from 'react';
import '../app/css/footer.css'

const Footer: React.FC = () => {
  return (
    <footer className="footer-container">
      <div className="footer-top">
        <ul className="footer-menu">
          <li><a href="/product">Product</a></li>
          <li><a href="/features">Features</a></li>
          <li><a href="/resources">Resources</a></li>
          <li><a href="/">HUMANS &gt; AI</a></li>
          <li><a href="/about">About</a></li>
          <li><a href="/blog">Blog</a></li>
          <li><a href="/support">Support</a></li>
        </ul>
      </div>
      <div className="footer-circles">
        <div className="circle"></div>
        <div className="circle"></div>
        <div className="circle"></div>
        <div className="circle"></div>
        <div className="circle"></div>
      </div>
      <div className="footer-bottom">
        <p>&copy; 2010 – 2020 Privacy – Terms</p>
      </div>
    </footer>
  );
};

export default Footer;
