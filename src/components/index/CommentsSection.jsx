"use client";

import { useState } from "react";
import { FaFacebookF } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaSnapchatGhost } from "react-icons/fa";
import CommentParagraph from "./CommentParagraph";
import Iconbtn from "../Iconbtn";
import CurrentComment from "./CurrentComment";

const CommentsSection = () => {
  const [activeReview, setActiveReview] = useState(0);

  return (
    <section className="flex flex-col items-center bg-[url(/assets/bg/footerbg.jpg)] bg-cover bg-center bg-blend-overlay bg-stone-950 py-20">
      <CommentParagraph></CommentParagraph>
      <div className="flex gap-5 my-10">
        <Iconbtn icon={FaFacebookF}></Iconbtn>
        <Iconbtn icon={FaTwitter}></Iconbtn>
        <Iconbtn icon={FaSnapchatGhost}></Iconbtn>
      </div>
      <CurrentComment
        activeReview={activeReview}
        setActiveReview={setActiveReview}
      ></CurrentComment>
    </section>
  );
};

export default CommentsSection;
