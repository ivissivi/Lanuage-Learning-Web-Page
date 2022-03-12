import React from 'react'
import {
  Icon,
  CloseIcon,
  SidebarContainer,
  SidebarWrapper,
  SidebarMenu,
  SidebarLink,
  SidebarBtnWrap,
  SidebarRoute
} from './SidebarElements';

const Sidebar = ({ isOpen, toggle }) => {
  return (
    <>
    <SidebarContainer isOpen={isOpen} onClick={toggle}>
      <Icon onClick={toggle}>
      <CloseIcon />
      </Icon>
      <SidebarWrapper>
        <SidebarMenu>
          <SidebarLink to="services" onClick={toggle}>
            Pakalpojumi
          </SidebarLink>
          <SidebarLink to="about" onClick={toggle}>
            Par mums
          </SidebarLink>
        </SidebarMenu>
        <SidebarBtnWrap>
          <SidebarRoute to="/registration" onClick={toggle}>
            Reģistrēties
          </SidebarRoute>
        </SidebarBtnWrap>
        <SidebarBtnWrap>
          <SidebarRoute to='/login' onClick={toggle}>
            Autorizēties
          </SidebarRoute>
        </SidebarBtnWrap>
      </SidebarWrapper>
    </SidebarContainer>
  </>
  );
};

export default Sidebar;
