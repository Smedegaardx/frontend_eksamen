"use client";

import {
  useRef,
  useState,
  useEffect,
} from "react";
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
  const audioRef = useRef(null);
  const [currentTrack, setCurrentTrack] =
    useState(0);
  const [isPlaying, setIsPlaying] =
    useState(false);
  const [shownTrack, setShownTrack] = useState(0);

  const track = tracks[currentTrack];

  useEffect(() => {
    if (isPlaying && audioRef.current) {
      audioRef.current.play();
    }
  }, [currentTrack]);

  return (
    <section className="bg-black pt-10 pb-20">
      <Sectionheader title="night club track"></Sectionheader>
      <CurrentTrack
        tracks={tracks}
        track={track}
        currentTrack={currentTrack}
        setCurrentTrack={setCurrentTrack}
        isPlaying={isPlaying}
        setIsPlaying={setIsPlaying}
        audioRef={audioRef}
      ></CurrentTrack>
      <TrackSelector
        tracks={tracks}
        currentTrack={currentTrack}
        setCurrentTrack={setCurrentTrack}
        setIsPlaying={setIsPlaying}
        shownTrack={shownTrack}
        setShownTrack={setShownTrack}
        audioRef={audioRef}
      ></TrackSelector>
    </section>
  );
};

export default TrackSection;
