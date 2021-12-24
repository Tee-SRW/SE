import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Cardbar.css';

function Cardbar() {
    const [click, setClick] = useState(false);
    const [dropdownWork, setDropdownWork] = useState(false);
    
    const ToggleDropdownWork = () => {
        setDropdownWork(dropdownWork ? false : true);
    }

    return (
        <div className='cardbar'>
            <div className='cardbar-container'>
                <div>
                    <div className='btn-group '>
                        <button className='button' onClick={ToggleDropdownWork}>
                            <i class="fas fa-palette fa-3x" />
                            <h3>Graphic & Design</h3>
                        </button>
                        <button className='button' onClick={ToggleDropdownWork}>
                            <i class="fas fa-chart-line fa-3x" />
                            <h3>Market</h3>
                        </button>
                        <button className='button' onClick={ToggleDropdownWork}>
                            <i class="fas fa-laptop-code fa-3x" />
                            <h3>Programming</h3>
                        </button>
                    </div>
                    <div className={dropdownWork ? 'btn-group2 Clicked' : 'btn-group2'}>
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
    );
}

export default Cardbar;