import { motion, AnimatePresence } from "framer-motion";
import TestimonialCard from "./TestimonialCard";

import react_logo from "../../assets/react.svg";
import { useState } from "react";

const testimonials = [
  {
    id: "1",
    review:
      "[Wavey is] great for simplifying complex processes. As a manager, I can chunk [processes] down into bite-sized pieces for my team and then delegate that out, but still keep a bird's-eye view.",
    reviewer: "Joey Rosenberg",
    jobTitle: "Global Leadership Director at Woman Who Code",
    survey:
      "75% of organizations report that Trello delivers value to their business within 30 days.",
    surveyLink: "#",
    companyLogo: react_logo,
  },
  {
    id: "2",
    review:
      "Whether someone is in the office, working from home, or working on-site with a client, everyone can share context and information through Wave.",
    reviewer: "Sumeet Moghe",
    jobTitle: "Product Manager at ThoughtWorks",
    survey: "81% of customers chose Trello for its ease of use.",
    surveyLink: "#",
    companyLogo: react_logo,
  },
  {
    id: "3",
    review:
      "We used Trello to provide clarity on steps, requirements, and procedures. This was exceptional when communicating with teams that had deep cultural and language differences.",
    reviewer: "Jenna Dow",
    jobTitle: "Product Manager at Homie",
    survey:
      "74% of customers say Trello has improved communication with their co-workers and teams.",
    surveyLink: "#",
    companyLogo: react_logo,
  },
];

// Define how the animation when the slide enter and exit 
const variants = {
  enter: (direction: number) => {
    return {
      x: direction > 0 ? 1000 : -1000,
      opacity: 0,
    };
  },
  center: {
    zIndex: 1,
    x: 0,
    opacity: 1,
  },
  exit: (direction: number) => {
    return {
      zIndex: 0,
      x: direction < 0 ? 1000 : -1000,
      opacity: 0,
    };
  },
};

// Define the swipe gesture behavior
const swipeConfidenceThreshold = 100000;
const swipePower = (offset: number, velocity: number) => {
  return Math.abs(offset) * velocity;
};

function TestimonialSection() {
  const [currentSlideIndex, setCurrentSlideIndex] = useState<number>(1);
  const [direction, setDirection] = useState<number>(0);

  function nextSlide() {
    setDirection(1);
    currentSlideIndex < testimonials.length &&
      setCurrentSlideIndex(currentSlideIndex + 1);
  }

  function previousSlide() {
    setDirection(-1);
    currentSlideIndex > 1 && setCurrentSlideIndex(currentSlideIndex - 1);
  }

  return (
    <div className="px-10 lg:px-20 bg-gradient-to-b from-white to-cyan-50 flex flex-col-reverse md:flex-col">
      <div className="self-center md:flex flex-row-reverse md:self-end">
        <div className="md:flex gap-x-8 mb-4 hidden self-end ">
          <button
            onClick={previousSlide}
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
            onClick={nextSlide}
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

        <div className="flex gap-x-2 mt-4 md:mr-8">
          {testimonials.map((testimonial, index) => {
            return (
              <div
                key={index}
                className={` rounded-full  h-2 transition-all origin-center duration-200 ${
                  currentSlideIndex == index + 1
                    ? " w-14 bg-gray-400"
                    : "bg-gray-700 w-2"
                }`}
              ></div>
            );
          })}
        </div>
      </div>

      <div className="overflow-hidden relative h-[920px] min-[408px]:h-[790px] sm:h-[580px] lg:h-[520px]">
        <AnimatePresence initial={false} custom={direction}>
          <motion.div
            className=""
            key={currentSlideIndex}
            variants={variants}
            initial="enter"
            animate="center"
            exit="exit"
            transition={{
              x: { type: "spring", stiffness: 300, damping: 30 },
              opacity: { duration: 0.2 },
            }}
            custom={direction}
            drag="x"
            dragConstraints={{ left: 0, right: 0 }}
            dragElastic={1}
            onDragEnd={(e, { offset, velocity }) => {
              const swipe = swipePower(offset.x, velocity.x);

              if (swipe < -swipeConfidenceThreshold) {
                nextSlide();
              } else if (swipe > swipeConfidenceThreshold) {
                previousSlide();
              }
            }}
          >
            {testimonials.map((testimonial) => {
              return (
                <TestimonialCard
                  key={testimonial.id}
                  id={testimonial.id}
                  review={testimonial.review}
                  reviewer={testimonial.reviewer}
                  jobTitle={testimonial.jobTitle}
                  survey={testimonial.survey}
                  surveyLink={testimonial.surveyLink}
                  companyLogo={testimonial.companyLogo}
                  currentSlideIndex={currentSlideIndex}
                />
              );
            })}
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
}
export default TestimonialSection;
