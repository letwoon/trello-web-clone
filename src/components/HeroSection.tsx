import waveBg from "../assets/layered-waves.svg";
import heroBoard from "../assets/HeroBoard.webp";

function HeroSection() {
  return (
    <div
      style={{ backgroundImage: "url(" + waveBg + ")" }}
      className="pt-24 md:pt-36 px-4 bg-cover bg-bottom mb-16"
    >
      <div className="container mx-auto md:max-w-lg lg:max-w-3xl flex flex-col items-center z-20">
        <h2 className=" text-3xl md:text-5xl font-semibold text-white mb-4">
          Wavey brings all your tasks, teammates, and tools together
        </h2>
        <p className="text-white text-xl mb-4">
          Keep everything in the same place—even if your team isn’t.
        </p>

        <form className="mb-4 flex justify-center md:justify-between flex-wrap md:w-[558px]">
          <input
            className="hidden md:flex h-12 p-3 rounded-md flex-1 mr-3 focus:outline-none focus:ring focus:ring-white/70 border transition-all duration-200"
            type="email"
            name="email"
            placeholder="Email"
            autoComplete="off"
          />
          <button
            className="bg-blue-600 rounded-md p-3 text-white hover:brightness-90 cursor-pointer"
            type="submit">
          Sign up - it's free!</button>
        </form>
        <a
          className="text-white/80 flex items-center group hover:text-white transition-colors duration-200"
          href=""
        >
          <span className=" underline mr-2">Watch Video</span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            className="w-8 h-8 translate-x-0 group-hover:translate-x-2 transition-transform duration-200 ease-in"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
            />
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M15.91 11.672a.375.375 0 010 .656l-5.603 3.113a.375.375 0 01-.557-.328V8.887c0-.286.307-.466.557-.327l5.603 3.112z"
            />
          </svg>
        </a>
      </div>
      <div className="container mx-auto mt-8">
        <img
          className="w-[512px] lg:w-[1024px] mx-auto"
          src={heroBoard}
          alt=""
        />
      </div>
    </div>
  );
}
export default HeroSection;
