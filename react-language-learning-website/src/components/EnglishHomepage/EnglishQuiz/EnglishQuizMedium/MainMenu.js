import React, {useContext} from 'react';
import {QuizContext} from '../../../../helpers/Contexts';
import {
  QuizTitle,
  QuizButton,
  QuizHeading,
  StartArrow
} from '../../LanguageQuizElements';

export default function MainMenu() {
  const {gameState, setGameState} = useContext(QuizContext);
  return (
    <div>
      <QuizTitle>Angļu valodas viktorīna (Līmenis: vidējs)</QuizTitle>
        <QuizHeading>Vai tu esi gatavs?</QuizHeading>
      <QuizButton onClick={() => {setGameState('quiz');}}><StartArrow /></QuizButton>
    </div>
  )
}
