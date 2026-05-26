"use client";

import { motion } from "framer-motion";

import Image from "next/image";
import HeroCTA from "./HeroCTA";

const FeaturedEvent = ({ event }) => {
  const formattedDate =
    new Date(event.date).toLocaleDateString("en-UK", {
      month: "short",
      day: "numeric",
    }) +
    " · " +
    new Date(event.date).toLocaleTimeString("en-UK", {
      hour: "2-digit",
      minute: "2-digit",
      hour12: false,
    });

  return (
    <motion.div className="grid" initial="rest" whileHover="hover">
      <Image
        src={`http://localhost:4000/${event.asset.url}`}
        height={event.asset.height}
        width={event.asset.width}
        alt={event.asset.alt}
        className="col-start-1 row-start-1"
      ></Image>
      <motion.div
        variants={{
          rest: {
            opacity: 0,
          },
          hover: {
            opacity: 1,
          },
        }}
        transition={{ duration: 0.3 }}
        style={{
          width: event.asset.width,
          height: event.asset.height,
        }}
        className={` col-start-1 row-start-1 relative grid grid-rows-2 bg-black/70
        

        before:content-[''] before:absolute before:top-0 before:left-0
        before:w-10 before:h-10 before:bg-(--color-brand) 
        before:[clip-path:polygon(0_0,100%_0,0_100%)]
    
        after:content-[''] after:absolute after:bottom-0 after:right-0
        after:w-10 after:h-10 after:bg-(--color-brand) 
        after:[clip-path:polygon(100%_0,100%_100%,0_100%)]`}
      >
        <motion.div
          variants={{
            rest: {
              opacity: 0,
              y: -80,
            },
            hover: {
              opacity: 1,
              y: 0,
            },
          }}
          transition={{
            duration: 0.35,
            ease: "easeOut",
          }}
          className="row-start-1 flex justify-center items-center"
        >
          <HeroCTA text="book now" link="/"></HeroCTA>
        </motion.div>
        <motion.div
          variants={{
            rest: {
              opacity: 0,
              y: 40,
            },
            hover: {
              opacity: 1,
              y: 0,
            },
          }}
          transition={{
            duration: 0.35,
            ease: "easeOut",
          }}
          className="bg-black/70 row-start-2 py-3 px-2 flex flex-col"
        >
          <h1 className="text-2xl uppercase">{event.title}</h1>
          <p className="text-lg leading-7 text-gray-400 mt-2">
            {event.excerpt}
          </p>
          <p className="text-(--color-brand) mt-auto">{event.location}</p>
        </motion.div>
      </motion.div>
      <div className="bg-(--color-brand) col-start-1 row-start-2 self-end px-4 py-2 flex justify-between z-10">
        <h1 className="text-xl">{event.title}</h1>
        <p className="text-xl">{formattedDate}</p>
      </div>
    </motion.div>
  );
};

export default FeaturedEvent;
