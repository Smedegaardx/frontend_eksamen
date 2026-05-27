import Footer from "@/components/Footer";
import Button from "@/components/Button";
import Siteheader from "@/components/Siteheader";
import Welcome from "@/components/index/Welcome";
import Sectionheader from "@/components/index/Sectionheader";
import GallerySection from "@/components/index/GallerySection";

async function getGallery() {
  const res = await fetch("http://localhost:4000/gallery");

  if (!res.ok) {
    throw new Error("Failed to fetch API");
  }

  return res.json();
}

export default function Home() {
  const GalleryAPI = getGallery();
  return (
    <div>
      <Welcome></Welcome>
      <Welcome></Welcome>
      <Welcome></Welcome>
      <Welcome></Welcome>
      <Welcome></Welcome>
      <Welcome></Welcome>
      <Welcome></Welcome>
      <Welcome></Welcome>
      <Welcome></Welcome>
      <Welcome></Welcome>
      <GallerySection gallery={GalleryAPI}></GallerySection>
    </div>
  );
}
