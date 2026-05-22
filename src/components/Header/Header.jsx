"use client";

import { useState } from "react";
import HeaderLogo from "./HeaderLogo";
import HeaderBtn from "./HeaderBtn";

const Header = () => {
  const [activePage, setActivePage] = useState("Home");

  return (
    <div
      className="grid grid-cols-2 py-6 border-y-4 border-y-(--color-brand) 
     relative overflow-hidden

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
      <div className="flex">
        <HeaderBtn
          text="Home"
          link={"/anthon"}
          setActivePage={setActivePage}
          activePage={activePage}
        ></HeaderBtn>
        <HeaderBtn
          text="Events"
          link={"/anthon"}
          setActivePage={setActivePage}
          activePage={activePage}
        ></HeaderBtn>
        <HeaderBtn
          text="Book Table"
          link={"/anthon"}
          setActivePage={setActivePage}
          activePage={activePage}
        ></HeaderBtn>
        <HeaderBtn
          text="Contact us"
          link={"/anthon"}
          setActivePage={setActivePage}
          activePage={activePage}
        ></HeaderBtn>
      </div>
    </div>
  );
};

export default Header;
