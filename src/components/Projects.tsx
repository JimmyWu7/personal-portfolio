"use client";
import React from "react";
import Image from "next/image";

import VSCodeMama from "../assets/VSCodeMama.svg";
import FILO from "../assets/FILO_logo.jpg";
import BullsParkingFinder from "../assets/BullsParkingImage.svg";
import FisionTech from "../assets/fisiontech-logo.png";
import NBAMVPPredictor from "../assets/NBAMVPPredictor.jpg";
import PersonalPortfolioDark from "../assets/Personal-Portfolio-Dark.png";
import PersonalPortfolioLight from "../assets/Personal-Portfolio-Light.png";
import ProjectCard from "./ProjectCard";

import { useTheme } from "./ThemeContext";

const Projects = () => {
  const { theme, setTheme } = useTheme(); // Use theme from context
  return (
    <div className="flex flex-col">
      <h1 className="font-rubik text-center text-3xl font-extrabold uppercase md:text-5xl mb-8 md:mb-14">
        Projects
      </h1>
      <div className="flex flex-col items-center gap-8 md:flex-row md:flex-wrap md:justify-evenly md:items-start">
        <ProjectCard
          src={
            theme === "light" ? PersonalPortfolioLight : PersonalPortfolioDark
          }
          link="https://github.com/JimmyWu7/personal-portfolio"
          name="Personal Portfolio"
          desc="Portfolio Website"
          extras="Nextjs, TypeScript, Tailwind CSS"
        />
        <ProjectCard
          src={BullsParkingFinder}
          link="https://github.com/JimmyWu7/BullsParkingFinder"
          name="Bulls Parking Finder"
          desc="Parking Web App"
          extras="Reactjs, Tailwind CSS, PHP, MySQL"
        />
        <ProjectCard
          src={NBAMVPPredictor}
          link="https://github.com/SoloH3N/NBA-MVP-Prediction"
          name="NBA MVP Predictor"
          desc="AI Prediction Tool"
          extras="Python, Jupyter Notebook, Pandas, Beautiful Soup"
        />
        <ProjectCard
          src={VSCodeMama}
          link="https://github.com/UBH-Fall-2024/VsCode-Mama"
          name="VsCode-Mama"
          desc="AI ESLint Extension"
          extras="TypeScript"
        />
        <ProjectCard
          src={FILO}
          link="https://github.com/JimmyWu7/FILO"
          name="FILO"
          desc="Social Media Web App"
          extras="Reactjs, Tailwind CSS, Flask, MongoDB, Docker"
        />
        <ProjectCard
          src={FisionTech}
          link="https://github.com/UBH-Fall2022/ubh-fall2022-finance-model"
          name="Fision Tech"
          desc="Finance Web App"
          extras="HTML, CSS, Python, Plotly"
        />
      </div>
    </div>
  );
};

export default Projects;
