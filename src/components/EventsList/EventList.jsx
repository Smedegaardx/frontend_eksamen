import EventSimple from "@/components/EventsList/EventSimple";

const EventList = ({ API }) => {
  return (
    <div>
      <EventSimple API={API}></EventSimple>
      <EventSimple API={API} imagelast={true}></EventSimple>
      <EventSimple API={API}></EventSimple>
    </div>
  );
};

export default EventList;
