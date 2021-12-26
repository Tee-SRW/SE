import React from 'react';
import Contents from '../components/HomeContent/Contents';
import HeroSection from '../components/HomeHeroSection/HeroSection';


function Home(props) {

  const userWorkSelectID = (workSelected) => {
    props.onUpdateDataUser(workSelected)
  }
  return (
    <>
      <HeroSection />
      <Contents userWorkSelectID={userWorkSelectID}/>
    </>
  );
}

export default Home;
