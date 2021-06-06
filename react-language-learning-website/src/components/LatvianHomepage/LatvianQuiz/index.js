import React from 'react';
import quizEasy from '../../../images/easy.png';
import quizMedium from '../../../images/medium.png';
import quizHard from '../../../images/hard.png';
import {
  QuizTitle,
  QuizHeading,
  QuizBox
} from '../LanguageQuizElements';

import {
  LanguagesIcon,
  LanguagesWrapper,
  LanguagesContainer
} from '../../Languages/LanguagesElements';

export default function MainMenu() {
  return (
       <LanguagesContainer>
         <QuizTitle>Viktorīna</QuizTitle>
        <QuizHeading>Izvēlne</QuizHeading>
        <LanguagesWrapper>
        <QuizBox to="/LVquizEasy">
          <LanguagesIcon src={quizEasy}/>
          <QuizHeading>Viegli</QuizHeading>
        </QuizBox>
        <QuizBox to="/LVquizMedium">
          <LanguagesIcon src={quizMedium}/>
          <QuizHeading>Vidēji</QuizHeading>
        </QuizBox>
        <QuizBox to="/LVquizHard">
          <LanguagesIcon src={quizHard}/>
          <QuizHeading>Grūti</QuizHeading>
        </QuizBox>
        </LanguagesWrapper>
      </LanguagesContainer>
  )
}
