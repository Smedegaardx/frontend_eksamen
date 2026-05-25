import SingleComment from "./SingleComment";

const Comments = ({ API }) => {
  console.log(API);

  return (
    <div className="bg-[url(/assets/bg/pattern_bg.jpg)]">
      <div className="mx-auto max-w-400 py-10 ">
        <h1 className="uppercase text-5xl font-extrabold">
          {API.length} comments
        </h1>
        {API?.length ? (
          API.map((comment) => (
            <SingleComment comment={comment} key={comment.id}></SingleComment>
          ))
        ) : (
          <p className="text-2xl mt-4 text-(--color-brand)">
            Be the first to leave a comment!
          </p>
        )}
      </div>
    </div>
  );
};

export default Comments;
