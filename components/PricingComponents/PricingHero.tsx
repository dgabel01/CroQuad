import React from 'react'
import Link from 'next/link';

const PricingHero = () => {
  return (
    <>
    <div className="relative overflow-hidden bg-cover bg-no-repeat" style={{
        backgroundPosition: '50%',
        backgroundImage: 'url("/pricinghero.webp")', 
        height: '600px',
        marginTop:'0',
        }}>
      <div
        className="absolute top-0 right-0 bottom-0 left-0 h-full w-full overflow-hidden bg-[hsla(0,0%,0%,0.55)] bg-fixed">
        <div className="flex h-full items-center justify-center">
          <div className="px-6 text-center text-white md:px-12">
            <h1 className="mt-2 mb-16 text-5xl font-bold tracking-tight md:text-5xl xl:text-6xl">
              Tour prices
            </h1>
            <p className='text-xl font-bold'>Explore the thrill without breaking the bank</p>
            <p>

            </p>
            <Link href={"/contact"}>
                <button type="button"  className="m-7 text-white rounded border-2 border-neutral-50 px-[46px] pt-[14px] pb-[12px] text-sm font-medium uppercase leading-normal transition duration-150 ease-in-out hover:border-neutral-100 hover:bg-white hover:bg-opacity-10  focus:border-neutral-100 focus:text-neutral-100 focus:outline-none focus:ring-0 active:border-neutral-200 active:text-neutral-200">
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

export default PricingHero;