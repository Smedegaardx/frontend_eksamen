import Link from "next/link";

const HeaderBtn = ({ setActivePage, activePage, text, link }) => {
  let isActive = false;
  if (activePage == text) {
    isActive = "active";
  }

  return (
    <Link href={link} onClick={() => setActivePage(text)}>
      <h1
        data-active={isActive}
        className="text-2xl uppercase p-4 active:text-[#FF2A70]"
      >
        {text}
      </h1>
    </Link>
  );
};

export default HeaderBtn;
