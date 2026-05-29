import Header from "@/components/Header/Header";
import Hero from "../components/index/Hero";
import ReviewSection from "@/components/index/ReviewSection";
import Footer from "@/components/Footer";
import FeaturedEventsSection from "@/components/index/FeaturedEventSection";
import TrackSection from "@/components/index/TrackSection";
import VideoSection from "@/components/index/VideoSection";
import Welcome from "@/components/index/Welcome";
import Newsletter from "@/components/index/Newsletter";
import GallerySection from "@/components/index/GallerySection";

async function getTestimonials() {
  const res = await fetch(
    "https://night-club-api-2026-u759.onrender.com/testimonials",
  );

  if (!res.ok) {
    throw new Error("Failed to fetch API");
  }

  return res.json();
}

async function getEvents() {
  console.log("API URL:", process.env.NEXT_PUBLIC_API_URL);
  const res = await fetch(
    "https://night-club-api-2026-u759.onrender.com/events",
  );

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
      <Welcome></Welcome>
      <FeaturedEventsSection events={eventsAPI}></FeaturedEventsSection>
      <GallerySection></GallerySection>
      <TrackSection></TrackSection>
      <VideoSection></VideoSection>
      <ReviewSection reviews={TestimonialsAPI}></ReviewSection>
      <Newsletter></Newsletter>
      <Footer></Footer>
    </div>
  );
}
