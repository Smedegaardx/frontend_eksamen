import Image from "next/image";

const Hero = () => {
  return (
    <div className="bg-[url(/header_bg_2.jpg)] bg-cover bg-center max-w-[1920px] h-[777px] bg-blend-overlay bg-stone-800 flex flex-col justify-center items-center">
      <Image src="/Logo.svg" alt="Logo" width={800} height={0}></Image>
      <h1 className="tracking-[1.4rem] text-3xl uppercase mt-3">
        Have a good time
      </h1>
      <Image
        src="/bottom_line.png"
        alt="Lysende streg"
        width={800}
        height={0}
      ></Image>
    </div>
  );
};

export default Hero;
