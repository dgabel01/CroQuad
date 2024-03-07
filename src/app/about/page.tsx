import React from 'react'
import type { Metadata } from "next";
import AboutHero from '../../../components/AboutComponents/AboutHero';
import Story from '../../../components/AboutComponents/Story';
import Map from '../../../components/HomePageComponents/Map';
import Fleet from '../../../components/AboutComponents/Fleet';
import MyGallery from '../../../components/HomePageComponents/MyGallery';
import {images} from '../../../components/AboutComponents/images'

export const metadata: Metadata = {
  title: "About Us",
  description: "CroQuad company deatils page",
};

const About = () => {
  return (
    <>
      <AboutHero/>
      <Story/>
      <MyGallery images={images}/>
      <Fleet/>
      <Map/>
    </>
  )
}

export default About;