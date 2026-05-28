"use client";

import { motion } from "framer-motion";
import Link from "next/link";

const HeroCTA = ({ text, link }) => {
  return (
    <Link href={link}>
      <motion.button
        tabIndex={-1}
        initial={{
          background:
            "linear-gradient(300deg, oklch(0.5588 0.2348 329.1) 0%, oklch(0.5588 0.2348 329.1) 50%, oklch(0.6417 0.2372 5.45) 100%)",
        }}
        whileHover={{
          background:
            "linear-gradient(300deg, oklch(0.5588 0.2348 329.1) 0%, oklch(0.5588 0.2348 329.1) 99%, oklch(0.6417 0.2372 5.45) 100%)",
        }}
        className="h-16 w-36 md:w-42 cursor-pointer"
      >
        <motion.div
          initial={{
            background:
              "linear-gradient(200deg, oklch(1 0 0 / 70%) 0%, transparent 20%)",
          }}
          whileHover={{
            background:
              "linear-gradient(230deg, oklch(1 0 0 / 70%)) 0%, transparent 20%)",
          }}
          className="h-full w-full p-0.75"
        >
          <motion.div
            initial={{
              background:
                "linear-gradient(300deg, oklch(0.5588 0.2348 329.1) 0%, oklch(0.5588 0.2348 329.1) 50%, oklch(0.6417 0.2372 5.45) 100%)",
            }}
            whileHover={{
              background:
                "linear-gradient(300deg, oklch(0.5588 0.2348 329.1) 0%, oklch(0.5588 0.2348 329.1) 99%, oklch(0.6417 0.2372 5.45) 100%)",
            }}
            className="h-full w-full flex justify-center items-center
        "
          >
            <p className="md:text-lg uppercase tracking-wide">
              {text}
            </p>
          </motion.div>
        </motion.div>
      </motion.button>
    </Link>
  );
};

export default HeroCTA;
