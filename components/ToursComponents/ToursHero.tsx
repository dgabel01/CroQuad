import React from 'react'
import Link from 'next/link';

const ToursHero = () => {
  return (
    <>
    <div className="relative overflow-hidden bg-cover bg-no-repeat" style={{
        backgroundPosition: '50%',
        backgroundImage: 'url("/tourshero.jpeg")', 
        height: '600px',
        marginTop:'0',
        }}>
      <div
        className="absolute top-0 right-0 bottom-0 left-0 h-full w-full overflow-hidden bg-[hsla(0,0%,0%,0.45)] bg-fixed">
        <div className="flex h-full items-center justify-center">
          <div className="px-6 text-center text-white md:px-12">
            <h1 className="mt-2 mb-16 text-5xl font-bold tracking-tight md:text-5xl xl:text-6xl">
              Adventure Awaits
            </h1>
            <p className='text-2xl font-bold'>Embark on unforgettable journeys with CroQuad</p>
            <p>

            </p>
            <Link href={"/contact"}>
              <button type="button" className="m-4 sm:m-7 text-white rounded border-2 border-neutral-50 px-4 sm:px-6 py-2 sm:py-3 text-sm sm:text-base font-semibold uppercase leading-normal transition duration-150 ease-in-out hover:border-neutral-100 hover:bg-white hover:bg-opacity-10  focus:border-neutral-100 focus:text-neutral-100 focus:outline-none focus:ring-0 active:border-neutral-200 active:text-neutral-200">
                Book your adventure now
              </button>
            </Link>
          </div>
        </div>
      </div>
   </div>

    </>
  )
}

export default ToursHero;
