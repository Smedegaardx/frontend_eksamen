import Link from "next/link";
import Button from "../Button";

const EventDescription = ({ event, imagelast }) => {
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

  const firstParagraph = event.content.split("\n\n")[0];

  return (
    <div
      className={`my-10 mx-6 max-w-175 flex flex-col justify-between ${imagelast ? "ml-auto" : ""}`}
    >
      <h1 className="text-2xl">{event.title}</h1>
      <h2 className="text-lg mt-2">
        <span className="text-(--color-brand)">{formattedDate}</span> &nbsp;
        |&nbsp; {event.location}
      </h2>
      <p className="text-lg text-neutral-400 mt-6 leading-8">
        {firstParagraph}
      </p>
      <div className="flex justify-end mt-auto ">
        <Link href={`/events/${event.slug}`}>
          <Button buttonText="Read more"></Button>
        </Link>
      </div>
    </div>
  );
};

export default EventDescription;
