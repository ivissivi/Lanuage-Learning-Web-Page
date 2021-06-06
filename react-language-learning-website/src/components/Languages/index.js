import React from 'react';
import englishFlag from '../../images/english.png';
import latvianFlag from '../../images/latvian.png';
import russianFlag from '../../images/russian.png';
import WorldMap from '../../images/map.jpg';
import {
  LanguagesContainer,
  LanguagesHeading,
  LanguagesWrapper,
  LanguagesBox,
  LanguagesIcon,
  LanguagesTitle
} from './LanguagesElements';

const Languages = () => {
  return (
    <>
      <LanguagesContainer src={WorldMap} id="languages">
        <LanguagesHeading>
          Valodas
        </LanguagesHeading>
        <LanguagesWrapper>
          <LanguagesBox to='/ENG'>
            <LanguagesIcon src={englishFlag}/>
            <LanguagesTitle>Angļu</LanguagesTitle>
          </LanguagesBox>
          <LanguagesBox to='/LV'>
            <LanguagesIcon src={latvianFlag}/>
            <LanguagesTitle>Latviešu</LanguagesTitle>
          </LanguagesBox>
          <LanguagesBox to='/RU'>
            <LanguagesIcon src={russianFlag}/>
            <LanguagesTitle>Krievu</LanguagesTitle>
          </LanguagesBox>
        </LanguagesWrapper>
      </LanguagesContainer>
    </>
  );
};

export default Languages;
