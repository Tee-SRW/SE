import React from 'react';
import { Link } from 'react-router-dom';
import './Cardbar.css';



function Cardbar() {
    return (
        <div className='cardbar'>
            <div className='cardbar-container'>
                <h3>Cardbar spaceeeeeeeeeee</h3>    
                <div >
                    <ul className='a'>      {/*Think*/}
                        <li className='a'>
                                Graphic & Design
                        </li>
                        <li className='a'>
                                Market
                        </li>
                        <li className='a'>
                                Programming
                        </li>             
                    </ul>
                </div>
            </div>
        </div>
    );
}

export default Cardbar;