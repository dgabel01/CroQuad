import React from 'react'
import ToursHero from '../../../components/ToursComponents/ToursHero';


import type { Metadata } from "next";
export const metadata: Metadata = {
  title: "Our Tours",
  description: "CroQuad quadbike tours details page",
  authors:[
    { name: 'Dominik Gabela', url: 'https://github.com/dgabel01' }
  ]
};


const Tours = () => {
  return (
    <>
      <ToursHero/>
    </>
  )
}

export default Tours;