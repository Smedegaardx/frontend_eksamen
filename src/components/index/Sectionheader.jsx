const Sectionheader = ({ title }) => {
  return (
    <div className="flex flex-col items-center mt-8 mb-8 mx-2">
      <h1 className="text-3xl md:text-4xl uppercase tracking-wide text-center mb-2 text-pretty">
        {title}
      </h1>
      <img
        src="/assets/bottom_line2.png"
        alt="Line decoration"
        width={240}
        height={10}
      />
    </div>
  );
};

export default Sectionheader;
