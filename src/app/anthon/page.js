import FeaturedEventsSection from "@/components/index/FeaturedEventSection";

async function getEvents() {
  const res = await fetch("http://localhost:4000/events");

  if (!res.ok) {
    throw new Error("Failed to fetch API");
  }

  return res.json();
}

export default async function Home() {
  const eventsAPI = await getEvents();

  return (
    <div>
      <FeaturedEventsSection events={eventsAPI}></FeaturedEventsSection>
    </div>
  );
}
