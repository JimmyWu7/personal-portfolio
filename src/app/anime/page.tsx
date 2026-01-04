"use client";
import React from "react";

import Link from "next/link";
import leftArrowDark from "../../assets/icons/left-arrow-dark.svg";
import leftArrowLight from "../../assets/icons/left-arrow-light.svg";
import AnimeCard from "@/components/AnimeCard";
import { currentlyWatching, completed } from "@/constants/anime";
import Image from "next/image";
import { useTheme } from "@/components/ThemeContext";

const page = () => {
  const { theme } = useTheme();
  const sortedCompleted = [...completed].sort((a, b) =>
    a.title.localeCompare(b.title)
  );

  return (
    <div className="m-8 md:m-16">
      <Link
        href="/"
        className="inline-flex items-center gap-2 text-sm lg:text-base font-mono text-gray-600 dark:text-gray-400 hover:text-black dark:hover:text-white transition-all"
      >
        <Image
          src={theme === "light" ? leftArrowLight : leftArrowDark}
          alt="Back to home"
          className="w-8 h-8 lg:w-10 lg:h-10 hover:-translate-x-1 transition-transform"
        />
        Back
      </Link>
      <h1 className="font-rubik text-4xl md:text-5xl font-extrabold mb-4 text-center">
        Anime
      </h1>

      <p className="font-mono text-center text-base 2xl:text-xl text-gray-600 dark:text-gray-400">
        A small collection of what I'm currently watching and have enjoyed.
      </p>

      <p className="font-mono text-xs 2xl:text-base italic text-center text-gray-600 dark:text-gray-400 mb-16">
        (Got a good anime rec? Reach out{" "}
        <span className="inline-block drop-shadow-xl">👀</span>)
      </p>

      {/* Currently Watching */}
      <section className="mb-24">
        <h2 className="font-rubik text-2xl font-bold mb-6">
          Currently Watching
        </h2>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 2xl:grid-cols-7 gap-x-4 gap-y-2">
          {currentlyWatching.map((anime) => (
            <AnimeCard key={anime.title} {...anime} />
          ))}
        </div>
      </section>

      {/* Completed */}
      <div>
        <h2 className="font-rubik text-2xl font-bold mb-6">Completed</h2>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 2xl:grid-cols-7 gap-x-4 gap-y-2">
          {sortedCompleted.map((anime) => (
            <AnimeCard key={anime.title} {...anime} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default page;
