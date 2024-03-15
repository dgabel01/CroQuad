import React from 'react'
import Link from 'next/link';
import { Button } from "@material-tailwind/react";

interface Items{
    title:string;
    riders:string;
    price:string;
    personsperquad:string;
}

interface TourPricesCardProps{
    items:Items[];
}

const TourPricesCard = ({items}:TourPricesCardProps) => {
  return (
    <>
     {items.map((item, index) => (
        <div key={index} className='flex flex-col gap-6 rounded-lg drop-shadow-lg w-fit mx-4 p-4 bg-stone-50'>
          <h1 className='text-xl font-extrabold'>{item.title}</h1>
          <p className='text-xl font-semibold'> {item.riders}</p>
          <p className='text-sky-600 text-2xl font-extrabold'>{item.price}&euro;<sub className='text-xl'>/per person</sub></p>
          <p className='text-xl font-semibold'>{item.personsperquad}</p>
          <div className='flex flex-row gap-4'>
            <Link href={"/contact"}><Button placeholder="" color="blue">Book Now</Button></Link>
            <Link href={"/tours"}><Button placeholder="" color="blue">Tour details</Button></Link>
          </div>
        </div>
      ))}
    
    </>
  )
}

export default TourPricesCard;