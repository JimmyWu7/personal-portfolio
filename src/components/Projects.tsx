"use client";
import React from "react";
import Image from "next/image";

import VSCodeMama from "../assets/projects/VSCodeMama.svg";
import FILO from "../assets/projects/FILO_logo.jpg";
import BullsParkingFinder from "../assets/projects/BullsParkingImage.svg";
import FisionTech from "../assets/projects/fisiontech-logo.png";
import NBAMVPPredictor from "../assets/projects/NBAMVPPredictor.jpg";
import PersonalPortfolioDark from "../assets/projects/Personal-Portfolio-Dark.png";
import AIResumeAnalyzerLight from "../assets/projects/AI-Resume-Analyzer-Light.png";
import AIResumeAnalyzerDark from "../assets/projects/AI-Resume-Analyzer-Dark.png";
import PersonalPortfolioLight from "../assets/projects/Personal-Portfolio-Light.png";
import ProjectCard from "./ProjectCard";

import { useTheme } from "./ThemeContext";

const Projects = () => {
  const { theme, setTheme } = useTheme(); // Use theme from context
  return (
    <div id="projects" className="flex flex-col">
      <h1 className="font-rubik text-center text-3xl font-extrabold uppercase md:text-5xl 2xl:text-7xl mb-8 md:mb-14">
        Projects
      </h1>
      <div className="flex justify-center items-center">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 md:gap-10 lg:grid-cols-3 lg:gap-12 2xl:gap-24">
          <ProjectCard
            src={
              theme === "light" ? AIResumeAnalyzerLight : AIResumeAnalyzerDark
            }
            link="https://github.com/JimmyWu7/ai-resume-analyzer.git"
            name="AI Resume Analyzer"
            desc="Resume Analyzer Tool"
            extras="Vite, Reactjs, JavaScript, Tailwind CSS, ExpressJs"
          />
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
    </div>
  );
};

export default Projects;
