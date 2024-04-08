"use client"
import React,{useEffect} from 'react'
import AOS from 'aos';
import 'aos/dist/aos.css';
import Image from 'next/image';
import quadImage from '../../public/quadmodel.png'
import { Button } from "@material-tailwind/react";
import Link from 'next/link';


const Fleet = () => {
  
  useEffect(()=>{
    AOS.init();
  },[]);

  return (
    <>
      <div data-aos="fade-down" data-aos-duration="2000"  className='flex flex-col items-center justify-center gap-4 mt-24'>
        <h1 data-aos="fade-down" data-aos-duration="2000" className='text-3xl text-center font-extrabold mb-4'>Our Vehicles</h1>    
        <Image
          src={quadImage}
          alt='quad-image'
          width={310}
          height={250}
          data-aos="fade-down" data-aos-duration="2000" 
        />
        <p data-aos="fade-down" data-aos-duration="2000"  className='text-2xl mx-4 font-bold text-center'>Segway Snarler AT5</p>
        <p data-aos="fade-down" data-aos-duration="2000"  className='text-lg mx-4 font-semibold text-center'>T3b category, 499cc EFI, 39hp, Auto Transmission, 4x4, Diff Lock</p>
        <p data-aos="fade-down" data-aos-duration="2000"  className='text-l gmx-4 font-semibold text-center'>5 vehicles</p>
        <Link  data-aos="fade-down" data-aos-duration="2000"  href={"/contact"}><Button placeholder="" color="blue">Book Now</Button></Link>
      </div>
    </>
  )
}

export default Fleet;