
interface HamburgerButtonProps {
  color: string;
  isOpen: boolean;
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

function HamburgerButton({color, isOpen, setIsOpen}: HamburgerButtonProps) {

    function handleClick() {
      if (isOpen) {
        setIsOpen(false);
      } else {
        setIsOpen(true);
      }
    }

  return (
    <div className="flex items-center justify-center lg:hidden">
      <button
        className="flex flex-col justify-between items-end w-6 h-6 group relative"
        onClick={handleClick}
      >
        <span
          className={`${
            isOpen
              ? "absolute top-3 inset-x-0 h-1/6  w-full rotate-[-225deg] group-hover:opacity-50 transition-all duration-300 ease-in-out"
              : "h-1/6 w-full group-hover:w-2/3 transition-all duration-200"
          } dark:bg-white/90 ${color} rounded-full`}
        ></span>
        <span
          className={`${
            isOpen && "opacity-0 transition-all duration-300"
          } h-1/6 dark:bg-white/90 ${color} w-1/2 group-hover:w-full transition-all duration-200 rounded-full`}
        ></span>
        <span
          className={`${
            isOpen
              ? "absolute top-3 inset-x-0 h-1/6  w-full rotate-[225deg] group-hover:opacity-50 transition-all duration-300 ease-in-out"
              : "h-1/6 w-2/3 group-hover:w-1/2 transition-all duration-200"
          } dark:bg-white/90 ${color} rounded-full`}
        ></span>
      </button>
    </div>
  );
}
export default HamburgerButton