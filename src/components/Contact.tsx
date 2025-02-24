"use client";
import Image from "next/image";
import React, { useEffect, useState } from "react";

import linkedinLight from "../assets/linkedin-light.svg";
import linkedinDark from "../assets/linkedin-dark.svg";
import emailLight from "../assets/email-light.svg";
import emailDark from "../assets/email-dark.svg";
import { useTheme } from "./ThemeContext";

const Contact = () => {
  const { theme } = useTheme();

  return (
    <div className="flex flex-col">
      <h1 className="font-rubik text-center text-3xl font-extrabold uppercase md:text-5xl mb-8 md:mb-14">
        Contact
      </h1>
      <div
        className={`${
          theme === "light" ? "border-[#1e1e1e]" : "border-white"
        } flex flex-col items-center justify-center gap-10 border rounded-lg shadow-lg max-w-lg w-auto p-6 mx-auto md:flex-row md:gap-14 lg:gap-20`}
      >
        <a
          href="mailto:jimmywu3201@gmail.com"
          className="flex justify-center items-center gap-2 font-robotoMono text-base hover:text-gray-500 md:text-lg ld:text-xl"
        >
          <Image
            className="w-8"
            src={theme === "light" ? emailLight : emailDark}
            alt="Mail Icon"
          />
          jimmywu3201@gmail.com
        </a>
        <a
          className="flex justify-center items-center gap-2 font-robotoMono hover:text-gray-500 md:text-lg ld:text-xl"
          href="https://www.linkedin.com/in/JimmyWu"
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
  );
};

export default Contact;
