import Insta from "../../../public/insta_icon.svg";
import Facebook from "../../../public/facebook_icon.svg";
import Twitter from "../../../public/twitter_icon.svg";
import YouTube from "../../../public/youtube_icon.svg";

const Footer = () => {
  return (
    <section className="FOOTER container mx-auto py-4 px-4 sm:px-10 md:px-[150px] w-full bg-gray-dark">
      <div className="flex flex-col md:flex-row gap-12 md:gap-[50px] pt-[50px] md:pt-[105px]">
        {/* Logo and Contact Information */}
        <div className="w-full md:w-[262px] sm:w-[300px]">
          <h2 className="text-3xl font-semibold pb-5 text-custom-orange hover:text-orange-500">
            Logo
          </h2>
          <p className="text-white opacity-60 pb-4 text-sm">
            www.companyname.com
          </p>
          <p className="text-white opacity-60 pb-4 text-sm">
            companyname@gmail.com
          </p>
          <p className="text-white opacity-60 pb-4 text-sm">
            Phone: +7 485-118-03-25
          </p>
        </div>

        {/* Home Links */}
        <div className="w-full md:w-[262px] sm:w-[300px]">
          <h2 className="text-white pb-6 text-lg font-[Philosopher]">Home</h2>
          <p className="text-white opacity-60 pb-4 text-sm">Landingpage</p>
          <p className="text-white opacity-60 pb-4 text-sm">Documentation</p>
          <p className="text-white opacity-60 pb-4 text-sm">Referral Program</p>
          <p className="text-white opacity-60 pb-4 text-sm">UI & UX Design</p>
          <p className="text-white opacity-60 pb-4 text-sm">Web Design</p>
        </div>

        {/* Menu Links */}
        <div className="w-full md:w-[262px] sm:w-[300px]">
          <h2 className="text-white pb-6 text-lg font-[Philosopher]">Menu</h2>
          <p className="text-white opacity-60 pb-4 text-sm">Landingpage</p>
          <p className="text-white opacity-60 pb-4 text-sm">Documentation</p>
          <p className="text-white opacity-60 pb-4 text-sm">Referral Program</p>
          <p className="text-white opacity-60 pb-4 text-sm">UI & UX Design</p>
          <p className="text-white opacity-60 pb-4 text-sm">Web Design</p>
        </div>

        {/* Company Links and Social Media */}
        <div className="w-full md:w-[262px] sm:w-[300px]">
          <h2 className="text-white pb-6 text-lg font-[Philosopher]">
            Company
          </h2>
          <p className="text-white opacity-60 pb-4 text-sm">Landingpage</p>
          <p className="text-white opacity-60 pb-4 text-sm">Documentation</p>
          <p className="text-white opacity-60 pb-4 text-sm">Referral Program</p>

          <div className="flex gap-[10px] pt-4 ">
            <img
              src={Insta}
              alt="Instagram"
              className="w-7 transition-transform duration-300 hover:scale-125 hover:text-blue-500"
            />
            <img
              src={Facebook}
              alt="Facebook"
              className="w-7 transition-transform duration-300 hover:scale-125 hover:text-blue-600"
            />
            <img
              src={Twitter}
              alt="Twitter"
              className="w-7 transition-transform duration-300 hover:scale-125 hover:text-blue-400"
            />
            <img
              src={YouTube}
              alt="YouTube"
              className="w-7 transition-transform duration-300 hover:scale-125 hover:text-red-600"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Footer;
