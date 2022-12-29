import linkedin_logo from "../assets/Footer_Social_Icon/linkedin_logo.svg";
import facebook_logo from "../assets/Footer_Social_Icon/facebook_logo.svg";
import instagram_logo from "../assets/Footer_Social_Icon/instagram_logo.svg";

const footerMenu = [
  {
    menuItem: "About Wavey",
    desc: "What’s behind the boards.",
  },
  {
    menuItem: "Jobs",
    desc: "Learn about open roles on the Trello team.",
  },
  {
    menuItem: "Apps",
    desc: "Download the Trello App for your Desktop or Mobile devices.",
  },
  {
    menuItem: "Contact us",
    desc: "Need anything? Get in touch and we can help",
  },
];

const socialIcon = [
  {
    socialMedia: "facebook",
    link: facebook_logo,
  },
  {
    socialMedia: "instagram",
    link: instagram_logo,
  },
  {
    socialMedia: "linkedin",
    link: linkedin_logo,
  },
];

function Footer() {
  return (
    <div className="text-white px-14 py-12 bg-[#172B4D]">
      <div className="flex flex-col lg:flex-row lg:justify-between lg:border-b lg:border-white/30 lg:pb-6">
        <div className="flex lg:flex-col lg:items-start justify-between items-center mb-8 lg:mb-0 lg:py-4 lg:w-1/5">
          <h1 className=" text-2xl font-bold">🌊 Wavey</h1>
          <a className="hover:underline" href="#">
            Log In
          </a>
        </div>

        <div className=" divide-y divide-white/30 border-t border-b border-white/30 lg:divide-y-0 lg:border-0 lg:flex">
          {footerMenu.map((item) => {
            return (
              <div className="text-left py-4 lg:hover:bg-white/10 lg:p-4 lg:w-1/4">
                <a className="hover:underline lg:hover:no-underline" href="">
                  <p>{item.menuItem}</p>
                  <p className=" text-xs mt-2">{item.desc}</p>
                </a>
              </div>
            );
          })}
        </div>
      </div>

      <div className="lg:flex lg:items-center lg:justify-between lg:mt-8">
        <div className="text-xs text-left flex flex-col mt-8 lg:mt-0 lg:flex-row lg:gap-x-8">
          <a className="hover:underline mt-2 lg:mt-0" href="#">
            Privacy Policy
          </a>
          <a className="hover:underline mt-2 lg:mt-0" href="#">
            Terms
          </a>
          <a className="hover:underline mt-2 lg:mt-0" href="#">
            Cookie Settings
          </a>
          <p className="mt-2 lg:mt-0">*This is a clone practice</p>
        </div>

        <div className=" mt-20 lg:mt-0 flex gap-x-6">
          {socialIcon.map((icon) => {
            return (
              <div className="group border-2 rounded-full border-white w-6 h-6 p-[2px] flex justify-center items-center cursor-pointer">
                <img
                  className="w-4 group-hover:w-3 transition-all duration-200"
                  src={icon.link}
                  alt={icon.socialMedia}
                />
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
export default Footer;
