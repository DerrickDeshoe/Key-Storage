"use client";

import Link from "next/link";
import React, { useState } from "react";
import Image from "next/image";
import Logo from "../../public/images/Logo.svg";

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const links = [
    { label: "Home", href: "/" },
    { label: "About Us", href: "/AboutUs" },
    { label: "Our Rates", href: "/Portfolio" },
    { label: "Storage Help", href: "/News" },
    { label: "Contact", href: "/Ne" },
  ];
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className=" h-14 flex items-center justify-between text-black px-7 lg:px-[8%] z-10">
      <div className=" w-[40%] lg:w-[20%] xl:w-[15%]">
        <Link href="./">
          <Image src={Logo} alt="Logo" className="" />
        </Link>
      </div>

      <div className="lg:hidden">
        <button
          onClick={toggleMenu}
          className="text-black hover:text-zinc-500 focus:outline-none"
        >
          <svg
            className="h-7 w-7 fill-current"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            {isOpen ? (
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M4 6h16v2H4V6zm0 5h16v2H4v-2zm0 5h16v2H4v-2z"
              />
            ) : (
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M4 6h16v2H4V6zm0 5h16v2H4v-2zm0 5h16v2H4v-2z"
              />
            )}
          </svg>
        </button>
      </div>

      <div className="hidden lg:flex lg:items-center space-x-6 font-nunito">
        {links.map((link) => (
          <Link
            key={link.href}
            href={link.href}
            className="text-black hover:text-orange transition-colors "
          >
            {link.label}
          </Link>
        ))}
      </div>

      <div className="hidden lg:flex space-x-2">
        <Link href="#">
          <button className=" py-2 rounded-sm px-3 lg:px-3 font-semibold text-xs border border-black">
            Register
          </button>
        </Link>
        <Link href="#">
          <button className="bg-orange py-2 rounded-sm px-2 lg:px-3 font-semibold text-xs text-white">
            Log In
          </button>
        </Link>
      </div>

      {isOpen && (
        <div className="lg:hidden absolute top-14 left-0 right-0 bg-gray-500 h-[50vh] flex justify-center items-center">
          <div className="flex flex-col items-center justify-center py-4 space-y-4">
            {links.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-white hover:text-zinc-500 transition-colors"
                onClick={toggleMenu}
              >
                {link.label}
              </Link>
            ))}
            <Link href="/Contact" onClick={toggleMenu}>
              <div className="space-x-2">
                <Link href="/Contact">
                  <button className="p-2 rounded-sm px-2 lg:px-3 font-semibold text-xs border border-white text-white">
                    Register
                  </button>
                </Link>
                <Link href="/Contact">
                  <button className="bg-orange p-2 rounded-sm px-2 lg:px-3 font-semibold text-xs text-white">
                    Log In
                  </button>
                </Link>
              </div>
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default NavBar;
