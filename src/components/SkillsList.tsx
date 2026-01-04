import React from "react";
import Image, { StaticImageData } from "next/image";

interface SkillsListProps {
  src: string | StaticImageData; // The image source, should be a string (URL or path)
  skill: string; // The link the card will redirect to, should be a string
}

const SkillsList: React.FC<SkillsListProps> = ({ src, skill }) => {
  return (
    <span className="flex items-center gap-1">
      <Image
        className=""
        src={src}
        alt="Checkmark Icon"
        width={20}
        height={20}
      />
      <p className="font-robotoMono font-light text-base md:text-lg lg:text-xl 2xl:text-3xl">
        {skill}
      </p>
    </span>
  );
};

export default SkillsList;
