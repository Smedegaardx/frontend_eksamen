import Link from "next/link";

const Iconbtn = ({ icon: Icon, link }) => {
  return (
    <Link className="p-2 border" href={link}>
      <Icon />
    </Link>
  );
};

export default Iconbtn;
