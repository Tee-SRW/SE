import React from 'react';
import '../../App.css';
import Cards from '../Cards';
import Cardbar from '../Cardbar';
import HeroSection from '../HeroSection';


function Home() {
  return (
    <>
      <HeroSection />
      <Cardbar />
      <Cards />
    </>
  );
}

export default Home;
