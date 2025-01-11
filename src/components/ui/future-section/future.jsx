import Home from "../../../../public/Home-icon.svg";
import Moto from "../../../../public/food-develery.svg";
import Smile from "../../../../public/smile-icon.svg";
import "./style.css";
const Future = () => {
  return (
    <section className="Future pt-[102px] container mx-auto flex flex-col md:flex-row justify-between py-4 px-4 md:px-[150px]">
      <div className="flex flex-col items-center justify-center md:pl-[75px]">
        <div className="flex flex-col items-center justify-center">
          <div className="text-center">
            <p className="text-orange-500 uppercase text-base tracking-widest">
              Features
            </p>
            <h2 className="font-[Philosopher] font-semibold text-2xl sm:text-3xl mt-2">
              Food With A New Passion
            </h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 sm:gap-[90px] mt-8 sm:mt-16 w-full max-w-6xl">
            <div className="flex flex-col items-center justify-center text-center">
              <div className="relative flex justify-center items-center w-[70px] sm:w-[88px] h-[70px] sm:h-[88px] overflow-hidden rounded-full">
                <div className="absolute inset-0 bg-text-green-future rounded-full opacity-25 animate-ping duration-[3000ms]"></div>
                <img
                  src={Home}
                  alt="Quality Food"
                  className="relative w-12 sm:w-14 h-12 sm:h-14 z-10 transform transition-transform duration-500 hover:scale-110"
                />
              </div>
              <h3 className="font-semibold mt-4 font-[Philosopher] text-xl sm:text-2xl">
                Quality Food
              </h3>
              <p className="text-gray-600 text-sm sm:text-base w-[250px] sm:w-[300px] mt-2">
                It can be a very secure path to earn good money and make you
                very successful creative entrepreneur.
              </p>
            </div>

            <div className="flex flex-col items-center justify-center text-center">
              <div className="relative flex justify-center items-center w-[70px] sm:w-[88px] h-[70px] sm:h-[88px] overflow-hidden rounded-full">
                <div className="absolute inset-0 bg-text-red-future rounded-full opacity-25 animate-ping duration-[5000ms]"></div>
                <img
                  src={Moto}
                  alt="Quality Food"
                  className="relative w-12 sm:w-14 h-12 sm:h-14 z-10 transform transition-transform duration-500 hover:scale-110"
                />
              </div>

              <h3 className="font-semibold mt-4 font-[Philosopher] text-xl sm:text-2xl">
                Food Delivery
              </h3>
              <p className="text-gray-600 text-sm sm:text-base w-[250px] sm:w-[300px] mt-2">
                It can be a very secure path to earn good money and make you
                very successful creative entrepreneur.
              </p>
            </div>

            <div className="flex flex-col items-center justify-center text-center">
              <div className="relative flex justify-center items-center w-[70px] sm:w-[88px] h-[70px] sm:h-[88px] overflow-hidden rounded-full">
                <div className="absolute inset-0 bg-text-yellow rounded-full opacity-25 animate-ping duration-[3000ms]"></div>
                <img
                  src={Smile}
                  alt="Quality Food"
                  className="relative w-12 sm:w-14 h-12 sm:h-14 z-10 transform transition-transform duration-500 hover:scale-110"
                />
              </div>
              <h3 className="font-semibold mt-4 font-[Philosopher] text-xl sm:text-2xl">
                Super Taste
              </h3>
              <p className="text-gray-600 text-sm sm:text-base w-[250px] sm:w-[300px] mt-2">
                It can be a very secure path to earn good money and make you
                very successful creative entrepreneur.
              </p>
            </div>
          </div>
        </div>
      </div>
      
      <div>
        
      </div>
    </section>
  );
};

export default Future;
