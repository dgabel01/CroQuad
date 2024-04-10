import React from 'react'
import ToursHero from '../../../components/ToursComponents/ToursHero';
import ExploreHvar from '../../../components/ToursComponents/ExploreHvar';
import AllTours from '../../../components/ToursComponents/AllTours';
import Map from '../../../components/HomePageComponents/Map';

import type { Metadata } from "next";
export const metadata: Metadata = {
  title: "Our Quad Tours",
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
      <AllTours/>
      <hr className="w-5/6 h-1 mx-auto my-8 bg-red-500 file:border-0 rounded md:my-10 dark:bg-gray-700"/>
      <Map/>
    </>
  )
}

export default Tours;