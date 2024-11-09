import React from 'react';
import '../../app/css/index.css';
import '../../app/css/component/gridCard/index.css';

const GridCard = () => {
  return (
    <div className="grid-container-two">
        <div className="grid-item dark-bg">
            <div className="content-box">
                <div className="white-square"></div>
            </div>
        </div>
        <div className="grid-item light-bg">
            <div className="content-box">
                <h2>Our Mission</h2>
                <p>Imagine a world where international students contribute significantly to local economies but lack opportunities to grow further. The Humanitarians AI Fellows Program provides essential experience and maintains visa status for these talented graduates, known as "Skunks," through hands-on, project-based learning and impactful AI projects.</p>
                <button className="learn-more">Learn More</button>
            </div>
        </div>
    </div>
  );
};

export default GridCard;