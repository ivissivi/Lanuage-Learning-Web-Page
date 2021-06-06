import styled from 'styled-components';
import {Link} from 'react-router-dom';

export const RegistrationContainer = styled.div`
  bottom: 0;
  left: 0;
  min-height: 692px;
  overflow: hidden;
  position: fixed;
  right: 0;
  top: 0;
  z-index: 0;
`;

export const RegistrationBackground = styled.div`
  bottom: 0;
  height: 100%;
  left: 0;
  overflow: hidden;
  position: absolute;
  right: 0;
  top: 0;
  width: 100%;
`;

export const RegistrationWrap = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  justify-content: center;

  @media screen and (max-width: 400px) {
    height: 80%;
  }
`;

export const RegistrationLogo = styled (Link)`
  align-items: center;
  color: white;
  cursor: pointer;
  font-family: "Lorem ipsum dolor sit amet", Brush Script MT, cursive;
  font-size: 50px;
  font-weight: bold;
  justify-self: flex-start;
  margin: auto;
  padding: 10px;
  position: absolute;
  text-align: center;
  text-decoration: none;
  z-index: 3;

  @media screen and (max-width: 480px) {
    margin-left: 16px;
    margin-top: 8px;
  }
`;

export const RegistrationContent = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  justify-content: center;

  @media screen and (max-width: 480px) {
    padding: 10px;
  }
`;

export const RegistrationForm = styled.form`
  background: #f08a5d;
  border-radius: 4px;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 1);
  display: grid;
  height: auto;
  max-height: ;
  max-width: 400px;
  margin: 0 auto;
  padding: 40px 32px;
  width: 100%;
  z-index: 1;

  @media screen and (max-width: 400px) {
    padding: 32px 32px;
  }
`;

export const RegistrationHeading = styled.h1`
  color: white;
  font-size: 25px;
  font-weight: 400;
  margin-bottom: 25px;
  text-shadow: 1px 1px 8px #ff6701;
  text-align: center;
`;

export const RegistrationLabel = styled.label`
  color: white;
  font-size: 14px;
  margin-bottom: 8px;
  text-shadow: 1px 1px 8px #ff6701;
`;

export const RegistrationInput = styled.input`
  border: rounded;
  border-color: #ff6701;
  border-radius: 2px;
  margin-bottom: 16px;
  padding: 16px 16px;
`;

export const RegistrationButton = styled.button`
  background: #ff6701;
  border: none;
  border-radius: 15px;
  color: white;
  cursor: pointer;
  font-size: 16px;
  margin-top: 5px;
  padding: 10px 22px;
  transition: all 0.2s ease-in-out;
  text-decoration: none;
  white-space: nowrap;

  &:hover {
    background: white;
    color: black;
}
`;

export const RegistrationText = styled.span`
  color: white;
  font-size: 14px;
  margin-top: 24px;
  text-shadow: 1px 1px 8px #ff6701;
  text-align: center;
`;

export const RegistrationVideo = styled.video`
  background: black;
  height: 100%;
  object-fit: cover;
  width: 100%;
`;

export const RegisterText = styled.span`
  color: white;
  font-size: 14px;
  margin-top: 24px;
  text-shadow: 1px 1px 8px #ff6701;
  text-align: center;
`;
