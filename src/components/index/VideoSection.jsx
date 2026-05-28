"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Sectionheader from "./Sectionheader";
import Iconbtn from "../Iconbtn";
import { GoTriangleRight, GoTriangleLeft } from "react-icons/go";

const videos = [
  {
    title: "Club Night",
    src: "/assets/videos/video-crowd.mp4",
    thumbnail: "/assets/content-img/video_poster.jpg",
    mobileThumbnail: "/assets/content-img/video_poster_mobile.jpg",
  },
  {
    title: "DJ Set",
    src: "/assets/videos/video-dj-crowd-2.mp4",
    thumbnail: "/assets/content-img/video_poster.jpg",
    mobileThumbnail: "/assets/content-img/video_poster_mobile.jpg",
  },
  {
    title: "Festival Recap",
    src: "/assets/videos/video-dj-crowd1.mp4",
    thumbnail: "/assets/content-img/video_poster.jpg",
    mobileThumbnail: "/assets/content-img/video_poster_mobile.jpg",
  },
];

const VideoSection = () => {
  const [[currentVideo, direction], setCurrentVideo] = useState([0, 0]);

  return (
    <section className="bg-[url(/assets/bg/pattern_bg.jpg)] text-white py-5 md:py-20">
      <motion.div
        className="max-w-5xl mx-auto"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        <Sectionheader title="latest video" />

        <motion.div
          className="relative 
          before:content-[''] before:absolute before:top-0 before:left-0
          before:w-10 md:before:w-20 before:h-10 md:before:h-20 before:bg-(--color-brand) 
          before:[clip-path:polygon(0_0,100%_0,0_100%)]
          
          after:content-[''] after:absolute after:bottom-0 after:right-0
          after:w-10 md:after:w-20 after:h-10 md:after:h-20 after:bg-(--color-brand) 
          after:[clip-path:polygon(100%_0,100%_100%,0_100%)]"
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <AnimatePresence mode="wait">
            <motion.video
              key={videos[currentVideo].src}
              controls
              poster={videos[currentVideo].thumbnail}
              className="w-full hidden md:block"
              custom={direction}
              preload="metadata"
              initial={(direction) => ({
                opacity: 0,
                x: direction > 0 ? 100 : -100,
              })}
              animate={{
                opacity: 1,
                x: 0,
              }}
              exit={(direction) => ({
                opacity: 0,
                x: direction > 0 ? -100 : 100,
              })}
              transition={{
                duration: 0.4,
                ease: "easeInOut",
              }}
            >
              <source src={videos[currentVideo].src} type="video/mp4" />
            </motion.video>
            <motion.video
              key={`mobile.${videos[currentVideo].src}`}
              controls
              poster={videos[currentVideo].mobileThumbnail}
              className="w-full block md:hidden"
              custom={direction}
              preload="metadata"
              initial={(direction) => ({
                opacity: 0,
                x: direction > 0 ? 100 : -100,
              })}
              animate={{
                opacity: 1,
                x: 0,
              }}
              exit={(direction) => ({
                opacity: 0,
                x: direction > 0 ? -100 : 100,
              })}
              transition={{
                duration: 0.4,
                ease: "easeInOut",
              }}
            >
              <source src={videos[currentVideo].src} type="video/mp4" />
            </motion.video>
          </AnimatePresence>
        </motion.div>

        <motion.div
          className="flex justify-center gap-4 mt-6"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, delay: 0.4 }}
        >
          <motion.div
            className="text-2xl cursor-pointer"
            whileHover={{ scale: 1.15, x: -3 }}
            whileTap={{ scale: 0.9 }}
            onClick={() =>
              setCurrentVideo([
                currentVideo === 0 ? videos.length - 1 : currentVideo - 1,
                -1,
              ])
            }
          >
            <Iconbtn icon={GoTriangleLeft} />
          </motion.div>

          <motion.div
            className="text-2xl cursor-pointer"
            whileHover={{ scale: 1.15, x: 3 }}
            whileTap={{ scale: 0.9 }}
            onClick={() =>
              setCurrentVideo([
                currentVideo === videos.length - 1 ? 0 : currentVideo + 1,
                1,
              ])
            }
          >
            <Iconbtn icon={GoTriangleRight} />
          </motion.div>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default VideoSection;
