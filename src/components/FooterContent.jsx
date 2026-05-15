import Image from "next/image";

const FooterContent = ({ date, paragraph, img, width, height }) => {
  return (
    <div className="flex flex-row gap-5">
      <Image
        src={img}
        alt="content image"
        width={width ? width : 120}
        height={height ? height : 120}
      />
      <div className="flex flex-col gap-2">
        <p>{paragraph}</p>
        <p className="text-[#FF2A70]">{date}</p>
      </div>
    </div>
  );
};

export default FooterContent;
