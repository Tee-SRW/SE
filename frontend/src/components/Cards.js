import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Cards.css';
import './Cardbar.css';
import CardItem from './CardItem';

function Cards() {
  const [click, setClick] = useState(false);
  const [dropdownWorkGraphic, setDropdownWorkGraphic] = useState(false);
  const [dropdownWorkMarket, setDropdownWorkMarket] = useState(false);
  const [dropdownWorkProgramming, setDropdownWorkProgramming] = useState(false);

  const handleClick = () => setClick(!click);
  const ToggleDropdownWorkGraphic = () => {
      setDropdownWorkGraphic(dropdownWorkGraphic ? false : true);
  }
  const ToggleDropdownWorkMarket = () => {
      setDropdownWorkMarket(dropdownWorkMarket ? false : true);
  }
  const ToggleDropdownWorkProgramming = () => {
      setDropdownWorkProgramming(dropdownWorkProgramming ? false : true);
  }

  return (
    <div>
      <div className='cardbar'>
        <div className='cardbar-container'>
          <div>
            <div className='btn-group '>
              <button className='button' 
                onClick={ToggleDropdownWorkGraphic}
                onClick={() => setDropdownWorkMarket(false)} 
                onClick={() => setDropdownWorkProgramming(false)}
              >
                <i class="fas fa-palette fa-3x" />
                <h3>Graphic & Design</h3>
              </button>
              <button className='button' 
                onClick={ToggleDropdownWorkMarket}
                onClick={() => setDropdownWorkGraphic(false)} 
                onClick={() => setDropdownWorkProgramming(false)}
              >
                <i class="fas fa-chart-line fa-3x" />
                <h3>Market</h3>
              </button>
              <button className='button' 
                onClick={ToggleDropdownWorkProgramming}
                onClick={() => setDropdownWorkGraphic(false)} 
                onClick={() => setDropdownWorkMarket(false)}
              >
                <i class="fas fa-laptop-code fa-3x" />
                <h3>Programming</h3>
              </button>
            </div>
            <div className={dropdownWorkGraphic ? 'btn-group2 Clicked' : 'btn-group2'}>
              <button className='button redius-L'>
                <Link to='/' className='buttonwork-link'>
                  หาฟรีแลนซ์
                </Link>
              </button>
              <button className='button redius-R'>
                <Link to='/' className='buttonwork-link'>
                  หางาน
                </Link>
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className='cards'>
        <div className='cards__container'>
          <div className='cards__wrapper'>
            <ul className='cards__items'>
              <CardItem
                src='images/img-9.jpg'
                text='Explore the hidden waterfall deep inside the Amazon Jungle'
                price='ราคา :9xxx'
                srcprofile='images/img-9.jpg'
                label='Adventure'
                path='/services'
              />
              <CardItem
                src='images/img-2.jpg'
                text='Travel through the Islands of Bali in a Private Cruise'
                price='ราคา :9xxx'
                srcprofile='images/img-2.jpg'
                label='Luxury'
                path='/services'
              />
              <CardItem
                src='images/img-3.jpg'
                text='Set Sail in the Atlantic Ocean visiting Uncharted Waters'
                price='ราคา :9xxx'
                srcprofile='images/img-3.jpg'
                label='Mystery'
                path='/services'
              />
              <CardItem
                src='images/img-4.jpg'
                text='Experience Football on Top of the Himilayan Mountains'
                price='ราคา :9xxx'
                srcprofile='images/img-4.jpg'
                label='Adventure'
                path='/products'
              />
              <CardItem
                src='images/img-8.jpg'
                text='Ride through the Sahara Desert on a guided camel tour'
                price='ราคา :9xxx'
                srcprofile='images/img-8.jpg'
                label='Adrenaline'
                path='/sign-up'
              />
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Cards;
