import styled from 'styled-components';
import {Link as LinkRouter} from 'react-router-dom'

export const ContactsContainer = styled.div`
  align-items: center;
  background: black;
  display: flex;
  height: 800px;
  justify-content: center;
  padding: 0 30px;
  position: relative;
  z-index: 1;
`;

export const ContactsBackground = styled.div`
  bottom: 0;
  height: 100%;
  left: 0;
  overflow: hidden;
  position: absolute;
  right: 0;
  top: 0;
  width: 100%;
`;

export const ContactsVideo = styled.video`
  background: black;
  height: 100%;
  object-fit: cover;
  width: 100%;
`;

export const ContactsContent = styled.div`
  align-items: center;
  display: flex;
  flex-direction: column;
  max-width: 1200px;
  position: absolute;
  padding: 8px 24px;
  z-index: 1;
`;

export const ContactsTitle = styled(LinkRouter)`
  color: white;
  font-size: 125px;
  font-family: "Lorem ipsum dolor sit amet", Brush Script MT, cursive;
  text-align: center;
  text-decoration: none;

  @media screen and (max-width: 768px) {
    font-size: 40px;
  }

  @media screen and (max-width: 480px) {
    font-size: 32px;
  }
`;

export const ImgWrap = styled.div`
  height: 100%;
  max-width: 150px;
`;

export const Img = styled.img`
  margin: 50px 0 10px 0;
  padding-right: 0;
  width: 100%;
`;

export const ContactsText = styled.p`
  color: white;
  font-size: 24px;
  margin-top: 24px;
  max-width: 1000px;
  text-align: center;

  @media screen and (max-width: 768px) {
    font-size: 24px;
  }

  @media screen and (max-width: 480px) {
    font-size: 18px;
  }
`;

export const ContactsCopyrights = styled.div`
  color: white;
  font-size: 12px;
  margin-bottom: 16px;
  text-decoration: none;
`;
