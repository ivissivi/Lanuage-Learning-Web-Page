import React, {useState, useContext} from 'react';
import {engQuestions} from '../../../../helpers/EnglishQuestions/engQuestionsHard';
import {QuizContext} from '../../../../helpers/Contexts';

import {
  AnswerBeforeCommit,
  QuizContainer,
  QuizContent,
  QuizHeading,
  QuizHud,
  QuizHudItem,
  QuizScore,
  ProgressText,
  ProgressBar,
  ProgressBarFull,
  Question,
  ChoiceContainer,
  Choice,
  ChoiceText,
  QuizButton
} from '../../LanguageQuizElements';

const Quiz = () => {

  const {score, setScore, setGameState} = useContext(QuizContext);

  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [optionChosen, setOptionChosen] = useState('');

  const nextQuestion = () => {
    progressBarUpdate();
    if(engQuestions[currentQuestion].correctAnswer == optionChosen) {
      setScore(score + 1);
    }
    setCurrentQuestion(currentQuestion + 1);
  };

  const finishQuiz = () => {
    if(engQuestions[currentQuestion].correctAnswer == optionChosen) {
      setScore(score + 1);
    }
    setGameState('end');
  };

  function progressBarUpdate() {
    var elem = document.getElementById('progressBarFull');
    var progressBarNode = 314 / engQuestions.length;
    var progressBarWidth = elem.offsetWidth;
    if (progressBarNode <= 314) {
      elem.style.width = (progressBarNode+progressBarWidth)+'px';
    };
};

  return (
    <>
        <QuizContainer>
         <QuizContent>
          <QuizHud>
              <QuizHudItem>
                 <ProgressText>Jautājumi</ProgressText>
                 <ProgressBar>
                   <ProgressBarFull id='progressBarFull'></ProgressBarFull>
                  </ProgressBar>
              </QuizHudItem>
                 <QuizHudItem>
                      <QuizScore>
                        Punkti
                      </QuizScore>
                      <QuizHeading>
                        {score}
                      </QuizHeading>
                 </QuizHudItem>
              </QuizHud>
              <Question>{engQuestions[currentQuestion].prompt}</Question>
              <AnswerBeforeCommit>Jūsu atbilde: {optionChosen}</AnswerBeforeCommit>
                <ChoiceContainer onClick={() => setOptionChosen('A')}>
                  <Choice>A</Choice>
                  <ChoiceText>{engQuestions[currentQuestion].answerA}</ChoiceText>
                </ChoiceContainer>
                <ChoiceContainer onClick={() => setOptionChosen('B')}>
                  <Choice>B</Choice>
                  <ChoiceText>{engQuestions[currentQuestion].answerB}</ChoiceText>
                </ChoiceContainer>
                <ChoiceContainer onClick={() => setOptionChosen('C')}>
                  <Choice>C</Choice>
                  <ChoiceText>{engQuestions[currentQuestion].answerC}</ChoiceText>
                </ChoiceContainer>
                <ChoiceContainer onClick={() => setOptionChosen('D')}>
                  <Choice>D</Choice>
                  <ChoiceText>{engQuestions[currentQuestion].answerD}</ChoiceText>
                </ChoiceContainer>
                {currentQuestion == engQuestions.length -1 ? (
                <QuizButton onClick={finishQuiz}>Pabeigt viktorīnu</QuizButton>
                ) : (
                <QuizButton onClick={nextQuestion}>Apstiprināt</QuizButton>
                )
                }
            </QuizContent>
          </QuizContainer>
      </>
  );
};

export default Quiz;
