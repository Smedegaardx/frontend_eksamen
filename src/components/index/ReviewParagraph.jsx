import Image from "next/image";

import Iconbtn from "../Iconbtn";
import { FaFacebookF } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaSnapchatGhost } from "react-icons/fa";

const ReviewParagraph = ({ reviews, activeReview }) => {
  let currentReview = reviews.find((review) => review.id == activeReview);

  return (
    <div className="flex flex-col items-center">
      <Image
        src={`http://localhost:4000/${currentReview.asset.url}`}
        alt={currentReview.asset.alt}
        height={currentReview.asset.height}
        width={currentReview.asset.width}
      ></Image>
      <h2 className="text-xl mt-10">{currentReview.name}</h2>
      <p className="text-lg max-w-200 text-center mt-5">
        {currentReview.content}
      </p>
      <div className="flex gap-5 my-10">
        <Iconbtn icon={FaFacebookF} link={currentReview.facebook}></Iconbtn>
        <Iconbtn icon={FaTwitter} link={currentReview.twitter}></Iconbtn>
        <Iconbtn
          icon={FaSnapchatGhost}
          link={"https://www.snapchat.com/"}
        ></Iconbtn>
      </div>
    </div>
  );
};

export default ReviewParagraph;
