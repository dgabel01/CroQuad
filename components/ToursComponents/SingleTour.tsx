"use client"
import React,{useEffect} from 'react';
import MyGallery from '../HomePageComponents/MyGallery';
import TourCard from '../HomePageComponents/TourCard';
import WhatsIncluded from './WhatsIncluded';
import { aboutimages } from '../AboutComponents/aboutimages';
import AOS from 'aos';
import 'aos/dist/aos.css';

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

useEffect(()=>{
  AOS.init();
},[])

  return (
    <>
      <div className='flex flex-col'>
      {items.map((item, index) => (
        <div key={index} data-aos="fade-down" data-aos-duration="2000" className='w-full flex flex-col gap-8 items-center'>
          <h1 className='text-center text-3xl font-bold text-sky-600'>{item.title}</h1>
          <h2 className='text-xl font-semibold my-4 italic'>&ldquo;{item.intro}&ldquo;</h2>
          <div className='border border-gray-300 rounded-lg p-6'>
            <h2 className='text-3xl text-center font-semibold mb-4'>Tour highlights:</h2>
            <ol data-aos="fade-down" data-aos-duration="2000"   className="list-decimal pl-6">
              {item.steps.split('\n\n').map((step, stepIndex) => {
                const stepParts = step.split(':');
                const stepNumber = stepParts[0];
                const stepContent = stepParts.slice(1).join(':'); // Join the remaining parts as content
                return (
                  <li key={stepIndex} className="my-4 text-lg">
                    <p className='font-semibold'>{stepNumber}:</p> {stepContent}
                  </li>
                );
              })}
            </ol>
          </div>
        </div>
      ))}

        {/* Basic info cards */}
        <h2 className='text-3xl font-bold text-center mt-24 mb-12'>Tour Information</h2>
        <div className='flex flex-col sm:gap-8 md:gap-16 items-center justify-center mb-12'>
          <div data-aos="fade-down" data-aos-duration="2000"  className='flex flex-row gap-8 sm:gap-16 md:gap-32 mt-8'> 
            {items.map((item, index) => (
              item.tourCardsData.slice(0, 2).map((tourCard, cardIndex) => (
                <TourCard key={cardIndex} image={tourCard.image} description={tourCard.description} />
              ))
            ))}
          </div>
          <div data-aos="fade-down" data-aos-duration="2000"  className='flex flex-row gap-8 sm:gap-16 md:gap-32 mt-8'> 
            {items.map((item, index) => (
              item.tourCardsData.slice(2, 4).map((tourCard, cardIndex) => (
                <TourCard key={cardIndex} image={tourCard.image} description={tourCard.description} />
              ))
            ))}
          </div>
        </div>
        <WhatsIncluded />
        <MyGallery images={aboutimages} title={"Basic Tour Gallery"} />
      </div>

                
    </>
  )
}


export default SingleTour;
