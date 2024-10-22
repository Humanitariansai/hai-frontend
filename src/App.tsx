import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/navigation/Navbar';
import Home from './pages/home/home';
import About from './pages/about';
import Project from './pages/projects';
import Fellows from './pages/fellows';
import Mentors from './pages/mentors';
import Donate from './pages/donate';

const App = () => {
  return (
    <Router>
     <Navbar/>
     <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/about" element={<About/>} />
        <Route path="/projects" element={<Project/>} />
        <Route path="/fellows" element={<Fellows/>} />
        <Route path="/mentors" element={<Mentors/>} />
        <Route path="/donate" element={<Donate/>} />
      </Routes>
      {/* Footer and contact page */}
    </Router>
  );
};

export default App;