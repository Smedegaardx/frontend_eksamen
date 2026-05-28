import ContactForm from "@/components/Contact/ContactForm";
import Footer from "@/components/Footer";
import Header from "@/components/Header/Header";
import Siteheader from "@/components/Siteheader";

export default function Home() {
  return (
    <div>
      <Header></Header>
      <Siteheader title="Contact Us"></Siteheader>
      <ContactForm></ContactForm>
      <Footer></Footer>
    </div>
  );
}
