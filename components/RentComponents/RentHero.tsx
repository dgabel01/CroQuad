import React from 'react'
import Image from 'next/image';
import Link from 'next/link';

const RentHero = () => {
  return (
    <>
     <div className="relative overflow-hidden bg-cover bg-no-repeat" style={{
      backgroundPosition: '55%',
      height: '600px',
      marginTop: '0',
    }}>
      <Image
        src="/image4.jpeg"
        alt="Hero Background"
        fill={true}
        style={{ objectFit: 'cover', objectPosition: '55% 50%' }}
        priority={true}
      />
      <div className="absolute top-0 right-0 bottom-0 left-0 h-full w-full overflow-hidden bg-[hsla(0,0%,0%,0.40)] bg-fixed">
        <div className="flex h-full items-center justify-center">
          <div className="px-6 text-center text-white md:px-12">
            <h1 className="mb-16 md:mb-40 text-4xl font-bold tracking-tight md:text-5xl xl:text-6xl">
              Don&apos;t feel like taking the guided tour?
            </h1>
            <p className='mt-36 mb-8 sm:text-3xl text-2xl font-bold'>Book your own quadbike and take the Hvar adventure into your hands.</p>
            <Link href={"/contact"}>
              <button type="button"
                className="text-white rounded border-2 border-neutral-50 px-4 sm:px-6 py-2 sm:py-3 text-sm sm:text-base font-bold uppercase leading-normal transition duration-150 ease-in-out hover:border-neutral-100 hover:bg-white hover:bg-opacity-30  focus:border-neutral-100 focus:text-neutral-100 focus:outline-none focus:ring-0 active:border-neutral-200 active:text-neutral-200">
                Book Now
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
    
    
    </>
  )
}

export default RentHero;