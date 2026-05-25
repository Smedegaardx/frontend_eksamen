import EventSimple from "@/components/EventsList/EventSimple";

const EventList = ({ API }) => {
  return (
    <div className="bg-[url(/assets/bg/pattern_bg.jpg)] py-20 flex flex-col">
      {API?.length ? (
        API.map((event, index) => (
          <EventSimple
            API={event}
            key={event.id}
            imagelast={index % 2 !== 0}
          ></EventSimple>
        ))
      ) : (
        <p>No events found</p>
      )}
      <p className="self-center my-20"> 1 2 3 næste &gt; </p>
    </div>
  );
};

export default EventList;
