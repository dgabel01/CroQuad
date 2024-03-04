import Link from 'next/link'
import Image from 'next/image'
import { IoReturnUpBackOutline } from "react-icons/io5";
import type { Metadata } from 'next';
import errorImage from '../../public/404illustration.webp'

export const metadata:Metadata={
  title:'404 Not Found',
  description:'Custom 404 page for unregistered routes'
}

export default function NotFound() {
  return (
    <>
    <h1 className='text-center text-2xl font-semibold mt-8'>Ooops!</h1>
      <div className='flex flex-col items-center justify-center'>
        <Image
          src={errorImage}
          alt='errorimage'
          width={500}
          height={300}
        />
        <div className='flex flex-col items-center justify-center gap-12 text-xl text-center'>
          <p className='font-bold'>The page you were looking for was moved or doesn&apos;t exist.</p>
          <p>Let&apos;s get you back.</p>
          <div className="flex items-center">
          <IoReturnUpBackOutline className="inline-block mb-2 mr-2 text-green-500"  size={34}/>
            <Link href={`/`} className='hover:text-green-500'>Go back</Link>
          </div>
        </div>
      </div>
    </>
  )
}
