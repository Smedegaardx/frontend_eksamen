"use client";

import { useState } from "react";
import {
  motion,
  AnimatePresence,
} from "framer-motion";
import Sectionheader from "./Sectionheader";
import Iconbtn from "../Iconbtn";
import {
  GoTriangleRight,
  GoTriangleLeft,
} from "react-icons/go";

const videos = [
  {
    title: "Club Night",
    src: "/assets/videos/video-crowd.mp4",
    thumbnail:
      "/assets/content-img/video_poster.jpg",
    mobileThumbnail:
      "/assets/content-img/video_poster_mobile.jpg",
  },
  {
    title: "DJ Set",
    src: "/assets/videos/video-dj-crowd-2.mp4",
    thumbnail:
      "/assets/content-img/video_poster.jpg",
    mobileThumbnail:
      "/assets/content-img/video_poster_mobile.jpg",
  },
  {
    title: "Festival Recap",
    src: "/assets/videos/video-dj-crowd1.mp4",
    thumbnail:
      "/assets/content-img/video_poster.jpg",
    mobileThumbnail:
      "/assets/content-img/video_poster_mobile.jpg",
  },
];

const videoVariants = {
  enter: (direction) => ({
    opacity: 0,
    x: direction > 0 ? 100 : -100,
  }),
  center: {
    opacity: 1,
    x: 0,
  },
  exit: (direction) => ({
    opacity: 0,
    x: direction > 0 ? -100 : 100,
  }),
};

const VideoSection = () => {
  const [
    [currentVideo, direction],
    setCurrentVideo,
  ] = useState([0, 0]);

  return (
    <section className="bg-[url(/assets/bg/pattern_bg.jpg)] text-white py-5 md:py-20">
      <motion.div
        className="max-w-5xl mx-auto"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{
          duration: 0.6,
          ease: "easeOut",
        }}
      >
        <Sectionheader title="latest video" />

        <motion.div
          className="relative overflow-hidden"
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{
            duration: 0.6,
            delay: 0.2,
          }}
        >
          <AnimatePresence
            mode="wait"
            custom={direction}
            initial={false}
          >
            <motion.div
              key={videos[currentVideo].src}
              custom={direction}
              className="relative"
              variants={videoVariants}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{
                duration: 0.4,
                ease: "easeInOut",
              }}
            >
              <div className="absolute top-0 left-0 z-10 w-10 h-10 md:w-20 md:h-20 bg-(--color-brand) [clip-path:polygon(0_0,100%_0,0_100%)]" />

              <div className="absolute bottom-0 right-0 z-10 w-10 h-10 md:w-20 md:h-20 bg-(--color-brand) [clip-path:polygon(100%_0,100%_100%,0_100%)]" />

              <video
                controls
                poster={
                  videos[currentVideo].thumbnail
                }
                className="w-full hidden md:block"
                preload="metadata"
              >
                <source
                  src={videos[currentVideo].src}
                  type="video/mp4"
                />
              </video>

              <video
                controls
                poster={
                  videos[currentVideo]
                    .mobileThumbnail
                }
                className="w-full block md:hidden"
                preload="metadata"
              >
                <source
                  src={videos[currentVideo].src}
                  type="video/mp4"
                />
              </video>
            </motion.div>
          </AnimatePresence>
        </motion.div>

        <motion.div
          className="flex justify-center gap-4 mt-6"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{
            duration: 0.4,
            delay: 0.4,
          }}
        >
          <motion.div
            className="text-2xl cursor-pointer"
            whileHover={{ scale: 1.15, x: -3 }}
            whileTap={{ scale: 0.9 }}
            onClick={() =>
              setCurrentVideo(([prev]) => [
                prev === 0
                  ? videos.length - 1
                  : prev - 1,
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
              setCurrentVideo(([prev]) => [
                prev === videos.length - 1
                  ? 0
                  : prev + 1,
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
