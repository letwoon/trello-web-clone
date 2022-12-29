import HamburgerButton from "./HamburgerButton";

interface NavbarProps {
  isOpen: boolean;
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

function Navbar({ isOpen, setIsOpen }: NavbarProps) {
  
  let Links = [
    { name: "Features", link: "/" },
    { name: "Solutions", link: "/" },
    { name: "Plans", link: "/" },
    { name: "Pricing", link: "/" },
    { name: "Resources", link: "/" },
  ];
  
  return (
      <nav className="h-16 bg-white flex max-lg:justify-between items-center  max-lg:px-4 lg:pl-4 fixed top-0 inset-x-0 shadow-md z-40">
        <a href="#" className=" font-extrabold text-3xl text-indigo-900 shrink-0">
          🌊 Wavey
        </a>

        <div
          className={`${
            isOpen ? "opacity-100 max-lg:h-screen" : "opacity-0 lg:opacity-100 max-lg:invisible max-lg:h-0"
          } flex lg:justify-between max-lg:flex-col transition-all duration-300 max-lg:absolute max-lg:top-16 max-lg:inset-x-0 max-lg:px-4 lg:pl-4 w-full max-lg:bg-white z-40 `}
        >
          <ul
            className={`text-left text-xl lg:text-base max-lg:mb-4  flex max-lg:flex-col`}
          >
          {
            Links.map((link) => {
              return (
                <li
                  key={link.name}
                  className="max-lg:h-16 lg:px-4 hover:text-indigo-500 first:max-lg:border-t first:max-lg:border-gray-300 max-lg:border-b max-lg:border-gray-300 text-slate-700"
                >
                  <a
                    className="h-full w-full flex items-center"
                    href={link.link}
                  >
                    {link.name}
                  </a>
                </li>
              );
            })
          }
          </ul>
          <div className="flex flex-col lg:flex-row-reverse">
            <button className="min-h-[64px] px-6 shrink-0 text-xl leading-tight bg-blue-500 hover:brightness-90 text-white max-lg:mb-4">
              Get Wavey for free
            </button>
            <button className="h-16 shrink-0 text-xl text-slate-700 leading-tight max-lg:border border-blue-500 lg:px-6">
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
  );
}
export default Navbar;
