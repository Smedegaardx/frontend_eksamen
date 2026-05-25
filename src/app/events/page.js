import EventList from "@/components/EventsList/EventList";

import Footer from "@/components/Footer";
import Header from "@/components/Header/Header";
import Siteheader from "@/components/Siteheader";

async function getEvents() {
  const res = await fetch("http://localhost:4000/events");

  if (!res.ok) {
    throw new Error("Failed to fetch API");
  }

  return res.json();
}

export default async function Home() {
  const EventsAPI = await getEvents();
  console.log(EventsAPI);

  return (
    <div>
      <Header></Header>
      <Siteheader title="Events"></Siteheader>
      <EventList events={EventsAPI}></EventList>
      <Footer></Footer>
    </div>
  );
}
