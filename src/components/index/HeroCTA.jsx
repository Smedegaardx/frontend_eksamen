"use client";

import { motion } from "framer-motion";
import Link from "next/link";

const HeroCTA = ({ text }) => {
  return (
    <Link href="/">
      <motion.button
        initial={{
          background:
            "linear-gradient(300deg, #b822b5 0%, #b822b5 50%, #F72A78 100%)",
        }}
        whileHover={{
          background:
            "linear-gradient(300deg, #b822b5 0%, #b822b5 99%, #F72A78 100%)",
        }}
        className="h-16 w-42 cursor-pointer"
      >
        <motion.div
          initial={{
            background:
              "linear-gradient(200deg, rgba(255,255,255,0.7) 0%, transparent 20%)",
          }}
          whileHover={{
            background:
              "linear-gradient(230deg, rgba(255,255,255,0.7) 0%, transparent 20%)",
          }}
          className="h-full w-full p-0.75"
        >
          <motion.div
            initial={{
              background:
                "linear-gradient(300deg, #b822b5 0%, #b822b5 50%, #F72A78 100%)",
            }}
            whileHover={{
              background:
                "linear-gradient(300deg, #b822b5 0%, #b822b5 99%, #F72A78 100%)",
            }}
            className="h-full w-full flex justify-center items-center
        "
          >
            <p className="text-lg uppercase tracking-wide">{text}</p>
          </motion.div>
        </motion.div>
      </motion.button>
    </Link>
  );
};

export default HeroCTA;
