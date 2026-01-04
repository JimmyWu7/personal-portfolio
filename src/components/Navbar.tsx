"use client";

import React, { useRef, useState, useEffect } from "react";
import Image from "next/image";
import sun from "../assets/icons/sun.svg";
import moon from "../assets/icons/moon.svg";
import { useTheme } from "./ThemeContext";

const Navbar = () => {
  const { theme, setTheme } = useTheme();
  const [isPlaying, setIsPlaying] = useState(false);

  const audioRef = useRef<HTMLAudioElement | null>(null);

  useEffect(() => {
    audioRef.current = new Audio("/Dreams.mp3");
    audioRef.current.loop = true;
    audioRef.current.volume = 0.2;

    return () => {
      audioRef.current?.pause();
      audioRef.current = null;
    };
  }, []);

  const toggleTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };

  const toggleAudio = () => {
    if (!audioRef.current) return;

    if (isPlaying) {
      audioRef.current.pause();
    } else {
      audioRef.current.play().catch((err) => console.error(err));
    }

    setIsPlaying(!isPlaying);
  };

  // Sound wave component
  const SoundWave = ({ playing }: { playing: boolean }) => {
    const animations = [
      "animate-centerWave1",
      "animate-centerWave2",
      "animate-centerWave3",
      "animate-centerWave2",
      "animate-centerWave1",
    ];

    return (
      <div className="flex items-center gap-[2px] md:gap-[3px] h-[20px]">
        {animations.map((animation, i) => (
          <span
            key={i}
            className={`w-[2px] md:w-[3px] ${i === 2 ? "h-[10px] md:h-[12px]" : "h-[6px] md:h-[8px]"}
          bg-blue-400 rounded-sm origin-center
          transition-transform duration-200
          shadow-[0_0_6px_rgba(34,197,94,0.6)]
          ${playing ? animation : ""}
        `}
          />
        ))}
      </div>
    );
  };

  return (
    <nav className="fixed top-3 right-3 md:top-4 md:right-4 lg:top-6 lg:right-6 2xl:top-8 2xl:right-8 z-50 flex flex-col justify-center items-center gap-4">
      {/* Theme Toggle */}
      <button onClick={toggleTheme}>
        <Image
          src={theme === "light" ? sun : moon}
          alt="Toggle Theme"
          className="w-5 h-5 md:w-6 md:h-6 2xl:w-8 2xl:h-8 hover:opacity-80 transition"
        />
      </button>

      {/* Audio Toggle */}
      <button
        onClick={toggleAudio}
        className="flex items-center justify-center w-5 h-5 md:w-7 md:h-7 lg:w-9 lg:h-9 2xl:w-11 2xl:h-11 hover:bg-gray-200 rounded transition"
      >
        <SoundWave playing={isPlaying} />
      </button>
    </nav>
  );
};

export default Navbar;
