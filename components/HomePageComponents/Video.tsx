import React from 'react'

const Video = () => {
  return (
    <div className="w-full h-full overflow-hidden">
      <video poster='IMG_7000.webp' preload='metadata' autoPlay muted loop playsInline className="w-full h-full object-cover" style={{ objectPosition: 'center center' }}>
        <source src="/hero.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    </div>
  )
}

export default Video