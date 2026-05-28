import Image from "next/image";
import FooterParagraph from "./FooterParagraph";
import FooterContent from "./FooterContent";
import Iconbtn from "./Iconbtn";
import { FaFacebookF } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaSnapchatGhost } from "react-icons/fa";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="bg-[image:linear-gradient(rgba(0,0,0,0.9),rgba(0,0,0,0.9)),url(/assets/bg/footerbg.jpg)] bg-cover bg-center px-5 md:px-20 py-10">
      <section className="flex flex-col items-center lg:grid lg:grid-cols-3 mb-20 gap-2 ">
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
        <div className="hidden lg:flex flex-col gap-6">
          <h2 className="text-(--color-brand) uppercase text-center md:text-left mt-6 lg:mt-0">
            News
          </h2>
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
        <div className="hidden lg:flex flex-col gap-6 mt-5 lg:mt-0">
          <h2 className="text-(--color-brand) uppercase text-center md:text-left mt-6 lg:mt-0">
            Recent posts
          </h2>
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
      <section className="grid md:grid-cols-3 gap-5">
        <p className="text-neutral-500 text-center self-end  md:text-left order-2 md:order-1">
          Night Club - All Rights Reserved
        </p>
        <div className="flex flex-col items-center gap-3 order-1 md:order-2">
          <p>Stay Connected With Us</p>
          <div className="flex flex-row gap-3">
            <Link
              href={"https://www.facebook.com/"}
            >
              <Iconbtn icon={FaFacebookF} />
            </Link>
            <Link
              href={"https://www.snapchat.com/"}
            >
              <Iconbtn icon={FaSnapchatGhost} />
            </Link>
            <Link
              href={"https://www.instagram.com/"}
            >
              <Iconbtn icon={FaInstagram} />
            </Link>
          </div>
        </div>
        <div className="md:justify-self-end self-end order-3">
          <p className="text-neutral-500 text-center md:text-right">
            Copyright © NightClub
          </p>
        </div>
      </section>
    </footer>
  );
};

export default Footer;
