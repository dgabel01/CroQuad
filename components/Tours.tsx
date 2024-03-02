import React from 'react';
import imageOne from '../public/ATV-Quad-mountain-tour-Split-Croatia.jpg';
import imageTwo from '../public/145.jpg';
import lengthIcon from '../public/lenghticon.png';
import durationIcon from '../public/clockicon.png';
import peopleIcon from '../public/peopleicon.jpeg';
import difficultyIcon from '../public/difficultyicon.png';
import Tour from './Tour';

const tourData = [
  {
    title: 'Adventure Tour',
    images: [imageOne, imageTwo],
    description: 'The Adventure trail is 21 km long and takes you through beautiful parts of the island of Vir. You will drive on a superb track with wonderful views of the sea, neighboring islands, and Velebit. Great photo locations to capture this unforgettable experience.',
    tourCardsData: [
      {
        image: lengthIcon,
        description: {
          num: 25,
          unit: 'km',
          type: 'Length',
        },
      },
      {
        image: durationIcon,
        description: {
          num: 60,
          unit: 'min',
          type: 'Duration',
        },
      },
      {
        image: difficultyIcon,
        description: {
          num: 3,
          unit: 'Easy',
          type: 'Difficulty',
        },
      },
      {
        image: peopleIcon,
        description: {
          num: 10,
          unit: 'Max.people',
          type: 'Tour size',
        },
      },
    ],
  },
  {
    title: 'Extreme Tour',
    images: [imageOne, imageTwo],
    description: 'The Extreme trail is 30 km long and takes you through beautiful parts of the island of Hvar. You will drive on a superb track with wonderful views of the sea, neighboring islands, and Velebit. Great photo locations to capture this unforgettable experience.',
    tourCardsData: [
      {
        image: lengthIcon,
        description: {
          num: 30,
          unit: 'km',
          type: 'Length',
        },
      },
      {
        image: durationIcon,
        description: {
          num: 90,
          unit: 'min',
          type: 'Duration',
        },
      },
      {
        image: difficultyIcon,
        description: {
          num: 6,
          unit: 'Hard',
          type: 'Difficulty',
        },
      },
      {
        image: peopleIcon,
        description: {
          num: 6,
          unit: 'Max.people',
          type: 'Tour size',
        },
      },
    ],
  },
];


const Tours = () => {
  return (
    <>
      <h1 className='mt-36 mb-12 text-center text-3xl font-bold'>Our quad rides</h1>
      {tourData.map((tour, index) => (
        <Tour
          key={index}
          title={tour.title}
          description={tour.description}
          images={tour.images}
          tourCardsData={tour.tourCardsData}
        />
      ))}
    </>
  );
};

export default Tours;
