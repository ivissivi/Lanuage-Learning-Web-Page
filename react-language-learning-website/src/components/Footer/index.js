import React from 'react';
import {
  FooterContainer,
  FooterWrap,
  FooterLinksContainer,
  FooterLinksWrapper,
  FooterLinkItems,
  FooterLink,
  Copyrights
} from './FooterElements';

const Footer = () => {
  return (
    <>
      <FooterContainer id="about">
        <FooterWrap>
          <FooterLinksContainer>
            <FooterLinksWrapper>
              <FooterLinkItems>
                  <FooterLink to="/contacts">Kontakti</FooterLink>
              </FooterLinkItems>
            </FooterLinksWrapper>
          </FooterLinksContainer>
          <Copyrights>
            © LanguLearn {new Date().getFullYear()}
          </Copyrights>
        </FooterWrap>
      </FooterContainer>
    </>
  );
};

export default Footer;
