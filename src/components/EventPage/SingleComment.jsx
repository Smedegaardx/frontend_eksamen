const SingleComment = ({ comment }) => {
  const formattedDate = new Date(comment.date).toLocaleDateString("en-GB", {
    day: "2-digit",
    month: "long",
    year: "numeric",
  });

  return (
    <div className="max-w-300 my-10">
      <h2 className="text-2xl">
        {comment.name} <br className="md:hidden"></br> &nbsp; - &nbsp;
        <span className="text-(--color-brand) text-lg font-light">
          Posted {formattedDate}
        </span>
      </h2>
      <p className="text-neutral-400 text-lg mt-5">{comment.content}</p>
    </div>
  );
};

export default SingleComment;
