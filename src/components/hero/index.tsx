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
        <p className='hero-text'>Humanitarians AI is dedicated to creating and supporting projects that leverage AI for social good. Our two core projects include:The Fellows and Mentors program and AI for Good projects.</p>
        <button className="btn btn-medium">Our Mission</button>
      </div>
    </div>
  );
};

export default HeroScreen;