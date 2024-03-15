import React from 'react'
import type { Metadata } from "next";
import AboutHero from '../../../components/AboutComponents/AboutHero';
import Story from '../../../components/AboutComponents/Story';
import Map from '../../../components/HomePageComponents/Map';
import Fleet from '../../../components/AboutComponents/Fleet';
import MyGallery from '../../../components/HomePageComponents/MyGallery';
import {aboutimages} from '../../../components/AboutComponents/aboutimages'

export const metadata: Metadata = {
  title: "About Us",
  description: "CroQuad Hvar company deatils page",
  authors:[
    { name: 'Dominik Gabela', url: 'https://github.com/dgabel01' }
  ]
};

const About = () => {
  return (
    <>
      <AboutHero/>
      <Story/>
      <MyGallery images={aboutimages} title={"Check Out Our Interactive Gallery"}/>
      <Fleet/>
      <Map/>
    </>
  )
}

export default About;