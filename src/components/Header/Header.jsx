"use client";

import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import Image from "next/image";
import HeaderLogo from "./HeaderLogo";
import HeaderBtn from "./HeaderBtn";
import MobileHeaderBtn from "./MobileHeaderBtn";
import { AiOutlineMenu } from "react-icons/ai";
import { IoCloseSharp } from "react-icons/io5";

const Header = () => {
  const pathname = usePathname();

  const getActivePage = () => {
    if (pathname === "/") return "Home";
    if (pathname.startsWith("/events"))
      return "Events";

    if (pathname.startsWith("/book-table"))
      return "Book Table";
    if (pathname === "/contact")
      return "Contact us";
    return "Home";
  };

  const activePage = getActivePage();

  const [underline, setUnderline] = useState({
    left: 0,
    width: 0,
  });

  const moveUnderline = (e) => {
    const button = e.currentTarget;

    setUnderline({
      left: button.offsetLeft,
      width: button.offsetWidth,
    });
  };

  const returnToActive = () => {
    const activeButton = document.querySelector(
      `[data-page="${activePage}"]`,
    );

    if (!activeButton) return;

    setUnderline({
      left: activeButton.offsetLeft,
      width: activeButton.offsetWidth,
    });
  };

  useEffect(() => {
    returnToActive();
  }, [pathname]);

  return (
    <nav
      className="flex gap-10 justify-between lg:justify-around py-6 border-y-4 border-y-(--color-brand) 
     sticky top-0 overflow-hidden z-9999

     bg-[url(/assets/bg/pattern_bg.jpg)] bg-auto bg-blend-overlay bg-stone-950

    before:content-[''] before:absolute before:top-0 before:left-0
    before:w-10 before:h-10 before:bg-(--color-brand) 
    before:[clip-path:polygon(0_0,100%_0,0_100%)]
    
    after:content-[''] after:absolute after:bottom-0 after:right-0
    after:w-10 after:h-10 after:bg-(--color-brand) 
    after:[clip-path:polygon(100%_0,100%_100%,0_100%)]"
    >
      <div className="flex justify-center ml-6 md:ml-16">
        <HeaderLogo></HeaderLogo>
      </div>
      <div className="hidden lg:flex gap-8 items-center">
        <HeaderBtn
          text="Home"
          link={"/"}
          activePage={activePage}
          onMouseEnter={moveUnderline}
          onMouseLeave={returnToActive}
        ></HeaderBtn>
        <HeaderBtn
          text="Events"
          link={"/events"}
          activePage={activePage}
          onMouseEnter={moveUnderline}
          onMouseLeave={returnToActive}
        ></HeaderBtn>
        <HeaderBtn
          text="Book Table"
          link={"/book-table"}
          activePage={activePage}
          onMouseEnter={moveUnderline}
          onMouseLeave={returnToActive}
        ></HeaderBtn>
        <HeaderBtn
          text="Contact us"
          link={"/contact"}
          activePage={activePage}
          onMouseEnter={moveUnderline}
          onMouseLeave={returnToActive}
        ></HeaderBtn>
        <Image
          src="/assets/bottom_line2.png"
          width={100}
          height={0}
          alt="Pink line"
          className="absolute bottom-6 transition-all duration-300 ease-out"
          style={{
            left: `${underline.left}px`,
            width: `${underline.width}px`,
          }}
        ></Image>
      </div>

      <div className="flex lg:hidden justify-end items-center mr-6 md:mr-16">
        <button
          popoverTarget="mobile-menu"
          popoverTargetAction="show"
          aria-label="Open menu"
          className="text-5xl cursor-pointer"
        >
          <AiOutlineMenu />
        </button>
      </div>

      <div
        id="mobile-menu"
        popover="auto"
        className="m-0 h-screen w-screen bg-black/90 fixed inset-0"
      >
        <div className="flex flex-col gap-10 text-center items-center justify-center h-full">
          <button
            className="text-white text-7xl absolute top-4 right-4 cursor-pointer"
            popoverTarget="mobile-menu"
            popoverTargetAction="hide"
            aria-label="Close menu"
          >
            <IoCloseSharp />
          </button>
          <MobileHeaderBtn
            text="Home"
            link="/"
            activePage={activePage}
          />
          <MobileHeaderBtn
            text="Events"
            link="/events"
            activePage={activePage}
          />
          <MobileHeaderBtn
            text="Book Table"
            link="/book-table"
            activePage={activePage}
          />
          <MobileHeaderBtn
            text="Contact us"
            link="/contact"
            activePage={activePage}
          />
        </div>
      </div>
    </nav>
  );
};

export default Header;
