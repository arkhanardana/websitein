"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import { X, Menu } from "lucide-react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [isScrolled, setIsScrolled] = useState<boolean>(false);
  const navRef = useRef<HTMLDivElement>(null);

  const toggleMenu = () => setIsOpen(!isOpen);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (navRef.current && !navRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  const menuItems = [
    { href: "#about", label: "About" },
    { href: "#services", label: "Services" },
    { href: "#benefit", label: "Benefits" },
    { href: "#pricing", label: "Pricing" },
    { href: "#faq", label: "FAQ" },
  ];

  const logo = {
    url: "/assets/logo.png",
  };

  return (
    <div className="fixed top-0 left-0 right-0 z-50 px-4 mx-auto transition-all duration-300 sm:px-6 lg:px-8">
      <nav
        className={`w-full transition-all duration-300 ${
          isScrolled
            ? "mt-4 bg-white/90 backdrop-blur-md shadow-lg rounded-full"
            : "bg-transparent"
        }`}
        ref={navRef}
      >
        <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
          <div className="flex justify-between h-16">
            <Link href="/" className="flex items-center text-2xl font-bold text-black">
              <Image
                src={logo.url}
                alt="logo-websitein"
                width={65}
                height={80}
                loading="lazy"
              />
              <h1 className="hidden md:flex md:text-lg md:font-normal">
                Websitein
              </h1>
            </Link>
            <div className="items-center hidden space-x-4 md:flex">
              {menuItems.map((item, index) => (
                <Link
                  key={index}
                  href={item.href}
                  className="px-3 py-2 text-sm font-medium text-gray-600 rounded-md hover:text-blue-600"
                >
                  {item.label}
                </Link>
              ))}
            </div>
            <div className="flex items-center md:hidden">
              <button
                onClick={toggleMenu}
                className="text-gray-600 hover:text-blue-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
                aria-label={isOpen ? "Close menu" : "Open menu"}
              >
                {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>
        </div>
      </nav>
      <div
        className={`fixed inset-y-0 right-0 w-64 z-40 bg-white shadow-lg transform transition-transform duration-300 ease-in-out ${
          isOpen ? "translate-x-0" : "translate-x-full"
        } md:hidden overflow-y-auto`}
      >
        <div className="flex justify-end p-4">
          <button
            onClick={toggleMenu}
            className="text-gray-600 hover:text-blue-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
            aria-label="Close menu"
          >
            <X className="w-6 h-6" />
          </button>
        </div>
        <div className="px-2 pt-2 pb-3 space-y-1">
          {menuItems.map((item, index) => (
            <Link
              key={index}
              href={item.href}
              className="block px-3 py-2 text-base font-medium text-gray-600 rounded-md hover:text-blue-600"
              onClick={toggleMenu}
            >
              {item.label}
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
