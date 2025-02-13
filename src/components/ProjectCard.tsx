"use client";
import React from "react";
import Image, { StaticImageData } from "next/image";
import { useTheme } from "./ThemeContext";

interface ProjectCardProps {
  src: string | StaticImageData; // The image source, should be a string (URL or path)
  link: string;
  name: string;
  desc: string;
  extras: string;
}

const ProjectCard: React.FC<ProjectCardProps> = ({
  src,
  link,
  name,
  desc,
  extras,
}) => {
  const { theme, setTheme } = useTheme(); // Use theme from context
  return (
    <a
      className="flex flex-col justify-center items-center gap-2 w-fit rounded-2xl transition-transform duration-300 ease-in-out hover:scale-105"
      href={link}
      target="_blank"
    >
      <Image
        className={`${
          theme === "light" ? "bg-white" : "bg-white"
        } max-w-[250px] self-center rounded-2xl`}
        src={src}
        alt={`${name} Logo`}
        width={300}
        height={300}
      />
      <h3 className="font-robotoMono text-2xl font-bold">{name}</h3>
      <p className="font-robotoMono text-xl font-light">{desc}</p>
      <p className="font-robotoMono text-sm font-light text-center w-2/3">
        {extras}
      </p>
    </a>
  );
};

export default ProjectCard;
