import React from 'react';
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
          <SidebarLink to="languages" onClick={toggle}>
            Valodas
          </SidebarLink>
          <SidebarLink to="services" onClick={toggle}>
            Pakalpojumi
          </SidebarLink>
          <SidebarLink to="about" onClick={toggle}>
            Par mums
          </SidebarLink>
        </SidebarMenu>
      </SidebarWrapper>
    </SidebarContainer>
  </>
  );
};

export default Sidebar;
