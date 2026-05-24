import SingleComment from "./SingleComment";

const Comments = ({ API }) => {
  return (
    <div className="bg-[url(/assets/bg/pattern_bg.jpg)]">
      <div className="mx-auto max-w-400 py-10 ">
        <h1 className="uppercase text-5xl font-extrabold">X comments</h1>
        <SingleComment></SingleComment>
      </div>
    </div>
  );
};

export default Comments;
