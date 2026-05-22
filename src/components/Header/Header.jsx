"use client";

import { useState } from "react";
import HeaderLogo from "./HeaderLogo";
import HeaderBtn from "./HeaderBtn";

const Header = () => {
  const [activePage, setActivePage] = useState("Home");

  return (
    <div className="flex">
      <div>
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
