import HamburgerButton from "./HamburgerButton";

interface NavbarProps {
  isOpen: boolean;
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

function Navbar({isOpen, setIsOpen}: NavbarProps) {
  

  return (
    <div className="">
      <nav className="h-16 bg-white flex items-center justify-between max-lg:px-4 lg:pl-4 fixed top-0 inset-x-0 shadow-2xl z-50">
        <a href="#" className=" font-extrabold text-3xl text-indigo-900 shrink-0">
          🌊 Wavey
        </a>

        <div
          className={`${
            isOpen ? "opacity-100 max-lg:h-screen" : "opacity-0 invisible h-0"
          } flex lg:justify-between max-lg:flex-col transition-all duration-300 max-lg:fixed max-lg:top-16 max-lg:inset-x-0 max-lg:px-4 lg:pl-4 w-full max-lg:bg-white`}
        >
          <ul
            className={`text-left text-xl lg:text-base max-lg:mb-4 max-lg:border-t max-lg:border-gray-300 flex max-lg:flex-col`}
          >
            <li className="nav-item ">
              <a className="h-full w-full flex items-center" href="#">Features</a>
            </li>
            <li className="nav-item">
              <a className="h-full w-full flex items-center" href="#">Solutions</a>
            </li>
            <li className="nav-item">
              <a className="h-full w-full flex items-center" href="#">Plans</a>
            </li>
            <li className="nav-item">
              <a className="h-full w-full flex items-center" href="#">Pricing</a>
            </li>
            <li className="nav-item">
              <a className="h-full w-full flex items-center" href="#">Resources</a>
            </li>
          </ul>
          <div className="flex flex-col lg:flex-row-reverse">
            <button className="min-h-[64px] px-6 shrink-0 text-xl leading-tight bg-blue-500 hover:brightness-90 text-white max-lg:mb-4">
              Get Wavey for free
            </button>
            <button className="h-16 shrink-0 text-xl text-indigo-900 leading-tight max-lg:border border-blue-500 lg:px-6">
              Log in
            </button>
          </div>
        </div>

        <HamburgerButton
          color="bg-indigo-900"
          isOpen={isOpen}
          setIsOpen={setIsOpen}
        />
      </nav>

    </div>
  );
}
export default Navbar;
