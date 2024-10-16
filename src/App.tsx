import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Footer from './components/footer';
import Contact from './components/contact';
import CompaniesSection from './components/CompaniesSection';



const App = () => {
  return (
    <Router>
      <div>
        <h1>Humans + AI {'>'} AI</h1>
        <Footer/>
        <Contact/>
        <CompaniesSection/>
      </div>
    </Router>
  );
};

export default App;