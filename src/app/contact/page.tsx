import React from 'react'
import ContactHero from '../../../components/ContactUsCompnents/ContactHero';
import SocialIcons from '../../../components/HomePageComponents/SocialIcons';
import ContactsInfo from '../../../components/ContactUsCompnents/ContactsInfo';

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
      <SocialIcons/>
    </>
  )
}

export default ContactUs;