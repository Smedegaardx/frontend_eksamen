import Button from "../Button";

const AddComment = () => {
  return (
    <div className="bg-[url(/assets/bg/pattern_bg.jpg)]">
      <div className="mx-auto max-w-400 py-10">
        <h1 className="uppercase text-5xl font-extrabold">Leave a comment</h1>

        <div className="flex flex-col mt-15 gap-10">
          <div className="grid grid-cols-2 gap-8">
            <input
              className="border border-white p-6 placeholder:text-white placeholder:text-lg"
              placeholder="Your Name"
            />
            <input
              className="border border-white p-6 placeholder:text-white placeholder:text-lg"
              placeholder="Your Email"
            />
          </div>
          <textarea
            className="border border-white p-6 min-h-40 h-80 max-h-200 placeholder:text-white placeholder:text-lg"
            placeholder="Your Comment"
          />
        </div>
        <div className="mt-10 justify-self-end">
          <Button buttonText="submit"></Button>
        </div>
      </div>
    </div>
  );
};

export default AddComment;
