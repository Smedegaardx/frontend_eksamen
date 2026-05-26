import Image from "next/image";

const FeaturedEvent = ({ event }) => {
  const formattedDate =
    new Date(event.date).toLocaleDateString("en-UK", {
      month: "short",
      day: "numeric",
    }) +
    " · " +
    new Date(event.date).toLocaleTimeString("en-UK", {
      hour: "2-digit",
      minute: "2-digit",
      hour12: false,
    });

  return (
    <div className="grid">
      <Image
        src={`http://localhost:4000/${event.asset.url}`}
        height={event.asset.height}
        width={event.asset.width}
        alt={event.asset.alt}
        className="col-start-1 row-start-1"
      ></Image>
      <div className="bg-(--color-brand) col-start-1 row-start-1 self-end px-4 py-2 flex justify-between">
        <h1 className="text-xl">{event.title}</h1>
        <p className="text-xl">{formattedDate}</p>
      </div>
    </div>
  );
};

export default FeaturedEvent;
