import React, {useContext} from 'react';
import {QuizContext} from '../../../../helpers/Contexts';
import {engQuestions} from '../../../../helpers/EnglishQuestions/engQuestionsHard.js';
import {
  QuizTitle,
  QuizButton,
  QuizHeading,
} from '../../LanguageQuizElements';

export default function EndOfQuiz() {
  const {score, setScore, setGameState} = useContext(QuizContext);

  const restartQuiz = () => {
    setScore(0);
    setGameState('menu');
  };

  return (
    <div>
      <QuizTitle>Tu pabeidzi viktorīnu!
        <QuizHeading> Tu ieguvi {score} / {engQuestions.length} punktiem</QuizHeading>
        </QuizTitle>
      <QuizButton onClick={restartQuiz}>Pildīt vēlreiz?</QuizButton>
    </div>
  );
};
