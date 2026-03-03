"use client";
import React from "react";

import ExperienceCard from "./ExperienceCard";

const Experience = () => {
  return (
    <div id="experience" className="flex flex-col">
      <h1 className="font-rubik text-center font-extrabold uppercase text-3xl md:text-5xl 2xl:text-7xl mb-8 md:mb-14">
        Experience
      </h1>
      <div className="flex flex-col items-center justify-center gap-y-8">
        <ExperienceCard
          role="Full Stack Mobile Developer"
          company="SpareWork Community Services Inc. • 2025"
          desc="Contributed to FamTok, a cross-platform real-time communication app with one-to-one and group calling. Integrated third-party voice and payment APIs to enhance functionality."
          appUrl="https://play.google.com/store/apps/details?id=com.famtok.app"
        />
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
