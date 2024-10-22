import React from 'react';
import '../../app/css/index.css';
import '../../app/css/component/mentor/index.css';

const MentorSection = () => {
  return (
   <div className='mentor-container'> 
      <div className="mentors-section">
        <div className="mentor-content">
            <h1>Fellow and Mentors</h1>
            <p className="description">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
            <div className="testimonial">
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                <div className="author">
                    <div className="author-image"></div>
                    <p>Dhaka Oke, Product Designer</p>
                </div>
            </div>
        </div>
        <div className="mentor-images">
            <div className="white-box"></div>
            <div className="black-box"></div>
        </div>
    </div>

    <div className="companies-section">
        <h2>Companies we have worked with.</h2>
        <div className="companies-logos">
            <div className="circle-one"></div>
            <div className="circle-one"></div>
            <div className="circle-one"></div>
            <div className="circle-one"></div>
            <div className="circle-one"></div>
        </div>
    </div>
   </div>
  );
};

export default MentorSection;