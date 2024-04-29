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
  const isActiveRoute = (route: string) => {
    // Check if the current pathname matches the route directly
    if (pathname === route) {
      return true;
    }
    
    // Check if the current pathname starts with the route followed by a slash and additional characters
    // This would cover cases like '/blog/slug'
    if (pathname.startsWith(`${route}/`)) {
      return true;
    }
  
    return false;
  };  
  const handleItemClick = () => {
    onCloseMenu && onCloseMenu();
  };

  return (
    <ul className="my-2 flex flex-col gap-3 lg:mb-0 lg:mt-0 lg:flex-row lg:items-center lg:gap-6 ml-8">
      <Typography
        as="li"
        variant="small"
        color="blue-gray"
        className="p-1 font-medium"
        placeholder={""}
      >
        <Link
          href={"/about"}
          className={`text-black font-bold text-xl ${isActiveRoute('/about') ? 'transition-colors font-extrabold text-white bg-blue-500 p-2 rounded-md' : ''}`}           
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
          className={`text-black font-bold text-xl ${isActiveRoute('/tours') ? 'transition-colors font-extrabold text-white bg-blue-500 p-2 rounded-md' : ''}`}           
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
          href={"/rent"}
          className={`text-black font-bold text-xl ${isActiveRoute('/rent') ? 'transition-colors font-extrabold text-white bg-blue-500 p-2 rounded-md' : ''}`}           
          onClick={handleItemClick}
        >
          Rent a quad
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
          className={`text-black font-bold text-xl ${isActiveRoute('/prices') ? 'transition-colors font-extrabold text-white bg-blue-500 p-2 rounded-md' : ''}`}           
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
          className={`text-black font-bold text-xl ${isActiveRoute('/contact') ? ' transition-colors font-extrabold text-white bg-blue-500 p-2 rounded-md' : ''}`}           
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
          className={`text-black font-bold text-xl mr-4 ${isActiveRoute('/blog' ) ? ' transition-colors font-extrabold text-white bg-blue-500 p-2 rounded-md' : ''}`}           
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
  const pathname = usePathname();

  const handleWindowResize = () => window.innerWidth >= 960 && setOpenNav(false);

  React.useEffect(() => {
    window.addEventListener("resize", handleWindowResize);

    return () => {
      window.removeEventListener("resize", handleWindowResize);
    };
  }, []);

  const isActiveHome = pathname === "/";

  return (
    <MaterialNavbar
      className="w-full p-0 mb-0 bg-zinc-100"
      style={{
        maxWidth: "100%",
      }}
      placeholder={""}
    >
      <div className="flex items-center justify-between w-full m-0">
        <Typography
          as="a"
          href={"/"}
          variant="h6"
          className={`mr-4 cursor-pointer py-1.5 ${isActiveHome ? '' : ''}`}
          placeholder=""
        >
          <Logo height={125} mixBlendMode="multiply" />
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
            <XMarkIcon
              role="button"
              aria-label="Mobile navigation dropdown menu open button"
              className="h-8 w-8 font-extrabold selection:w-8"
              strokeWidth={2}
              style={{ color: "black" }}
            />
          ) : (
            <Bars3Icon
              role="button"
              aria-label="Mobile navigation dropdown menu close button"
              className="h-8 w-8 selection:w-8"
              strokeWidth={2}
              style={{ color: "black" }}
            />
          )}
        </IconButton>
      </div>
      <Collapse open={openNav}>
        <NavList onCloseMenu={() => setOpenNav(false)} />
        <div className="flex flex-col gap-4 items-center justify-center my-8">
          <div className="flex flex-row gap-4 mt-2">
            <Link href={"mailto:croquad01@gmail.com"} aria-label="Email link">
              <MdOutlineEmail size={30} className="text-black" />
            </Link>

            <Link href={"whatsapp://send?phone=+385915368338"} aria-label="WhatsApp link">
              <FaWhatsapp size={30} className="text-black" />
            </Link>

            <Link href={"/"} aria-label="Facebook link">
              <FaFacebook size={30} className="text-black" />
            </Link>

            <Link
              href={"https://www.instagram.com/cro_quad?igsh=MXN1MHA4aWp3ZHJwaQ=="}
              aria-label="Instagram link"
              target="_blank"
            >
              <FaInstagram size={30} className="text-black" />
            </Link>
          </div>
          <div>
            <p className="text-black font-medium text-center mt-4">Put bana Josipa Jelačića 6, Stari Grad, Hvar</p>
          </div>
        </div>
      </Collapse>
    </MaterialNavbar>
  );
}
