import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import guideIcon from '../../public/guideicon.jpeg';
import quadIcon from '../../public/quadicon.jpeg';
import helmetIcon from '../../public/helmeticon.png';
import maskIcon from '../../public/maskicon.png';
import glovesIcon from '../../public/glovesicon.jpeg';
import cameraIcon from '../../public/cameraicon.jpeg';

const WhatsIncluded = () => {
  return (
    <>
      <h1 className='text-center text-3xl font-bold my-24'>What&apos;s Included</h1>

      <div className='flex flex-col items-center m-auto rounded-xl gap-12 w-10/12 bg-neutral-100 p-4 md:gap-24 md:p-8'>
        
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
            <p className='text-2xl  mt-9 md:m-0 font-semibold text-center'>Riding Mask</p>
            <Image
              src={maskIcon}
              alt='mask-icon'
              width={120}
              className='mix-blend-multiply'
            />
          </div>
          <div className='flex flex-col gap-6 items-center'>
            <p className='text-2xl mt-9 md:m-0 font-semibold text-center'>Photo and video stops</p>
            <Image
              src={cameraIcon}
              alt='camera-icon'
              width={120}
              className='mix-blend-multiply'
            />
          </div>
        </div>
        <Link href={"/prices/#prices-header"} className="font-bold text-3xl text-center text-blue-600 after:content-['_↗'] "> Tour prices</Link>
      </div>
    </>
  );
};

export default WhatsIncluded;
