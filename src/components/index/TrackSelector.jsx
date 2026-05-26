import Image from "next/image";

const TrackSelector = ({ tracks, setCurrentTrack }) => {
  return (
    <div className="flex justify-center gap-5 mt-5">
      {tracks.map((track, index) => (
        <Image
          key={index}
          src={track.cover}
          height={200}
          width={200}
          alt={`Cover for the song ${track.title}`}
          onClick={() => {
            setCurrentTrack(index);
          }}
        ></Image>
      ))}
    </div>
  );
};

export default TrackSelector;
