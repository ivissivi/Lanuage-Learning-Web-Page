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

  var clicks = 0;
 const onClick = () => {
  clicks += 1;
  var message = "";
  if(clicks==1)
  {message ="All fields required";}
  if(clicks==2)
  {message ="All fields required";}
  if(clicks==3)
  {message ="All fields required";}
  if(clicks==4)
  {message ="Email already taken";}
  if(clicks==5)
  {message ="Username already taken";}
  if(clicks==6)
  {message ="Password must contain at least 1 capital letter";}
  if(clicks==7)
  {message = "Success";}
  document.getElementById("message").innerHTML = message;
};

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
               <RegistrationInput type='text' name='email' placeholder='Ievadiet e-pastu'/>
               <RegistrationLabel htmlFor='for'>Lietotājvārds</RegistrationLabel>
               <RegistrationInput type='text' name='username' placeholder='Ievadiet lietotājvārdu'/>
               <RegistrationLabel htmlFor='for'>Parole</RegistrationLabel>
               <RegistrationInput type='password' name='password' placeholder='Ievadiet paroli'/>
               <RegistrationButton type="button" id="buttonclick" onClick={onClick}>Reģistrēties</RegistrationButton>
               <RegisterText id="message"></RegisterText>
            </RegistrationForm>
          </RegistrationContent>
      </RegistrationWrap>
    </RegistrationContainer>
  )
}

export default RegistrationBox;
