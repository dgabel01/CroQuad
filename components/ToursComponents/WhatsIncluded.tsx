import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import guideIcon from '../../public/guideicon.jpeg';
import quadIcon from '../../public/quadicon.jpeg';
import helmetIcon from '../../public/helmeticon.png';
import cameraIcon from '../../public/cameraicon.jpeg';
import lunchIcon from '../../public/lunchicon.jpeg'


interface WhatsIncludedProps{
  lunch:string;
}

const WhatsIncluded = ({lunch}:WhatsIncludedProps) => {
  


  return (
    <>
      <div  className='flex items-center justify-center'>
        <h1 className=' text-3xl p-4 font-extrabold my-24'>What&apos;s Included</h1>
      </div>

      <div className='flex flex-col items-center m-auto shadow-lg rounded-xl gap-12 w-10/12 bg-blue-50 p-4 md:gap-24 md:p-8'>
        
        {/* First Row */}
        <div className='flex flex-col md:flex-row md:justify-between w-full'>
          <div className='flex flex-col gap-6 items-center'>
            <p className='text-2xl font-semibold text-center'>Licenced Guide</p>
            <Image
              src={guideIcon}
              alt='guide-icon'
              width={140}
              className='mix-blend-multiply'
            />
          </div>
          <div className='flex flex-col gap-6 items-center'>
            <p className='text-2xl mt-9 md:m-0 font-semibold text-center'>Best vehicles</p>
            <Image
              src={quadIcon}
              alt='quad-icon'
              width={120}
              className='mix-blend-multiply'
            />
          </div>
          <div className='flex flex-col gap-6 items-center'>
            <p className='text-2xl mt-9 md:m-0 font-semibold text-center'>Helmet</p>
            <Image
              src={helmetIcon}
              alt='helmet-icon'
              width={120}
              className='mix-blend-multiply'
            />
          </div>
        </div>
        
        {/* Second Row */}
        <div className='flex flex-col md:flex-row md:justify-evenly w-full'>
          <div className='flex flex-col gap-6 items-center'>
            <p className='text-2xl mt-9 md:m-0 font-semibold text-center'>Photo and video stops</p>
            <Image
              src={cameraIcon}
              alt='camera-icon'
              width={120}
              className='mix-blend-multiply'
            />
          </div>
          <div className='flex flex-col gap-6 items-center'>
            <p className='text-2xl mt-9 md:m-0 font-semibold text-center'>{lunch}</p>
            <Image
              src={lunchIcon}
              alt='lunch-icon'
              width={120}
              className='mix-blend-multiply'
            />
          </div>
        </div>
        <Link href={"/prices/#prices-header"} className="font-extrabold text-2xl text-center text-blue-700 after:content-['→']"> Tour prices</Link>
      </div>
    </>
  );
};

export default WhatsIncluded;
