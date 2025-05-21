import React from 'react'
import Link from 'next/link'
import { Button } from "@material-tailwind/react";
import Video from './Video';

const Hero = () => {
  return (
    <>
      <div className="relative overflow-hidden bg-cover bg-no-repeat" style={{
      backgroundPosition: '55%',
      height: '600px',
      marginTop: '0',
    }}>
      <Video/>
      <div className="absolute top-0 right-0 bottom-0 left-0 h-full w-full overflow-hidden bg-[hsla(0,0%,0%,0.40)] bg-fixed">
        <div className="flex h-full items-center justify-center">
          <div className="px-6 text-center text-white md:px-12">
          <h1 className="mt-2 mb-16 text-4xl font-bold tracking-tight md:text-5xl xl:text-6xl">
              Welcome to CroQuad Hvar
            </h1>
           
            <p className='mt-4 mb-8 text-2xl font-semibold'>Rev up your quad adventure with the  best quad experience on the island of Hvar</p>
            <Link href={"/tours"}>
              <button type="button"
                className="text-white rounded border-2 border-neutral-50 px-4 sm:px-6 py-2 sm:py-3 text-sm sm:text-base font-bold uppercase leading-normal transition duration-150 ease-in-out hover:border-neutral-100 hover:bg-white hover:bg-opacity-30 focus:border-neutral-100 focus:text-neutral-100 focus:outline-none focus:ring-0 active:border-neutral-200 active:text-neutral-200">
                Check out our tours
              </button>
            </Link>
            <Link href={"/contact"}>
              <button type="button" className="m-4 sm:m-7 text-white rounded border-2 border-neutral-50 px-4 sm:px-6 py-2 sm:py-3 text-sm sm:text-base font-bold uppercase leading-normal transition duration-150 ease-in-out hover:border-neutral-100 hover:bg-white hover:bg-opacity-30 focus:border-neutral-100 focus:text-neutral-100 focus:outline-none focus:ring-0 active:border-neutral-200 active:text-neutral-200">
                Book Now
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>


    <div className='flex flex-col items-center justify-center gap-8 text-center my-36'>
      <h1 className='text-3xl font-extrabold italic'>Who We Are</h1>
      <p className='text-2xl mx-4 font-medium'>Business run by friends who know the best of island Hvar</p>
      <p className='text-2xl mx-12 font-semibold'>Our business rents ATV vehicles and offers organized ATV tours, providing an adventurous way to explore the island</p>
      <p className='text-2xl mx-12 font-medium'>We are dedicated to delivering unforgettable quadbike experiences that allow you to explore the island of Hvar like never before</p>
      <Link href={"/about"}>
        <Button variant="outlined" className="rounded-full text-sm hover:bg-stone-100" placeholder={""} color='black'>
          About Us &rarr;
        </Button>
      </Link>
    </div>
 </>
  )
}

export default Hero