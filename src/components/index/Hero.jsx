"use client";

import Image from "next/image";
import HeroCTA from "./HeroCTA";
import HeroBtn from "./HeroBtn";
import { useState } from "react";

const backgrounds = [
  "/assets/bg/header_bg_1.jpg",
  "/assets/bg/header_bg_2.jpg",
];

const Hero = () => {
  const [bg] = useState(
    backgrounds[Math.floor(Math.random() * backgrounds.length)],
  );

  return (
    <div
      className=" bg-cover bg-center max-w-[1920px] h-[777px] bg-blend-overlay bg-stone-800 flex flex-col justify-center items-center"
      style={{
        backgroundImage: `url(${bg})`,
      }}
    >
      <Image
        src="/assets/icon/Logo.svg"
        alt="Logo"
        width={800}
        height={0}
      ></Image>
      <h1 className="tracking-[1.55rem] left-2.5 relative text-3xl uppercase mt-3">
        Have a good time
      </h1>
      <Image
        src="/assets/bottom_line.png"
        alt="Lysende streg"
        width={800}
        height={0}
      ></Image>
      <div className=" flex gap-6">
        <HeroBtn text="view events" />
        <HeroCTA text="Book table" />
      </div>
    </div>
  );
};

export default Hero;
