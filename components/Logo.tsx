import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import logoImage from "../public/logo.jpeg"
const Logo = ({height}: {height: number}) => {
  return (
        <Image
          alt='logo'
          src={logoImage}
          height={height}
          className='mix-blend-hard-light rounded-md' 
        /> 
  )
}

export default Logo;