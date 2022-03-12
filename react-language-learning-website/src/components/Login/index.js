import React, {useState, useEffect} from 'react';
import Video from '../../videos/video.mp4';
import Axios from 'axios';
import {
  LoginContainer,
  LoginBackground,
  LoginWrap,
  LoginLogo,
  LoginContent,
  LoginForm,
  LoginHeading,
  LoginLabel,
  LoginInput,
  LoginButton,
  LoginText,
  LoginVideo
} from './LoginElements';

const LoginBox = () => {

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const [loginStatus, setLoginStatus] = useState('');

  Axios.defaults.withCredentials = true;

  const getUser = () => {
    Axios.post('http://localhost:3001/login', {
      email: email,
      password: password
    }).then((response) => {

      if(response.data.message){
        setLoginStatus(response.data.message);
      } else {
        setLoginStatus(response.data[0].username);
      }
    });
  };

  useEffect(() => {
    Axios.get('http://localhost:3001/login').then((response) => {
      if (response.data.loggedIn === true) {
        setLoginStatus(response.data.user[0].username);
      }
    });
  }, []);

  return(
    <LoginContainer>
      <LoginLogo to="/">LanguLearn</LoginLogo>
      <LoginWrap>
          <LoginBackground>
            <LoginVideo autoPlay loop muted src = {Video} type='video/mp4' />
          </LoginBackground>
          <LoginContent>
            <LoginForm to="/">
              <LoginHeading>Autorizēties</LoginHeading>
                <LoginLabel htmlFor='for'>E-pasts</LoginLabel>
                <LoginInput type='email' placeholder='Ievadiet jūsu e-pastu' onChange={(event) => setEmail(event.target.value)} required />
                <LoginLabel htmlFor='for'>Parole</LoginLabel>
                <LoginInput type='password' placeholder='Ievadiet jūsu paroli' onChange={(event) => setPassword(event.target.value)} required />
                <LoginButton type='submit' onClick={getUser}>Autorizēties</LoginButton>
                  {loginStatus == 'test' ? (
                  <LoginText>Success</LoginText>
                  ) : (
                  <LoginText></LoginText>
                  )
                 }
                </LoginForm>
          </LoginContent>
      </LoginWrap>
    </LoginContainer>
  )
}

export default LoginBox;
