import React from 'react';
import HeroScreen from '../components/hero';
import '../app/css/index.css';
import { NAV_LINKS } from '../constants/index';
import FeatureContainer from '../components/featureContainer';
import GridCardContainer from '../components/gridCardContainer';
import GridCard from '../components/gridCard';

const About = () => {
  const homeTitle = NAV_LINKS.find((element) => element.label === 'About')?.title || 'Default Title';
  return (
    
   <>
    <HeroScreen title={homeTitle}/>
    <GridCardContainer/>
    <FeatureContainer/>
    <GridCard/>
   </>
  );
};

export default About;