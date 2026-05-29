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

export default async function Home() {
  const [eventsAPI, reservationsAPI] = await Promise.all([
    getEvents(),
    getReservations(),
  ]);

  return (
    <div>
      <Header></Header>
      <Siteheader title="Book Table"></Siteheader>
      <Booking
        eventsAPI={eventsAPI}
        reservationsAPI={reservationsAPI}
      ></Booking>
      <Footer></Footer>
    </div>
  );
}
