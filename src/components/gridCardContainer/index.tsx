import React from 'react';
import '../../app/css/index.css';
import '../../app/css/component/gridcontainer/index.css';

const GridCardContainer = () => {
  return (
    <div className="grid-container">
        <div className="grid-item dark-bg">
            <div className="content-box">
                <div className="white-square"></div>
            </div>
        </div>
        <div className="grid-item light-bg">
            <div className="content-box">
                <h2>Our Mission</h2>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                <button className="learn-more">Learn More</button>
            </div>
        </div>
        <div className="grid-item light-bg">
            <div className="content-box">
                <h2>Professor Nik Bear Borwn</h2>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                <button className="learn-more">Learn More</button>
            </div>
        </div>
        <div className="grid-item dark-bg">
            <div className="content-box">
                <div className="dark-square"></div>
            </div>
        </div>
    </div>
  );
};

export default GridCardContainer;