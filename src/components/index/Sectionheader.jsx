import Image from "next/image";

const Sectionheader = ({ title }) => {
  return (
    <div className="flex flex-col items-center mt-8 mb-8">
      <h1 className="text-4xl uppercase tracking-wide">{title}</h1>
      <Image
        src="/assets/bottom_line2.png"
        alt="Line decoration"
        width={240}
        height={10}
      />
    </div>
  );
};

export default Sectionheader;
