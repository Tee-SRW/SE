import React from 'react';
import '../App.css';
import { Button } from './Button';
import './HeroSection.css';

function HeroSection() {
  return (
    <div className='hero-container'>
      {/*<video src='/videos/video-1.mp4' autoPlay loop muted />*/}
      <img 
      className='JobBackground'
      src='/images/Banner_final1920.png' 
      />
    </div>
  );
}

export default HeroSection;
