"use client";
import React from "react";

import checkMarkIconDark from "../assets/checkmark-dark.svg";
import checkMarkIconLight from "../assets/checkmark-light.svg";
import SkillsList from "./SkillsList";
import { useTheme } from "./ThemeContext";

const Skills = () => {
  const { theme } = useTheme();

  return (
    <div className="flex flex-col">
      <h1 className="font-rubik text-center text-3xl font-extrabold uppercase md:text-5xl mb-8 md:mb-14">
        Skills
      </h1>
      <div className="flex flex-wrap justify-evenly self-center gap-8 max-w-[26ch] md:max-w-fit lg:gap-12">
        {/* Languages */}
        <SkillsList
          src={theme === "light" ? checkMarkIconLight : checkMarkIconDark}
          skill="Python"
        />
        <SkillsList
          src={theme === "light" ? checkMarkIconLight : checkMarkIconDark}
          skill="HTML"
        />
        <SkillsList
          src={theme === "light" ? checkMarkIconLight : checkMarkIconDark}
          skill="JavaScript"
        />
        <SkillsList
          src={theme === "light" ? checkMarkIconLight : checkMarkIconDark}
          skill="TypeScript"
        />
        <SkillsList
          src={theme === "light" ? checkMarkIconLight : checkMarkIconDark}
          skill="PHP"
        />
        <SkillsList
          src={theme === "light" ? checkMarkIconLight : checkMarkIconDark}
          skill="C"
        />
        <SkillsList
          src={theme === "light" ? checkMarkIconLight : checkMarkIconDark}
          skill="Scala"
        />
        <SkillsList
          src={theme === "light" ? checkMarkIconLight : checkMarkIconDark}
          skill="MySQL"
        />
      </div>
      <hr
        className={`${
          theme === "light" ? "bg-black" : "bg-white"
        } w-[150px] h-[1px] border-none my-8 mx-auto md:w-[400px]`}
      />
      <div className="flex flex-wrap justify-evenly self-center gap-8 max-w-[26ch] md:max-w-fit lg:gap-12">
        {/* Frameworks */}
        <SkillsList
          src={theme === "light" ? checkMarkIconLight : checkMarkIconDark}
          skill="Nextjs"
        />
        <SkillsList
          src={theme === "light" ? checkMarkIconLight : checkMarkIconDark}
          skill="React Native"
        />
        <SkillsList
          src={theme === "light" ? checkMarkIconLight : checkMarkIconDark}
          skill="Tailwind CSS"
        />
        <SkillsList
          src={theme === "light" ? checkMarkIconLight : checkMarkIconDark}
          skill="Flask"
        />
        <SkillsList
          src={theme === "light" ? checkMarkIconLight : checkMarkIconDark}
          skill="Django"
        />
      </div>
      <hr
        className={`${
          theme === "light" ? "bg-black" : "bg-white"
        } w-[150px] h-[1px] border-none my-8 mx-auto md:w-[400px]`}
      />
      <div className="flex flex-wrap justify-evenly self-center gap-8 max-w-[26ch] md:max-w-fit lg:gap-12">
        {/* Libraries */}
        <SkillsList
          src={theme === "light" ? checkMarkIconLight : checkMarkIconDark}
          skill="Reactjs"
        />
        <SkillsList
          src={theme === "light" ? checkMarkIconLight : checkMarkIconDark}
          skill="Nodejs"
        />
        <SkillsList
          src={theme === "light" ? checkMarkIconLight : checkMarkIconDark}
          skill="PyTorch"
        />
        <SkillsList
          src={theme === "light" ? checkMarkIconLight : checkMarkIconDark}
          skill="Pandas"
        />
        <SkillsList
          src={theme === "light" ? checkMarkIconLight : checkMarkIconDark}
          skill="NumPy"
        />
        <SkillsList
          src={theme === "light" ? checkMarkIconLight : checkMarkIconDark}
          skill="Scikit-learn"
        />
        <SkillsList
          src={theme === "light" ? checkMarkIconLight : checkMarkIconDark}
          skill="Keras"
        />
      </div>

      <hr
        className={`${
          theme === "light" ? "bg-black" : "bg-white"
        } w-[150px] h-[1px] border-none my-8 mx-auto md:w-[400px]`}
      />
      <div className="flex flex-wrap justify-evenly self-center gap-8 max-w-[26ch] md:max-w-fit lg:gap-12">
        {/* Tools */}
        <SkillsList
          src={theme === "light" ? checkMarkIconLight : checkMarkIconDark}
          skill="GIT"
        />
        <SkillsList
          src={theme === "light" ? checkMarkIconLight : checkMarkIconDark}
          skill="GitHub"
        />
        <SkillsList
          src={theme === "light" ? checkMarkIconLight : checkMarkIconDark}
          skill="VS Code"
        />
        <SkillsList
          src={theme === "light" ? checkMarkIconLight : checkMarkIconDark}
          skill="PostMan"
        />
        <SkillsList
          src={theme === "light" ? checkMarkIconLight : checkMarkIconDark}
          skill="Docker"
        />
        <SkillsList
          src={theme === "light" ? checkMarkIconLight : checkMarkIconDark}
          skill="Expo Go"
        />
        <SkillsList
          src={theme === "light" ? checkMarkIconLight : checkMarkIconDark}
          skill="Microsoft Azure"
        />
      </div>
    </div>
  );
};

export default Skills;
