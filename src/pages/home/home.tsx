import React from 'react';
import HeroScreen from '../../components/hero';
import '../../app/css/index.css';
import { NAV_LINKS } from '../../constants/index';
import FeatureContainer from '../../components/featureContainer';
import MentorSection from '../../components/mentorSection';

const Home = () => {
  const homeTitle = NAV_LINKS.find((element) => element.label === 'Home')?.title || 'Default Title';
  return (
   <>
    <HeroScreen title={homeTitle} bgClassName="hero-home"/>
    <FeatureContainer/>
    <MentorSection/>
   </>
  );
};

export default Home;