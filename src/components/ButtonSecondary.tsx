
interface ButtonSecondaryProps {
    buttonText: string,
}

function ButtonSecondary({buttonText}: ButtonSecondaryProps) {
  return (
    <button className="text-left mt-4 md:mt-0 leading-tight px-4 py-3 bg-white border border-blue-500 rounded-md h-fit hover:bg-blue-100 transition-colors duration-200">
      {buttonText}
    </button>
  );
}
export default ButtonSecondary