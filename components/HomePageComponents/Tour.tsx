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
        <div className='mx-4 sm:mx-24 justify-between sm:flex sm:flex-col lg:flex lg:flex-row gap-8'>
          <div className='flex flex-col gap-4'>
            <h2 className='sm:text-center md:text-left font-bold text-3xl ml-4'>{title}</h2>
            <p className='sm:text-pretty md:text-left ml-4 text-lg'>{description}</p>
            <div className='sm:mx-auto md:m-0'>
              <Link href={"/tours/#tour-details"}>
                <Button placeholder="" variant="text" className="flex items-center gap-2">
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
            <div className='flex flex-col md:flex-row items-center justify-center gap-8'>
              {images.map((image, index) => (
                <Image
                  key={index}
                  src={image}
                  alt={`tour-image-${index}`}
                  width={250}
                  height={250}
                  className='m-4 rounded-lg'
                />
              ))}
            </div>
          </div>

          <div className='ml-0 sm:ml-8 flex flex-col gap-4 items-center justify-center'>
            <div className='flex flex-col sm:flex-row gap-4 mt-8'>
               {tourCardsData.slice(0, 2).map((tourCard, index) => (
                <TourCard key={index} image={tourCard.image} description={tourCard.description} />
              ))}
            </div>
            <div className='flex flex-col sm:flex-row gap-4'>
              {tourCardsData.slice(2, 4).map((tourCard, index) => (
                <TourCard key={index} image={tourCard.image} description={tourCard.description} />
              ))}
            </div>
          </div>
        </div>
        <hr className="w-5/6 h-1 mx-auto my-8 bg-red-500 file:border-0 rounded md:my-10 dark:bg-gray-700"/>
        <div className='mb-36'></div>
      </>
    );
  };
  
  export default Tour;
