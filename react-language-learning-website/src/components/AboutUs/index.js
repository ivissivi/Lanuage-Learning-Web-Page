import React from 'react';
import Image from '../../images/AboutUs.svg';
import Video from '../../videos/AboutUsVideo.mp4';
import {
  AboutUsContainer,
  AboutUsBackground,
  AboutUsBackgroundVideo,
  AboutUsContent,
  ImgWrap,
  Img,
  AboutUsText,
} from './AboutUsElements';

const AboutUs = () => {

  return (
    <>
      <AboutUsContainer id="services">
        <AboutUsBackground>
          <AboutUsBackgroundVideo autoPlay loop muted src = {Video} type='video/mp4' />
        </AboutUsBackground>
        <AboutUsContent>
          <ImgWrap>
            <Img src={Image} type='image/svg'/>
          </ImgWrap>
          <AboutUsText>
            Apgūsti dažādas valodas un padari apguves procesu interesantāku un vienkāršāku.
          </AboutUsText>
        </AboutUsContent>
      </AboutUsContainer>
    </>
  );
};

export default AboutUs;
