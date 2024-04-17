import React from 'react';
import imageOne from '../../public/image3.jpeg';
import imageTwo from '../../public/image2.jpeg';
import lengthIcon from '../../public/lenghticon.png';
import durationIcon from '../../public/clockicon.png';
import peopleIcon from '../../public/peopleicon.jpeg';
import terrainIcon from '../../public/terrainicon.png';
import Tour from './Tour';

export const tourData = [
  {
    title: 'CroQuad Example Tour',
    images: [imageOne, imageTwo],
    description: 'The trail is 15 km long and takes you through beautiful parts of the island of Hvar. You will drive on a superb track with wonderful views of the sea, neighboring islands, and Velebit. Great photo locations to capture this unforgettable experience.',
    tourCardsData: [
      {
        image: lengthIcon,
        description: {
          num: 15,
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
        image: terrainIcon,
        description: {
          unit: 'Varied',
          type: 'Terrain',
        },
      },
      {
        image: peopleIcon,
        description: {
          num: 10,
          unit: 'People',
          type: 'Tour size',
        },
      },
    ],
  },
  {
    title: 'CroQuad Example Tour 2',
    images: [imageOne, imageTwo],
    description: 'The trail is 40 km long and takes you through beautiful parts of the island of Hvar. You will drive on a superb track with wonderful views of the sea, neighboring islands, and Velebit. Great photo locations to capture this unforgettable experience.',
    tourCardsData: [
      {
        image: lengthIcon,
        description: {
          num: 40,
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
        image: terrainIcon,
        description: {
          unit: 'Varied',
          type: 'Terrain',
        },
      },
      {
        image: peopleIcon,
        description: {
          num: 6,
          unit: 'People',
          type: 'Tour size',
        },
      },
    ],
  },
];


const Tours = () => {
  return (
    <>
      <h1 className='mt-36 mb-24 text-center text-3xl font-extrabold'>Our Quad Rides</h1>
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
