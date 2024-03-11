import React from 'react'
import heroImg from '../public/Fotografija_1-2.jpg'
import Link from 'next/link'
import { Button } from "@material-tailwind/react";


const Hero = () => {
  return (
    <>
    <div className="relative overflow-hidden bg-cover bg-no-repeat" style={{
        backgroundPosition: '50%',
        backgroundImage: 'url("/heroimage.jpeg")', 
        height: '600px',
        marginTop:'0',
        }}>
      <div
        className="absolute top-0 right-0 bottom-0 left-0 h-full w-full overflow-hidden bg-[hsla(0,0%,0%,0.45)] bg-fixed">
        <div className="flex h-full items-center justify-center">
          <div className="px-6 text-center text-white md:px-12">
            <h1 className="mt-2 mb-16 text-5xl font-bold tracking-tight md:text-5xl xl:text-6xl">
              Rev up your Hvar quad adventure with CroQuad
            </h1>
            <p className='mt-4 mb-8 text-2xl font-semibold'>The best quad experience on the island of Hvar</p>
            <Link href={"/tours"}>
                <button type="button"
                      className="text-white rounded border-2 border-neutral-50 px-[46px] pt-[14px] pb-[12px] text-sm font-semibold uppercase leading-normal transition duration-150 ease-in-out hover:border-neutral-100 hover:bg-white hover:bg-opacity-10  focus:border-neutral-100 focus:text-neutral-100 focus:outline-none focus:ring-0 active:border-neutral-200 active:text-neutral-200">
                  Check out our tours
                </button>
            </Link>
            <Link href={"/contact"}>
                <button type="button"
                      className="m-7 text-white rounded border-2 border-neutral-50 px-[46px] pt-[14px] pb-[12px] text-sm font-semibold uppercase leading-normal transition duration-150 ease-in-out hover:border-neutral-100 hover:bg-white hover:bg-opacity-10  focus:border-neutral-100 focus:text-neutral-100 focus:outline-none focus:ring-0 active:border-neutral-200 active:text-neutral-200">
                Book Now
                </button>
            </Link>
          </div>
        </div>
      </div>
   </div>


    <div className='flex flex-col items-center justify-center gap-8 text-center mt-36'>
      <h1 className='text-3xl font-bold'>Who We Are</h1>
      <p className='text-2xl mx-4'>Business run by friends who know the best of island Hvar</p>
      <p className='text-2xl mx-12'>We are dedicated to delivering unforgettable experiences that allow you to explore the island of Hvar like never before</p>
      <Link href={"/about"}>
        <Button variant="outlined" className="rounded-full text-sm" placeholder={""} color='black'>
          About Us
        </Button>
      </Link>
    </div>
 </>
  )
}

export default Hero