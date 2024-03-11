//cro quad story
import React from 'react'
import Link from 'next/link';

const Story = () => {
  return (
    <>
      <div className='flex flex-col items-center justify-center gap-10 mt-24'>
        <h1 className='text-3xl font-bold text-center mx-4'>Discover Hvar&apos;s Essence with CroQuad </h1>
        <p className='text-xl mx-8'>
          Welcome to CroQuad, where the gateway to thrilling escapades on Hvar Island unfolds! Our passion is dedicated to crafting exhilarating experiences that invite you to discover the heart of Hvar in an entirely new light.
        </p>
        <p className='text-xl mx-8'>
          With CroQuad, you&apos;re not just embarking on adrenaline-fueled quad tours &minus; you&apos;re immersing yourself in the authentic soul of Hvar through the eyes of our passionate local guides. Deeply connected to Hvar&apos;s culture, our guides unveil the island&apos; rich traditions, awe-inspiring natural beauty, and the welcoming locals who define the spirit of Hvar.
        </p>
        <p className='text-xl mx-8'>
          As attested by delighted travelers on platforms like TripAdvisor and Google, CroQuad Adventures proudly stands as the premier provider of quad tours on Hvar Island. Our unwavering dedication to delivering extraordinary adventures has garnered the trust and admiration of our visitors.
        </p>
      </div>


      <h1 className='text-3xl font-bold text-center my-24'>CroQuad&apos;s Story</h1>
      <ol className="ml-4 relative border-s border-gray-300 dark:border-gray-700">
      <li className="mb-10 ms-4 relative">
        <div className="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -start-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
        <time className="mb-1 ml-4 text-sm font-bold leading-none text-gray-400  dark:text-gray-500">February 2024</time>
        <h3 className="text-lg font-semibold text-gray-900 dark:text-white">CroQuad idea is born</h3>
        <p className="mb-4 text-base font-normal text-gray-500 dark:text-gray-400">Our journey started with a vision — to provide not just a mode of transportation but a gateway to exploration, freedom, and unforgettable moments.</p>
      </li>
      <li className="mb-10 ms-4 relative">
        <div className="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -start-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
        <time className="mb-1 ml-4 text-sm font-bold leading-none text-gray-400 dark:text-gray-500">Summer 2024</time>
        <h3 className="text-lg font-semibold text-gray-900 dark:text-white">Growth and innovation</h3>
        <p className="mb-4 text-base font-normal text-gray-500 dark:text-gray-400">We constantly evolved our fleet, services, and technology to meet the dynamic needs of our riders. From introducing new quad models to enhancing user experiences, this phase marked our commitment to setting new standards in quad rentals.</p>
        <Link href={"tours"} className="inline-flex items-center px-4 py-2 text-sm font-medium text-gray-900 bg-white border border-gray-200 rounded-lg hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:outline-none focus:ring-gray-100 focus:text-blue-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700 dark:focus:ring-gray-700">Tours<svg className="w-3 h-3 ms-2 rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
        <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
        </svg></Link>
      </li>
      <li className="mb-10 ms-4 relative">
        <div className="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -start-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
        <time className="mb-1 ml-4 text-sm font-bold leading-none text-gray-400 dark:text-gray-500">Continous Connection</time>
        <h3 className="text-lg font-semibold text-gray-900 dark:text-white">Community and connection</h3>
        <p className="mb-4 text-base font-normal text-gray-500 dark:text-gray-400">The CroQuad story isn&apos;t just about quads, it&apos;s about the vibrant community we&apos;ve built. We take pride in connecting riders with the breathtaking landscapes of Hvar. Whether solo explorers or thrill-seeking groups, CroQuad has become a hub for those seeking the perfect blend of adventure, camaraderie, and the freedom to discover Hvar&apos;s hidden gems.</p>
        <Link href={"/contact"} className="inline-flex items-center px-4 py-2 text-sm font-medium text-gray-900 bg-white border border-gray-200 rounded-lg hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:outline-none focus:ring-gray-100 focus:text-blue-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700 dark:focus:ring-gray-700">Reach out to Us<svg className="w-3 h-3 ms-2 rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
        <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
        </svg></Link>
      </li>
    </ol>
    </>
  )
}

export default Story;