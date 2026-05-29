import { getImageUrl } from "@/lib/getImageUrl";

import EventDescription from "./EventDescription";
import Image from "next/image";

const EventSimple = ({ event, imagelast }) => {
  return (
    <div className="grid xl:grid-cols-2 bg-black">
      <div
        className={` flex justify-center
          ${imagelast ? "xl:order-2" : "xl:order-1"}
        `}
      >
        <Image
          src={getImageUrl(event.asset.url)}
          width={event.asset.width}
          height={event.asset.height}
          alt={event.asset.alt}
          className="block md:hidden"
        />
        <Image
          src={getImageUrl(event.heroAsset.url)}
          width={event.heroAsset.width}
          height={event.heroAsset.height}
          alt={event.heroAsset.alt}
          className="hidden md:block"
        />
      </div>

      <div
        className={`
          ${imagelast ? "xl:order-1" : "xl:order-2"}
        `}
      >
        <EventDescription event={event} imagelast={imagelast} />
      </div>
    </div>
  );
};

export default EventSimple;
