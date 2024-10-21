import React from 'react';
import CardSkeleton from "../cardSkeleton";
import '../../app/css/index.css';

const FeatureContainer = () => {
  return (
   <div className='feature-container'> 
      <div className='content '>
        <h2>AI for Good Projects</h2>
        <p className="subtitle">"If you don’t try this app, you won’t become the superhero you were meant to be"</p>
      </div>
      <div className='feature-card-grid'>
          <CardSkeleton/>
          <CardSkeleton/>
          <CardSkeleton/>
          <CardSkeleton/>
      </div>
   </div>
  );
};

export default FeatureContainer;