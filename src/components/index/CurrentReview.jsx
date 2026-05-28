const CurrentReview = ({
  activeReview,
  setActiveReview,
}) => {
  return (
    <div className="flex gap-5">
      <button
        className={`comment w-5 h-5 bg-white cursor-pointer ${activeReview == 1 && "active"}`}
        onClick={() => setActiveReview(1)}
      ></button>
      <button
        className={`comment w-5 h-5 bg-white cursor-pointer ${activeReview == 2 && "active"}`}
        onClick={() => setActiveReview(2)}
      ></button>
      <button
        className={`comment w-5 h-5 bg-white cursor-pointer ${activeReview == 3 && "active"}`}
        onClick={() => setActiveReview(3)}
      ></button>
    </div>
  );
};

export default CurrentReview;
