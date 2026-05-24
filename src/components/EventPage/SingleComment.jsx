const SingleComment = ({ comment }) => {
  return (
    <div className="max-w-300 my-10">
      <h2 className="text-2xl">
        {comment.name} &nbsp; - &nbsp;
        <span className="text-(--color-brand) text-lg font-light">
          {comment.date}
        </span>
      </h2>
      <p className="text-[#C4C4C4] text-lg mt-5">{comment.content}</p>
    </div>
  );
};

export default SingleComment;
