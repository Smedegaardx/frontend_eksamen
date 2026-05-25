import Footer from "@/components/Footer";
import Button from "@/components/Button";
import Siteheader from "@/components/Siteheader";
import Welcome from "@/components/index/Welcome";
import Sectionheader from "@/components/index/Sectionheader";

export default function Home() {
  return (
    <div>
      {/* <Footer></Footer> */}
      {/* <Button buttonText="Read More"></Button> */}
      <Welcome></Welcome>
      <Siteheader title="This is a site header"></Siteheader>
      <Sectionheader title="This is a section header"></Sectionheader>
    </div>
  );
}
