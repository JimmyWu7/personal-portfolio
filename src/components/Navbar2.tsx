"use client";
import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import sun from "../assets/icons/sun.svg";
import moon from "../assets/icons/moon.svg";
import { useTheme } from "./ThemeContext";

const NAV_LINKS = [
  { href: "#about", label: "About" },
  { href: "#experience", label: "Experience" },
  { href: "#projects", label: "Projects" },
  { href: "#skills", label: "Skills" },
  { href: "#contact", label: "Contact" },
];

const Navbar = () => {
  const { theme, setTheme } = useTheme();
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };

  return (
    <>
      {/* NAVBAR */}
      <nav className="fixed top-0 left-0 w-full z-50 bg-black text-white font-robotoMono shadow-md">
        <div className="max-w-screen-xl mx-auto px-4 py-4 flex justify-between items-center">
          {/* <div className="font-bold text-xl">My Portfolio</div> */}

          {/* Desktop Links */}
          <div className="hidden md:flex items-center space-x-6">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                scroll
                className="hover:text-teal-500 transition duration-300"
              >
                {link.label}
              </Link>
            ))}

            {/* Theme Toggle */}
            {/* // TODO: Need to find White color sun Logo */}
            <button onClick={toggleTheme}>
              <Image
                src={theme === "light" ? sun : moon}
                alt="Toggle Theme"
                className="w-5 h-5 hover:opacity-80 transition"
              />
            </button>
          </div>

          {/* Mobile Hamburger */}
          <button
            onClick={() => setMenuOpen(true)}
            className="flex flex-col space-y-1 md:hidden"
          >
            <span className="w-6 h-0.5 bg-white" />
            <span className="w-6 h-0.5 bg-white" />
            <span className="w-6 h-0.5 bg-white" />
          </button>
        </div>
      </nav>

      {/* MOBILE SLIDE-OUT MENU */}
      <div
        className={`fixed top-0 right-0 h-full w-64 bg-black text-white z-50 transform transition-transform duration-300 ease-in-out
        ${menuOpen ? "translate-x-0" : "translate-x-full"}`}
      >
        <div className="flex justify-end p-4">
          <button onClick={() => setMenuOpen(false)} className="text-2xl">
            X
          </button>
        </div>

        <div className="flex flex-col items-center space-y-6 mt-10">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              scroll
              onClick={() => setMenuOpen(false)}
              className="text-lg hover:text-teal-500 transition duration-300"
            >
              {link.label}
            </Link>
          ))}
        </div>
        <button
          onClick={toggleTheme}
          className="mt-10 flex items-center gap-2 hover:opacity-80"
        >
          <Image
            src={theme === "light" ? sun : moon}
            alt="Toggle Theme"
            className="w-6 h-6"
          />
          <span className="text-sm font-robotoMono">
            {theme === "light" ? "Dark Mode" : "Light Mode"}
          </span>
        </button>
      </div>

      {/* BACKDROP */}
      {menuOpen && (
        <div
          onClick={() => setMenuOpen(false)}
          className="fixed inset-0 bg-black/50 z-40 md:hidden"
        />
      )}
    </>
  );
};

export default Navbar;
