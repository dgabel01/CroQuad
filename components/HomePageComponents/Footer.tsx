import React from 'react';
import Logo from './Logo';
import { FaInstagram, FaGoogle, FaFacebook, FaWhatsapp } from "react-icons/fa6";
import Link from 'next/link';

const Footer = () => {

const date = new Date();
const year = date.getFullYear();

  return (
    <>
      <footer className='bg-stone-200'>
        <div className='mt-24 flex flex-col border-2 rounded-md'>
          <div className='sm:flex flex-col md:flex-row justify-evenly items-center gap-24'>
            <div className='flex flex-col gap-8'>
              <div className='flex flex-col items-center text-center mt-2'>
                  <Logo height={150} mixBlendMode="color-burn"/>
                  <h1 className='font-bold text-xl mt-4'>CroQuad Hvar</h1>
                  <p className='text-lg my-8'>Find us on any of these platforms</p>

                <div className='flex flex-row gap-4 justify-center mb-8'>
                  <FaFacebook size={30} className='rounded-lg bg-white p-1' />
                  <FaInstagram size={30} className='rounded-lg bg-white p-1' />
                  <FaGoogle size={30} className='rounded-lg bg-white p-1' />
                  <FaWhatsapp size={30} className='rounded-lg bg-white p-1' />
                </div>
              </div>
            </div>
            <div className='md:flex md:flex-row md:justify-between md:items-stretch md:gap-16'>
              <div className='md:flex md:flex-col md:gap-4 text-center'>
                <h2 className='text-lg font-semibold'>Pages</h2>
                <Link href={"/"}>
                  <p className='my-1'>Home page</p>
                </Link>
                <Link href={"/about"}>
                  <p className='my-1'>About Us</p>
                </Link>
                <Link href={"/tours"}>
                  <p className='my-1'>Tours</p>
                </Link>
                <Link href={"/prices"}>
                  <p className='my-1'>Prices</p>
                </Link>
                <Link href={"/contact"}>
                  <p className='my-1'>Contact Us</p>
                </Link>
              </div>
              <div className='md:flex md:flex-col md:gap-4 text-center mt-6 md:mt-0'>
                <h2 className='text-lg font-semibold'>Useful links</h2>
                <Link href={"#map"}>
                  <p className='my-1'>Google Maps</p>
                </Link>
                <Link href={"https://www.jadrolinija.hr/hr/pretrazite-kupite-kartu"} target='_blank' >
                  <p className='my-1'>Hvar ferries</p>
                </Link>
                <Link href={"/#faq"}>
                  <p className='my-1'>FAQ</p>
                </Link>
              </div>
            </div>
          </div>
          <hr className="my-8 h-0.5 border-t-0 bg-white opacity-100 dark:opacity-50" />
          <div className='flex flex-row items-center justify-center gap-4'>
            <p>Copyright © {year} CroQuad</p>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
