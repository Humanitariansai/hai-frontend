import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Footer from './components/footer';
import Contact from './components/contact';
import CompaniesSection from './components/CompaniesSection';
import AboutScreen from './components/about'
import FellowAndMentors from './components/fellowandmentor'
import AIFeatureSkeleton from './components/aiforgood'

const App = () => {
  return (
    <Router>
      <div>
        <h1>Humans + AI {'>'} AI</h1>
        <Footer/>
        <Contact/>
        <CompaniesSection/>
        <AboutScreen/>
        <FellowAndMentors/>
        <AIFeatureSkeleton/>
      </div>
    </Router>
  );
};

export default App;