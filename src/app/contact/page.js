import ContactForm from "@/components/Contact/ContactForm";
import Footer from "@/components/Footer";
import Siteheader from "@/components/Siteheader";

export default function Home() {
  return (
    <div>
      <Siteheader title="Contact Us"></Siteheader>
      <ContactForm></ContactForm>
      <Footer></Footer>
    </div>
  );
}
