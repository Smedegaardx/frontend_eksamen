import Booking from "@/components/Booking/Booking";
import Footer from "@/components/Footer";
import Header from "@/components/Header/Header";
import Siteheader from "@/components/Siteheader";

export default function Home() {
  return (
    <div>
      <Header></Header>
      <Siteheader title="Book Table"></Siteheader>
      <Booking></Booking>
      <Footer></Footer>
    </div>
  );
}
