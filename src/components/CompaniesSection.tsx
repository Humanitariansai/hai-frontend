import React from 'react';
import '../app/css/companiesSection.css'

const CompaniesSection: React.FC = () => {
  return (
    <div className="companies-section">
      <h2>Companies we have worked with.</h2>
      <div className="companies-circles">
        <div className="circle"></div>
        <div className="circle"></div>
        <div className="circle"></div>
        <div className="circle"></div>
        <div className="circle"></div>
        <div className="circle"></div>
      </div>
    </div>
  );
};

export default CompaniesSection;
