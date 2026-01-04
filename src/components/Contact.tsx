"use client";
import Image from "next/image";
import React, { useEffect, useState } from "react";

import linkedinLight from "../assets/icons/linkedin-light.svg";
import linkedinDark from "../assets/icons/linkedin-dark.svg";
import emailLight from "../assets/icons/email-light.svg";
import emailDark from "../assets/icons/email-dark.svg";
import { useTheme } from "./ThemeContext";

const Contact = () => {
  const { theme } = useTheme();

  return (
    <div id="contact" className="flex flex-col">
      <h1 className="font-rubik text-center text-3xl font-extrabold uppercase md:text-5xl 2xl:text-7xl mb-8 md:mb-14">
        Contact
      </h1>
      <div className="flex flex-col items-center justify-center">
        <div
          className={`${
            theme === "light" ? "border-[#1e1e1e]" : "border-white"
          } flex flex-col items-center justify-center gap-10 border rounded-lg shadow-lg max-w-xl 2xl:max-w-3xl w-auto p-6 md:flex-row md:gap-14 lg:gap-20 2xl:gap-28`}
        >
          <a
            href="mailto:jimmywu3201@gmail.com"
            className="flex justify-center items-center gap-2 font-robotoMono text-base hover:text-gray-500 md:text-lg lg:text-xl 2xl:text-3xl"
          >
            <Image
              className="w-8"
              src={theme === "light" ? emailLight : emailDark}
              alt="Mail Icon"
            />
            jimmywu3201@gmail.com
          </a>
          <a
            className="flex justify-center items-center gap-2 font-robotoMono hover:text-gray-500 md:text-lg lg:text-xl 2xl:text-3xl"
            href="https://www.linkedin.com/in/jimmywu7/"
            target="_blank"
          >
            <Image
              className="w-8"
              src={theme === "light" ? linkedinLight : linkedinDark}
              alt="Linkedin Icon"
            />
            JimmyWu7
          </a>
        </div>
      </div>
    </div>
  );
};

export default Contact;
