import Booking from "@/components/Booking/Booking";
import Footer from "@/components/Footer";
import Header from "@/components/Header/Header";
import Siteheader from "@/components/Siteheader";

async function getEvents() {
  const res = await fetch("http://localhost:4000/events");
  if (!res.ok) throw new Error("Failed to fetch events");
  return res.json();
}

async function getReservations() {
  const res = await fetch("http://localhost:4000/reservations");
  if (!res.ok) throw new Error("Failed to fetch reservations");
  return res.json();
}

const Home = async ({ params }) => {
  const { slug } = await params;

  const [events, reservationsAPI] = await Promise.all([
    getEvents(),
    getReservations(),
  ]);

  const eventID = events.find((event) => event.slug === slug);

  if (!eventID) {
    return (
      <p className="mx-auto mt-20 text-6xl">
        <span className="text-(--color-brand)">Error 404: </span>Event Booking
        Unavailable!
      </p>
    );
  }

  return (
    <div>
      <Header></Header>
      <Siteheader title="Book Table"></Siteheader>
      <Booking
        eventID={eventID}
        eventsAPI={events}
        reservationsAPI={reservationsAPI}
      ></Booking>
      <Footer></Footer>
    </div>
  );
};

export default Home;
