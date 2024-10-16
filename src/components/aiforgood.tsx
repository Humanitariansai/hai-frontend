import React from 'react';
import '../app/css/aiforgood.css'

const AIFeatureSkeleton = () => {
  return (
    <section className="ai-projects-section">
      <h2 className="section-title">AI for Good Projects</h2>
      <p className="section-tagline">
        "If you don’t try this app, you won’t become the superhero you were meant to be"
      </p>
      <div className="features-grid">
        <div className="feature-card skeleton">
          <div className="feature-icon skeleton-icon"></div>
          <div className="feature-title skeleton-text">Special Feature</div>
          <div className="feature-link skeleton-text">See More &gt;</div>
        </div>
        <div className="feature-card skeleton">
          <div className="feature-icon skeleton-icon"></div>
          <div className="feature-title skeleton-text">Special Feature</div>
          <div className="feature-link skeleton-text">See More &gt;</div>
        </div>
        <div className="feature-card skeleton">
          <div className="feature-icon skeleton-icon"></div>
          <div className="feature-title skeleton-text">Special Feature</div>
          <div className="feature-link skeleton-text">See More &gt;</div>
        </div>
        <div className="feature-card skeleton">
          <div className="feature-icon skeleton-icon"></div>
          <div className="feature-title skeleton-text">Special Feature</div>
          <div className="feature-link skeleton-text">See More &gt;</div>
        </div>
      </div>
    </section>
  );
};

export default AIFeatureSkeleton;
