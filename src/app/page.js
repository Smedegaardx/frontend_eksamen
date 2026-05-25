import Header from "@/components/Header/Header";
import Hero from "../components/index/Hero";
import ReviewSection from "@/components/index/ReviewSection";
import Footer from "@/components/Footer";

async function getTestimonials() {
  const res = await fetch("http://localhost:4000/testimonials");

  if (!res.ok) {
    throw new Error("Failed to fetch API");
  }

  return res.json();
}

export default async function Home() {
  const TestimonialsAPI = await getTestimonials();

  return (
    <div>
      <Hero />
      <Header></Header>
      <ReviewSection reviews={TestimonialsAPI}></ReviewSection>
      <Footer></Footer>
    </div>
  );
}
