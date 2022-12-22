import { useState } from "react";
import wave_1 from "../../assets/wave_1.jpg";
import wave_2 from "../../assets/wave_2.jpg";
import wave_3 from "../../assets/wave_3.jpg";

function Tabs() {
  const tabList = [
    {
      id: "1",
      linkTo: "wave_1",
      title: "Boards",
      text: "Trello boards keep tasks organized and work moving forward. In a glance, see everything from “things to do” to “aww yeah, we did it!”",
    },
    {
      id: "2",
      linkTo: "wave_2",
      title: "Lists",
      text: "Trello boards keep tasks organized and work moving forward. In a glance, see everything from “things to do” to “aww yeah, we did it!”",
    },
    {
      id: "3",
      linkTo: "wave_3",
      title: "Cards",
      text: "Trello boards keep tasks organized and work moving forward. In a glance, see everything from “things to do” to “aww yeah, we did it!”",
    },
  ];

  const [currentTab, setCurrentTab] = useState<String>("1");

  function handleClick(event: React.MouseEvent<HTMLDivElement, MouseEvent>) {
    setCurrentTab(event.currentTarget.id);
  }

  function scrollTabContent() {
    if (currentTab === "2") {
      return "-translate-x-[calc(100%+8px)]";
    } else if (currentTab === "3") {
      return "-translate-x-[calc(200%+16px)]";
    }
    return "translate-x-0";
  }

  return (
    <div className="mt-8 lg:flex justify-center items-center">
      <div className="lg:w-1/3 max-md:text-center md:text-left grid grid-cols-3 lg:grid-cols-1 gap-y-4 mr-4 content-start">
        {tabList.map((tab) => {
          return (
            <a
              className={`relative rounded-md h-fit  ${
                tab.id === currentTab && "bg-white shadow-xl"
              }`}
              href={"#" + tab.linkTo}
            >
              <div
                key={tab.id}
                id={tab.id}
                role="tablist"
                className={` text-slate-800 py-4 pl-6 pr-4`}
                onClick={handleClick}
              >
                <h3 className="font-semibold ">{tab.title}</h3>
                <p className="hidden md:flex">{tab.text}</p>
                <div
                  className={`${
                    tab.id === currentTab ? "absolute" : "hidden"
                  } absolute bg-cyan-500 w-2 left-0 h-full top-0 rounded-tl-md rounded-bl-md`}
                ></div>
              </div>
            </a>
          );
        })}
      </div>

      <div className=" max-md:max-w-[500px] w-full md:w-2/3 mx-auto mt-4 lg:mt-0 rounded-md overflow-hidden">
        <div
          className={`flex gap-x-2 ${scrollTabContent()} transition-all duration-500 ease-in-out`}
        >
          <div
            style={{ backgroundImage: "url(" + wave_1 + ")" }}
            className={`h-[300px] lg:h-[560px] shrink-0 w-full bg-cover bg-center tabContent`}
          ></div>
          <div
            style={{ backgroundImage: "url(" + wave_2 + ")" }}
            className={`h-[300px] lg:h-[560px] shrink-0 w-full bg-cover bg-center tabContent `}
          ></div>
          <div
            style={{ backgroundImage: "url(" + wave_3 + ")" }}
            className={`h-[300px] lg:h-[560px] shrink-0 w-full bg-cover bg-center tabContent`}
          ></div>
        </div>
      </div>
    </div>
  );
}
export default Tabs;
