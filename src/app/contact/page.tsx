import React from 'react'
import ContactHero from '../../../components/ContactUsCompnents/ContactHero';
import SocialIcons from '../../../components/HomePageComponents/SocialIcons';
import ContactsInfo from '../../../components/ContactUsCompnents/ContactsInfo';
import ContactForm from '../../../components/ContactUsCompnents/ContactForm';

import type { Metadata } from "next";
export const metadata: Metadata = {
  title: "Contact CroQuad",
  description: "CroQuad Hvar contacts deatils page",
  authors:[
    { name: 'Dominik Gabela', url: 'https://github.com/dgabel01' }
  ]
};


const ContactUs = () => {
  
  return (
    <>
      <ContactHero/>
      <ContactsInfo/>
      <ContactForm/>
      <p className=' text-center text-2xl mb-16 font-extrabold'>Or choose to book your ride below, through one of our social medias:</p>
      <SocialIcons/>
    </>
  )
}

export default ContactUs;