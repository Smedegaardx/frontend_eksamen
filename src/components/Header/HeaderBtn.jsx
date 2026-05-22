import Link from "next/link";
import Image from "next/image";

const HeaderBtn = ({ setActivePage, activePage, text, link }) => {
  let isActive = false;
  if (activePage == text) {
    isActive = "active";
  }

  return (
    <Link
      href={link}
      onClick={() => setActivePage(text)}
      className="flex flex-col"
    >
      <h1
        data-active={isActive}
        className="text-2xl uppercase p-2 active:text-[#FF2A70]"
      >
        {text}
      </h1>
      <Image
        src="/assets/bottom_line2.png"
        width={100}
        height={0}
        alt="Pink line"
        className="self-center"
      ></Image>
    </Link>
  );
};

export default HeaderBtn;
