import PricingCard from "./PricingCard";
import logos_horizontal from "../../assets/Pricing_Section_Assets/logos-horizontal.svg";
import logos_grid from "../../assets/Pricing_Section_Assets/logos-3x3.svg";

const planPricing = [
  {
    planName: "free",
    planDescription:
      "For individuals or teams looking to organize any project.",
    price: "0",
    cta: "Get Started",
  },
  {
    planName: "standard",
    planDescription:
      "For small teams that need to manage work and scale collaboration.",
    price: "5",
    cta: "Sign up now",
  },
  {
    planName: "premium",
    planDescription:
      "For teams that need to track and visualize multiple projects in several ways, including boards, timelines, calendars, etc.",
    price: "10",
    cta: "Try for free",
    recommended: true
  },
  {
    planName: "enterprise",
    planDescription:
      "For organizations that need to connect work across teams with more security and controls.",
    enterprise: true,
    cta: "Call sales",
  },
];

function PricingSection() {
  return (
    <div className="bg-gradient-to-b from-cyan-50 to-white pt-16 px-10 lg:px-20">
      <div className="text-slate-800 mb-14">
        <h2 className="text-2xl md:text-4xl font-semibold mb-2">Trello priced your way</h2>
        <p className=" text-xl mb-6">
          Trusted by millions, Trello powers teams all around the world.
        </p>
        <button className="bg-blue-600 hover:brightness-90 text-white leading-tight px-4 py-3 rounded-md">
          Compare plans
        </button>
      </div>

      <div className="flex flex-col gap-y-4 lg:gap-y-0 lg:grid grid-cols-4 mb-16">
        {planPricing.map((plan) => {
          return (
            <PricingCard
              key={plan.planName}
              planName={plan.planName}
              planDescription={plan.planDescription}
              price={plan.price}
              enterprise={plan.enterprise}
              cta={plan.cta}
              recommended={plan.recommended}
            />
          );
        })}
      </div>

      <div className="flex flex-col items-center mb-12">
        <p className="text-xl mb-6">
          Join over 2,000,000 teams worldwide that are using Trello to get more
          done.
        </p>
        <img className="max-md:hidden" src={logos_horizontal} alt="" />
        <img className="md:hidden" src={logos_grid} alt="" />
      </div>
    </div>
  );
}
export default PricingSection