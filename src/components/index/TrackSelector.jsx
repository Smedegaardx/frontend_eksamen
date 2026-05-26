import { motion } from "framer-motion";
import Image from "next/image";

const TrackSelector = ({ tracks, setCurrentTrack }) => {
  return (
    <div className="flex justify-center gap-5 mt-5">
      {tracks.map((track, index) => (
        <motion.div
          key={index}
          onClick={() => setCurrentTrack(index)}
          className="grid cursor-pointer"
          initial="rest"
          whileHover="hover"
        >
          <Image
            src={track.cover}
            height={200}
            width={200}
            alt={`Cover for the song ${track.title}`}
            className="col-start-1 row-start-1"
          />

          <motion.div
            variants={{
              rest: { opacity: 0 },
              hover: { opacity: 1 },
            }}
            transition={{ duration: 0.3 }}
            className="
              col-start-1 row-start-1 relative grid grid-rows-2
              h-full w-full z-3

              before:content-[''] before:absolute before:top-0 before:left-0
              before:w-10 before:h-10 before:bg-(--color-brand)
              before:[clip-path:polygon(0_0,100%_0,0_100%)]

              after:content-[''] after:absolute after:bottom-0 after:right-0
              after:w-10 after:h-10 after:bg-(--color-brand)
              after:[clip-path:polygon(100%_0,100%_100%,0_100%)]
            "
          />
          <motion.div
            variants={{
              rest: { opacity: 0 },
              hover: { opacity: 1 },
            }}
            transition={{ duration: 0.3 }}
            className="h-full w-full col-start-1 row-start-1 bg-black/70 flex align-middle justify-center"
          >
            <Image
              src="/assets/icon/Play_btn.svg"
              width={40}
              height={40}
              alt="Play button"
            ></Image>
          </motion.div>
          <motion.div
            variants={{
              rest: { opacity: 0 },
              hover: { opacity: 1 },
            }}
            transition={{ duration: 0.4 }}
            className="bg-black col-start-1 row-start-1 self-end z-2"
          >
            <h1>{track.title}</h1>
          </motion.div>
        </motion.div>
      ))}
    </div>
  );
};

export default TrackSelector;
