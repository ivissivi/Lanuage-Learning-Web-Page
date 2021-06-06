import styled from 'styled-components'
import {Link as LinkRouter} from 'react-router-dom'
import {Link as LinkScroll} from 'react-scroll'

export const Nav = styled.nav`
  background: #f08a5d;
  display: flex;
  font-size: 16px;
  height: 80px;
  justify-content: center;
  margin-top: -80px;
  position: sticky;
  top: 0;
  z-index: 10;

  @media screen and (max-width: 960px) {
    transition: 0.8s all ease; /*Nav tiks palaists, kad tiks sasniegs attiecīgais size (960px)*/
  }
`;

export const NavbarContainer = styled.div`
  display: flex;
  height: 80px;
  justify-content: space-between;
  max-width: 1100px;
  padding: 0 24px;
  width: 100%;
  z-index: 1;
`;

export const NavLogo = styled(LinkRouter)`
  align-items: center;
  color: white;
  cursor: pointer;
  display: flex;
  font-family: "Lorem ipsum dolor sit amet", Brush Script MT, cursive;
  font-size: 50px;
  font-weight: bold;
  justify-self: flex-start;
  margin-left: 24px;
  text-decoration: none;
`;

export const MobileIcon = styled.div`
  display: none;

  @media screen and (max-width: 768px) {
    color: white;
    cursor: pointer;
    display: block;
    font-size: 30px;
    position: absolute;
    right: 0;
    top: 0;
    transform: translate(-100%, 60%);
  }
`;

export const NavMenu = styled.ul`
  align-items: center;
  display: flex;
  list-style: none;
  margin-right: -22px;
  text-align: center;

  @media screen and (max-width: 768px) {
    display: none;
  }
`;

export const NavItem = styled.li`
  height: 80px;
`;

export const NavLinks = styled(LinkScroll)`
  align-items: center;
  color: white;
  cursor: pointer;
  display: flex;
  height: 100%;
  padding: 0 30px;

  &:hover{
    color: #ff6701;
  }
`;

export const NavBtn = styled.nav`
  align-items: center;
  display: flex;

  @media screen and (max-width: 768px) {
  display: none;
}
`;

export const NavBtnLink = styled(LinkRouter)`
  background: #ff6701;
  border: none;
  border-radius: 50px;
  color: white;
  cursor: pointer;
  font-size: 16px;
  outline: none;
  padding: 10px 22px;
  transiton: all 0.2s ease-in-out;
  text-decoration: none;
  white-space: nowrap;

  &:hover {
    background: white;
    color: black;
    transition: all 0.2s ease-in-out;
}
`;
