import Image from "next/image";

const CurrentTrack = () => {
  return (
    <div>
      <Image
        src="/assets/content-img/track1.jpg"
        height={200}
        width={200}
        alt="billede"
      ></Image>
    </div>
  );
};

export default CurrentTrack;
