import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Cards.css';
import './Cardbar.css';
import CardItem from './CardItem';
import { Nothing, GraphicFree, GraphicWork, MarketFree, MarketWork, ProgrammingFree, ProgrammingWork } from './CardWorkandFreelance/Carddataset';

function Cards() {
  const PathFreelance = ['GraphicFree', 'GraphicWork', 'MarketFree', 'MarketWork', 'ProgrammingFree', 'ProgrammingWork'];


  const [click, setClick] = useState(false);
  const [clickGraphic, setClickGraphic] = useState(false);
  const [clickMarket, setClickMarket] = useState(false);
  const [clickProgramming, setClickProgramming] = useState(false);
  const [clickFree, setClickFree] = useState(false);
  const [clickWork, setClickWork] = useState(false);
  const [dropdownWork, setDropdownWork] = useState(false);

  const handleClick = () => setClick(!click);
  const ToggleDropdownWork = () => {
    setDropdownWork(dropdownWork ? false : true);
  }
  const GraphicButton = () => {
    setDropdownWork(true);
    setClickGraphic(true);

    setClickMarket(false);
    setClickProgramming(false);
    setClickFree(false);
    setClickWork(false);
  }  
  const MarketButton = () => {
    setDropdownWork(true);
    setClickMarket(true);

    setClickGraphic(false);
    setClickProgramming(false);
    setClickFree(false);
    setClickWork(false);
  }  
  const ProgrammingButton = () => {
    setDropdownWork(true);
    setClickProgramming(true);

    setClickGraphic(false);
    setClickMarket(false);
    setClickFree(false);
    setClickWork(false);
  }
  const WorkButton = () => {
    setClickFree(false);
    setClickWork(true);
  }
  const FreeButton = () => {
    setClickFree(true);
    setClickWork(false);
  } 
  const Content =()=> {
    if(setClickGraphic(true)) {
        if(setClickFree(true) && setClickWork(false)) {
          return GraphicFree
        }else if(setClickFree(false) && setClickWork(true)){ 
          return GraphicWork
        }else{
          // nothing
        }
    }else if(setClickMarket(true)){
        if(setClickFree(true) && setClickWork(false)) {
          return MarketFree
        }else if(setClickFree(false) && setClickWork(true)){ 
          return MarketWork
        }else{  
          return Nothing
        }
    }else if(setClickProgramming(true)) {
        if(setClickFree(true) && setClickWork(false)) {
          return ProgrammingFree
        }else if(setClickFree(false) && setClickWork(true)){ 
          return ProgrammingWork
        }else{  
          return Nothing
        }
    }
  }



  return (
    <div>
      <div className='cardbar'>
        <div className='cardbar-container'>
          <div>
            <div className='btn-group '>
              <button
                className={clickGraphic ? 'HoldbuttonJob' : 'buttonJob'}
                onClick={GraphicButton}
              >
                <i class="fas fa-palette fa-3x" />
                <h3>Graphic & Design</h3>
              </button>
              <button
                className={clickMarket ? 'HoldbuttonJob' : 'buttonJob'}
                onClick={MarketButton}
              >
                <i class="fas fa-chart-line fa-3x" />
                <h3>Market</h3>
              </button>
              <button
                className={clickProgramming ? 'HoldbuttonJob' : 'buttonJob'}
                onClick={ProgrammingButton}
              >
                <i class="fas fa-laptop-code fa-3x" />
                <h3>Programming</h3>
              </button>
            </div>
            <div className={dropdownWork ? 'btn-group2' : 'Clicked-CardbarJob'}>
              <button className={clickFree ? 'HoldbuttonFW redius-L' : 'buttonFW redius-L'}
                onClick={FreeButton}
              >
                หาฟรีแลนซ์
              </button>
              <button className={clickWork ? 'HoldbuttonFW redius-R' : 'buttonFW redius-R'}
                onClick={WorkButton}
              >
                หางาน
              </button>
            </div>
          </div>
        </div>
      </div>


      <div className='cards'>
        <div className='cards__container'>
          <div className='cards__wrapper'>
            <ul className='cards__items'>
              {MarketWork.map((Item, index) => {
                return (
                  <>
                    <li className='cards__item' key={index}>
                      <Link className='cards__item__link' to={Item.path}>
                        <figure className='cards__item__pic-wrap'
                          data-category={Item.label}
                        >
                          <img
                            className='cards__item__img'
                            src={Item.srcwork}
                            alt='Travel Image'
                          />
                        </figure>
                        <div className='cards__item__info'>
                          <h5 className='cards__item__text'>{Item.text}</h5>
                        </div>
                        <h5 className='cards__item__text_price'>{Item.price}</h5>
                      </Link>
                    </li>
                  </>
                );
              })}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Cards;
