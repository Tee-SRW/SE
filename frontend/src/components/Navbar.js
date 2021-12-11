import React, { useState, useEffect } from 'react';
import { Button } from './Button';
import { Link } from 'react-router-dom';
import NavDropdown from './NavDropdown';
import './Navbar.css';

function Navbar(props) {

  const [click, setClick] = useState(false);
  const [button, setButton] = useState(true);
  const [dropdown, setDropdown] = useState(false);

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  const ToggleDropdown =() =>{
    setDropdown(dropdown ? false : true);
  }

  const showButton = () => {
    if (window.innerWidth <= 960) {
      setButton(false);
    } else {
      setButton(true);
    }
  };

  useEffect(() => {
    showButton();
  }, []);

  window.addEventListener('resize', showButton);

  return (
    <>
      <nav className='navbarMy'>
        <div className='navbar-container'>
          <Link to='/' className='navbar-logo' onClick={closeMobileMenu}>
            JopMaiFair
            <i class='fab fa-typo3' />
          </Link>
          <div className='menu-icon' onClick={handleClick}>
            <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
          </div>

          <ul className={click ? 'nav-menu active' : 'nav-menu'}>
            {props.loggedIn ?
              //---After Login Navbar---
              <React.Fragment>
                <li className='nav-item'>
                  <Link to='/' className='nav-links' onClick={closeMobileMenu}>
                    สมัครเป็นฟรีแลนด์
                  </Link>
                </li>
                <li className='nav-item'>
                  <Link to="/" className="nav-links" onClick={closeMobileMenu}>
                    Chat
                  </Link>
                </li>
                <li className='nav-item'>
                  <Link to='/' className='nav-links' onClick={closeMobileMenu}>
                    Notification
                  </Link>
                </li>
                <li
                  className='nav-item'
                >
                  <div className='nav-links' onClick={ToggleDropdown}>
                    Config <i className='fas fa-caret-down' />
                  </div>
                  {dropdown && <NavDropdown />}
                </li>
              </React.Fragment>

              : // Login true : false

              //---Before Login Navbar---
              <React.Fragment>
                <li className='nav-item'>
                  <Link to='/Login' className='nav-links ' onClick={closeMobileMenu}>
                    Login
                  </Link>
                </li>
                <li>
                  <Link to='/sign-up' className='nav-links' onClick={closeMobileMenu}>
                    Sign Up
                  </Link>
                </li>
                <li>
                  <Link to='/sign-up' className='nav-links-mobile' onClick={closeMobileMenu}>
                    Sign Up
                  </Link>
                </li>
              </React.Fragment>
            }
          </ul>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
