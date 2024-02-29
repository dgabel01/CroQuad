"use client";
import React from "react";
import Link from "next/link";
import {
  Navbar as MaterialNavbar,
  Collapse,
  Typography,
  IconButton,
} from "@material-tailwind/react";
import Logo from '../components/Logo'
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import { FaWhatsapp, FaFacebook, FaInstagram } from "react-icons/fa";
import { MdOutlineEmail } from "react-icons/md";
import { usePathname } from 'next/navigation'


function NavList({ onCloseMenu }: { onCloseMenu: any }) {
  const pathname = usePathname()
  const isActiveRoute = (route: string) => pathname === route;
  
  const handleItemClick = () => {
    onCloseMenu && onCloseMenu();
  };

  return (
    <ul className="my-2 flex flex-col gap-2 lg:mb-0 lg:mt-0 lg:flex-row lg:items-center lg:gap-6">
      <Typography
        as="li"
        variant="small"
        color="blue-gray"
        className="p-1 font-medium"
        placeholder={""}
      >
        <Link
          href={"/about"}
          className={`text-black font-bold text-lg ${isActiveRoute('/about') ? 'transition-colors font-extrabold text-white bg-black p-2 rounded-md' : ''}`}           
          onClick={handleItemClick}
        >
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
        <Link
          href={"/tours"}
          className={`text-black font-bold text-lg ${isActiveRoute('/tours') ? 'transition-colors font-extrabold text-white bg-black p-2 rounded-md' : ''}`}           
          onClick={handleItemClick}
        >
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
        <Link
          href={"/prices"}
          className={`text-black font-bold text-lg ${isActiveRoute('/prices') ? 'transition-colors font-extrabold text-white bg-black p-2 rounded-md' : ''}`}           
          onClick={handleItemClick}
        >
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
        <Link
          href={"/contact"}
          className={`text-black font-bold text-lg ${isActiveRoute('/contact') ? ' transition-colors font-extrabold text-white bg-black p-2 rounded-md' : ''}`}           
          onClick={handleItemClick}
        >
          Contact Us
        </Link>
      </Typography>
    </ul>
  );
}

export default function Navbar() {
  
  const [openNav, setOpenNav] = React.useState(false);

  const handleWindowResize = () => window.innerWidth >= 960 && setOpenNav(false);

  React.useEffect(() => {
    window.addEventListener("resize", handleWindowResize);

    return () => {
      window.removeEventListener("resize", handleWindowResize);
    };
  }, []);

  return (
    <MaterialNavbar
      className="w-full bg-red-100"
      style={{
        maxWidth: "100%",
      //  backgroundImage: 'url("https://cdn.wallpapersafari.com/7/51/B48rdx.png")',
      //  backgroundBlendMode:'color-dodge',

      }}
      placeholder={""}
    >
      <div className="flex items-center justify-between w-full">
        <Typography
          as="a"
          href={"/"}
          variant="h6"
          className="mr-4 cursor-pointer py-1.5"
          placeholder=""
        >
          <Logo height={75}/>
        </Typography>
        <div className="hidden lg:block">
          <NavList onCloseMenu={undefined} />
        </div>
        <IconButton
          variant="text"
          className="ml-auto h-6 w-6 text-inherit hover:text-black focus:text-black active:text-black lg:hidden"
          ripple={false}
          onClick={() => setOpenNav(!openNav)}
          placeholder={""}
        >
          {openNav ? (
            <XMarkIcon className="h-6 w-6 font-extrabold" strokeWidth={2} style={{ color: 'black' }}/>
          ) : (
            <Bars3Icon className="h-6 w-6" strokeWidth={2} style={{ color: 'black' }}/>
          )}
        </IconButton>
      </div>
      <Collapse open={openNav}>
        <NavList onCloseMenu={() => setOpenNav(false)} />
        <div className="flex flex-col gap-4 items-center justify-center mt-4">
          <div className="flex flex-row gap-2">
            <MdOutlineEmail className="text-black"/>
            <FaWhatsapp  className="text-black"/>
            <FaFacebook  className="text-black"/>
            <FaInstagram  className="text-black"/>
          </div>
          <div>
            <p className="text-black">Ulica</p>
          </div>
        </div>
      </Collapse>
    </MaterialNavbar>
  );
}
