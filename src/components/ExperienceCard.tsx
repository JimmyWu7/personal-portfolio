"use client";
import React from "react";
import Image, { StaticImageData } from "next/image";

import badgeDark from "../assets/icons/badge-dark.svg";
import badgeLight from "../assets/icons/badge-light.svg";

import { useTheme } from "./ThemeContext";

interface ExperienceCardProps {
  // src: string | StaticImageData; // The image source, should be a string (URL or path)
  // styles: string;
  role: string;
  company: string;
  desc: string;
  certificateUrl?: string; // Optional
  referenceUrl?: string; // Optional
}

const ExperienceCard: React.FC<ExperienceCardProps> = ({
  // src,
  // styles,
  role,
  company,
  desc,
  certificateUrl,
  referenceUrl,
}) => {
  const { theme } = useTheme();
  return (
    <div
      className={`${
        theme === "light" ? "border-[#1E1E1E]" : "border-white"
      } flex flex-col items-center justify-center text-center md:flex-row md:items-start gap-6 md:text-left border shadow-lg p-6 rounded-lg max-w-[18rem] md:max-w-2xl lg:max-w-3xl 2xl:max-w-5xl transition-transform duration-300 ease-in-out transform hover:scale-105`}
    >
      <Image
        className="pt-1"
        src={theme === "light" ? badgeLight : badgeDark}
        alt="Badge Icon"
        width={30}
        height={30}
      />
      <div className="space-y-2">
        <h3 className="text-lg md:text-xl 2xl:text-3xl font-rubik font-bold">
          {role}
        </h3>
        <p className="text-balance text-base md:text-lg 2xl:text-2xl font-robotoMono font-semibold">
          {company}
        </p>
        <p className="text-sm md:text-base 2xl:text-xl font-rubik font-light">
          {desc}
        </p>
        {/* Add document links section */}
        {(certificateUrl || referenceUrl) && (
          <div className="flex gap-4 justify-center md:justify-start">
            {certificateUrl && (
              <a
                href={certificateUrl}
                target="_blank"
                rel="noopener noreferrer"
                className={`text-sm md:text-base 2xl:text-xl font-rubik underline ${
                  theme === "light" ? "text-[#1E1E1E]" : "text-white"
                }`}
              >
                View Certificate
              </a>
            )}
            {referenceUrl && (
              <a
                href={referenceUrl}
                target="_blank"
                rel="noopener noreferrer"
                className={`text-sm md:text-base 2xl:text-xl font-rubik underline ${
                  theme === "light" ? "text-[#1E1E1E]" : "text-white"
                }`}
              >
                Reference Letter
              </a>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default ExperienceCard;
