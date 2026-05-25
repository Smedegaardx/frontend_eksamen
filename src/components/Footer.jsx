import Image from "next/image";
import FooterParagraph from "./FooterParagraph";
import FooterContent from "./FooterContent";
import Iconbtn from "./Iconbtn";
import { FaFacebookF } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaSnapchatGhost } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-[image:linear-gradient(rgba(0,0,0,0.9),rgba(0,0,0,0.9)),url(/assets/bg/footerbg.jpg)] bg-cover bg-center px-20 py-10">
      <section className="grid grid-cols-3 mb-16">
        <div className="flex flex-col gap-6">
          <Image
            src="/assets/icon/Logo_main.svg"
            alt="Logo"
            width={230}
            height={100}
          />
          <FooterParagraph
            title="Location"
            firstLine="Kompagnistræde 278"
            secondLine="1265 København K"
          />
          <FooterParagraph
            title="Opening Hours"
            firstLine="Wed - thu 10:30 pm to 3 am"
            secondLine="Sat - sun 11 pm to 5 am"
          />
        </div>
        <div className="flex flex-col gap-6">
          <h2 className="text-[#FF2A70] uppercase">News</h2>
          <FooterContent
            date="April 17, 2026"
            paragraph="Lorem Ipsum is simply dummy text of the printing and typesetting."
            img="/assets/content-img/recent_post1.jpg"
          />
          <FooterContent
            date="April 17, 2026"
            paragraph="Lorem Ipsum is simply dummy text of the printing and typesetting."
            img="/assets/content-img/recent_post2.jpg"
          />
        </div>
        <div className="flex flex-col gap-6">
          <h2 className="text-[#FF2A70] uppercase">Recent posts</h2>
          <FooterContent
            date="5 hours ago"
            paragraph="It is a long established fact that a reader will be distracted by the readable..."
            img="/assets/icon/x.svg"
            width={20}
            height={20}
          />
          <FooterContent
            date="5 hours ago"
            paragraph="It is a long established fact that a reader will be distracted by the readable..."
            img="/assets/icon/x.svg"
            width={20}
            height={20}
          />
        </div>
      </section>
      <section className="grid grid-cols-3">
        <p className="text-neutral-500">Night Club - All Rights Reserved</p>
        <div className="flex flex-col items-center gap-3">
          <p>Stay Connected With Us</p>
          <div className="flex flex-row gap-3">
            <Iconbtn icon={FaFacebookF} link={"https://www.facebook.com/"} />
            <Iconbtn
              icon={FaSnapchatGhost}
              link={"https://www.snapchat.com/"}
            />
            <Iconbtn icon={FaInstagram} link={"https://www.instagram.com/"} />
          </div>
        </div>
        <div className="justify-self-end">
          <p className="text-neutral-500">Copyright © NightClub</p>
        </div>
      </section>
    </footer>
  );
};

export default Footer;
