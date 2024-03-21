//slika quad modela (i sa tura)
"use client"
import React from 'react'
import Image from 'next/image';
import quadImage from '../../public/quadmodel.png'
import { Button } from "@material-tailwind/react";
import Link from 'next/link';


const Fleet = () => {
  return (
    <>
      <div className='flex flex-col items-center justify-center gap-4 mt-24'>
        <h1 className='text-3xl text-center font-bold mb-4'>Our Vehicles</h1>    
        <Image
          src={quadImage}
          alt='quad-image'
          width={310}
          height={250}
        />
        <p className='text-2xl font-bold text-center'>Segway Snarler AT5</p>
        <p className='text-lg font-semibold text-center'>T3b category, 499cc EFI, 39hp, Auto Transmission, 4x4, Diff Lock</p>
        <p className='text-lg font-semibold text-center'>5 vehicles</p>
        <Link href={"/contact"}><Button placeholder="" color="blue">Book Now</Button></Link>
      </div>
    </>
  )
}

export default Fleet;