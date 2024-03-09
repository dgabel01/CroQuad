import React from 'react'
import PriceTabs from '../../../components/PricingComponents/PriceTabs';
import PricingHero from '../../../components/PricingComponents/PricingHero';
import SocialIcons from '../../../components/HomePageComponents/SocialIcons';
import PriceCallToBook from '../../../components/PricingComponents/PriceCallToBook';

import type { Metadata } from "next";
export const metadata: Metadata = {
  title: "Tour prices",
  description: "CroQuad tours pricing details page",
};


const PriceList = () => {
  
  return (
    <>
      <PricingHero/>
      <PriceTabs/>
      <PriceCallToBook/>
      <SocialIcons/>
    </>
  )
}

export default PriceList;