import { motion } from "framer-motion";
import Image from "next/image";
import Iconbtn from "../Iconbtn";
import {
  GoTriangleRight,
  GoTriangleLeft,
} from "react-icons/go";

const TrackSelector = ({
  tracks,
  setCurrentTrack,
  currentTrack,
  shownTrack,
  setShownTrack,
}) => {
  const previousImage = () => {
    setShownTrack((prev) =>
      prev === 0 ? tracks.length - 1 : prev - 1,
    );
  };

  const nextImage = () => {
    setShownTrack((prev) =>
      prev === tracks.length - 1 ? 0 : prev + 1,
    );
  };

  return (
    <div className="flex flex-col md:flex-row items-center justify-center gap-5 mt-5">
      {tracks.map((track, index) => (
        <motion.button
          key={index}
          onClick={() => setCurrentTrack(index)}
          className={`
            cursor-pointer
            ${index === shownTrack ? "grid" : "hidden"}
            md:grid
          `}
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

          <div
            className="
              md:hidden
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
            className="
              hidden md:grid
              col-start-1 row-start-1 relative grid-rows-2
              h-full w-full z-3

              before:content-[''] before:absolute before:top-0 before:left-0
              before:w-10 before:h-10 before:bg-(--color-brand)
              before:[clip-path:polygon(0_0,100%_0,0_100%)]

              after:content-[''] after:absolute after:bottom-0 after:right-0
              after:w-10 after:h-10 after:bg-(--color-brand)
              after:[clip-path:polygon(100%_0,100%_100%,0_100%)]
            "
          />

          <div className="md:hidden h-full w-full col-start-1 row-start-1 bg-black/20 flex items-center justify-center">
            <Image
              src="/assets/icon/Play_btn.svg"
              width={40}
              height={40}
              alt="Play button"
            />
          </div>

          <motion.div
            variants={{
              rest: { opacity: 0 },
              hover: { opacity: 1 },
            }}
            transition={{ duration: 0.3 }}
            className="hidden md:flex h-full w-full col-start-1 row-start-1 bg-black/70 items-center justify-center"
          >
            <Image
              src="/assets/icon/Play_btn.svg"
              width={40}
              height={40}
              alt="Play button"
            />
          </motion.div>

          <div className="md:hidden bg-black col-start-1 row-start-1 self-end z-2">
            <h1>{track.title}</h1>
          </div>

          <motion.div
            variants={{
              rest: { opacity: 0 },
              hover: { opacity: 1 },
            }}
            transition={{ duration: 0.4 }}
            className="hidden md:block bg-black col-start-1 row-start-1 self-end z-2"
          >
            <h1>{track.title}</h1>
          </motion.div>
        </motion.button>
      ))}

      <div className="flex justify-center gap-6 mt-6 md:hidden">
        <button
          onClick={previousImage}
          className="cursor-pointer text-2xl"
        >
          <Iconbtn icon={GoTriangleLeft} />
        </button>

        <button
          onClick={nextImage}
          className="cursor-pointer text-2xl"
        >
          <Iconbtn icon={GoTriangleRight} />
        </button>
      </div>
    </div>
  );
};

export default TrackSelector;
