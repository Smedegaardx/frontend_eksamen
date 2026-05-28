import Link from "next/link";

const MobileHeaderBtn = ({ activePage, text, link }) => {
  const isActive = activePage === text;

  return (
    <Link href={link}>
      <h1
        className={`${isActive ? "text-(--color-brand)" : "text-white"} uppercase text-4xl`}
      >
        {text}
      </h1>
    </Link>
  );
};

export default MobileHeaderBtn;
