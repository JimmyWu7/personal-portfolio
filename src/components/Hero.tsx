"use client";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import Profile from "../assets/profile.png";
import sun from "../assets/sun.svg";
import moon from "../assets/moon.svg";
import githubLight from "../assets/github-light.svg";
import githubDark from "../assets/github-dark.svg";
import linkedinLight from "../assets/linkedin-light.svg";
import linkedinDark from "../assets/linkedin-dark.svg";
import previewIcon from "../assets/preview-icon.svg";
import NewTabIcon from "../assets/new-tab-icon.svg";
import pinLight from "../assets/location-pin-light.svg";
import pinDark from "../assets/location-pin-dark.svg";

import { useTheme } from "./ThemeContext";

const Hero = () => {
  const { theme, setTheme } = useTheme(); // Use theme from context

  const toggleTheme = () => {
    const newTheme = theme === "light" ? "dark" : "light";
    setTheme(newTheme); // Update the theme via context
  };

  return (
    <div className="flex flex-col justify-center items-center text-center h-screen min-h-[500px] gap-5 md:gap-40 md:flex-row-reverse lg:gap-56">
      <div className="relative flex flex-col items-center">
        <Image
          className="rounded-2xl max-w-[200px] h-auto md:max-w-[250px] transition-transform duration-300 ease-in-out transform hover:scale-110"
          src={Profile}
          alt="Profile Picture of Me"
          // width={250} // Specify width
          // height={250} // Specify height (maintains aspect ratio with h-auto)
        />
        {/* <Image
          className="absolute right-2 top-2 w-6 cursor-pointer hover:opacity-80"
          src={theme === "light" ? sun : moon}
          alt="Color mode icon"
          onClick={toggleTheme}
        /> */}
      </div>
      <div className="flex flex-col gap-5 items-center">
        <h1 className="text-3xl md:text-5xl uppercase font-rubik font-extrabold">
          Jimmy
          <br />
          Wu
        </h1>
        <h2 className="font-robotoMono font-bold text-xl uppercase">
          Software Developer
        </h2>
        <p className="flex flex-row gap-1 text-sm md:text-base font-robotoMono">
          <Image
            className="w-5"
            src={theme === "light" ? pinLight : pinDark}
            alt="Location Pin"
          />
          New York City, New York
        </p>
        <span className="flex justify-center gap-6">
          <a href="https://github.com/JimmyWu7" target="_blank">
            <Image
              className="w-8 transition-transform duration-200 ease-in-out hover:scale-105"
              src={theme === "light" ? githubLight : githubDark}
              alt="Github icon"
            />
          </a>
          <a href="https://www.linkedin.com/in/JimmyWu" target="_blank">
            <Image
              className="w-8 transition-transform duration-200 ease-in-out hover:scale-105"
              src={theme === "light" ? linkedinLight : linkedinDark}
              alt="Linkedin icon"
            />
          </a>
        </span>
        <p className="max-w-[24ch] font-robotoMono font-light text-base md:text-xl bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent animate-gradient">
          Code. Create. Collaborate.
        </p>
        <div className="flex flex-row gap-8">
          <a href="./resume.pdf" target="_blank" rel="noopener noreferrer">
            <button className="flex items-center gap-2 bg-blue-400 text-white text-xl w-full h-12 py-2 px-8 font-rubik font-bold rounded-2xl shadow-md transition ease-in-out duration-200 hover:bg-blue-500 hover:scale-105 hover:shadow-lg">
              Resume
              <Image
                className="pb-1"
                src={NewTabIcon}
                alt="New Tab Icon"
                width={20}
                height={20}
              />
            </button>
          </a>
          <Image
            className="w-6 cursor-pointer hover:opacity-80"
            src={theme === "light" ? sun : moon}
            alt="Theme Icon"
            onClick={toggleTheme}
          />
        </div>
      </div>
    </div>
  );
};

export default Hero;
