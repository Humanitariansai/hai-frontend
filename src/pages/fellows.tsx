import React from 'react';
import HeroScreen from '../components/hero';
import '../app/css/index.css';
import { NAV_LINKS } from '../constants/index';

const Fellows = () => {
  const homeTitle = NAV_LINKS.find((element) => element.label === 'Fellows')?.title || 'Default Title';
  return (
   <>
    <HeroScreen title={homeTitle}/>
   </>
  );
};

export default Fellows;