const Button = ({ buttonText }) => {
  return (
    <button className="px-4.5 pb-5 pt-5 border-t-3 border-b-3 cursor-pointer uppercase">
      {buttonText}
    </button>
  );
};

export default Button;
