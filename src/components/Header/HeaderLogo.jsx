import Image from "next/image";
import Link from "next/link";

const HeaderLogo = () => {
  return (
    <Link href="/">
      <Image
        src="/assets/Logo.png"
        alt="Night Club logo"
        width={220}
        height={0}
      />
    </Link>
  );
};

export default HeaderLogo;
