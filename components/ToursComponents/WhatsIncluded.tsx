import React from 'react';
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
      <h1 className='text-center text-2xl font-bold my-20'>What&apos;s Included</h1>

      <div className='flex flex-col items-center m-auto rounded-xl gap-12 w-9/12 bg-cyan-200 p-4 md:gap-24 md:p-8'>
        
        {/* First Row */}
        <div className='flex flex-col md:flex-row md:justify-between w-full'>
          <div className='flex flex-col gap-6 items-center'>
            <p className='text-xl font-semibold text-center'>Guide</p>
            <Image
              src={guideIcon}
              alt='guide-icon'
              width={140}
              className='mix-blend-multiply'
            />
          </div>
          <div className='flex flex-col gap-6 items-center'>
            <p className='text-xl mt-9 md:m-0 font-semibold text-center'>Best vehicles</p>
            <Image
              src={quadIcon}
              alt='quad-icon'
              width={120}
              className='mix-blend-multiply'
            />
          </div>
          <div className='flex flex-col gap-6 items-center'>
            <p className='text-xl mt-9 md:m-0 font-semibold text-center'>Helmet</p>
            <Image
              src={helmetIcon}
              alt='helmet-icon'
              width={120}
              className='mix-blend-multiply'
            />
          </div>
        </div>
        
        {/* Second Row */}
        <div className='flex flex-col md:flex-row md:justify-between w-full'>
          <div className='flex flex-col gap-6 items-center'>
            <p className='text-xl  mt-9 md:m-0 font-semibold text-center'>Mask</p>
            <Image
              src={maskIcon}
              alt='mask-icon'
              width={120}
              className='mix-blend-multiply'
            />
          </div>
          <div className='flex flex-col gap-6 items-center'>
            <p className='text-xl mt-9 md:m-0 font-semibold text-center'>Gloves</p>
            <Image
              src={glovesIcon}
              alt='gloves-icon'
              width={120}
              className='mix-blend-multiply'
            />
          </div>
          <div className='flex flex-col gap-6 items-center'>
            <p className='text-xl mt-9 md:m-0 font-semibold text-center'>Photo and video stops</p>
            <Image
              src={cameraIcon}
              alt='camera-icon'
              width={120}
              className='mix-blend-multiply'
            />
          </div>
        </div>

        <p className='font-bold text-xl text-center'>We offer free pick up for our guests to the tour starting point!</p>
      </div>
    </>
  );
};

export default WhatsIncluded;
