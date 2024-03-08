import React from 'react'
import PriceTabs from '../../../components/PricingComponents/PriceTabs';
import type { Metadata } from "next";
export const metadata: Metadata = {
  title: "Tour prices",
  description: "CroQuad tours pricing details page",
};


const PriceList = () => {
  
  return (
    <>
    <p>Tour prices page</p>
    <PriceTabs/>
    </>
  )
}

export default PriceList;