import React from 'react';
import HeroScreen from '../components/hero';
import '../app/css/index.css';
import { NAV_LINKS } from '../constants/index';
import GridCardContainer from '../components/gridCardContainer';
import FeatureContainer from '../components/featureContainer';
import GridCard from '../components/gridCard';

const Fellows = () => {
  const homeTitle = NAV_LINKS.find((element) => element.label === 'Fellows')?.title || 'Default Title';
  return (
   <>
    <HeroScreen title={homeTitle}/>
    <GridCardContainer/>
    <FeatureContainer/>
    <GridCard/>
   </>
  );
};

export default Fellows;