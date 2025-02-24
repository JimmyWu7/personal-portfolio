"use client";
import React from "react";
import Image, { StaticImageData } from "next/image";

import badgeDark from "../assets/badge-dark.svg";
import badgeLight from "../assets/badge-light.svg";

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
      } flex flex-row items-start justify-center gap-6 text-left border shadow-lg p-6 rounded-lg max-w-md transition-transform duration-300 ease-in-out transform hover:scale-105 sm:max-w-lg md:max-w-2xl`}
    >
      <Image
        className="pt-1"
        src={theme === "light" ? badgeLight : badgeDark}
        alt="Badge Icon"
        width={30}
        height={30}
      />
      <div className="space-y-2">
        <h3 className="text-lg md:text-xl font-rubik font-bold">{role}</h3>
        <p className="text-base md:text-lg font-robotoMono font-semibold">
          {company}
        </p>
        <p className="text-base font-rubik font-light">{desc}</p>
        {/* Add document links section */}
        {(certificateUrl || referenceUrl) && (
          <div className="flex gap-4">
            {certificateUrl && (
              <a
                href={certificateUrl}
                target="_blank"
                rel="noopener noreferrer"
                className={`text-sm font-rubik underline ${
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
                className={`text-sm font-rubik underline ${
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
