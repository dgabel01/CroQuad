import React from 'react';
import { Button } from "@material-tailwind/react";
import Link from 'next/link';
import Image, { StaticImageData } from 'next/image';
import TourCard from './TourCard';

interface Props{
    title:string;
    description:string;
    images:StaticImageData[];
    tourCardsData:any[];
}

const Tour = ({ title, description, images, tourCardsData }: Props) => {
    return (
      <>
       <div className='mx-4 sm:mx-24 justify-between sm:flex sm:flex-col lg:flex lg:flex-row gap-8 lg:gap-16'>
       <div className='flex flex-col gap-4'>
        <h2 className='sm:text-center md:text-left font-bold text-3xl ml-4'>{title}</h2>
        <p className='sm:text-pretty md:text-left ml-4 text-lg'>{description}</p>
        <div className='sm:mx-auto md:m-0 mt-4 w-52'>
          <Link href={"/tours/#tour-details"} >
            <Button placeholder="" variant="text" className="flex items-center gap-2 border-2 ml-4 bg-zinc-50" size='lg'>
              Tour Details{" "}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={2}
                stroke="currentColor"
                className="h-5 w-5"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3"
                />
              </svg>
            </Button>
          </Link>
        </div>
        <div className='flex flex-col md:flex-row items-center justify-center gap-8 lg:gap-16 m-auto'>
          {images.map((image, index) => (
            <Image
              key={index}
              src={image}
              alt={`tour-image-${index}`}
              width={250}
              height={250}
              className='m-auto rounded-lg overflow-hidden'
            />
          ))}
        </div>
      </div>

      <div className='flex flex-col sm:gap-8 md:gap-16 items-center justify-center mb-12'>
        <div className='flex flex-row gap-8 sm:gap-16 md:gap-32 mt-8 w-34'> 
          {tourCardsData.slice(0, 2).map((tourCard, index) => (
            <TourCard key={index} image={tourCard.image} description={tourCard.description} />
          ))}
        </div>
        <div className='flex flex-row gap-8 sm:gap-16 md:gap-32 mt-8 ml-2 w-34'> 
          {tourCardsData.slice(2, 4).map((tourCard, index) => (
            <TourCard key={index} image={tourCard.image} description={tourCard.description} />
          ))}
        </div>
      </div>
    </div>

    <span className="relative flex justify-center">
      <div className="absolute inset-x-0 top-1/2 h-0.5 -translate-y-1/2 bg-transparent bg-gradient-to-r from-transparent via-gray-900 to-transparent opacity-75">
      </div>
      <span className="relative z-10 bg-white px-6"></span>
    </span>
    <div className='mb-36'></div>
    </>
    );
  };
  
  export default Tour;
