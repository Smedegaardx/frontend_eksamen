import Link from "next/link";

const HeaderLogo = () => {
  return (
    <Link href="/">
      <img
        src="/assets/icon/Logo_main.svg"
        alt="Night Club logo"
        width={220}
        height={10}
        loading="eager"
      />
    </Link>
  );
};

export default HeaderLogo;
