"use client"
import Image from 'next/image';
import Link from 'next/link';
import quadImage from '../../public/rentaquadvehicle.webp'
import React from 'react'
import {
    Tabs,
    TabsHeader,
    TabsBody,
    Tab,
    TabPanel,
  } from "@material-tailwind/react";
import RentDetails from './RentDetails';
import RentPrices from './RentPrices';


const RentTabs = () => {

const data = [

    {
        number:"1)",
        label: "Details",
        value:"details",
        desc:(
            <>
                <RentDetails/>
            </>
        )


    },


    {
        number:"2)",
        label: "Prices",
        value:"prices",
        desc:(
            <>
                <RentPrices/>
            </>
        )
    },
]




  return (
    <>
        <div className='flex flex-col gap-16 items-center justify-center'>
            <h1 className="text-3xl text-center font-extrabold mt-16 mb-12 mx-2">Our rent vehicles: LINHAI ATV 420 PROMAX EFI,T3B</h1>
            <Image
                src={quadImage}
                alt='linhai-pro-max-420'
                layout='responsive'
                className='max-w-lg '
            />
            <h1  className="text-3xl text-center font-extrabold mt-16 mb-12 mx-2">Browse the ATV renting details and prices</h1>
        </div>


        <Tabs value="details" id="custom-animation">
        <TabsHeader placeholder={""} className="bg-sky-300 p-1">
          {data.map(({number, label, value }) => (
            <Tab key={value} value={value} placeholder={""} className="text-xl font-semibold">
              {number} {label}
            </Tab>
          ))}
        </TabsHeader>
        <TabsBody placeholder={""} animate={{
          initial: { y: 250 },
          mount: { y: 0 },
          unmount: { y: 250 },
        }}>
          {data.map(({ value, desc }) => (
            <TabPanel key={value} value={value} className="flex flex-col sm:flex-row gap-16 items-center justify-center mt-16">
            {desc}
          </TabPanel>          
          ))}
        </TabsBody>
      </Tabs>
      

      <div className='mb-48'></div>
    </>
  )
}

export default RentTabs;