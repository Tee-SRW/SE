import React from 'react';
import '../../App.css';
import Cards from '../Cards';
import Cardbar from '../Cardbar';
import HeroSection from '../HeroSection';
import Footer from '../Footer';

function Home() {
  return (
    <>
      <HeroSection />
      <Cardbar />
      <Cards />
      <Footer />
    </>
  );
}

export default Home;
