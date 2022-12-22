import timeline from "../../assets/View_Section_Assets/TrelloBoard_Timeline_2x.webp";
import calendar from "../../assets/View_Section_Assets/TrelloBoard_Calendar_2x.webp";

import integration from "../../assets/View_Section_Assets/Integrations_Puzzle.svg";
import gears from "../../assets/View_Section_Assets/Gears.svg";
import search_value from "../../assets/View_Section_Assets/Search_Value.svg";
import PrimaryButton from "../PrimaryButton";

function ViewSection() {
  const featureCardContent = [
    {
      img: integration,
      title: "Integrations",
      description:
        "Connect the apps your team already uses into your Trello workflow or add a Power-Up to fine-tune your specific needs.",
      buttonText: "Browse Integrations",
    },
    {
      img: gears,
      title: "Butler Automation",
      description:
        "No-code automation is built into every Trello board. Focus on the work that matters most and let the robots do the rest.",
      buttonText: "Get to know Automation",
    },
    {
      img: search_value,
      title: "Wavey Enterprise",
      description:
        "The productivity tool teams love, paired with the features and security needed for scale.",
      buttonText: "Explore Enterprise",
    },
  ];

  return (
    <div className="mb-20">
      <div className="relative bg-white flex flex-col items-center px-10 lg:px-20">
        <div className="absolute bg-gradient-to-r from-[#007DF4] to-[#00B5DA] h-[1400px] lg:h-[920px] w-full z-10"></div>
        <div className="flex flex-col items-center pt-12 px-4 max-w-2xl mb-12 z-20">
          <h3 className="text-white text-4xl font-semibold">
            See work in a whole new way
          </h3>
          <p className="text-white text-xl mt-2">
            View your team’s projects from every angle and bring a fresh
            perspective to the task at hand.
          </p>
          <PrimaryButton buttonText="Discover all Trello views" />
        </div>

        <div className="bg-white shadow-2xl rounded-lg p-8 max-lg:max-w-[700px] flex flex-col lg:flex-row items-center gap-x-16 mb-8 lg:mb-16 z-20">
          <img
            src={timeline}
            className="w-[460px] md:w-[600px] h-full mx-auto mb-6 lg:mb-0 lg:w-6/12"
            alt="timeline"
          />
          <div className="text-left lg:w-6/12">
            <div className="flex items-center mb-6">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="w-8 h-8 fill-purple-500 mr-3"
              >
                <path
                  fill-rule="evenodd"
                  d="M9 1.5H5.625c-1.036 0-1.875.84-1.875 1.875v17.25c0 1.035.84 1.875 1.875 1.875h12.75c1.035 0 1.875-.84 1.875-1.875V12.75A3.75 3.75 0 0016.5 9h-1.875a1.875 1.875 0 01-1.875-1.875V5.25A3.75 3.75 0 009 1.5zm6.61 10.936a.75.75 0 10-1.22-.872l-3.236 4.53L9.53 14.47a.75.75 0 00-1.06 1.06l2.25 2.25a.75.75 0 001.14-.094l3.75-5.25z"
                  clip-rule="evenodd"
                />
                <path d="M12.971 1.816A5.23 5.23 0 0114.25 5.25v1.875c0 .207.168.375.375.375H16.5a5.23 5.23 0 013.434 1.279 9.768 9.768 0 00-6.963-6.963z" />
              </svg>

              <h2 className="font-semibold text-slate-800">
                HIT DEADLINES EVERY TIME
              </h2>
            </div>
            <p className=" text-xl mb-6 text-slate-800">
              From weekly sprints to annual planning, Timeline view keeps all
              tasks on track. Quickly get a glimpse of what’s coming down the
              pipeline and identify any gaps that might impede your team’s
              progress.
            </p>
            <a
              className="text-indigo-700 hover:text-indigo-800 text-xl underline"
              href="/"
            >
              Learn more about Timeline view
            </a>
          </div>
        </div>

        <div className="bg-white shadow-2xl rounded-lg p-8 max-lg:max-w-[700px] flex flex-col lg:flex-row-reverse items-center gap-x-16 z-20">
          <img
            src={calendar}
            className="w-[460px] md:w-[600px] h-full mx-auto mb-6 lg:mb-0 lg:w-6/12"
            alt="timeline"
          />
          <div className="text-left lg:w-6/12">
            <div className="flex items-center mb-6">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="w-8 h-8 fill-cyan-500 mr-3"
              >
                <path d="M12.75 12.75a.75.75 0 11-1.5 0 .75.75 0 011.5 0zM7.5 15.75a.75.75 0 100-1.5.75.75 0 000 1.5zM8.25 17.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zM9.75 15.75a.75.75 0 100-1.5.75.75 0 000 1.5zM10.5 17.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zM12 15.75a.75.75 0 100-1.5.75.75 0 000 1.5zM12.75 17.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zM14.25 15.75a.75.75 0 100-1.5.75.75 0 000 1.5zM15 17.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zM16.5 15.75a.75.75 0 100-1.5.75.75 0 000 1.5zM15 12.75a.75.75 0 11-1.5 0 .75.75 0 011.5 0zM16.5 13.5a.75.75 0 100-1.5.75.75 0 000 1.5z" />
                <path
                  fill-rule="evenodd"
                  d="M6.75 2.25A.75.75 0 017.5 3v1.5h9V3A.75.75 0 0118 3v1.5h.75a3 3 0 013 3v11.25a3 3 0 01-3 3H5.25a3 3 0 01-3-3V7.5a3 3 0 013-3H6V3a.75.75 0 01.75-.75zm13.5 9a1.5 1.5 0 00-1.5-1.5H5.25a1.5 1.5 0 00-1.5 1.5v7.5a1.5 1.5 0 001.5 1.5h13.5a1.5 1.5 0 001.5-1.5v-7.5z"
                  clip-rule="evenodd"
                />
              </svg>

              <h2 className="font-semibold text-slate-800 ">
                STAY ON TOP OF TASKS
              </h2>
            </div>
            <p className=" text-xl mb-6 text-slate-800">
              Start each day without any surprises. Whether scheduling an
              editorial calendar or staying on top of to-dos, Calendar view is
              like a crystal ball giving you a clear vision of what work lies
              ahead.
            </p>
            <a
              className="text-indigo-700 hover:text-indigo-800 text-xl underline"
              href="/"
            >
              Learn more about Calendar view
            </a>
          </div>
        </div>
      </div>

      {/* Function Section */}
      <div className=" mt-20 px-10 lg:px-20">
        <div className=" section-div mb-8">
          <p className="section-title">POWERFUL WAYS TO GROW</p>
          <h3 className="section-subtitle">Do more with Wavey</h3>
          <p className="section-description">
            Trello’s intuitive features give any team the ability to quickly set
            up and customize workflows for just about anything.
          </p>
        </div>

        <div className="flex gap-8 flex-wrap justify-center">
          {featureCardContent.map((feature) => {
            return (
              <div
                key={feature.title}
                className="bg-gray-50 rounded-lg flex flex-col items-start p-6 md:max-w-[290px] lg:max-w-[350px] "
              >
                <div className=" flex-1">
                  <img
                    className="mb-5 h-24 w-fit"
                    src={feature.img}
                    alt={feature.title}
                  />
                  <h3 className="mb-3 text-2xl font-semibold text-left">
                    {feature.title}
                  </h3>
                  <p className="text-left mb-8">{feature.description}</p>
                </div>
                <PrimaryButton buttonText={feature.buttonText} />
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
export default ViewSection;
