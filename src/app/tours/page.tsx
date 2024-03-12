import React from 'react'
import ToursHero from '../../../components/ToursComponents/ToursHero';
import ExploreHvar from '../../../components/ToursComponents/ExploreHvar';
import SingleTour from '../../../components/ToursComponents/SingleTour';
import Map from '../../../components/HomePageComponents/Map';

import type { Metadata } from "next";
import { Sign } from 'crypto';
export const metadata: Metadata = {
  title: "Our Tours",
  description: "CroQuad Hvar quadbike tours details page",
  authors:[
    { name: 'Dominik Gabela', url: 'https://github.com/dgabel01' }
  ]
};


const Tours = () => {
  return (
    <>
      <ToursHero/>
      <ExploreHvar/>
      <SingleTour/>
      <Map/>
    </>
  )
}

export default Tours;