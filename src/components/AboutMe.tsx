"use client";
import Image from "next/image";
import Link from "next/link";
import React from "react";

import capDark from "../assets/icons/graduation-cap-dark.svg";
import capLight from "../assets/icons/graduation-cap-light.svg";

import { useTheme } from "./ThemeContext";

const AboutMe = () => {
  const { theme } = useTheme();

  return (
    <div id="about" className="flex flex-col">
      <h1 className="font-rubik text-center text-3xl font-extrabold uppercase md:text-5xl 2xl:text-7xl mb-8 md:mb-14">
        About Me
      </h1>
      <div className="flex flex-col lg:flex-row gap-8 items-center lg:items-start justify-center">
        {/* Education Card */}
        <div
          className={`${
            theme === "light" ? "border-[#1E1E1E]" : "border-white"
          } flex flex-col items-center justify-center gap-2 text-left border shadow-lg p-10 rounded-lg transition-transform duration-300 ease-in-out transform hover:scale-105 max-w-sm 2xl:max-w-md`}
        >
          <Image
            src={theme === "light" ? capLight : capDark}
            alt="Badge Icon"
            width={30}
            height={30}
          />
          <div className="space-y-2 text-center">
            <h3 className="text-lg md:text-xl 2xl:text-3xl font-rubik font-bold">
              University at Buffalo
            </h3>
            <p className="text-base 2xl:text-xl font-robotoMono font-semibold">
              Computer Science B.S.
            </p>
            <p className="text-sm 2xl:text-lg font-robotoMono font-light">
              Minor in Mathematics
            </p>
            <p className="text-sm 2xl:text-lg font-robotoMono font-light">
              Dean's List
            </p>
          </div>
        </div>
        {/* Description Text */}
        <div className="flex-1 text-center md:text-left font-robotoMono text-base md:text-lg 2xl:text-2xl space-y-4 px-4 md:px-6 max-w-xs md:max-w-3xl 2xl:max-w-4xl">
          <p>
            <span className="inline-block hover:animate-wave transition-all duration-300 ease-in-out">
              👋
            </span>{" "}
            Hello! I'm Jimmy Wu, a Computer Science graduate from University at
            Buffalo with interests in Full Stack Development, Web Development,
            Mobile Development, Artificial Intelligence, and Machine Learning.
          </p>
          <p>
            I enjoy working with modern stacks like Next.js, React, TypeScript,
            JavaScript and Twilwind CSS. Recently, I built Bulls Parking Finder
            a project designed to improve parking accessibility on UB campus. I
            am passionate about building scalable, efficient solutions that
            enhance the user experience.
          </p>
          <p>
            When I'm not coding, you can find me playing Brawl Stars, Pokemon
            TCG Pocket, watching{" "}
            <Link
              href="/anime"
              className="font-semibold underline underline-offset-4 hover:text-blue-400 transition-colors"
            >
              Anime
            </Link>{" "}
            and vibing to K-pop music.
          </p>
          <p className="text-xs md:text-sm 2xl:text-lg italic text-gray-600 dark:text-gray-400">
            (P.S. Want to team up in Brawl Stars? I've got your back, let's
            connect!)
          </p>
        </div>
      </div>
    </div>
  );
};

export default AboutMe;
