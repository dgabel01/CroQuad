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
        <div key={index} className='flex flex-col gap-6 rounded-x shadow-lg w-fit mx-4 p-4 bg-stone-50'>
          <h1 className='text-xl font-bold'>{item.title}</h1>
          <p className='text-lg font-semibold'> {item.riders}</p>
          <p className='text-sky-600 text-xl font-semibold'>{item.price}&euro;</p>
          <p className='text-lg font-semibold'>{item.personsperquad}</p>
          <Link href={"/tours"}><Button placeholder="" color="blue">Book Now</Button></Link>
        </div>
      ))}
    
    </>
  )
}

export default TourPricesCard;