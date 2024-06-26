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
  note:string;
  food:string;
}

interface SingleTourProps {
  items: Items[];
}

const SingleTour = ({ items }: SingleTourProps) => {
  const renderStep = (step:string) => {
    // Convert "Dalmatian tavern "Kokot"" to a link
    const kokotLink = step.replace(/(Dalmatian tavern "Kokot")/g, '<a class="text-blue-500 font-bold underline" href="https://www.instagram.com/konobakokot?igsh=ODEzMm1vNzJ6Ymo4" target="_blank">$1</a>');
    // Convert "Dalmatian tavern "Dionis"" to a link
    const dionisLink = kokotLink.replace(/(Dalmatian tavern "Dionis")/g, '<a class="text-blue-500 font-bold underline" href="https://www.facebook.com/DionisHvar" target="_blank">$1</a>');
    return dionisLink;
  };
  

  return (
    <>
      <div className='flex flex-col'>
        {items.map((item, index) => (
          <div key={index} className='w-full flex flex-col gap-8 items-center'>
            <h1 className='text-center text-4xl font-bold text-sky-700'>{item.title}</h1>
            <h2 className='text-xl font-semibold my-4 italic'>&ldquo;{item.intro}&ldquo;</h2>
            <div className=' border-2 border-gray-300 shadow-lg rounded-lg p-6'>
              <h2 className='text-3xl text-center font-semibold mb-4'>Tour highlights</h2>
              <ol className="list-none pl-6">
                {item.steps.split('\n\n').map((step, stepIndex) => (
                  <li key={stepIndex} className="my-16 text-xl flex items-start font-medium">
                    <span className="mr-2">{stepIndex + 1}.</span>
                    <div dangerouslySetInnerHTML={{ __html: renderStep(step) }}></div>
                  </li>
                ))}
              </ol>
              <p className='font-extrabold text-lg'>*Note:{item.note}</p>
            </div>
          </div>
        ))}
        {/* Basic info cards */}
        <div className='flex items-center justify-center'>
          <h1 className='text-3xl font-extrabold mt-24 mb-12'>Tour Information</h1>
        </div>
        <div className='flex flex-col sm:gap-8 md:gap-16 items-center justify-center mb-12'>
          <div className='flex flex-row gap-8 sm:gap-16 md:gap-32 mt-8'>
            {items.map((item, index) => (
              item.tourCardsData.slice(0, 2).map((tourCard, cardIndex) => (
                <TourCard key={cardIndex} image={tourCard.image} description={tourCard.description} />
              ))
            ))}
          </div>
          <div className='flex flex-row gap-8 sm:gap-16 md:gap-32 mt-8'>
            {items.map((item, index) => (
              item.tourCardsData.slice(2, 4).map((tourCard, cardIndex) => (
                <TourCard key={cardIndex} image={tourCard.image} description={tourCard.description} />
              ))
            ))}
          </div>
        </div>
        <WhatsIncluded lunch={items[0].food} />
        <MyGallery images={aboutimages} title={items[0].title + " " + "Gallery"} />
      </div>
    </>
  )
}

export default SingleTour;
