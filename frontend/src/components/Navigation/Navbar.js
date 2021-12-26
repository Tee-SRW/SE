import React, { useState, useContext } from 'react';
import { Link } from 'react-router-dom';
import NavDropdown from './NavDropdown';
import './Navbar.css';
import DataUser from '../../DataUser/DataUser';


function Navbar(props) {
  const statusNavbar = useContext(DataUser)

  const [click, setClick] = useState(false);
  const [dropdown, setDropdown] = useState(false);
  const userLogout = (dataUserLogout) => {
    // console.log(dataUser)
    props.onUpdateDataUser(dataUserLogout)
  }

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  const ToggleDropdown = () => {
    setDropdown(dropdown ? false : true);
  }

  const onMouseEnter = () => {
    if (window.innerWidth < 960) {
      setDropdown(false);
    } else {
      setDropdown(true);
    }
  };

  const onMouseLeave = () => {
    if (window.innerWidth < 960) {
      setDropdown(false);
    } else {
      setDropdown(false);
    }
  };

  let showNavbarUser = <></>
  if (statusNavbar.userType === 0) { //  NotLoggedin Navbar
    showNavbarUser =
    <ul className={click ? 'nav-menu active' : 'nav-menu'}>
      <li className='nav-item'>
        <Link to='/Login' className='nav-links ' onClick={closeMobileMenu}>
          Login
        </Link>
      </li>
      <li>
        <Link to='/ChooseCreate' className='nav-links' onClick={closeMobileMenu}>
          Sign Up
        </Link>
      </li>
    </ul>
  } 
  else if (statusNavbar.userType === 1) {    //  Loggedin Normal User Navbar
    showNavbarUser =
    <ul className={click ? 'nav-menu active' : 'nav-menu'}>
      <li className='nav-item'>
        <Link to='/Freelance' className='nav-links' onClick={closeMobileMenu}>
          สมัครเป็นฟรีแลนด์
        </Link>
      </li>
      <li className='nav-item'>
        <div className='nav-links-none'>
          {/*  */}

        </div>
      </li>
      <li
        className='nav-item'
        onMouseLeave={onMouseLeave}
      >
        <div className='nav-links' onClick={handleClick} onClick={ToggleDropdown}>
          <i class="far fa-user fa-2x" /><i className='fas fa-caret-down fa-2x' />
        </div>
        {dropdown && <NavDropdown userLogout={userLogout} />}
      </li>
    </ul>
  } 
  else if (statusNavbar.userType === 2) {        //  Loggedin Freelance Navbar
    showNavbarUser =
    <ul className={click ? 'nav-menu active' : 'nav-menu'}>
      <li className='nav-item'>
        <Link to="/Createworkfreelance" className="nav-links" onClick={closeMobileMenu}>
          สร้างงาน
        </Link>
      </li>
      <li className='nav-item'>
        <div className='nav-links-none'>
          
        </div>
      </li>
      <li
        className='nav-item'
        onMouseLeave={onMouseLeave}
      >
        <div className='nav-links' onClick={handleClick} onClick={ToggleDropdown}>
          <i class="far fa-user fa-2x" /><i className='fas fa-caret-down fa-2x' />
        </div>
        {dropdown && <NavDropdown />}
      </li>
    </ul>
  } 
  else if (statusNavbar.userType === 3) {        //  Loggedin Company Navbar
    showNavbarUser =
    <ul className={click ? 'nav-menu active' : 'nav-menu'}>
      <li className='nav-item'>
        <Link to='/CreateworkCompany' className='nav-links' onClick={closeMobileMenu}>
          ประกาศรับงาน
        </Link>
      </li>
      <li className='nav-item'>
        <div className='nav-links-none'>
        </div>
      </li>
      <li
        className='nav-item'
        onMouseLeave={onMouseLeave}
      >
        <div className='nav-links' onClick={handleClick} onClick={ToggleDropdown}>
          <i class="far fa-user fa-2x" /><i className='fas fa-caret-down fa-2x' />
        </div>
        {dropdown && <NavDropdown />}
      </li>
    </ul>
  }else { //  NotLoggedin Navbar
    showNavbarUser =
    <ul className={click ? 'nav-menu active' : 'nav-menu'}>
    <li className='nav-item'>
      <Link to='/Login' className='nav-links ' onClick={closeMobileMenu}>
        Login
      </Link>
    </li>
    <li>
      <Link to='/ChooseCreate' className='nav-links' onClick={closeMobileMenu}>
        Sign Up
      </Link>
    </li>
    <li>
      <Link to='/ChooseCreate' className='nav-links-mobile' onClick={closeMobileMenu}>
        Sign Up
      </Link>
    </li>
  </ul>
  } 
  


  return (
    <>
      <nav className='navbarMy'>
        <div className='navbar-container'>
          <Link to='/' className='navbar-logo' onClick={closeMobileMenu}>
            <img
              className='navbar-brand'
              src='images/Job_mai_fair_logo.png'
              alt='JobmaifairLogo'
              width="60px" height="60px"
            />
            JobMaiFair
          </Link>
          {showNavbarUser}
          {/* <li className='nav-item' >
            <div to='/Freelance' className='nav-linksss' onClick={toggleLogin} >
              Change
            </div>
          </li> */}
      </div>
    </nav>
    </>
  );
}

export default Navbar;
