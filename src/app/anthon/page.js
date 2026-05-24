import ReviewSection from "@/components/index/ReviewSection";
import Hero from "../../components/index/Hero";
import Header from "@/components/Header/Header";
import Comments from "@/components/EventPage/Comments";

async function getTestimonials() {
  const res = await fetch("http://localhost:4000/testimonials");

  if (!res.ok) {
    throw new Error("Failed to fetch API");
  }

  return res.json();
}

async function getComments() {
  const res = await fetch("http://localhost:4000/comments?eventId=1");

  if (!res.ok) {
    throw new Error("Failed to fetch API");
  }

  return res.json();
}

export default async function Home() {
  const TestimonialsAPI = await getTestimonials();
  const CommentsAPI = await getComments();

  return (
    <div>
      <Hero />
      <Header></Header>
      <ReviewSection API={TestimonialsAPI}></ReviewSection>
      <Comments API={CommentsAPI}></Comments>
    </div>
  );
}
