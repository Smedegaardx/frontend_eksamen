"use client";

import { useState } from "react";
import Sectionheader from "./Sectionheader";
import Iconbtn from "../Iconbtn";
import { GoTriangleRight, GoTriangleLeft } from "react-icons/go";

const videos = [
  {
    title: "Club Night",
    src: "/assets/videos/video-crowd.mp4",
    thumbnail: "/assets/content-img/video_poster.jpg",
  },
  {
    title: "DJ Set",
    src: "/assets/videos/video-dj-crowd-2.mp4",
    thumbnail: "/assets/content-img/video_poster.jpg",
  },
  {
    title: "Festival Recap",
    src: "/assets/videos/video-dj-crowd1.mp4",
    thumbnail: "/assets/content-img/video_poster.jpg",
  },
];

const VideoSection = () => {
  const [currentVideo, setCurrentVideo] = useState(0);

  return (
    <section className="bg-[url(/assets/bg/pattern_bg.jpg)] text-white py-20">
      <div className="max-w-5xl mx-auto">
        <Sectionheader title="latest video"></Sectionheader>
        <div
          className=" relative     
           before:content-[''] before:absolute before:top-0 before:left-0
    before:w-20 before:h-20 before:bg-(--color-brand) 
    before:[clip-path:polygon(0_0,100%_0,0_100%)]
    
    after:content-[''] after:absolute after:bottom-0 after:right-0
    after:w-20 after:h-20 after:bg-(--color-brand) 
    after:[clip-path:polygon(100%_0,100%_100%,0_100%)]"
        >
          <video
            key={videos[currentVideo].src}
            controls
            className="w-full"
            poster={videos[currentVideo].thumbnail}
          >
            <source src={videos[currentVideo].src} type="video/mp4" />
          </video>
        </div>

        <div className="flex justify-center gap-4 mt-6">
          <div
            className="text-2xl cursor-pointer"
            onClick={() =>
              setCurrentVideo((prev) =>
                prev === 0 ? videos.length - 1 : prev - 1,
              )
            }
          >
            <Iconbtn icon={GoTriangleLeft}></Iconbtn>
          </div>
          <div
            className="text-2xl cursor-pointer"
            onClick={() =>
              setCurrentVideo((prev) =>
                prev === videos.length - 1 ? 0 : prev + 1,
              )
            }
          >
            <Iconbtn icon={GoTriangleRight}></Iconbtn>
          </div>
        </div>
      </div>
    </section>
  );
};

export default VideoSection;
