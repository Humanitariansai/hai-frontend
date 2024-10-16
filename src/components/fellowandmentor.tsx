import React from 'react';
import '../app/css/fellowandmentor.css'

const FellowAndMentors = () => {
  return (
    <section className="fellow-mentors-section">
      <div className="text-content">
        <h2>Fellow and Mentors</h2>
        <p className="description">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </p>
        <p className="quote">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </p>
        <div className="quote-author">
          <input type="radio" name="selected" /> Dhaka Oke, Product Designer
        </div>
      </div>
      <div className="image-content">
        {/* Placeholder for image */}
        <div className="image-placeholder"></div>
      </div>
    </section>
  );
};

export default FellowAndMentors;
