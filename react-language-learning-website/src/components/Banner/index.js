import React from 'react';
import Video from '../../videos/video.mp4';
import Image from '../../images/banner.svg';
import {
  BannerContainer,
  BannerBackground,
  BannerVideo,
  BannerContent,
  BannerTitle,
  ImgWrap,
  Img,
  BannerText,
} from './BannerElements';

const Banner = () => {

  return (
    <>
      <BannerContainer id="banner">
        <BannerBackground>
          <BannerVideo autoPlay loop muted src = {Video} type='video/mp4' />
        </BannerBackground>
        <BannerContent>
          <BannerTitle>LanguLearn</BannerTitle>
          <ImgWrap>
            <Img src={Image} type='image/svg'/>
          </ImgWrap>
          <BannerText>
            Apgūsti dažādas valodas un padari apguves procesu interesantāku un vienkāršāku. Apgūsti latviešu, angļu un krievu valodu.
          </BannerText>
        </BannerContent>
      </BannerContainer>
    </>
  );
};

export default Banner;
