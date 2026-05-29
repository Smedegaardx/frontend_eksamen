"use client";

import Link from "next/link";
import { easeOut, motion } from "framer-motion";

const Herobtn = ({ text, link }) => {
  return (
    <Link href={link}>
      <motion.div
        whileHover="hover"
        initial="rest"
      >
        <motion.button
          tabIndex={-1}
          className="h-16 w-36 md:w-42 border-3 border-neutral-400 cursor-pointer"
          variants={{
            rest: {
              borderColor: "oklch(70.8% 0 0)",
              scale: 1,
            },
            hover: {
              borderColor:
                "oklch(0.653 0.242 9.274)",
              scale: 1.02,
              transition: {
                duration: 0.5,
                ease: easeOut,
              },
            },
          }}
        >
          <motion.div className="h-full w-full flex justify-center items-center">
            <motion.p
              className="md:text-lg uppercase tracking-wide"
              variants={{
                rest: {
                  scale: 1,
                  color: "white",
                },
                hover: {
                  scale: 1.04,
                  color:
                    "oklch(0.953 0.242 9.274)",
                  transition: {
                    duration: 0.2,
                    ease: easeOut,
                  },
                },
              }}
            >
              {text}
            </motion.p>
          </motion.div>
        </motion.button>
      </motion.div>
    </Link>
  );
};

export default Herobtn;
