import styled from 'styled-components';

export const AboutUsContainer = styled.div`
  align-items: center;
  background: black;
  display: flex;
  height: 1000px;
  justify-content: center;
  padding: 0 30px;
  position: relative;
  z-index: 1;
`;

export const AboutUsBackground = styled.div`
  bottom: 0;
  height: 100%;
  left: 0;
  overflow: hidden;
  position: absolute;
  right: 0;
  top: 0;
  width: 100%;
`;

export const AboutUsBackgroundVideo = styled.video`
  background: black;
  height: 100%;
  object-fit: cover;
  width: 100%;
`;

export const AboutUsContent = styled.div`
    -webkit-box-align: center;
    align-items: left;
    display: flex;
    max-width: 1200px;
    position: absolute;
    padding: 8px 24px;
    z-index: 3;
`;

export const AboutUsTitle = styled.h1`
  color: white;
  font-size: 125px;
  font-family: "Lorem ipsum dolor sit amet", Brush Script MT, cursive;
  text-align: left;

  @media screen and (max-width: 768px) {
    font-size: 40px;
  }

  @media screen and (max-width: 480px) {
    font-size: 32px;
  }
`;

export const ImgWrap = styled.div`
  height: 100%;
  max-width: 255px;
  margin-right: 100px;
`;

export const Img = styled.img`
  margin: 15px 0 10px 0;
  padding-right: 0;
  width: 100%;
`;

export const AboutUsText = styled.p`
  color: white;
  font-size: 24px;
  margin-top: 24px;
  max-width: 600px;
  text-align: left;

  @media screen and (max-width: 768px) {
    font-size: 24px;
  }

  @media screen and (max-width: 480px) {
    font-size: 18px;
  }
`;
