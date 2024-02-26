"use client"
import React from "react";
import Link from "next/link";
import Image from "next/image";
import {
  Navbar,
  Collapse,
  Typography,
  IconButton,
} from "@material-tailwind/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import { FaWhatsapp, FaFacebook, FaInstagram } from "react-icons/fa";
import { MdOutlineEmail } from "react-icons/md";
import logoImage from "../public/1000_F_355651999_AXDEoVIInRJXdmrYOXim5Nw1utQFqWvq.jpg"

function NavList() {
  return (
    <ul className="my-2 flex flex-col gap-2 lg:mb-0 lg:mt-0 lg:flex-row lg:items-center lg:gap-6">
      <Typography
        as="li"
        variant="small"
        color="blue-gray"
        className="p-1 font-medium"
        placeholder={""}
      >
        <Link href={"/about"} className="flex items-center text-black font-bold text-lg hover:text-red-600 transition-colors">
          About Us
        </Link>      
      </Typography>
      <Typography
        as="li"
        variant="small"
        color="blue-gray"
        className="p-1 font-medium"
        placeholder={""}
      >
        <Link href={"/tours"} className="flex items-center text-black font-bold text-lg hover:text-red-600 transition-colors">
          Tours
        </Link>  
      </Typography>
      <Typography
        as="li"
        variant="small"
        color="blue-gray"
        className="p-1 font-medium"
        placeholder={""}
      >
        <Link href={"/prices"} className="flex items-center text-black font-bold text-lg hover:text-red-600 transition-colors">
          Price List
        </Link>  
      </Typography>
      <Typography
        as="li"
        variant="small"
        color="blue-gray"
        className="p-1 font-medium"
        placeholder={""}

      >
       <Link href={"/contact"} className="flex items-center text-black font-bold text-lg hover:text-red-600 transition-colors">
          Contact Us
        </Link>  
      </Typography>
    </ul>
  );
}
 
export default function Naavbar() {
  const [openNav, setOpenNav] = React.useState(false);
 
  const handleWindowResize = () =>
    window.innerWidth >= 960 && setOpenNav(false);
 
  React.useEffect(() => {
    window.addEventListener("resize", handleWindowResize);
 
    return () => {
      window.removeEventListener("resize", handleWindowResize);
    };
  }, []);
 
  return (
    <Navbar 
      className="w-full p-6 bg-red-500" 
      style={{ 
        maxWidth: "100%",
        
      }}
      placeholder={""}>
     <div className="flex items-center justify-between text-blue-gray-900 w-full"> 
        <Typography
          as="a"
          href={"/"}
          variant="h6"
          className="mr-4 cursor-pointer py-1.5"
          placeholder=""
        >
          <Image
            src={logoImage}
            alt="header-logo"
            className="mix-blend-color-burn"
            width={65}
          />
        </Typography>
        <div className="hidden lg:block">
          <NavList />
        </div>
        <IconButton
          variant="text"
          className="ml-auto h-6 w-6 text-inherit hover:bg-transparent focus:bg-transparent active:bg-transparent lg:hidden"
          ripple={false}
          onClick={() => setOpenNav(!openNav)}
          placeholder={""}
        >
          {openNav ? (
            <XMarkIcon className="h-6 w-6" strokeWidth={2} />
          ) : (
            <Bars3Icon className="h-6 w-6" strokeWidth={2} />
          )}
        </IconButton>
      </div>
      <Collapse open={openNav}>
        <NavList />
        <div className="flex flex-row gap-4 items-center justify-center mt-4">
          <MdOutlineEmail />
          <FaWhatsapp/>
          <FaFacebook/>
          <FaInstagram/>
        </div>
      </Collapse>
    </Navbar>
  );
}