import Home from "../../../../public/Home-icon.svg";
import Moto from "../../../../public/food-develery.svg";
import Smile from "../../../../public/smile-icon.svg";

const Future = () => {
  return (
    <section className="Future pt-[102px] container mx-auto flex justify-between py-4 px-4 md:px-[150px]">
      <div className="flex flex-col items-center justify-center pl-[40px]">
        <div className="flex flex-col items-center justify-center">
          <div className="text-center">
            <p className="text-orange-500 uppercase text-base tracking-widest">
              Features
            </p>
            <h2 className="font-[Philosopher] font-semibold text-3xl mt-2">
              Food With A New Passion
            </h2>
          </div>
          <div className="grid grid-cols-3 gap-8 mt-16 w-full max-w-6xl">
            <div className="flex flex-col items-center justify-center text-center">
              <div className="relative flex justify-center items-center w-[88px] h-[88px]">
                <div className="absolute inset-0 bg-text-green-future rounded-full opacity-25"></div>
                <img
                  src={Home}
                  alt="Quality Food"
                  className="relative w-14 h-14 z-10"
                />
              </div>
              <h3 className="font-bold mt-4">Quality Food</h3>
              <p className="text-gray-600 mt-2">
                It can be a very secure path to earn good money and make you
                very successful creative entrepreneur.
              </p>
            </div>
            <div className="flex flex-col items-center justify-center text-center">
              <div className="relative flex justify-center items-center w-[88px] h-[88px]">
                <div className="absolute inset-0 bg-text-red-future rounded-full opacity-25"></div>
                <img
                  src={Moto}
                  alt="Quality Food"
                  className="relative w-14 h-14 z-10"
                />
              </div>
              <h3 className="font-bold mt-4">Food Delivery</h3>
              <p className="text-gray-600 mt-2">
                It can be a very secure path to earn good money and make you
                very successful creative entrepreneur.
              </p>
            </div>
            <div className="flex flex-col items-center justify-center text-center">
              <div className="relative flex justify-center items-center w-[88px] h-[88px]">
                <div className="absolute inset-0 bg-text-yellow rounded-full opacity-25"></div>
                <img
                  src={Smile}
                  alt="Quality Food"
                  className="relative w-14 h-14 z-10"
                />
              </div>
              <h3 className="font-bold mt-4">Super Taste</h3>
              <p className="text-gray-600 mt-2">
                It can be a very secure path to earn good money and make you
                very successful creative entrepreneur.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Future;
