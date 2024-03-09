"use client"
import React from 'react'
import Link from 'next/link';
import { Button } from "@material-tailwind/react";

const PriceCallToBook = () => {
  return (
    <>
        <div className='flex flex-col gap-8 my-24 items-center justify-center'>
            <p className='text-xl mx-4 font-semibold text-center'>Found the tour just for you?</p>
            <p className='text-xl mx-4 font-semibold text-center'>Book your ride now on our Contact Us page!</p>
            <Link href={"/contact"}><Button placeholder="" color="blue" className='ml-4'>Contact us Now</Button></Link>
        </div>
    </>
  )
}

export default PriceCallToBook;