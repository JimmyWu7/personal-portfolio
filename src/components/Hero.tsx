"use client";
import Image from "next/image";
import React, { useEffect, useRef, useState } from "react";
import Profile1 from "../assets/profiles/profile1.png";
import Profile2 from "../assets/profiles/profile2.png";
import Profile3 from "../assets/profiles/profile3.png";
import Profile4 from "../assets/profiles/profile4.png";
import sun from "../assets/icons/sun.svg";
import moon from "../assets/icons/moon.svg";
import githubLight from "../assets/icons/github-light.svg";
import githubDark from "../assets/icons/github-dark.svg";
import linkedinLight from "../assets/icons/linkedin-light.svg";
import linkedinDark from "../assets/icons/linkedin-dark.svg";
import previewIcon from "../assets/icons/preview-icon.svg";
import NewTabIcon from "../assets/icons/new-tab-icon.svg";
import pinLight from "../assets/icons/location-pin-light.svg";
import pinDark from "../assets/icons/location-pin-dark.svg";

import { useTheme } from "./ThemeContext";

const Hero = () => {
  const { theme, setTheme } = useTheme(); // Use theme from context
  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false); // Pause state
  const intervalRef = useRef<NodeJS.Timeout | null>(null);

  const profileImages = [Profile1, Profile2, Profile3, Profile4];

  // Automatically cycle images
  useEffect(() => {
    if (!paused) {
      intervalRef.current = setInterval(() => {
        setIndex((prev) => (prev + 1) % profileImages.length);
      }, 4000);
    }
    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current);
    };
  }, [paused, profileImages.length]);

  const toggleTheme = () => {
    const newTheme = theme === "light" ? "dark" : "light";
    setTheme(newTheme); // Update the theme via context
  };

  return (
    <div className="flex items-center justify-center h-screen">
      <div className="flex flex-col justify-center items-center text-center gap-10 md:gap-32 lg:gap-56 md:flex-row-reverse">
        <div
          className="relative flex flex-col items-center"
          onMouseEnter={() => setPaused(true)} // pause on hover
          onMouseLeave={() => setPaused(false)} // resume on leave
        >
          {/* <Image
            className="rounded-2xl max-w-[200px] h-auto md:max-w-[250px] transition-transform duration-300 ease-in-out transform hover:scale-110"
            src={Profile1}
            alt="Profile Picture of Me"
            // width={250} // Specify width
            // height={250} // Specify height (maintains aspect ratio with h-auto)
          /> */}
          <div className="relative w-[200px] h-[300px] md:w-[250px] md:h-[350px] 2xl:w-[350px] 2xl:h-[450px] rounded-2xl overflow-hidden shadow-lg duration-300 ease-in-out transform hover:scale-110">
            {profileImages.map((img, i) => (
              <Image
                key={i}
                src={img}
                alt="Profile"
                fill
                className={`object-cover rounded-2xl absolute transition-opacity duration-1000 ease-in-out ${
                  i === index ? "opacity-100" : "opacity-0"
                }`}
              />
            ))}
          </div>

          {/* --- Small Dots (Pagination) --- */}
          <div className="flex gap-2 mt-5">
            {profileImages.map((_, i) => (
              <button
                key={i}
                onClick={() => setIndex(i)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  i === index
                    ? "bg-blue-500 scale-110"
                    : theme === "light"
                    ? "bg-gray-300 hover:bg-gray-400"
                    : "bg-gray-600 hover:bg-gray-500"
                }`}
              />
            ))}
          </div>
        </div>
        <div className="flex flex-col gap-5 items-center">
          <h1 className="text-3xl md:text-5xl 2xl:text-7xl uppercase font-rubik font-extrabold">
            Jimmy
            <br />
            Wu
          </h1>
          <h2 className="font-robotoMono font-bold text-xl 2xl:text-3xl uppercase">
            Software Developer
          </h2>
          <p className="flex flex-row gap-1 text-sm md:text-base 2xl:text-xl font-robotoMono">
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
                className="w-8 2xl:w-12 transition-transform duration-200 ease-in-out hover:scale-105"
                src={theme === "light" ? githubLight : githubDark}
                alt="Github icon"
              />
            </a>
            <a href="https://www.linkedin.com/in/jimmywu7/" target="_blank">
              <Image
                className="w-8 2xl:w-12 transition-transform duration-200 ease-in-out hover:scale-105"
                src={theme === "light" ? linkedinLight : linkedinDark}
                alt="Linkedin icon"
              />
            </a>
          </span>
          <p className="max-w-[24ch] font-robotoMono font-light text-base md:text-xl 2xl:text-3xl bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent animate-gradient">
            Design. Develop. Deliver.
          </p>
          <div className="flex flex-row gap-8">
            <a
              href="./JimmyWu-Resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
            >
              <button className="flex items-center gap-2 bg-blue-400 text-white text-xl 2xl:text-3xl w-full h-12 2xl:h-16 py-2 px-8 font-rubik font-bold rounded-2xl shadow-md transition ease-in-out duration-200 hover:bg-blue-500 hover:scale-105 hover:shadow-lg">
                Resume
                <Image
                  className="pb-1 2xl:w-8 2xl:h-8"
                  src={NewTabIcon}
                  alt="New Tab Icon"
                  width={20}
                  height={20}
                />
              </button>
            </a>
            {/* <Image
            className="w-6 cursor-pointer hover:opacity-80"
            src={theme === "light" ? sun : moon}
            alt="Theme Icon"
            onClick={toggleTheme}
          /> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
