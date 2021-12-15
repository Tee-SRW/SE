import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Cards.css';
import './Cardbar.css';
import CardItem from './CardItem';
import axios from 'axios';
import { Nothing, GraphicFree, GraphicWork, MarketFree, MarketWork, ProgrammingFree, ProgrammingWork } from './CardWorkandFreelance/Carddataset';

function Cards() {
  const pp  = [
    [GraphicFree, GraphicWork], 
    [MarketFree, MarketWork],
    [ProgrammingFree, ProgrammingWork]
  ]

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
  const [number, setNumber] = useState(1);
  const [number2, setNumber2] = useState(1);

  const GraphicButton = () => {
    setDropdownWork(true);
    setClickGraphic(true);

    setClickMarket(false);
    setClickProgramming(false);
    setClickFree(false);
    setClickWork(false);
    setNumber(1);
    console.log(number);
  }
  const MarketButton = () => {
    setDropdownWork(true);
    setClickMarket(true);

    setClickGraphic(false);
    setClickProgramming(false);
    setClickFree(false);
    setClickWork(false);
    setNumber(2);
    console.log(number);
  }
  const ProgrammingButton = () => {
    setDropdownWork(true);
    setClickProgramming(true);

    setClickGraphic(false);
    setClickMarket(false);
    setClickFree(false);
    setClickWork(false);
    setNumber(3);
    console.log(number);
  }  
  
  const baseUsl = "http://203.170.190.226:8080"

  const WorkButton = () => {
    setClickFree(false);
    setClickWork(true);
    setNumber2(2);
    console.log(number2);
    const job = {
      "type_work_id": number,
      "select_id": number2      
    };
    if (number2 === 2) {
      axios.post(`${baseUsl}/getallwork`, { job })
        .then(res => {
          console.log(job);
          console.log(res);
          console.log(res.data.type_work_name);
        })
    }
  }
  const FreeButton = () => {
    setClickFree(true);
    setClickWork(false);
    setNumber2(1);
    console.log(number2);
    const job = {
      "type_work_id": number,
      "select_id": number2
    };
    if (number2 === 1) {
      axios.post(`${baseUsl}/getallwork`, { job })
        .then(res => {
          console.log(job);
          console.log(res.data);
        
          // for (let index = 0; index < res.length; index++) {
          //   const work = [

          //   ]
          // }

        })
    }
  }
  // const Work = [
  //   respond.map(Item,index) => {key=index}{
  //     "type_work_name": "Graphic & Design",
  //       "price_post_work": 3000,
  //       "name_work": "you want",
  //       "firstName": "Pulawat",
  //       "lastName": "Boonsiri",
  //       "image_work_post_freelance": "Image_Work_Post_Freelance1"
  //   }
  // ]
  const work = [
    {

    }
  ]



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
              <button  className={clickFree ? 'HoldbuttonFW redius-L' : 'buttonFW redius-L'}
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
              {GraphicFree.map((Item, index) => {
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
                          <h5 className='cards__item__text'>{Item.text2}</h5>
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
