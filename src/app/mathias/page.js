import Footer from "@/components/Footer";
import Button from "@/components/Button";
import Siteheader from "@/components/Siteheader";
import Welcome from "@/components/index/Welcome";
import Sectionheader from "@/components/index/Sectionheader";
import Header from "@/components/Header/Header.jsx";

export default function Home() {
  return (
    <div>
      <Header></Header>
      {/* <Footer></Footer> */}
      {/* <Button buttonText="Read More"></Button> */}
      <Welcome></Welcome>
    </div>
  );
}
