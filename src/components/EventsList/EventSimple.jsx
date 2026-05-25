import EventDescription from "./EventDescription";
import Image from "next/image";

const EventSimple = ({ API, imagelast }) => {
  const image = (
    <Image
      src={`http://localhost:4000/${API.heroAsset.url}`}
      width={API.heroAsset.width}
      height={API.heroAsset.height}
      alt={API.heroAsset.alt}
    />
  );

  const description = <EventDescription API={API} imagelast={imagelast} />;

  return (
    <div className="grid grid-cols-2 bg-black">
      {imagelast ? (
        <>
          {description}
          {image}
        </>
      ) : (
        <>
          {image}
          {description}
        </>
      )}
    </div>
  );
};

export default EventSimple;
