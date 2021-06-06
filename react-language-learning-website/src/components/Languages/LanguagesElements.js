import styled from 'styled-components';
import {Link} from 'react-router-dom';

export const LanguagesContainer = styled.div`
  align-items: center;
  background: #ffc288;
  display: flex;
  flex-direction: column;
  height: 800px;
  justify-content: center;

  @media screen and (max-width: 768px) {
    height: 800px;
  }

  @media screen and (max-width: 480px) {
    height: 800px;
  }
`;

export const LanguagesHeading = styled.h1`
  color: #ff6701;
  font-size: 40px;
  margin-bottom: 64px;

  @media screen and (max-width: 480px) {
    font-size: 2rem;
  }
`;

export const LanguagesWrapper = styled.div`
  align-items: center;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-gap: 16px;
  max-width: 1000px;
  margin: 0 auto;
  padding: 0 50px;

  @media screen and (mad-width: 1000px) {
    grid-template-columns: 1fr 1fr;
  }

  @media screen and (max-width: 768px) {
    grid-template-columns: 1fr;
    padding: 0 20px;
  }
`;

export const LanguagesBox = styled(Link)`
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

export const LanguagesIcon = styled.img`
  height: 80px;
  margin-bottom: 10px;
  width: 80px;
`;

export const LanguagesTitle = styled.h2`
  color: #ff6701;
  font-size: 35px;
  margin-bottom: 10px;
`;
