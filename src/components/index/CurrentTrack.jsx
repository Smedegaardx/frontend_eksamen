import Image from "next/image";
import { useState } from "react";
import { FaPlay, FaPause, FaVolumeMute, FaVolumeUp } from "react-icons/fa";
import { BsSkipBackwardFill, BsSkipForwardFill } from "react-icons/bs";

const CurrentTrack = ({
  tracks,
  track,
  currentTrack,
  setCurrentTrack,
  audioRef,
  isPlaying,
  setIsPlaying,
}) => {
  const togglePlay = () => {
    if (!audioRef.current) return;

    if (isPlaying) {
      audioRef.current.pause();
    } else {
      audioRef.current.play();
    }

    setIsPlaying(!isPlaying);
  };

  const nextTrack = () => {
    setCurrentTrack((prev) => (prev + 1) % tracks.length);
    setIsPlaying(false);
  };

  const prevTrack = () => {
    setCurrentTrack((prev) => (prev === 0 ? tracks.length - 1 : prev - 1));
    setIsPlaying(false);
  };

  const muteUnmute = () => {
    if (audioRef.current.volume > 0) {
      audioRef.current.volume = 0;
      setVolume(0);
    } else if (audioRef.current.volume == 0) {
      audioRef.current.volume = 0.25;
      setVolume(0.25);
    }
  };

  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const [volume, setVolume] = useState(1);

  const formatTime = (time) => {
    if (!time) return "00:00";

    const minutes = Math.floor(time / 60);
    const seconds = Math.floor(time % 60);

    return `${String(minutes).padStart(2, "0")}:${String(seconds).padStart(
      2,
      "0",
    )}`;
  };

  return (
    <div className="max-w-400 mx-auto">
      <audio
        ref={audioRef}
        src={track.src}
        onLoadedMetadata={() => {
          setDuration(audioRef.current.duration);
        }}
        onTimeUpdate={() => {
          setCurrentTime(audioRef.current.currentTime);
        }}
      />
      <div className="flex gap-8">
        <Image src={track.cover} height={300} width={300} alt="billede"></Image>
        <div className="w-full flex flex-col justify-evenly">
          <h2 className="uppercase text-2xl font-bold">{track.title}</h2>

          <input
            type="range"
            min="0"
            max={duration}
            value={currentTime}
            onChange={(e) => {
              audioRef.current.currentTime = e.target.value;
              setCurrentTime(e.target.value);
            }}
            className="w-full accent-(--color-brand)"
          />

          <div className="mt-4 flex items-center justify-between gap-5">
            <h1>
              {formatTime(currentTime)} / {formatTime(duration)}
            </h1>
            <div className="flex gap-10">
              <button onClick={prevTrack} className="text-2xl cursor-pointer">
                <BsSkipBackwardFill />
              </button>

              <button
                onClick={togglePlay}
                className="rounded-full border-4 border-white p-3 cursor-pointer"
              >
                {isPlaying ? <FaPause /> : <FaPlay />}
              </button>

              <button onClick={nextTrack} className="text-2xl cursor-pointer">
                <BsSkipForwardFill />
              </button>
            </div>
            <div className="flex gap-2 ">
              <button onClick={muteUnmute} className="text-2xl cursor-pointer">
                {volume === 0 ? <FaVolumeMute /> : <FaVolumeUp />}
              </button>

              <input
                type="range"
                min="0"
                max="1"
                step="0.01"
                value={volume}
                className="accent-(--color-brand)"
                onChange={(e) => {
                  const newVolume = Number(e.target.value);

                  setVolume(newVolume);
                  audioRef.current.volume = newVolume;
                }}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CurrentTrack;
