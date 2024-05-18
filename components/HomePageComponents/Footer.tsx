import React from 'react';
import Logo from './Logo';
import { FaInstagram, FaGoogle, FaFacebook, FaWhatsapp } from "react-icons/fa6";
import Link from 'next/link';

const Footer = () => {

const date = new Date();
const year = date.getFullYear();

  return (
    <>
      <footer className='bg-zinc-100'>
        <div className='mt-24 flex flex-col border-2 rounded-md'>
          <div className='sm:flex flex-col md:flex-row justify-evenly items-center gap-24'>
            <div className='flex flex-col gap-8'>
              <div className='flex flex-col items-center text-center mt-2'>
                  <Logo height={170} mixBlendMode="multiply"/>
                  <h1 className='font-bold text-xl mt-4'>CroQuad Hvar</h1>
                  <p className='text-lg font-medium my-8'>Find us on any of these platforms</p>

                <div className='flex flex-row gap-4 justify-center mb-8'>
                  <Link href={"https://www.facebook.com/profile.php?id=61559674970306"} target='_blank' aria-label='Facebook link'>
                    <FaFacebook size={36} className='rounded-lg bg-white p-1' />
                  </Link>

                  <Link href={"https://www.instagram.com/cro_quad?igsh=MXN1MHA4aWp3ZHJwaQ=="} aria-label="Instagram link" target="_blank">
                    <FaInstagram size={36} className='rounded-lg bg-white p-1' />
                  </Link>

                  <Link href={"https://g.co/kgs/WpScwR1"} target="_blank" aria-label='Google business profile'>
                    <FaGoogle size={36} className='rounded-lg bg-white p-1' />
                  </Link>

                  <Link href={"whatsapp://send?phone=+385957021991"} aria-label="WhatsApp link">
                    <FaWhatsapp size={36} className='rounded-lg bg-white p-1' />
                  </Link>
                </div>
              </div>
            </div>
            <div className='md:flex md:flex-row md:justify-between md:items-stretch md:gap-16'>
              <div className='flex flex-col gap-4 md:flex md:flex-col md:gap-4 text-center'>
                <h2 className='text-xl font-semibold'>Pages</h2>
                <Link href={"/"}>
                  <p className='my-1 font-medium'>Home page</p>
                </Link>
                <Link href={"/about"}>
                  <p className='my-1 font-medium'>About Us</p>
                </Link>
                <Link href={"/tours"}>
                  <p className='my-1 font-medium'>Tours</p>
                </Link>
                <Link href={"/prices"}>
                  <p className='my-1 font-medium'>Prices</p>
                </Link>
                <Link href={"/contact"}>
                  <p className='my-1 font-medium'>Contact Us</p>
                </Link>
                <Link href={"/blog"}>
                  <p className='my-1 font-medium'>Blog</p>
                </Link>
              </div>
              <div className='flex flex-col gap-4 md:flex md:flex-col md:gap-4 text-center mt-6 md:mt-0'>
                <h2 className='text-xl font-semibold'>Useful links</h2>
                <Link href={"/#map"}>
                  <p className='my-1 font-medium'>Google Maps</p>
                </Link>
                <Link href={"https://www.jadrolinija.hr/hr/pretrazite-kupite-kartu"} target='_blank' >
                  <p className='my-1 font-medium'>Hvar ferries</p>
                </Link>
                <Link href={"/#faq"}>
                  <p className='my-1 font-medium'>FAQ</p>
                </Link>
                <Link href={"/terms"}>
                  <p className='my-1 font-medium'>Terms and Conditions</p>
                </Link>
              </div>
            </div>
          </div>
          <hr className="my-8 h-1 border-t-0 bg-white opacity-100 dark:opacity-50" />
          <div className='flex flex-row items-center justify-center '>
            <p className='font-bold mr-2'>Copyright © {year} CroQuad</p><Logo height={30} mixBlendMode={'multiply'}/>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
