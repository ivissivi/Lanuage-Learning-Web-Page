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

  const [loginStatus, setLoginStatus] = useState('');

  Axios.defaults.withCredentials = true;

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
      <Nav>
        <NavbarContainer>
          <NavLogo to='/' onClick={toggleHome}>LanguLearn</NavLogo>
          <MobileIcon onClick={toggle}>
            <FiBook />
          </MobileIcon>
            <NavMenu>
            </NavMenu>
              <NavBtn>
                <NavBtnLink to="/">{loginStatus}</NavBtnLink>
              </NavBtn>
          </NavbarContainer>
        </Nav>
      </>
    );
};

export default Navbar;
