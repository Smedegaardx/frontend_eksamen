"use client";
import { motion } from "framer-motion";

const Button = ({ buttonText }) => {
  return (
    <motion.div
      initial="rest"
      whileHover="hover"
      className="relative w-45 pb-5 pt-5 cursor-pointer uppercase text-lg"
    >
      <motion.div
        variants={{
          rest: { scaleX: 0 },
          hover: { scaleX: 1 },
        }}
        transition={{
          duration: 0.35,
          ease: "easeInOut",
        }}
        className="absolute top-0 left-0 h-0.75 w-full bg-[#e14487] origin-right z-2"
      />
      <motion.div
        variants={{
          rest: { scaleX: 0 },
          hover: { scaleX: 1 },
        }}
        transition={{
          duration: 0.35,
          ease: "easeInOut",
        }}
        className="absolute bottom-0 left-0 h-0.75 w-full bg-[#e14487] origin-left z-2"
      />

      <div className="absolute top-0 left-0 h-0.75 w-full bg-white" />
      <div className="absolute bottom-0 left-0 h-0.75 w-full bg-white" />
      <motion.p
        className="text-center"
        variants={{
          rest: { color: "#FFF" },
          hover: { color: "#e14487" },
        }}
        transition={{
          duration: 0.35,
          ease: "easeInOut",
        }}
      >
        {buttonText}
      </motion.p>
    </motion.div>
  );
};

export default Button;
