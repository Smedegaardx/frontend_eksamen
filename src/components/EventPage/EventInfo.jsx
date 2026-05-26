import Image from "next/image";
import HeroCTA from "../index/HeroCTA";

const EventInfo = ({ event }) => {
  const formattedDate = new Date(event.date).toLocaleDateString("en-US", {
    month: "short",
    day: "numeric",
  });

  const eventStartTime = new Date(event.date).toLocaleTimeString("en-UK", {
    hour: "2-digit",
    minute: "2-digit",
    hour12: false,
  });

  const doorsOpenTime = new Date(event.doorsOpen).toLocaleTimeString("en-UK", {
    hour: "2-digit",
    minute: "2-digit",
    hour12: false,
  });

  return (
    <div className="bg-[url(/assets/bg/pattern_bg.jpg)]">
      <div className={`max-w-400 mx-auto pt-20`}>
        <Image
          src={`http://localhost:4000/${event.heroAsset.url}`}
          height={event.heroAsset.height}
          width={1600}
          alt={event.heroAsset.height}
        ></Image>
        <div className="flex justify-between mt-3">
          <h1 className="text-lg uppercase">
            <span className="text-(--color-brand) normal-case">
              {formattedDate}
            </span>
            <span className="text-gray-500">&nbsp; |&nbsp; </span>
            {event.location}
          </h1>
          <h1 className="text-lg">
            <span className="text-(--color-brand)">{event.category}</span>
            <span className="text-gray-500">&nbsp; |&nbsp; </span>
            {event.ageLimit}
            <span className="text-gray-500">&nbsp; |&nbsp; </span>
            <span className="text-(--color-brand)">{event.price}</span>
          </h1>
          <h1 className="text-lg">
            {doorsOpenTime}
            <span className="text-gray-500">&nbsp; |&nbsp; </span>
            <span className="text-(--color-brand)">{eventStartTime}</span>
          </h1>
        </div>
        <div className="mx-auto max-w-400 py-10">
          <h1 className="uppercase text-5xl font-extrabold mb-5">
            Description
          </h1>
          {event.content.split("\n\n").map((paragraph, index) => (
            <p key={index} className="mb-4 text-gray-400">
              {paragraph}
            </p>
          ))}
          <div className="grid grid-cols-2 mt-20">
            <div>
              <h1 className="uppercase text-5xl font-extrabold mb-5">Lineup</h1>
              {event.lineup.map((artist, index) => (
                <p className="mb-2 text-xl" key={index}>
                  -&nbsp; {artist}
                </p>
              ))}
            </div>
            <div>
              <h1 className="uppercase text-5xl font-extrabold mb-5">
                Program
              </h1>
              {event.schedule.map((item, index) => (
                <div key={index} className="flex gap-4 mb-2 text-xl">
                  <p className="font-bold text-(--color-brand)">{item.time}</p>
                  <p>{item.label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className=" mt-10 pb-30">
          <HeroCTA text="book table"></HeroCTA>
        </div>
      </div>
    </div>
  );
};

export default EventInfo;
