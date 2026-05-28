import Image from "next/image";
import { useState, useEffect } from "react";
import {
  FaPlay,
  FaPause,
  FaVolumeMute,
  FaVolumeUp,
} from "react-icons/fa";
import {
  BsSkipBackwardFill,
  BsSkipForwardFill,
} from "react-icons/bs";

const CurrentTrack = ({
  tracks,
  track,
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

  useEffect(() => {
    if (!audioRef.current) return;

    audioRef.current.load();
  }, [track]);

  const nextTrack = () => {
    setCurrentTrack(
      (prev) => (prev + 1) % tracks.length,
    );
    if (!isPlaying) {
      setIsPlaying(false);
    } else {
      setIsPlaying(true);
    }
  };

  const prevTrack = () => {
    setCurrentTrack((prev) =>
      prev === 0 ? tracks.length - 1 : prev - 1,
    );
    if (!isPlaying) {
      setIsPlaying(false);
    } else {
      setIsPlaying(true);
    }
  };

  const [volume, setVolume] = useState(1);
  const [previousVolume, setPreviousVolume] =
    useState(1);

  const muteUnmute = () => {
    if (audioRef.current.volume > 0) {
      setPreviousVolume(audioRef.current.volume);
      audioRef.current.volume = 0;
      setVolume(0);
    } else {
      audioRef.current.volume = previousVolume;
      setVolume(previousVolume);
    }
  };

  const [currentTime, setCurrentTime] =
    useState(0);
  const [duration, setDuration] = useState(0);

  const formatTime = (time) => {
    if (!time) return "00:00";

    const minutes = Math.floor(time / 60);
    const seconds = Math.floor(time % 60);

    return `${String(minutes).padStart(2, "0")}:${String(
      seconds,
    ).padStart(2, "0")}`;
  };

  return (
    <div className="max-w-375 mx-8 lg:mx-16 2xl:mx-auto">
      <audio
        ref={audioRef}
        src={track.src}
        onEnded={nextTrack}
        preload="metadata"
        onLoadedMetadata={() => {
          setDuration(audioRef.current.duration);
        }}
        onTimeUpdate={() => {
          setCurrentTime(
            audioRef.current.currentTime,
          );
        }}
      />
      <div className="flex gap-8">
        <Image
          src={track.cover}
          height={400}
          width={400}
          alt={`Cover for the song ${track.title}`}
          className="hidden md:block"
        ></Image>
        <div className="w-full flex flex-col justify-evenly">
          <h2 className="uppercase text-2xl font-bold mb-5 text-center lg:text-left">
            {track.title}
          </h2>

          <input
            type="range"
            min="0"
            max={duration}
            value={currentTime}
            onChange={(e) => {
              audioRef.current.currentTime =
                e.target.value;
              setCurrentTime(e.target.value);
            }}
            className="w-full accent-(--color-brand) cursor-pointer"
          />

          <div className="mt-4 flex flex-col lg:flex-row items-center justify-between gap-5">
            <h1>
              {formatTime(currentTime)} /{" "}
              {formatTime(duration)}
            </h1>
            <div className="flex gap-10">
              <button
                onClick={prevTrack}
                className="text-2xl cursor-pointer"
              >
                <BsSkipBackwardFill />
              </button>

              <button
                onClick={togglePlay}
                className="rounded-full border-4 border-white p-3 cursor-pointer"
              >
                {isPlaying ? (
                  <FaPause />
                ) : (
                  <FaPlay />
                )}
              </button>

              <button
                onClick={nextTrack}
                className="text-2xl cursor-pointer"
              >
                <BsSkipForwardFill />
              </button>
            </div>
            <div className="flex gap-2 ">
              <button
                onClick={muteUnmute}
                className="text-2xl cursor-pointer"
              >
                {volume === 0 ? (
                  <FaVolumeMute />
                ) : (
                  <FaVolumeUp />
                )}
              </button>

              <input
                type="range"
                min="0"
                max="1"
                step="0.01"
                value={volume}
                className="accent-(--color-brand) cursor-pointer"
                onChange={(e) => {
                  const newVolume = Number(
                    e.target.value,
                  );

                  setVolume(newVolume);
                  audioRef.current.volume =
                    newVolume;
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
