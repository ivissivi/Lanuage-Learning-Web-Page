import styled from 'styled-components';
import {Link} from 'react-router-dom';
import {FaArrowCircleRight} from 'react-icons/fa';

export const QuizBox = styled(Link)`
  align-items: center;
  background: white;
  border-radius: 10px;
  box-shadow: 1px 5px 3px rgba(0, 0, 0, 0, 0.9);
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  max-height: 340px;
  padding: 30px;
  text-decoration: none;
  transition: all 0.2s ease-in-out;

  &:hover {
    cursor: pointer;
    transform: scale(1.02);
    transition: all 0.2s ease-in-out;
  }
`;

export const AnswerBeforeCommit = styled.h1`
  align-items: center;
  color: #fea82f;
  font-size: 30px;
  margin-bottom: 10px;
  text-align: center;
`

export const QuizContainer = styled.div`
  align-items: center;
  background: #fcecdd;
  display: flex;
  height: 722px;
  justify-content: center;
  text-align: center;
  width: 100vew;

  @media screen and (max-width: 768px) {
    height: 768px;
  }

  @media screen and (max-width: 480px) {
    height: 1300px;
  }
`

export const QuizContent = styled.div`
  align-items: center;
  display: flex;
  flex-direction: column;
  z-index: 3;

  @media screen and (max-width: 200px) {
    height: 1200px;
  }
`

export const QuizHud = styled.div`
  display: flex;
  justify-content: space-between;

`

export const QuizHudItem = styled.div`
  display: flex;
  flex-direction: column;
  height: 100px;
  padding: 10px;
  margin-bottom: 20px;
`

export const QuizScore = styled.p`
  flex-direction: column;
  font-size: 13px;
  text-align: center;
`

export const LanguageIcon = styled.img`
  height: 160px;
  margin-bottom: 10px;
  width: 160px;
`;

export const QuizTitle = styled.h1`
  align-items: center;
  color: #ff6701;
  font-size: 55px;
  text-align: center;

  @media screen and (max-width: 480px) {
    font-size: 32px;
  }
`

export const QuizHeading = styled.h2`
  align-items: center;
  color: #fea82f;
  font-size: 59px;
  margin-bottom: 64px;
  text-align: center;
`

export const QuizButton = styled(Link)`
  background: linear-gradient(50deg, #ff6701 0%, #fea82f 100%);
  border-radius: 30px;
  color: white;
  font-size: 30px;
  margin-left: 10px;
  padding: 5px 20px;
  text-align: center;
  text-decoration: none;

  &:hover {
    background: white;
    color: #ff6701;
    transition: all 0.5s ease-in-out;
`

export const StartArrow = styled(FaArrowCircleRight)`
  align-items: center;
  font-size: 30px;
`

export const ProgressBar = styled.div`
  border: 3px solid #ff6701;
  border-radius: 50px;
  height: 47px;
  margin-top: 32px;
  overflow: hidden;
  width: 320px;
`

export const ProgressBarFull = styled.div`
  background: linear-gradient(90deg, rgba(252,236,221,1) 0%, rgba(255,194,136,1) 50%, rgba(255,103,1,1) 100%);
  height: 100%;
  width: 0px;
`
export const ProgressText = styled.div`
  text-align: center;
`

export const Question = styled.h1`
  font-size: 20px;
  margin-bottom: 20px;
  text-align: center;
`

export const ChoiceContainer = styled.button`
  background: #ff6701;
  border: none;
  border-radius: 20px;
  color: white;
  display: flex;
  font-size: 15px;
  margin-bottom: 12px;
  min-width: 100px;
  width: 450px;;

  &:hover {
    background: white;
    box-shadow: 0 0.4rem 7px 0 white;
    color: #ff6701;
    cursor: pointer;
    transform: scale(1.02);
    transform: transform 100ms;
    transition: all 0.5s ease-in-out;
  }
  &:active {
    background: white;
  }

  @media screen (max-width: 768px) {
    min-width: 640px;
  }
`

export const Choice = styled.p`
  padding: 16px 40px;
`

export const ChoiceText = styled.p`
  padding: 16px;
  width: 50%;
`
export const LanguageIconSmallWrap = styled(Link)`
`;

export const LanguageIconSmall = styled.img`
  height: 80px;
  width: 80px;
`;

export const HomepageLogo = styled(Link)`
  align-items: center;
  color: white;
  cursor: pointer;
  display: flex;
  font-family: "Lorem ipsum dolor sit amet", Brush Script MT, cursive;
  font-size: 50px;
  font-weight: bold;
  justify-self: flex-start;
  margin: auto;
  text-decoration: none;
`;
