const CurrentComment = ({ activeReview, setActiveReview }) => {
  return (
    <div className="flex gap-5">
      <div
        className={`comment w-5 h-5 bg-white cursor-pointer ${activeReview == 0 && "active"}`}
        onClick={() => setActiveReview(0)}
      ></div>
      <div
        className={`comment w-5 h-5 bg-white cursor-pointer ${activeReview == 1 && "active"}`}
        onClick={() => setActiveReview(1)}
      ></div>
      <div
        className={`comment w-5 h-5 bg-white cursor-pointer ${activeReview == 2 && "active"}`}
        onClick={() => setActiveReview(2)}
      ></div>
    </div>
  );
};

export default CurrentComment;
