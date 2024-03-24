import React from 'react'
import Link from 'next/link'
import Image from 'next/image'


const AboutHero = () => {
  return (
    <>
   <div className="relative overflow-hidden bg-cover bg-no-repeat" style={{
      backgroundPosition: '55%',
      height: '600px',
      marginTop: '0',
    }}>
      <Image
        src="/abouthero.jpg"
        alt="Hero Background"
        layout="fill"
        objectFit="cover"
        objectPosition="55% 50%"
        priority
      />
      <div className="absolute top-0 right-0 bottom-0 left-0 h-full w-full overflow-hidden bg-[hsla(0,0%,0%,0.50)] bg-fixed">
        <div className="flex h-full items-center justify-center">
          <div className="px-6 text-center text-white md:px-12">
            <h1 className="mt-2 mb-16 text-4xl font-bold tracking-tight md:text-5xl xl:text-6xl">
              Get to know Us better
            </h1>
            <p className='mt-4 mb-8 text-2xl font-semibold'> Our commitment goes beyond providing top-notch vehicles. Join us, and let&apos;s turn moments into memories together.</p>
            <Link href={"/tours"}>
              <button type="button"
                className="text-white rounded border-2 border-neutral-50 px-4 sm:px-6 py-2 sm:py-3 text-sm sm:text-base font-bold uppercase leading-normal transition duration-150 ease-in-out hover:border-neutral-100 hover:bg-white hover:bg-opacity-10  focus:border-neutral-100 focus:text-neutral-100 focus:outline-none focus:ring-0 active:border-neutral-200 active:text-neutral-200">
                Tours We Offer
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>

    </>
  )
}

export default AboutHero;