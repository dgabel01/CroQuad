import React from 'react'
import SocialIcons from './SocialIcons';

const Map = () => {
  return (
   <>
    <section className="bg-white dark:bg-gray-900">
      <div className="container px-6 py-12 mx-auto">
        <div className='flex  flex-col gap-4 items-center justify-center'>
          <h1 className=" mt-16 text-center mb-4 text-3xl font-bold text-blue-500 dark:text-blue-400">Contact Us</h1>
          <p className="mt-3 text-xl text-gray-500 font-medium dark:text-gray-400">Find us here to book your ride now</p>
        </div>

        <div className="grid grid-cols-1 gap-12 mt-10 lg:grid-cols-3">
          <div className="grid grid-cols-1 gap-12 sm:grid-cols-2 lg:grid-cols-1">
            <div>
              <span className="inline-block p-3 text-blue-500 rounded-full bg-blue-100/80 dark:bg-gray-800">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-5 h-5">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
                </svg>
              </span>
              <h2 className="mt-4 text-base font-medium text-gray-800 dark:text-white">Email</h2>
              <p className="mt-2 text-md text-gray-500 dark:text-blue-400">Send us an e-mail and we&apos;ll get back to you</p>
              <p className="mt-2 text-md text-blue-500 dark:text-blue-400">croquad@gmail.com</p>
            </div>

           
            <div>
              <span className="inline-block p-3 text-blue-500 rounded-full bg-blue-100/80 dark:bg-gray-800">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-5 h-5">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
                </svg>
              </span>
              
              <h2 className="mt-4 text-base font-medium text-gray-800 dark:text-white">Location</h2>
              <p className="mt-2 text-md text-gray-500 dark:text-gray-400">Our quads are located here</p>
              <p className="mt-2 text-md text-blue-500 dark:text-blue-400">Stari Grad Hvar</p>
            </div>

           
            <div>
              <span className="inline-block p-3 text-blue-500 rounded-full bg-blue-100/80 dark:bg-gray-800">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-5 h-5">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
                </svg>
              </span>
              
              <h2 className="mt-4 text-base font-medium text-gray-800 dark:text-white">Phone</h2>
              <p className="mt-2 text-md text-gray-500 dark:text-gray-400">Mon-Fri from 8am to 5pm</p>
              <p className="mt-2 text-md text-blue-500 dark:text-blue-400">+1 (555) 000-0000</p>
            </div>
          </div>

          {/* Map */}
          <div className="overflow-hidden rounded-lg lg:col-span-2 h-96 lg:h-auto" id='map'>
            <iframe
              width="100%"
              height="100%"
              frameBorder="0"
              title="map"
              marginHeight={0}
              marginWidth={0}
              scrolling="no"
              src="https://maps.google.com/maps?width=100%&height=600&hl=en&q=Starigrad,Hvar&ie=UTF8&t=&z=14&iwloc=B&output=embed"
              referrerPolicy='no-referrer'
              ></iframe>
          </div>
        </div>
      </div>
    </section>

    <SocialIcons/>

   </>
  )
}

export default Map;