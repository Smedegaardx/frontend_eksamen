import Image from "next/image";

const CommentParagraph = () => {
  return (
    <div className="flex flex-col items-center">
      <Image
        src="/assets/content-img/testimonial_1.jpg"
        alt="Image"
        height={210}
        width={210}
      ></Image>
      <h2 className="text-xl mt-10">Lorem, ipsum.</h2>
      <p className="text-lg max-w-200 text-center mt-5">
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Blanditiis
        quod enim voluptatum voluptatem voluptas sed voluptates nihil dolorem
        similique sint, repellendus, cupiditate sequi quasi velit earum eos?
        Illum, nesciunt nemo.
      </p>
    </div>
  );
};

export default CommentParagraph;
