import React from 'react'
import ContactHero from '../../../components/ContactUsCompnents/ContactHero';
import SocialIcons from '../../../components/HomePageComponents/SocialIcons';
import ContactsInfo from '../../../components/ContactUsCompnents/ContactsInfo';

import type { Metadata } from "next";
export const metadata: Metadata = {
  title: "Contact Us",
  description: "CroQuad contacts page",
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