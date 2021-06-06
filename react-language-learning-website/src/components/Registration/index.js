import React, {useState} from 'react';
import Video from '../../videos/video.mp4';
import Axios from 'axios';
import {
  RegistrationContainer,
  RegistrationBackground,
  RegistrationWrap,
  RegistrationLogo,
  RegistrationContent,
  RegistrationVideo,
  RegistrationForm,
  RegistrationHeading,
  RegistrationLabel,
  RegistrationInput,
  RegistrationButton,
  RegisterText
} from './RegistrationElements';

const RegistrationBox = () => {

  const [email, setEmail] = useState('');
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const [registerStatus, setRegisterStatus] = useState('');

  const addUser = () => {
    Axios.post('http://localhost:3001/register', {
      email: email,
      username: username,
      password: password
    }).then(()=> {
      setRegisterStatus('success');
    });
  };

  const validation = (values) => {

    let errors={};

    if(!values.email){
      errors.email='Email is required!';
    }

    if(!values.username){
      errors.username='Username is required!';
    }

    if(!values.password){
      errors.password='Username is required!';
    } else if (values.password.length < 8) {
      errors.password='Password must be at least 8 characters!';
    } else if (values.password.length > 16) {
      errors.password='Password cant be longer than 16 characters!';
    }
  }

  return(
    <RegistrationContainer>
      <RegistrationLogo to="/">LanguLearn</RegistrationLogo>
      <RegistrationWrap>
          <RegistrationBackground>
            <RegistrationVideo autoPlay loop muted src = {Video} type='video/mp4' />
          </RegistrationBackground>
          <RegistrationContent>
            <RegistrationForm>
              <RegistrationHeading>Reģistrēties</RegistrationHeading>
               <RegistrationLabel htmlFor='for'>E-pasts</RegistrationLabel>
               <RegistrationInput type='text' name='email' placeholder='Ievadiet e-pastu' onChange={(event) => setEmail(event.target.value)}/>
               {validation(email) && <RegisterText>{validation(email)}</RegisterText>}
               <RegistrationLabel htmlFor='for'>Lietotājvārds</RegistrationLabel>
               <RegistrationInput type='text' name='username' placeholder='Ievadiet lietotājvārdu' onChange={(event) => setUsername(event.target.value)}/>
               {validation(username) && <RegisterText>{validation(username)}</RegisterText>}
               <RegistrationLabel htmlFor='for'>Parole</RegistrationLabel>
               <RegistrationInput type='text' name='password' placeholder='Ievadiet paroli' onChange={(event) => setPassword(event.target.value)}/>
               {validation(password) && <RegisterText>{validation(password)}</RegisterText>}
               <RegistrationButton type='submit' onClick={addUser}>Reģistrēties</RegistrationButton>
               <RegisterText>{registerStatus}</RegisterText>
            </RegistrationForm>
          </RegistrationContent>
      </RegistrationWrap>
    </RegistrationContainer>
  )
}

export default RegistrationBox;
