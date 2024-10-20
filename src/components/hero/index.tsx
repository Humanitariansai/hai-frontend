import React from 'react';
import '../../app/css/index.css';

interface HeroScreenProps {
  title: string;
}

const HeroScreen = ({title}: HeroScreenProps) => {
  return (
    <div className='hero-container'>
      <div className='content'>
        <h1>{title}</h1>
        <p className='hero-text'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
        <button className="btn btn-medium">Our Mission</button>
      </div>
    </div>
  );
};

export default HeroScreen;