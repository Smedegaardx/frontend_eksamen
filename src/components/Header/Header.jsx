"use client";

import { useState } from "react";
import Image from "next/image";
import HeaderLogo from "./HeaderLogo";
import HeaderBtn from "./HeaderBtn";

const Header = () => {
  const [activePage, setActivePage] = useState("Home");
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
    const activeButton = document.querySelector(`[data-page="${activePage}"]`);

    if (!activeButton) return;

    setUnderline({
      left: activeButton.offsetLeft,
      width: activeButton.offsetWidth,
    });
  };

  return (
    <nav
      className="grid grid-cols-2 py-6 border-y-4 border-y-(--color-brand) 
     sticky top-0 overflow-hidden z-9999

     bg-[url(/assets/bg/pattern_bg.jpg)] bg-auto bg-blend-overlay bg-stone-950

    before:content-[''] before:absolute before:top-0 before:left-0
    before:w-10 before:h-10 before:bg-(--color-brand) 
    before:[clip-path:polygon(0_0,100%_0,0_100%)]
    
    after:content-[''] after:absolute after:bottom-0 after:right-0
    after:w-10 after:h-10 after:bg-(--color-brand) 
    after:[clip-path:polygon(100%_0,100%_100%,0_100%)]"
    >
      <div className="flex justify-center">
        <HeaderLogo></HeaderLogo>
      </div>
      <div className="flex gap-8 items-center">
        <HeaderBtn
          text="Home"
          link={"/"}
          setActivePage={setActivePage}
          activePage={activePage}
          onMouseEnter={moveUnderline}
          onMouseLeave={returnToActive}
        ></HeaderBtn>
        <HeaderBtn
          text="Events"
          link={"/events"}
          setActivePage={setActivePage}
          activePage={activePage}
          onMouseEnter={moveUnderline}
          onMouseLeave={returnToActive}
        ></HeaderBtn>
        <HeaderBtn
          text="Book Table"
          link={"/anthon"}
          setActivePage={setActivePage}
          activePage={activePage}
          onMouseEnter={moveUnderline}
          onMouseLeave={returnToActive}
        ></HeaderBtn>
        <HeaderBtn
          text="Contact us"
          link={"/anthon"}
          setActivePage={setActivePage}
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
    </nav>
  );
};

export default Header;
