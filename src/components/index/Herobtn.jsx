import Link from "next/link";

const Herobtn = ({ text, link }) => {
  return (
    <Link href={link}>
      <button className="h-16 w-42 border-3 border-neutral-400 cursor-pointer">
        <div
          className="h-full w-full flex justify-center items-center
        "
        >
          <p className="text-lg uppercase tracking-wide">{text}</p>
        </div>
      </button>
    </Link>
  );
};

export default Herobtn;
