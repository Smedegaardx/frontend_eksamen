const Herobtn = ({ text, color }) => {
  return (
    <button
      data-color={color}
      className="h-16 w-42 
      pink:bg-linear-125 pink:from-[#b822b5] pink:via-50% pink:to-[#F72A78]
      pink:hover:bg-none pink:hover:bg-[#b822b5] transition ease-in duration-200 transition-discrete
      standard:border-3 standard:border-neutral-400"
    >
      <div className="h-full w-full bg-linear-220 from-white/70 to-20% to-transparent p-0.75 standard:bg-none pink:hover:bg-linear-250">
        <div
          className="h-full w-full flex justify-center items-center 
        pink:bg-linear-125 pink:from-[#b822b5] pink:via-50% pink:to-[#F72A78]
        pink:hover:bg-none pink:hover:bg-[#b822b5] transition-all ease-in duration-500 transition-discrete
        "
        >
          <p className="text-lg uppercase tracking-widest">{text}</p>
        </div>
      </div>
    </button>
  );
};

export default Herobtn;
