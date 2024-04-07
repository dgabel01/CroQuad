import React from 'react'
import Image, { StaticImageData } from 'next/image';

interface Props{
    image:StaticImageData;
    description:{
        num?:number,
        unit:string,
        type:string;
    }

}

const TourCard = ({image,description}:Props) => {
  return (
   <>
    <div className='sm:flex sm:justify-center sm:items-center md:flex md:flex-col rounded-lg shadow-lg p-4 w-34'>
        <Image
            src = {image}
            alt='card-image'
            width={34}
            height={34}
        />
        <div className='flex flex-col p-1 '>
            <p className='font-bold mt-1 md:text-xl sm:text-lg'>{description.num}</p>
            <p className='md:text-xl sm:text-lg'>{description.unit}</p>
            <p className='text-red-600 font-bold mt-1 md:text-xl sm:text-lg'>{description.type}</p>
        </div>

    </div>
   </>
  )
}

export default TourCard;