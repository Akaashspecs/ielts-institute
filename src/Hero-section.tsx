import Banner from "./Banner";
import { ieltsFeatures } from "./data";

const HeroSection = () => {
  return (
    <div className="min-h-screen min-w-screen bg-gradient-to-br from-cyan-50 to-cyan-500 relative  justify-between p-[140px] flex flex-col lg:flex-row">
      {/* <div className="arc z-10  bg-gradient-to-tr from-cyan-300 to-white absolute -top-[700px] -left-[700px] "></div> */}
      <div className="relative  z-[50] w-full lg:w-[50%]">
        <h1 className="montserrat-alternates-black text-[20px] lg:text-[80px] tracking-tighter leading-7 lg:leading-24 ">The institute that will help you to achieve you goal</h1>
        <text>
          Your every problem has solution here.
        </text>

        <div className="flex gap-4">
          {ieltsFeatures.map((item) => {
            const Icon = item.icon; // ✅ get the component
            return (
              <div className="flex items-center gap-2  py-4   ">
                <Icon className="text-2xl  " />{" "}
                <p className="text-sm text-gray-600">{item.text}</p>
              </div>
            );
          })}
        </div>
        <button className="bg-blue text-white px-3 py-3 bg-blue-500 rounded-xl hover:cursor-pointer">
          Get Started for free
        </button>
        <div className="flex gap-3">
          <div className="flex">⭐ ⭐ ⭐ ⭐ ⭐</div>
          <div>5-STAR RATING</div>
        </div>
      </div>
      <Banner />
      {/* <div className="fullarc animate-pulse z-10  bg-gradient-to-tr from-cyan-300 to-white absolute bottom-[100px] right-[100px] w-[1150px]"></div> */}
    </div>
  );
};

export default HeroSection;
