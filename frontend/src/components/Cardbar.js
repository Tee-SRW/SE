import React ,{ useState } from 'react';
import { Link } from 'react-router-dom';
import DropdownButton from 'react-bootstrap/DropdownButton';
import Dropdown from 'react-bootstrap/Dropdown';
import './Cardbar.css';

function Cardbar() {
    const [dropdownWork, setDropdownWork] = useState(false);

    const ToggleDropdownWork =() =>{
        setDropdownWork(dropdownWork ? false : true);
    }

    return (
        <div className='cardbar'>
            <div className='cardbar-container'>
                <div >
                    <div className='btn-group '>      
                        <button className='button'>
                            <h3>Graphic & Design</h3>
                        </button>
                        <button className='button'>
                            <h3>Market</h3>
                        </button>
                        <button className='button'>
                            <h3>Programming</h3>
                        </button>             
                    </div>
                    <div className='btn-group2 '>
                        <button className='button redius-L'>
                            หาฟรีแลนซ์
                        </button>
                        <button className='button redius-R'>
                            หางาน
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Cardbar;