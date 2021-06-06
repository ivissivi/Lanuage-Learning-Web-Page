import React, {useState} from 'react';
import MainMenu from './MainMenu.js';
import LanguageQuiz from './LanguageQuiz.js';
import EndOfQuiz from './EndOfQuiz.js';
import latvianFlag from '../../../../images/latvian.png';

import {QuizContext} from '../../../../helpers/Contexts';

import {
  QuizContainer,
  QuizContent
} from '../../LanguageQuizElements';

const QuizBox = () => {

  const [gameState, setGameState] = useState('menu');
  const [score, setScore] = useState(0);

  return (
    <>
        <QuizContainer>
         <QuizContent>
            <QuizContext.Provider value={{gameState, setGameState, score, setScore}}>
            {gameState === 'menu' && <MainMenu />}
            {gameState === 'quiz' && <LanguageQuiz />}
            {gameState === 'end' && <EndOfQuiz />}
            </QuizContext.Provider>
          </QuizContent>
        </QuizContainer>
    </>
  );
};

export default QuizBox;
