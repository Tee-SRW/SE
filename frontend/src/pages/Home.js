import React , {useState} from 'react';
import Cards from '../components/Cards';
import Cardbar from '../components/Cardbar';
import HeroSection from '../components/HeroSection';
import Navbar from "../components/Navbar";


function Home() {
  const [loggedIn,setloggedIn] = useState(true);
  return (
    <>
      <Navbar {...{ loggedIn }} />
      <HeroSection />
      <Cards />
    </>
  );
}

export default Home;
