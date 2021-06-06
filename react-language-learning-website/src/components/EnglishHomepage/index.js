import React from 'react';
import quizIcon from '../../images/quiz.svg';
import {
  QuizTitle,
  QuizHeading,
  QuizBox
} from './LanguageQuizElements';

import {
  LanguagesIcon,
  LanguagesWrapper,
  LanguagesContainer
} from '../Languages/LanguagesElements';

export default function MainMenu() {
  return (
       <LanguagesContainer>
         <QuizTitle>Angļu valoda</QuizTitle>
        <QuizHeading>Izvēlne</QuizHeading>
        <LanguagesWrapper>
        <QuizBox to="/ENGQuiz">
          <LanguagesIcon src={quizIcon}/>
          <QuizHeading>Viktorīna</QuizHeading>
        </QuizBox>
        <QuizBox to="/ENGQuiz">
          <LanguagesIcon src={quizIcon}/>
          <QuizHeading>Spēle</QuizHeading>
        </QuizBox>
        <QuizBox to="/ENGQuiz">
          <LanguagesIcon src={quizIcon}/>
          <QuizHeading>Spēle</QuizHeading>
        </QuizBox>
        </LanguagesWrapper>
      </LanguagesContainer>
  )
}
