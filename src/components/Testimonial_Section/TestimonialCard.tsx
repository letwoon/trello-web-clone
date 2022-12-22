

interface TestimonialCardProps {
    id: string,
    review: string,
    survey: string,
    surveyLink?: string,
    reviewer: string,
    jobTitle: string,
    companyLogo: string,
    currentSlideIndex: number
}

function TestimonialCard({review, survey, surveyLink, reviewer, jobTitle, companyLogo, currentSlideIndex, id}: TestimonialCardProps) {
    return (
      <div
        className={` cursor-grab active:cursor-grabbing absolute h-[920px] min-[408px]:h-[790px] min-[500px]:h-[700px] sm:h-[580px] md:h-[560px] lg:h-[500px]  mx-auto rounded-xl overflow-hidden border ${
          currentSlideIndex.toString() == id ? "flex" : "hidden"
        } flex flex-col md:flex-row`}
      >
        <div className="relative bg-white px-8 py-8 md:py-10 flex flex-col items-start lg:w-2/3">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            className=" h-[420px] absolute -top-20 -left-20 fill-fuchsia-300/20"
          >
            <path d="M6.5 10c-.223 0-.437.034-.65.065.069-.232.14-.468.254-.68.114-.308.292-.575.469-.844.148-.291.409-.488.601-.737.201-.242.475-.403.692-.604.213-.21.492-.315.714-.463.232-.133.434-.28.65-.35l.539-.222.474-.197-.485-1.938-.597.144c-.191.048-.424.104-.689.171-.271.05-.56.187-.882.312-.318.142-.686.238-1.028.466-.344.218-.741.4-1.091.692-.339.301-.748.562-1.05.945-.33.358-.656.734-.909 1.162-.293.408-.492.856-.702 1.299-.19.443-.343.896-.468 1.336-.237.882-.343 1.72-.384 2.437-.034.718-.014 1.315.028 1.747.015.204.043.402.063.539l.025.168.026-.006A4.5 4.5 0 1 0 6.5 10zm11 0c-.223 0-.437.034-.65.065.069-.232.14-.468.254-.68.114-.308.292-.575.469-.844.148-.291.409-.488.601-.737.201-.242.475-.403.692-.604.213-.21.492-.315.714-.463.232-.133.434-.28.65-.35l.539-.222.474-.197-.485-1.938-.597.144c-.191.048-.424.104-.689.171-.271.05-.56.187-.882.312-.317.143-.686.238-1.028.467-.344.218-.741.4-1.091.692-.339.301-.748.562-1.05.944-.33.358-.656.734-.909 1.162-.293.408-.492.856-.702 1.299-.19.443-.343.896-.468 1.336-.237.882-.343 1.72-.384 2.437-.034.718-.014 1.315.028 1.747.015.204.043.402.063.539l.025.168.026-.006A4.5 4.5 0 1 0 17.5 10z"></path>
          </svg>
          <p className=" text-2xl text-slate-800 text-left z-20 flex-1 mb-8">
            {review}
          </p>
          <div className="w-36 mb-5 bg-transparent border-t border-black"></div>
          <img className="mb-2" src={companyLogo} alt="" />
          <div className="text-slate-800 text-left">
            <p>{reviewer}</p>
            <p>{jobTitle}</p>
          </div>
        </div>
        <div className="h-full bg-gradient-to-bl px-8 py-8 md:py-10 lg:w-1/3 from-[#F298DA] to-[#6C58C1] flex flex-col justify-start">
          <h3 className="text-left break-words text-white text-2xl md:text-4xl font-semibold flex-1 max-md:mb-4">
            {survey}
          </h3>
          <a
            className="text-white/80 underline text-left w-fit hover:text-white"
            href={surveyLink}
          >
            Wavey TechValidate Survey
          </a>
        </div>
      </div>
    );
}
export default TestimonialCard;
