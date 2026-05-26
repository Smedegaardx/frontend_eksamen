const Button = ({ buttonText }) => {
  return (
    <button className="px-auto w-45 pb-5 pt-5 border-t-3 border-b-3 cursor-pointer uppercase text-lg">
      {buttonText}
    </button>
  );
};

export default Button;
