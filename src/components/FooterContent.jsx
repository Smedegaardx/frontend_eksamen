import Image from "next/image";

const FooterContent = ({
  date,
  paragraph,
  img,
  width,
  height,
}) => {
  return (
    <div className="flex flex-col items-center md:flex-row gap-5 mt-3 lg:mt-0">
      <Image
        src={img}
        alt="content image"
        width={width ? width : 120}
        height={height ? height : 120}
      />
      <div className="flex flex-col gap-2 max-w-40 text-center md:text-left md:max-w-80">
        <p>{paragraph}</p>
        <p className="text-(--color-brand)">
          {date}
        </p>
      </div>
    </div>
  );
};

export default FooterContent;
