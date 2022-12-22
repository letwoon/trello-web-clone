import Tabs from "./Tabs";
import wave from "../../assets/wave_1.jpg"

function TabsSection() {
  return (
    <div className="px-10 bg-gradient-to-b from-white to-cyan-50 lg:px-20 pb-20">
      <div className="section-div ">
        <p className=" section-title">TRELLO 101</p>
        <h2 className=" section-subtitle">A productivity powerhouse</h2>
        <p className="section-description">
          Simple, flexible, and powerful. All it takes are boards, lists, and
          cards to get a clear view of who’s doing what and what needs to get
          done. Learn more in our{" "}
          <span>
            <a
              className=" text-indigo-700 underline hover:text-indigo-800"
              href="/"
            >
              guide for getting started
            </a>
          </span>
          .
        </p>
      </div>
      <Tabs />
    </div>
  );
}
export default TabsSection