import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import logoImage from "../public/logo.jpeg"
const Logo = () => {
  return (
        <Image
          alt='logo'
          src={logoImage}
          height={75}
          className='mix-blend-multiply rounded-md' 
        /> 
  )
}

export default Logo;