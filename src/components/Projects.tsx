import React from "react";
import Image from "next/image";

import VSCodeMama from "../assets/VSCodeMama.svg";
import FILO from "../assets/FILO_logo.jpg";
import BullsParkingFinder from "../assets/BullsParkingImage.svg";
import ProjectCard from "./ProjectCard";

const Projects = () => {
  return (
    <div className="flex flex-col">
      <h1 className="font-rubik text-center text-3xl font-extrabold uppercase md:text-5xl mb-8 md:mb-14">
        Projects
      </h1>
      <div className="flex flex-col items-center gap-8 md:flex-row md:flex-wrap md:justify-evenly">
        <ProjectCard
          src={VSCodeMama}
          link="https://github.com/UBH-Fall-2024/VsCode-Mama"
          name="VsCode-Mama"
          desc="AI ESLint Extension"
          extras="TypeScript"
        />
        <ProjectCard
          src={BullsParkingFinder}
          link="https://github.com/JimmyWu7/BullsParkingFinder"
          name="Bulls Parking Finder"
          desc="Parking Web App"
          extras="Reactjs, Tailwind CSS, PHP, MySQL"
        />
        <ProjectCard
          src={FILO}
          link="https://github.com/JimmyWu7/FILO"
          name="FILO"
          desc="Social Media Web App"
          extras="Reactjs, Tailwind CSS, Flask, MongoDB, Docker"
        />
        {/* <ProjectCard
          src={viberr}
          link="https://github.com/Ade-mir/company-landing-page-2"
          name=""
          desc="Streaming App"
        /> */}
      </div>
    </div>
  );
};

export default Projects;
