"use client";

import { useState } from "react";

import ReviewParagraph from "./ReviewParagraph";

import CurrentReview from "./CurrentReview";

const ReviewSection = ({ reviews }) => {
  const [activeReview, setActiveReview] = useState(1);

  return (
    <section className="flex flex-col items-center bg-[url(/assets/bg/footerbg.jpg)] bg-cover bg-center bg-blend-overlay bg-stone-950 py-20">
      <ReviewParagraph
        reviews={reviews}
        activeReview={activeReview}
      ></ReviewParagraph>

      <CurrentReview
        activeReview={activeReview}
        setActiveReview={setActiveReview}
      ></CurrentReview>
    </section>
  );
};

export default ReviewSection;
