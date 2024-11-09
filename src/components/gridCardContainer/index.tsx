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
                <h2>Headline: Professor Nik Bear Brown | CEO</h2>
                <p>Associate Teaching Professor at Northeastern University, leading courses and projects in AI, machine learning, and computational biology. Education includes a PhD in Computer Science from UCLA, an MS in Information Design and Visualization from Northeastern, and an in-progress MS in Finance/MBA. Spearheads AI for Education Project, focusing on adaptive learning technologies, and collaborates with prestigious institutions like Harvard Medical School and the Broad Institute. Published author and recognized for fostering innovation in education.</p>
                <button className="learn-more">Learn More</button>
            </div>
        </div>
        <div className="grid-item light-bg">
            <div className="content-box">
                <h2>Megha Patel | CTO</h2>
                <p>Megha leads AI projects that transform business processes, showcasing the benefits of cutting-edge technology. As a Data Analyst Intern at 3Phase Elevator Corp, I led a major SQL-based data consolidation initiative, creating PowerBI visualizations that informed strategic decisions during a company merger. My work optimized resource allocation, maintenance schedules, and compliance. Certified as a Microsoft Power BI Data Analyst Associate, I develop synthetic data sets for testing, enhancing system reliability. My career focus is using data and AI to drive significant improvements across industries.</p>
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