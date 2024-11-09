import React from 'react';
import CardSkeleton from "../cardSkeleton";
import '../../app/css/index.css';

const FeatureContainer = () => {
  return (
   <div className='feature-container'> 
      <div className='content '>
        <h2>AI for Good Projects</h2>
        <p className="subtitle">"Various open-source initiatives aimed at improving education, lyrical literacy, public health, and cognitive engagement and the world through AI."</p>
      </div>
      <div className='feature-card-grid'>
          <CardSkeleton title={"Project Dewey"}/>
          <CardSkeleton title ={"Lyrical Literacy "}/>
          <CardSkeleton title ={"Cognitive Type "}/>
          <CardSkeleton title ={"Community Resource Guide"}/>
      </div>
   </div>
  );
};

export default FeatureContainer;