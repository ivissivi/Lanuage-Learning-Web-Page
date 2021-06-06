import styled from 'styled-components';
import {FaTimes} from 'react-icons/fa';
import {Link as LinkRouter} from 'react-router-dom';
import {Link as LinkScroll} from 'react-scroll';

export const Icon = styled.div`
  background: transparent;
  cursor: pointer;
  font-size: 32px;
  outline: none;
  position: absolute;
  right: 24px;
  top: 19px;
`;

export const CloseIcon = styled(FaTimes)`
  color: white;
`;

export const SidebarContainer = styled.aside`
  align-items: center;
  background: #ffc288;
  display: grid;
  height: 100%;
  left: 0;
  position: fixed;
  top: 0;
  transition: 0.3s ease-in-out;
  width: 100%;
  z-index: 999;
  opacity: ${({isOpen}) => (isOpen ? '100%' : '0')};
  top: ${({isOpen}) => (isOpen ? '0' : '-100%')};
`;

export const SidebarWrapper = styled.div`
  color: white;
`;

export const SidebarMenu = styled.ul`
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: repeat(6, 80px);
  text-align: center;

  @media screen and (max-width: 480px){
    grid-template-rows: repeat(6, 60px);
  }
`;

export const SidebarLink = styled(LinkScroll)`
  align-items: center;
  color: white;
  cursor: pointer;
  display: flex;
  font-size: 24px;
  justify-content: center;
  list-style: none;
  text-decoration: none;
  transition: 0.2s ease-in-out;
  text-decoration: none;

  &:hover {
    color: #ff6701;
    transition: 0.2s ease-in-out;
  }
`;

export const SidebarBtnWrap = styled.div`
  display: flex;
  justify-content: center;
  padding: 10px;
`;

export const SidebarRoute = styled(LinkRouter)`
  background: #ff6701;
  border-radius: 50px;
  color: black;
  cursor: pointer;
  font-size: 16px;
  outline: none;
  padding: 16px 64px;
  transition: all 0.2 ease-in-out;
  text-decoration: none;
  white-space: nowrap;

  &:hover {
      background: white;
      color: black;
      transition: all 0.2s ease-in-out;
  }
`;
