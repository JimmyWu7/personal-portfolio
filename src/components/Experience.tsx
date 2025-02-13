"use client";
import React from "react";

import ExperienceCard from "./ExperienceCard";

const Experience = () => {
  return (
    <div className="flex flex-col">
      <h1 className="font-rubik text-center text-3xl font-extrabold uppercase md:text-5xl mb-8 md:mb-14">
        Experience
      </h1>
      <div className="flex flex-col items-center justify-center px-4">
        <ExperienceCard
          role="Backend Developer Intern"
          company="SkyIT Services — Subsidiary of GBCS Group • 2024"
          desc="Spearheaded backend development and cross-team collaboration to
            deliver key features, implemented security enhancements through API
            improvements and MFA."
          referenceUrl="./JimmyWu-Backend-Developer-Django-Reference-Letter.pdf"
          certificateUrl="./JimmyWu-SkyIT-Certificate.pdf"
        />
      </div>
    </div>
  );
};

export default Experience;
