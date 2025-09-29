import Banner from "./Banner";
import { ieltsFeatures } from "./data";

const HeroSection = () => {
  return (
    <div className="h-full min-w-screen bg-gradient-to-br from-cyan-50 to-cyan-500 relative  justify-between py-[155px] px-[20px] lg:px-[80px] 2xl:px-[140px] overflow-hidden flex flex-col gap-5 lg:flex-row">
      <div className="arc z-10  bg-gradient-to-tr from-cyan-300 to-white absolute -top-[700px] -left-[700px] "></div>
      <div className="relative  z-[40] w-full lg:w-[50%]  flex flex-col items-center lg:items-start ">
        <h1 className="montserrat-alternates-black text-[20px] lg:text-[40px] tracking-tighter leading-7 xl:leading-16 lg:leading-14 xl:text-[60px] text-center md:text-start">
          The institute that will help you to achieve you goal
        </h1>
        <text className="mt-5">Your every problem has solution here.</text>

        <div className="flex gap-4 flex-col py-4 md:py-0 md:flex-row ">
          {ieltsFeatures.map((item) => {
            const Icon = item.icon; // ✅ get the component
            return (
              <div className="flex items-center gap-2  md:py-4   ">
                <Icon className="text-2xl  " />{" "}
                <p className="text-sm text-gray-600">{item.text}</p>
              </div>
            );
          })}
        </div>
        <button className="bg-blue text-white px-3 py-3 bg-blue-500 rounded-xl hover:cursor-pointer">
          Get Started for free
        </button>
        <div className="flex gap-3 mt-3">
          <div className="flex">⭐ ⭐ ⭐ ⭐ ⭐</div>
          <div>5-STAR RATING</div>
        </div>
      </div>
      <Banner />
      <div className="fullarc animate-pulse z-10  bg-gradient-to-tr from-cyan-300 to-white absolute -bottom-[600px] -right-[600px] w-[1150px]"></div>
    </div>
  );
};

export default HeroSection;
