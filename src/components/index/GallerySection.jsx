import Sectionheader from "./Sectionheader";
import GalleryGrid from "./GalleryGrid";

const GallerySection = async () => {
  const res = await fetch("http://localhost:4000/gallery");

  if (!res.ok) {
    throw new Error("Failed to fetch API");
  }
  const GalleryAPI = await res.json();

  return (
    <section>
      <Sectionheader title="Gallery" />
      <GalleryGrid items={GalleryAPI.slice(0, 7)} />
    </section>
  );
};

export default GallerySection;
