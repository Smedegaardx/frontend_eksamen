"use client";

import HeroCTA from "./HeroCTA";
import HeroBtn from "./HeroBtn";

import Image from "next/image";
import { useState } from "react";
import { motion } from "framer-motion";

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
      <motion.div
        initial={{
          rotateX: 90,
          transformOrigin: "top",
          opacity: 0,
        }}
        animate={{
          rotateX: 0,
          opacity: 1,
        }}
        transition={{
          duration: 1.5,
          ease: [0.25, 0.46, 0.45, 0.94],
        }}
      >
        <Image
          src="/assets/icon/Logo.svg"
          alt="Logo"
          width={800}
          height={0}
        ></Image>
      </motion.div>
      <motion.h1
        className="tracking-[1.55rem] left-2.5 relative text-3xl uppercase mt-3"
        initial={{
          y: -50,
          opacity: 0,
        }}
        animate={{
          y: 0,
          opacity: 1,
        }}
        transition={{
          duration: 1,
          delay: 1.5,
          ease: [0.25, 0.46, 0.45, 0.94],
        }}
      >
        Have a good time
      </motion.h1>
      <motion.div
        initial={{
          y: -50,
          opacity: 0,
        }}
        animate={{
          y: 0,
          opacity: 1,
        }}
        transition={{
          duration: 1,
          delay: 1.5,
          ease: [0.25, 0.46, 0.45, 0.94],
        }}
      >
        <Image
          src="/assets/bottom_line.png"
          alt="Lysende streg"
          width={800}
          height={0}
        ></Image>
      </motion.div>
      <motion.div
        className=" flex gap-6"
        initial={{
          y: -50,
          opacity: 0,
        }}
        animate={{
          y: 0,
          opacity: 1,
        }}
        transition={{
          duration: 1,
          delay: 2,
          ease: [0.25, 0.46, 0.45, 0.94],
        }}
      >
        <HeroBtn text="view events" />
        <HeroCTA text="Book table" />
      </motion.div>
    </div>
  );
};

export default Hero;
