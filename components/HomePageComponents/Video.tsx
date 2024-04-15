"use client"
import {useEffect, useState } from 'react';



export default function Video() {
  const [videoLoaded, setVideoLoaded] = useState(false);

  // Remove the setTimeout function to load the video immediately
  // setTimeout(() => {
  //   setVideoLoaded(true);
  // }, 500); 

  // Immediately set videoLoaded to true
  useEffect(() => {
    // Set videoLoaded to true when the component mounts
    // setVideoLoaded(true);

    // Immediately set videoLoaded to true when the component mounts
    setVideoLoaded(true);
  }, []); // Empty dependency array ensures this effect runs only once

  return (
    <div className="w-full h-full overflow-hidden relative">
        {/* Remove the conditional rendering based on videoLoaded */}
        {/* {!videoLoaded && <LoadingFallback />} */}
        {/* Instead, always render the loading fallback */}
        <video
          autoPlay
          muted
          loop
          playsInline
          preload='auto'
          className="w-full h-full object-cover"
          style={{ objectPosition: 'center center' }}
        >
          <source src="/herovideo.webm" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
    </div>
  );
}
