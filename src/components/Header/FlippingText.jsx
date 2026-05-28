"use client";

import { motion } from "framer-motion";

const FlippingText = ({ text, className = "", data }) => {
  const splittedText = text.split("");

  const pullupVariant = {
    initial: {
      y: 20,
      opacity: 0,
    },
    hover: (i) => ({
      y: 0,
      opacity: 1,
      transition: {
        delay: i * 0.03,
        duration: 0.3,
      },
    }),
  };

  const pulldownVariant = {
    initial: {
      y: 0,
      opacity: 1,
    },
    hover: (i) => ({
      y: -20,
      opacity: 0,
      transition: {
        delay: i * 0.03,
        duration: 0.3,
      },
    }),
  };

  return (
    <motion.div
      initial="initial"
      whileHover={data === "active" ? "" : "hover"}
      className="flex cursor-pointer"
    >
      {splittedText.map((current, i) => (
        <div key={i} className="relative overflow-hidden h-8">
          {/* Original text */}
          <motion.div
            variants={pulldownVariant}
            custom={i}
            data-active={data}
            className={`text-2xl uppercase ${className}`}
          >
            {current === " " ? <span>&nbsp;</span> : current}
          </motion.div>

          {/* Hover text */}
          <motion.div
            variants={pullupVariant}
            custom={i}
            className={`text-2xl uppercase absolute left-0 top-0 text-(--color-brand) ${className}`}
          >
            {current === " " ? <span>&nbsp;</span> : current}
          </motion.div>
        </div>
      ))}
    </motion.div>
  );
};

export default FlippingText;
