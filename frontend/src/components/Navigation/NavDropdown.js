import React, { useState , useContext } from 'react';
import './NavDropdown.css';
import { Link } from 'react-router-dom';
import DataUser from '../../DataUser/DataUser';

function NavDropdown() {
  const statusNavbarDropdown = useContext(DataUser)

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
                to={ statusNavbarDropdown.userType === 1 ? '/Profile'
                    :statusNavbarDropdown.userType === 2 ? '/Profilefreelance'
                    :statusNavbarDropdown.userType === 3 ? '/EditprofileCompany'
                    :'/Profile'
                }
                onClick={() => setClick(!false)}
              >
                Profile
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



