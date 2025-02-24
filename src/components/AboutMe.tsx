"use client";
import Image from "next/image";
import React from "react";

import capDark from "../assets/graduation-cap-dark.svg";
import capLight from "../assets/graduation-cap-light.svg";

import { useTheme } from "./ThemeContext";

const AboutMe = () => {
  const { theme } = useTheme();

  return (
    <div className="flex flex-col">
      <h1 className="font-rubik text-center text-3xl font-extrabold uppercase md:text-5xl mb-8 md:mb-14">
        About Me
      </h1>
      <div className="flex flex-col lg:flex-row gap-8 items-center lg:items-start justify-center mx-6">
        {/* Education Card */}
        <div
          className={`${
            theme === "light" ? "border-[#1E1E1E]" : "border-white"
          } flex flex-col items-center justify-center gap-2 text-left border shadow-lg p-10 rounded-lg transition-transform duration-300 ease-in-out transform hover:scale-105 max-w-sm`}
        >
          <Image
            src={theme === "light" ? capLight : capDark}
            alt="Badge Icon"
            width={30}
            height={30}
          />
          <div className="space-y-2 text-center">
            <h3 className="text-lg md:text-xl font-rubik font-bold">
              University at Buffalo
            </h3>
            <p className="text-base font-robotoMono font-semibold">
              Computer Science B.S.
            </p>
            <p className="text-sm font-robotoMono font-light">
              Minor in Mathematics
            </p>
            <p className="text-sm font-robotoMono font-light">Dean's List</p>
          </div>
        </div>
        {/* Description Text */}
        <div className="flex-1 font-robotoMono text-base md:text-lg space-y-4 px-6 max-w-xl md:max-w-3xl">
          <p>
            <span className="wave-emoji transition-all duration-300 ease-in-out">
              👋
            </span>{" "}
            Hello! I'm Jimmy Wu, a senior computer science student at University
            at Buffalo. I am interested in Full Stack Development, Web
            Development, Artificial Intelligence, and Machine Learning.
          </p>
          <p>
            I particularly enjoy working with modern stacks like Next.js and
            TypeScript, and recently built Bulls Parking Finder to solve parking
            accessibility on UB campus. I am passionate about building scalable,
            efficient solutions that enhance the user experience.
          </p>
          <p>
            When I'm not coding, you can find me playing Brawl Stars, Pokemon
            TCG Pocket, watching Anime and vibing to K-pop music.
          </p>
          <p className="text-xs md:text-sm italic text-gray-600 dark:text-gray-400">
            (P.S. Want to team up in Brawl Stars? I've got your back, let's
            connect!)
          </p>
        </div>
      </div>
    </div>
  );
};

export default AboutMe;
