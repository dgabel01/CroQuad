"use client"
import React, { useState, useEffect } from "react";
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
  const [openNav, setOpenNav] = useState(false);
  const [visible, setVisible] = useState(true);
  const [prevScrollPos, setPrevScrollPos] = useState(0);
  const pathname = usePathname();

  // Also update visibility when the mobile menu is toggled
  const handleNavToggle = () => {
    setOpenNav(!openNav);
    if (!openNav) {
      // When opening the menu, ensure the navbar is visible
      setVisible(true);
    }
  };

  // Effect to ensure navbar stays in view when menu is open
  useEffect(() => {
    if (openNav) {
      // Force navbar to be visible when menu is open
      setVisible(true);
    }
  }, [openNav]);  const handleWindowResize = () => window.innerWidth >= 960 && setOpenNav(false);"use client";

  // Handle scroll events
  useEffect(() => {
    const handleScroll = () => {
      const currentScrollPos = window.scrollY;
      
      // Make the navbar visible when scrolling up
      // or when at the top of the page
      setVisible(
        (prevScrollPos > currentScrollPos) || // Scrolling up
        currentScrollPos < 10 // At top of page
      );
      
      // Update previous scroll position
      setPrevScrollPos(currentScrollPos);
    };

    window.addEventListener("scroll", handleScroll);
    window.addEventListener("resize", handleWindowResize);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleWindowResize);
    };
  }, [prevScrollPos]);

  const isActiveHome = pathname === "/";
  
  // Calculate navbar styles based on visibility
  // Always show navbar when mobile menu is open
  const navbarStyles = {
    position: "sticky" as const,
    top: 0,
    zIndex: 50,
    transition: "transform 0.3s ease-in-out",
    transform: (visible || openNav) ? "translateY(0)" : "translateY(-100%)",
    boxShadow: (visible || openNav) ? "0 2px 4px rgba(0, 0, 0, 0.1)" : "none",
  };

  return (
    <MaterialNavbar
      className="w-full p-0 mb-0 bg-zinc-100"
      style={{
        maxWidth: "100%",
        ...navbarStyles
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
          onClick={() => handleNavToggle()}
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

            <Link href={"https://www.facebook.com/profile.php?id=61559674970306"} target="_blank" aria-label="Facebook link">
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