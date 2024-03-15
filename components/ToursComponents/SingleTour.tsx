import React from 'react';
import MyGallery from '../HomePageComponents/MyGallery';
import TourCard from '../HomePageComponents/TourCard';
import WhatsIncluded from './WhatsIncluded';
import { aboutimages } from '../AboutComponents/aboutimages';

interface Items {
  title: string;
  intro: string;
  steps: string;
  tourCardsData: any[];
  };


interface SingleTourProps {
  items: Items[];
}

const SingleTour = ({ items }: SingleTourProps) => {
  return (
    <>
      <div className='flex flex-col'>
        {items.map((item, index) => (
          <div key={index} className='w-full flex flex-col gap-8'>
            <h1 className='text-center text-2xl text-sky-700 font-semibold'>
              {item.title}
            </h1>
            <h2 className='text-xl font-semibold my-4 text-sky-500'>{item.intro}</h2>
            <h2 className='text-xl text-center font-semibold mt-4 mb-2'>Tour highlights:</h2>
            <ol className="list-decimal pl-6">
              {item.steps.split('\n\n').map((step, stepIndex) => {
                const stepParts = step.split(':');
                const stepNumber = stepParts[0];
                const stepContent = stepParts.slice(1).join(':'); // Join the remaining parts as content
                return (
                  <li key={stepIndex} className="my-6 text-lg">
                    <p className='font-semibold'>{stepNumber}:</p> {stepContent}
                  </li>
                );
              })}
            </ol>
          </div>
        ))}
        {/* Basic info cards */}
        <h2 className='text-2xl font-bold text-center mt-16 mb-4'>Tour Information</h2>
        <div className='ml-8 flex flex-col gap-4 items-center justify-center mb-12'>
          <div className='flex flex-row gap-4 mt-8'>
            {items.map((item, index) => (
              item.tourCardsData.slice(0, 2).map((tourCard, cardIndex) => (
                <TourCard key={cardIndex} image={tourCard.image} description={tourCard.description} />
              ))
            ))}
          </div>
          <div className='flex flex-row gap-4'>
            {items.map((item, index) => (
              item.tourCardsData.slice(2, 4).map((tourCard, cardIndex) => (
                <TourCard key={cardIndex} image={tourCard.image} description={tourCard.description} />
              ))
            ))}
          </div>
        </div>
        <WhatsIncluded/>
        <MyGallery images={aboutimages} title={"Basic Tour Gallery"} />
      </div>

                
    </>
  )
}


export default SingleTour;
