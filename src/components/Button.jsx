"use client";
import { motion } from "framer-motion";

const Button = ({ buttonText }) => {
  return (
    <motion.button
      initial="rest"
      whileHover="hover"
      className="relative w-45 pb-5 pt-5 cursor-pointer uppercase text-lg"
    >
      <motion.div
        variants={{
          rest: { scaleX: 0 },
          hover: { scaleX: 1 },
        }}
        transition={{ duration: 0.35, ease: "easeInOut" }}
        className="absolute top-0 left-0 h-0.75 w-full bg-brand origin-right z-2"
      />
      <motion.div
        variants={{
          rest: { scaleX: 0 },
          hover: { scaleX: 1 },
        }}
        transition={{ duration: 0.35, ease: "easeInOut" }}
        className="absolute bottom-0 left-0 h-0.75 w-full bg-brand origin-left z-2"
      />

      <div className="absolute top-0 left-0 h-0.75 w-full bg-white" />
      <div className="absolute bottom-0 left-0 h-0.75 w-full bg-white" />
      <motion.p
        variants={{
          rest: { color: "oklch(1 0 0)" },
          hover: { color: "oklch(0.6535 0.2419 9.27)" },
        }}
        transition={{ duration: 0.35, ease: "easeInOut" }}
      >
        {buttonText}
      </motion.p>
    </motion.button>
  );
};

export default Button;
