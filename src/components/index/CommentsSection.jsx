"use client";

import { useState } from "react";

import CommentParagraph from "./CommentParagraph";

import CurrentComment from "./CurrentComment";

const CommentsSection = ({ API }) => {
  const [activeReview, setActiveReview] = useState(1);
  console.log(API);

  return (
    <section className="flex flex-col items-center bg-[url(/assets/bg/footerbg.jpg)] bg-cover bg-center bg-blend-overlay bg-stone-950 py-20">
      <CommentParagraph
        API={API}
        activeReview={activeReview}
      ></CommentParagraph>

      <CurrentComment
        activeReview={activeReview}
        setActiveReview={setActiveReview}
      ></CurrentComment>
    </section>
  );
};

export default CommentsSection;
