import React, { useEffect } from 'react';
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
  note:string;
  food:string;
}

interface SingleTourProps {
  items: Items[];
}

const SingleTour = ({ items }: SingleTourProps) => {
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <>
      <div className='flex flex-col'>
        {items.map((item, index) => (
          <div key={index}  className='w-full flex flex-col gap-8 items-center'>
            <h1 className='text-center text-4xl font-bold text-sky-700'>{item.title}</h1>
            <h2 className='text-xl font-semibold my-4 italic'>&ldquo;{item.intro}&ldquo;</h2>
            <div className='border-t-2 border-b-2 border-gray-400 rounded-lg p-6'>
              <h2 className='text-3xl text-center font-semibold mb-4'>Tour highlights:</h2>
              <ol  className="list-none pl-6">
                {item.steps.split('\n\n').map((step, stepIndex) => {
                  // Use regular expression to find time in the step string and bold it
                  const formattedStep = step.replace(/(\d{1,2}:\d{2} [AP]M - \d{1,2}:\d{2} [AP]M)/g, '<span class="font-bold">$1</span>');
                  return (
                    <li key={stepIndex} className="my-16 text-xl flex items-start">
                      <span className="mr-2">{stepIndex + 1})</span>
                      <div dangerouslySetInnerHTML={{ __html: formattedStep }}></div>
                    </li>
                  );
                })}
              </ol>
              <p className='font-bold text-lg'>*Note:{item.note}</p>
            </div>
          </div>
        ))}

        {/* Basic info cards */}
        <div  className='flex items-center justify-center'>
          <h1 className='text-3xl font-extrabold mt-24 mb-12'>Tour Information</h1>
        </div>
        <div className='flex flex-col sm:gap-8 md:gap-16 items-center justify-center mb-12'>
          <div  className='flex flex-row gap-8 sm:gap-16 md:gap-32 mt-8'>
            {items.map((item, index) => (
              item.tourCardsData.slice(0, 2).map((tourCard, cardIndex) => (
                <TourCard key={cardIndex} image={tourCard.image} description={tourCard.description} />
              ))
            ))}
          </div>
          <div  className='flex flex-row gap-8 sm:gap-16 md:gap-32 mt-8'>
            {items.map((item, index) => (
              item.tourCardsData.slice(2, 4).map((tourCard, cardIndex) => (
                <TourCard key={cardIndex} image={tourCard.image} description={tourCard.description} />
              ))
            ))}
          </div>
        </div>
        <WhatsIncluded lunch={items[0].food} />
        <MyGallery images={aboutimages} title={"Panorama Tour Gallery"} />
      </div>
    </>
  )
}

export default SingleTour;
