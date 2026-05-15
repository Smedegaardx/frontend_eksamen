const FooterParagraph = ({ title, firstLine, secondLine }) => {
  return (
    <div className="uppercase">
      <h2 className="text-[#FF2A70] mb-1">{title}</h2>
      <p>{firstLine}</p>
      <p>{secondLine}</p>
    </div>
  );
};

export default FooterParagraph;
