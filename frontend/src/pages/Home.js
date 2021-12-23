import React , {useState} from 'react';
import Cards from '../components/Cards';
import Cardbar from '../components/Cardbar';
import HeroSection from '../components/HomeHeroSection/HeroSection';


function Home() {
  return (
    <>
      <HeroSection />
      <Cards />
    </>
  );
}

export default Home;
