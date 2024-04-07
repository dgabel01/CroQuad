import React, { useEffect } from 'react';
import './keen-slider.min.css'
import KeenSlider from 'keen-slider';
import Image from 'next/image';
import quadIcon from '../../public/quadicon.jpeg'
import routeIcon from '../../public/routeicon.png'
import sceneryIcon from '../../public/sceneryicon.png'

const reviews = [
  {
    rating: 5,
    title: "Amazing experience",
    content: "From the moment I arrived, the staff was friendly and knowledgeable, providing a quick and efficient check-in process. The selection of quads was impressive, ranging from beginner-friendly models to more advanced options for seasoned riders. The staff took the time to ensure I felt comfortable and confident operating the quad before setting off on my adventure.",
    author: "Michael Scott"
  },
  {
    rating: 5,
    title: "Great service",
    content: "The staff was very helpful and accommodating. I had a fantastic time exploring the area with their quad rentals. The equipment was in excellent condition, and the instructions provided were clear and easy to follow.",
    author: "Jane Doe"
  },
  {
    rating: 5,
    title: "The sights were incredible",
    content: "Overall, my experience was amazing. The staff was friendly, and the equipment was fine, and I especially loved the stops to take in the beautiful Hvar scenery.",
    author: "John Smith"
  },
  
];


const Reviews = () => {
  useEffect(() => {
    // Initialize KeenSlider in the useEffect hook
    const keenSlider = new KeenSlider('#keen-slider', {
      loop: true,
      slides: {
        origin: 'center',
        perView: 1,
        spacing: 16,
      },
      breakpoints: {
        '(min-width: 1024px)': {
          slides: {
            origin: 'auto',
            perView: 1.25,
            spacing: 64,
          },
        },
      },
    });

    // Event handlers for previous and next buttons
    const keenSliderPreviousDesktop = document.getElementById('keen-slider-previous-desktop');
    const keenSliderNextDesktop = document.getElementById('keen-slider-next-desktop');
    const keenSliderPrevious = document.getElementById('keen-slider-previous');
    const keenSliderNext = document.getElementById('keen-slider-next');

    if (keenSliderPrevious) {
      keenSliderPrevious.addEventListener('click', () => keenSlider.prev());
    }
    if (keenSliderNext) {
      keenSliderNext.addEventListener('click', () => keenSlider.next());
    }
    if (keenSliderPreviousDesktop) {
      keenSliderPreviousDesktop.addEventListener('click', () => keenSlider.prev());
    }
    if (keenSliderNextDesktop) {
      keenSliderNextDesktop.addEventListener('click', () => keenSlider.next());
    }

    // Cleanup function
    return () => {
      keenSlider.destroy();
    };
  }, []); // Empty dependency array ensures useEffect runs only once after the initial render

  

  return (
  <>

  <div className='flex flex-col gap-8 mb-12'>
    <div>
      <p className='text-3xl text-center mx-4 font-bold mb-12'>Why Choose CroQuad?</p>
    </div>
    <div>
      <p className='text-center text-3xl mx-4 my-16 font-medium'>We craft <span className=' text-red-600 font-semibold underline italic'>experiences</span>, not just journeys!</p>
    </div>
    <div className='flex flex-col sm:flex-row justify-evenly gap-16 mt-12'>
      <div className='flex flex-col items-center gap-6 sm:text-center'>
        <p className='text-xl font-semibold'>Modern equipment</p>
        <Image
          src={quadIcon}
          alt='quad-icon'
          width={90}
          height={50}
          className='m-auto'
        />
      </div>
      <div className='flex flex-col items-center gap-6 sm:text-center'>
        <p className='text-xl font-semibold'>Exciting routes</p>
        <Image
          src={routeIcon}
          alt='route-icon'
          width={90}
          height={50}
          className='m-auto mb-8'
        />
      </div>
      <div className='flex flex-col items-center gap-6 sm:text-center'>
        <p className='text-xl font-semibold'>Unforgettable scenery</p>
        <Image
          src={sceneryIcon}
          alt='scenery-icon'
          width={90}
          height={50}
          className='m-auto'
        />
      </div>
    </div>  
</div>


 <section>
  <div className="mx-auto px-4 py-12 sm:px-6 lg:me-0 lg:py-16 lg:pe-0 lg:ps-8 xl:py-24">
    <div className="grid grid-cols-1 gap-8 lg:grid-cols-3 lg:items-center lg:gap-16">
      <div className="max-w-xl text-center ltr:sm:text-left rtl:sm:text-right">
        <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
          Don&apos;t just take our word for it...
        </h2>

        <p className="mt-4 text-xl text-gray-700">
          See what our customers say about the experience
        </p>

        <p className="mt-4 text-xl text-gray-700">
          More reviews on <a href={"https://www.google.com"} target="_blank" className="text-blue-600 font-semibold after:content-['_↗']">Google</a>
        </p>

        <div className="hidden lg:mt-8 lg:flex lg:gap-4 ml-24">
          <button
            aria-label="Previous slide"
            id="keen-slider-previous-desktop"
            className="rounded-full border border-red-600 p-3 text-red-600 transition hover:bg-red-600 hover:text-white"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="size-5 rtl:rotate-180"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M15.75 19.5L8.25 12l7.5-7.5"
              />
            </svg>
          </button>

          <button
            aria-label="Next slide"
            id="keen-slider-next-desktop"
            className="rounded-full border border-red-600 p-3 text-red-600 transition hover:bg-red-600 hover:text-white"
          >
            <svg
              className="size-5 rtl:rotate-180"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M9 5l7 7-7 7"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
              />
            </svg>
          </button>
        </div>
      </div>



  <div className="mx-6 lg:col-span-2 lg:mx-0">
  <div id="keen-slider" className="keen-slider">
    {reviews.map((review, index) => (
      <div key={index} className="keen-slider__slide">
        <blockquote className="flex h-full flex-col justify-between bg-white p-6 shadow-sm sm:p-8 lg:p-12">
          <div>
            <div className="flex gap-0.5 text-green-500">
              {[...Array(review.rating)].map((_, i) => (
                <svg
                  key={i}
                  className="h-5 w-5"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"
                  />
                </svg>
              ))}
            </div>
            <div className="mt-4">
              <p className="text-2xl font-bold text-rose-600 sm:text-3xl">{review.title}</p>
              <p className="mt-4 leading-relaxed text-gray-700">{review.content}</p>
            </div>
          </div>
          <footer className="mt-4 text-sm font-medium text-gray-700 ">
            &mdash; {review.author}
          </footer>
        </blockquote>
      </div>
    ))}
  </div>
</div>
</div>


    



    <div className="mt-8 flex justify-center gap-4 lg:hidden">
      <button
    aria-label="Previous slide"
    id="keen-slider-previous"
    className="rounded-full border border-red-600 p-4 text-red-600 transition hover:bg-red-600 hover:text-white focus:bg-transparent focus:text-red-600 focus:outline-none"
  >
    <svg
      className="size-5 -rotate-180 transform"
      fill="none"
      stroke="currentColor"
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M9 5l7 7-7 7" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
    </svg>
  </button>

  <button
    aria-label="Next slide"
    id="keen-slider-next"
    className="rounded-full border border-red-600 p-4 text-red-600 transition hover:bg-red-600 hover:text-white focus:bg-transparent focus:text-red-600 focus:outline-none"
  >
    <svg
      className="h-5 w-5"
      fill="none"
      stroke="currentColor"
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M9 5l7 7-7 7" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
    </svg>
  </button>


     
    </div>
  </div>
</section>
  </>
  );
};

export default Reviews;

