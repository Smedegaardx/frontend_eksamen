import Header from "@/components/Header/Header";
import Hero from "../components/index/Hero";
import ReviewSection from "@/components/index/ReviewSection";
import Footer from "@/components/Footer";
import FeaturedEventsSection from "@/components/index/FeaturedEventSection";
import TrackSection from "@/components/index/TrackSection";
import VideoSection from "@/components/index/VideoSection";

async function getTestimonials() {
  const res = await fetch("http://localhost:4000/testimonials");

  if (!res.ok) {
    throw new Error("Failed to fetch API");
  }

  return res.json();
}

async function getEvents() {
  const res = await fetch("http://localhost:4000/events");

  if (!res.ok) {
    throw new Error("Failed to fetch API");
  }

  return res.json();
}

export default async function Home() {
  const TestimonialsAPI = await getTestimonials();
  const eventsAPI = await getEvents();

  return (
    <div>
      <Hero />
      <Header></Header>
      <FeaturedEventsSection events={eventsAPI}></FeaturedEventsSection>
      <TrackSection></TrackSection>
      <VideoSection></VideoSection>
      <ReviewSection reviews={TestimonialsAPI}></ReviewSection>
      <Footer></Footer>
    </div>
  );
}
