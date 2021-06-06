import React from 'react';
import Image from '../../images/contacts.svg';
import Video from '../../videos/contacts_video.mp4';
import {FcAddressBook} from 'react-icons/fc';
import {FcCellPhone} from 'react-icons/fc';
import {GoPerson} from 'react-icons/go';

import {
  ContactsContainer,
  ContactsBackground,
  ContactsVideo,
  ContactsContent,
  ContactsTitle,
  ImgWrap,
  Img,
  ContactsText,
  ContactsCopyrights
} from './ContactsElements';

const ContactsBox = () => {
  return (
    <>
      <ContactsContainer>
        <ContactsBackground>
          <ContactsVideo autoPlay loop muted src = {Video} type='video/mp4' />
        </ContactsBackground>
        <ContactsContent>
          <ContactsTitle to='/'>LanguLearn</ContactsTitle>
          <ImgWrap>
            <Img src={Image} type='image/svg'></Img>
          </ImgWrap>
          <ContactsText>
            <GoPerson />Ivars Sloka
          </ContactsText>
          <ContactsText>
            <FcAddressBook />ivars.sloka@va.lv
          </ContactsText>
          <ContactsText>
            <FcCellPhone />28687728
          </ContactsText>
        </ContactsContent>
        <ContactsCopyrights>
          © LanguLearn {new Date().getFullYear()}
        </ContactsCopyrights>
      </ContactsContainer>
    </>
  );
};

export default ContactsBox;
