import styled from 'styled-components';
import {Link} from 'react-router-dom';

export const FooterContainer = styled.div`
  background-color: #f08a5d;
`;

export const FooterWrap = styled.div`
  align-items: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin: 0 auto;
  max-width: 1100px;
  padding: 48px 24px;
`;

export const FooterLinksContainer = styled.div`
  display: flex;
  justify-content: center;

  @media screen and (max-width: 820px) {
    padding-top: 32px;
  }
`;

export const FooterLinksWrapper = styled.div`
  display: flex;

  @media screen and (max-width: 820px) {
    flex-direction: row;
  }
`;

export const FooterLinkItems = styled.div`
  align-items: center;
  box-sizing: border-box;
  color: white;
  display: flex;
  flex-direction: row;
  margin: 16px;

  @media screen and (max-width: 420px) {
    margin: 0;
    padding: 10px;
    width: 100%;
  }
`;

export const FooterLink = styled(Link)`
  align-items: center;
  text-align: center;
  color: white;
  font-size: 24px;
  margin-bottom: 10px;
  text-decoration: none;

  &:hover {
    color: #ff6701;
    transition: 0.3s ease-out;
  }
`;

export const Copyrights = styled.div`
  color: white;
  font-size: 12px;
  margin-bottom: 16px;
  text-decoration: none;
`;
