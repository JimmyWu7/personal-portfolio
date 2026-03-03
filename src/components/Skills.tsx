"use client";
import React from "react";

import checkMarkIconDark from "../assets/icons/checkmark-dark.svg";
import checkMarkIconLight from "../assets/icons/checkmark-light.svg";
import SkillsList from "./SkillsList";
import { useTheme } from "./ThemeContext";
import { skills } from "@/constants/skills";

const Skills = () => {
  const { theme } = useTheme();

  return (
    <div id="skills" className="flex flex-col">
      <h1 className="font-rubik text-center text-3xl font-extrabold uppercase md:text-5xl 2xl:text-7xl mb-8 md:mb-14">
        Skills
      </h1>
      <div className="flex flex-wrap justify-evenly self-center gap-4 max-w-[26ch] md:max-w-fit lg:gap-8">
        {/* Languages */}
        {skills.languages.map((skill) => (
          <SkillsList
            key={skill}
            src={theme === "light" ? checkMarkIconLight : checkMarkIconDark}
            skill={skill}
          />
        ))}
      </div>
      <hr
        className={`${
          theme === "light" ? "bg-black" : "bg-white"
        } w-[150px] h-[1px] border-none my-8 mx-auto md:w-[400px]`}
      />
      <div className="flex flex-wrap justify-evenly self-center gap-8 max-w-[26ch] md:max-w-fit lg:gap-12">
        {/* Frameworks */}
        {skills.frameworks.map((skill) => (
          <SkillsList
            key={skill}
            src={theme === "light" ? checkMarkIconLight : checkMarkIconDark}
            skill={skill}
          />
        ))}
      </div>
      <hr
        className={`${
          theme === "light" ? "bg-black" : "bg-white"
        } w-[150px] h-[1px] border-none my-8 mx-auto md:w-[400px]`}
      />
      <div className="flex flex-wrap justify-evenly self-center gap-8 max-w-[26ch] md:max-w-fit lg:gap-12">
        {/* Libraries */}
        {skills.libraries.map((skill) => (
          <SkillsList
            key={skill}
            src={theme === "light" ? checkMarkIconLight : checkMarkIconDark}
            skill={skill}
          />
        ))}
      </div>

      <hr
        className={`${
          theme === "light" ? "bg-black" : "bg-white"
        } w-[150px] h-[1px] border-none my-8 mx-auto md:w-[400px]`}
      />
      <div className="flex flex-wrap justify-evenly self-center gap-8 max-w-[26ch] md:max-w-fit lg:gap-12">
        {/* Tools */}
        {skills.tools.map((skill) => (
          <SkillsList
            key={skill}
            src={theme === "light" ? checkMarkIconLight : checkMarkIconDark}
            skill={skill}
          />
        ))}
      </div>
    </div>
  );
};

export default Skills;
