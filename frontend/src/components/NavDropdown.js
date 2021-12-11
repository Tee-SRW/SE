import React, { useState } from 'react';
import './NavDropdown.css';
import { Link } from 'react-router-dom';

function NavDropdown() {
  const [click, setClick] = useState(false);

  const handleClick = () => setClick(!click);

  return (
    <>
      <ul
        onClick={handleClick}
        className={click ? 'MyNavdropdown-menu clicked' : 'MyNavdropdown-menu'}
      > 
            <li>
              <Link
                className='MyNavdropdown-link'
                to='/Profile'
                onClick={() => setClick(!false)}
              >
                Profile
              </Link>
            </li>
            <li>
              <Link
                className='MyNavdropdown-link'
                to='/Setting'
                onClick={() => setClick(!false)}
              >
                Setting
              </Link>
            </li>
            <li>
              <Link
                className='MyNavdropdown-link'
                to='/'
                onClick={() => setClick(!false)}
              >
                Logout
              </Link>
            </li> 
      </ul>
    </>
  );
}
/*  {MenuItems.map((item, index) => {
          return (
            <li key={index}>
              <Link
                className={item.cName}
                to={item.path}
                onClick={() => setClick(!false)}
              >
                {item.title}
              </Link>
            </li>
          );
        })}         
          
*/
export default NavDropdown;



