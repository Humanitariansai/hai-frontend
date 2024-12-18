import React from 'react';
import '../../app/css/index.css';

const CardSkeleton = ({title}) => {
  return (
    <div className="feature-card">
      <div className="feature-card-image">
          <div className="shape square"></div>
      </div>
      <div className="feature-card-content">
          <h2>{title}</h2>
          <a href="#">See More {'>'}</a>
      </div>
    </div>
  );
};

export default CardSkeleton;