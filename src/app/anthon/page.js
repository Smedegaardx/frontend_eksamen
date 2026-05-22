import CommentsSection from "@/components/index/CommentsSection";
import Hero from "../../components/index/Hero";
import Header from "@/components/Header/Header";

export default function Home() {
  return (
    <div>
      <Hero />
      <Header></Header>
      <CommentsSection></CommentsSection>
    </div>
  );
}
