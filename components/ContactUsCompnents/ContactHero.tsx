import React from 'react'
import Image from 'next/image';


const ContactHero = () => {
  return (
    <>

   <div className="relative overflow-hidden bg-cover bg-no-repeat" style={{
      backgroundPosition: '55%',
      height: '600px',
      marginTop: '0',
    }}>
      <Image
        src="/contacthero.webp"
        alt="Hero Background"
        fill={true}
        style={{ objectFit: 'cover', objectPosition: '55% 50%' }}
        priority={true}
      />
      <div className="absolute top-0 right-0 bottom-0 left-0 h-full w-full overflow-hidden bg-[hsla(0,0%,0%,0.45)] bg-fixed">
        <div className="flex h-full items-center justify-center">
          <div className="px-6 text-center text-white md:px-12">
            <h1 className="mt-2 mb-16 text-4xl font-bold tracking-tight md:text-5xl xl:text-6xl">
            Contact Us
            </h1>
            <p className='mt-4 mb-8 text-2xl font-semibold'> Connect with Us through the following platforms and book your ride now</p>
          </div>
        </div>
      </div>
    </div>
 

    </>
  )
}

export default ContactHero;