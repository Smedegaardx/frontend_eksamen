import ReviewSection from "@/components/index/ReviewSection";
import Hero from "../../components/index/Hero";
import Header from "@/components/Header/Header";

async function getTestimonials() {
  const res = await fetch("http://localhost:4000/testimonials");

  if (!res.ok) {
    throw new Error("Failed to fetch API");
  }

  return res.json();
}

export default async function Home() {
  const Testimonials = await getTestimonials();

  return (
    <div>
      <Hero />
      <Header></Header>
      <ReviewSection API={Testimonials}></ReviewSection>
    </div>
  );
}
