import React , {useState} from 'react';
import '../../App.css';
import Cards from '../Cards';
import Cardbar from '../Cardbar';
import HeroSection from '../HeroSection';
import Navbar from "../Navbar";


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
