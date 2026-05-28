const FooterParagraph = ({
  title,
  firstLine,
  secondLine,
}) => {
  return (
    <div className="uppercase text-center lg:text-left mt-6 lg:mt-0">
      <h2 className="text-[#FF2A70] mb-1">
        {title}
      </h2>
      <p>{firstLine}</p>
      <p>{secondLine}</p>
    </div>
  );
};

export default FooterParagraph;
