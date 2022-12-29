import { useRef, useState } from "react";
import ActionCard from "./ActionCard";
import { motion, useScroll, useSpring } from "framer-motion";
import ButtonSecondary from "../ButtonSecondary";

function ActionSection() {
  // Function to use button to control horizontal scroll
  let scrl: React.RefObject<HTMLDivElement> = useRef(null);

  function slide(shift: number) {
    if (scrl.current) {
      scrl.current.scrollLeft += shift;
    }
  }

  return (
    <div className=" mt-12 mb-20">
      <div className=" px-10 lg:px-20 flex items-end">
        <div className="section-div">
          <h2 className=" section-title">Trello in action</h2>
          <p className="section-subtitle">
            Workflows for any project, big or small
          </p>
        </div>
        <div className="md:flex gap-x-8 mb-4 ml-auto hidden ">
          <button
            onClick={() => slide(-900)}
            className=" bg-gray-200 w-10 h-10 rounded-full group flex justify-center items-center"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              className="w-6 h-6 -translate-x-[2px] text-gray-500 group-hover:text-blue-500"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M15.75 19.5L8.25 12l7.5-7.5"
              />
            </svg>
          </button>
          <button
            onClick={() => slide(900)}
            className=" bg-gray-200 w-10 h-10 rounded-full group flex justify-center items-center"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-6 h-6 translate-x-[2px] text-gray-500 group-hover:text-blue-500"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M8.25 4.5l7.5 7.5-7.5 7.5"
              />
            </svg>
          </button>
        </div>
      </div>
      <div
        ref={scrl}
        className=" scroll-smooth snap flex gap-4 overflow-x-scroll w-full pb-10 scrollbar-hide"
      >
        <div className=" bg-transparent shrink-0 w-6 lg:w-16 "></div>
        <ActionCard />
        <ActionCard />
        <ActionCard />
        <ActionCard />
        <ActionCard />
        <ActionCard />
        <div className=" bg-transparent shrink-0 w-6 lg:w-16 "></div>
      </div>
      <div className="flex flex-col md:flex-row px-10 lg:px-20 items-start md:items-center">
        <p className="text-left text-xl md:w-3/4 pr-8">
          No need to start from scratch. Jump-start your workflow with a proven
          playbook designed for different teams. Customize it to make it yours.
        </p>
        <ButtonSecondary buttonText="Explore all Use Cases" />
      </div>
    </div>
  );
}
export default ActionSection
