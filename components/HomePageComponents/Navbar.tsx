"use client";
import React from "react";
import Link from "next/link";
import {
  Navbar as MaterialNavbar,
  Collapse,
  Typography,
  IconButton,
} from "@material-tailwind/react";
import Logo from "../HomePageComponents/Logo"
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
      <Typography
        as="li"
        variant="small"
        color="blue-gray"
        className="p-1 font-medium"
        placeholder={""}
      >
        <Link
          href={"/blog"}
          className={`text-black font-bold text-lg ${isActiveRoute('/blog') ? ' transition-colors font-extrabold text-white bg-black p-2 rounded-md' : ''}`}           
          onClick={handleItemClick}
        >
          Blog
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
      className="w-full p-0 mb-0 bg-stone-100"
      style={{
        maxWidth: "100%",
      //  backgroundImage: 'url("https://cdn.wallpapersafari.com/7/51/B48rdx.png")',
      //  backgroundBlendMode:'color-dodge',

      }}
      placeholder={""}
    >
      <div className="flex items-center justify-between w-full m-0">
        <Typography
          as="a"
          href={"/"}
          variant="h6"
          className="mr-4 cursor-pointer py-1.5"
          placeholder=""
        >
          <Logo height={125} mixBlendMode="multiply"/>
        </Typography>
        <div className="hidden lg:block">
          <NavList onCloseMenu={undefined} />
        </div>
        <IconButton
          variant="text"
          className="ml-auto mr-4 h-6 w-6 text-inherit hover:text-black focus:text-black active:text-black lg:hidden"
          ripple={false}
          onClick={() => setOpenNav(!openNav)}
          placeholder={""}
          aria-label="Dropdown menu button"
        >
          {openNav ? (
            <XMarkIcon role="button"  aria-label="Mobile navigation dropdown menu open button" className="h-8 w-8 font-extrabold selection:w-8" strokeWidth={2} style={{ color: 'black' }}/>
          ) : (
            <Bars3Icon role="button" aria-label="Mobile navigation dropdown menu close button" className="h-8 w-8 selection:w-8" strokeWidth={2} style={{ color: 'black' }}/>
          )}
        </IconButton>
      </div>
      <Collapse open={openNav}>
        <NavList onCloseMenu={() => setOpenNav(false)} />
        <div className="flex flex-col gap-4 items-center justify-center mt-4">
          <div className="flex flex-row gap-4 mt-2">
            
            <Link href={"/"} aria-label="Email link">
              <MdOutlineEmail size={24} className="text-black"/>
            </Link>

            <Link href={"whatsapp://send?phone=+385953770460"} aria-label="WhatsApp link">
              <FaWhatsapp  size={24} className="text-black"/>
            </Link>

            <Link href={"/"} aria-label="Facebook link">
              <FaFacebook  size={24} className="text-black"/>
            </Link>

            <Link href={"/"} aria-label="Instagram link">
              <FaInstagram size={24}  className="text-black"/>
            </Link>
          </div>
          <div>
            <p className="text-black">Hvar, Ulica</p>
          </div>
        </div>
      </Collapse>
    </MaterialNavbar>
  );
}
