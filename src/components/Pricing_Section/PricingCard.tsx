import { useState } from "react";



interface PricingCardProps {
  planName: string;
  planDescription: string;
  price?: string | null;
  cta: string;
  enterprise?: boolean | null;
  recommended?: boolean | null;
}

function PricingCard({
  planName,
  planDescription,
  price,
  enterprise,
  recommended,
  cta, 
}: PricingCardProps) {
  
  const [userCount, setUserCount] = useState<number>(50);
  let annualFee = (userCount * 0.35);
  let monthlyFee = (annualFee*1.2).toFixed(2);

  function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
    let inputUser = +e.target.value; //change input to number from string
    if (inputUser > 5000) {
      setUserCount(5000);
    } else {
      setUserCount(inputUser);
    }
  }

  function handleRange(e: React.ChangeEvent<HTMLInputElement>) {
    console.log(e.target.value);
  }

  return (
    <div
      className={`bg-white border px-4 py-6 text-left lg:grid grid-flow-6 auto-rows-max items-start ${
        recommended && "border-2 border-cyan-500 "
      }`}
    >
      <h3 className="uppercase font-semibold mb-6">{planName}</h3>
      <div className="mb-6 lg:h-20">
        <div className="mb-2">
          <span>$</span>
          <span className=" text-4xl">
            {price ? price : annualFee.toFixed(2)}
          </span>
          <span>USD</span>
        </div>
        {price == "0" ? (
          <p className="text-xs text-slate-800/80">Free for your whole team</p>
        ) : (
          <p className="text-xs text-slate-800/80">
            Per user/month if billed annually ($
            {price ? (parseInt(price) * 1.2).toFixed(2) : monthlyFee}
            billed monthly)
          </p>
        )}
      </div>
      <div className="lg:min-h-[240px]">
        <p className="mb-4 ">{planDescription}</p>
        <div className={`mb-6 ${enterprise ? "flex flex-col" : "hidden"}`}>
          <div>
            Est. cost for
            <input
              className="font-semibold w-20 h-9 p-2 text-2xl text-center outline-none focus:ring-0 focus:border-slate-800 mx-1 border-0 border-b border-slate-800"
              type="number"
              min="50"
              max="5000"
              value={userCount}
              onChange={handleChange}
            />
            users
          </div>
          <div className="relative pt-1">
            <input
              id="large-range"
              type="range"
              min="50"
              max="5000"
              value={userCount}
              onChange={handleChange}
              className="mt-4 w-full h-3 bg-gray-200 rounded-lg appearance-none cursor-pointer range-lg dark:bg-gray-700"
            ></input>
          </div>
          <p className={`${userCount == 5000 ? "flex" : "hidden"}`}>
            <span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                className="w-6 h-6 mr-2"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M12 9v3.75m9-.75a9 9 0 11-18 0 9 9 0 0118 0zm-9 3.75h.008v.008H12v-.008z"
                />
              </svg>
            </span>{" "}
            For organizations with more than 5,000 users, please contact sales
            for pricing
          </p>
        </div>
      </div>

      <button
        className={`block px-4 py-3 mb-4 leading-tight border ${
          recommended
            ? "bg-cyan-50 hover:bg-white"
            : " bg-white hover:bg-cyan-50"
        } border-cyan-500 rounded-md transition-colors duration-200`}
      >
        {cta}
      </button>

      <a
        className={`${
          planName == "free" ? "hidden" : "block"
        } underline text-indigo-700 hover:text-indigo-800`}
        href="#"
      >
        Learn more about <span className=" capitalize">{planName}</span>
      </a>
    </div>
  );
}
export default PricingCard;
