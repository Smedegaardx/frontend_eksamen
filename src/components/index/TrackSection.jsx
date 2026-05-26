"use client";

import { useRef, useState } from "react";
import CurrentTrack from "./CurrentTrack";
import Sectionheader from "./Sectionheader";
import TrackSelector from "./TrackSelector";

const tracks = [
  {
    title: "Black Box Funky",
    src: "/assets/songs/black-box-funky.mp3",
    cover: "/assets/content-img/track1.jpg",
  },
  {
    title: "Euphoria",
    src: "/assets/songs/euphoria.mp3",
    cover: "/assets/content-img/track2.jpg",
  },
  {
    title: "Fashion Red Tape",
    src: "/assets/songs/fashion-red-tape.mp3",
    cover: "/assets/content-img/track4.jpg",
  },
];

const TrackSection = () => {
  return (
    <section className="bg-black pt-10">
      <Sectionheader title="night club track"></Sectionheader>
      <CurrentTrack></CurrentTrack>
      <TrackSelector></TrackSelector>
    </section>
  );
};

export default TrackSection;
