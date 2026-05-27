import EventDescription from "./EventDescription";
import Image from "next/image";

const EventSimple = ({ event, imagelast }) => {
  const image = (
    <Image
      src={`http://localhost:4000/${event.heroAsset.url}`}
      width={event.heroAsset.width}
      height={event.heroAsset.height}
      alt={event.heroAsset.alt}
    />
  );

  const description = <EventDescription event={event} imagelast={imagelast} />;

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
