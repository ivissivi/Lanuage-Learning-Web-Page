import React, {useState, useEffect} from 'react';
import {FiBook} from 'react-icons/fi';
import {animateScroll as scroll} from 'react-scroll';
import Axios from 'axios';
import {
  Nav,
  NavbarContainer,
  NavLogo,
  MobileIcon,
  NavMenu,
  NavItem,
  NavLinks,
  NavBtn,
  NavBtnLink
} from './NavbarElements';

const Navbar = ({toggle}) => {

  const [colorChange, setColorChange] = useState(false);
  const [loginStatus, setLoginStatus] = useState('');

  Axios.defaults.withCredentials = true;

  const changeNavbarColor = () => {
    if(window.scrollY >= 80) {
      setColorChange(true);
    } else {
      setColorChange(false);
    }
  };

window.addEventListener('scroll', changeNavbarColor);

const toggleHome = () => {
  scroll.scrollToTop();
}

useEffect(() => {
  Axios.get('http://localhost:3001/login').then((response) => {
    if (response.data.loggedIn === true) {
      setLoginStatus(response.data.user[0].username);
    }
  });
}, []);

  return (
     <>
      <Nav className={colorChange ? 'navbar colorChange' : 'navbar'}>
        <NavbarContainer>
          <NavLogo to='/' onClick={toggleHome}>LanguLearn</NavLogo>
          <MobileIcon onClick={toggle}>
            <FiBook />
          </MobileIcon>
            <NavMenu>
              <NavItem>
                <NavLinks to="services" smooth={true} duration={550}>Pakalpojumi</NavLinks>
              </NavItem>
              <NavItem>
                <NavLinks to="about" smooth={true} duration={550}>Par mums</NavLinks>
              </NavItem>
            </NavMenu>
              {loginStatus == '' ? (
                <NavMenu>
              <NavBtn>
                <NavBtnLink to="/registration">Reģistrēties</NavBtnLink>
              </NavBtn>
              <NavBtn>
                <NavBtnLink to="/login">Autorizēties</NavBtnLink>
              </NavBtn>
              </NavMenu>
            ) : (
              <NavBtn>
                <NavBtnLink to="/">{loginStatus}</NavBtnLink>
              </NavBtn>
              )
              }
          </NavbarContainer>
        </Nav>
      </>
    );
};

export default Navbar;
