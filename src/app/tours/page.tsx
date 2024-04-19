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
      <span className="relative flex justify-center mt-12">
      <div className="absolute inset-x-0 top-1/2 h-0.5 -translate-y-1/2 bg-transparent bg-gradient-to-r from-transparent via-gray-900 to-transparent opacity-75">
      </div>
      <span className="relative z-10 bg-white px-6"></span>
    </span>
      <Map/>
    </>
  )
}

export default Tours;