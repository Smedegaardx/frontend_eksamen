import Link from "next/link";

const HeaderBtn = ({
  setActivePage,
  activePage,
  text,
  link,
  onMouseEnter,
  onMouseLeave,
}) => {
  let isActive = false;
  if (activePage == text) {
    isActive = "active";
  }

  return (
    <Link
      data-page={text}
      href={link}
      onClick={() => setActivePage(text)}
      className="flex flex-col"
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
    >
      <h1
        data-active={isActive}
        className="text-2xl uppercase p-2 active:text-[#FF2A70] hover:text-[#FF2A70]"
      >
        {text}
      </h1>
    </Link>
  );
};

export default HeaderBtn;
