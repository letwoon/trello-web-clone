import wave from "../assets/layered-waves-haikei.svg";

function HeroSection() {
  return (
    <div className="relative">
      <div className="flex flex-col items-center min-h-[600px] bg-[#6A45AB] "></div>
      <div
        style={{ backgroundImage: "url(" + wave + ")" }}
        className="w-full aspect-[960/300] bg-cover bg-center bg-no-repeat "
      ></div>
    </div>
  );
}
export default HeroSection;
