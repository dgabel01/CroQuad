import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import logoImage from "../public/logored.jpg"
const Logo = ({height}: {height: number}) => {
  return (
        <Image
          alt='logo'
          src={logoImage}
          height={height}
          className='mix-blend-color-burn rounded-md' 
        /> 
  )
}

export default Logo;