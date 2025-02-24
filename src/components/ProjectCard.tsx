import React from "react";
import Image, { StaticImageData } from "next/image";

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
  return (
    <a
      className="flex flex-col gap-2 w-full max-w-[300px] rounded-2xl transition-transform duration-300 ease-in-out hover:scale-105"
      href={link}
      target="_blank"
    >
      <Image
        className=" max-w-[250px] h-full self-center rounded-2xl"
        src={src}
        alt={`${name} Logo`}
        width={300}
        height={300}
      />
      <h3 className="font-rubik text-2xl font-bold text-center">{name}</h3>
      <p className="font-robotoMono text-lg font-light text-center">{desc}</p>
      <p className="flex flex-wrap justify-center font-robotoMono text-sm font-light text-center">
        {extras}
      </p>
    </a>
  );
};

export default ProjectCard;
