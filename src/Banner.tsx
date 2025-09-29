import { heroData, ielts } from "./data";

const Banner = () => {
  return (
    <div className="relative  z-20 w-full lg:w-[50%] h-full lg:block flex flex-col justify-between items-center  ">
      <div className="bg-white relative  flex rounded-3xl w-fit lg:max-w-[600px]  shadow-2xl h-full mr-[0%] md:mr-[15%] lg:mr-[15%] mt-10 lg:mt-0">
        <div className="w-[50px] lg:w-[50px] xl:w-[60px] 2xl:w-[80px]   bg-cyan-100 flex flex-col items-center text-4xl gap-5 font-extrabold py-12 ">
          {ielts.map((item) => (
            <div>{item}</div>
          ))}
        </div>
        <div>
          <div className=" md:hidden    -bottom-[5%] max-w-[407px] -right-[50%] lg:-bottom-[75%] lg:-right-[14%] xl:-right-[10%] 2xl:-bottom-[75%] z-[30] 2xl:-right-[15%] h-fit lg:w-[220px] 2xl:w-[300px] bg-white  overflow-hidden ">
            <img
              className="h-[200px] 2xl:h-[300px] w-full object-cover"
              src="/profile-one.jpg"
            />
            <div className="p-5">
              <div className="text-xl 2xl:text-3xl font-bold ">John Doe</div>
              <div className=" text-base 2xl:text-lg font-bold shadows-into-light-regular">
                Aspirant
              </div>
              <div className=" font-medium text-[10px] 2xl:text-sm ">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Quisquam, quod. Lorem ipsum dolor sit amet consectetur
                adipisicing elit.
              </div>
              <div className=" font-medium text-lg mt-2 shadows-into-light-regular ">
                'Always choose your happiness'
              </div>
            </div>
          </div>
          <div className=" px-3 md:py-12  2xl:w-[250px] gap-4 lg:gap-4 2xl:gap-8 flex flex-col pr-24 lg:pr-3 ">
            {heroData.map((item) => {
              const Icon = item.icon; // ✅ get the component
              return (
                <div
                  key={item.id}
                  className="flex items-center gap-3   bg-white  "
                >
                  <div className="bg-cyan-100 p-2 rounded-xl flex items-center justify-center h-min">
                    <Icon className="lg:text-2xl text-blue-500 " />{" "}
                  </div>

                  {/* ✅ render */}
                  <div>
                    <h3 className="text-[10px] 2xl:text-sm font-semibold">
                      {item.title}
                    </h3>
                    <p className="text-[10px] 2xl:text-sm text-gray-600">
                      {item.total}+
                    </p>
                  </div>
                </div>
              );
            })}
            <div></div>
          </div>
        </div>
        <div className=" w-[100px] lg:w-full flex-1 hidden lg:block  ">
          <img
            src="/student.webp"
            className="w-[100px] lg:w-full h-[50%]  object-cover"
          />
        </div>
        <div className="hidden md:block absolute shadow-2xl  -bottom-[5%] w-[200px] -right-[50%] lg:-bottom-[75%] lg:-right-[14%] xl:-right-[10%] 2xl:-bottom-[75%] z-[30] 2xl:-right-[15%] h-fit lg:w-[220px] 2xl:w-[300px] bg-white rounded-2xl overflow-hidden ">
          <img
            className="h-[200px] 2xl:h-[300px] w-full object-cover"
            src="/profile-one.jpg"
          />
          <div className="p-5">
            <div className="text-xl 2xl:text-3xl font-bold ">John Doe</div>
            <div className=" text-base 2xl:text-lg font-bold shadows-into-light-regular">
              Aspirant
            </div>
            <div className=" font-medium text-[10px] 2xl:text-sm ">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam,
              quod. Lorem ipsum dolor sit amet consectetur adipisicing elit.
            </div>
            <div className=" font-medium text-lg mt-2 shadows-into-light-regular ">
              'Always choose your happiness'
            </div>
          </div>
        </div>
      </div>
      <div className="h-fit relative xl:[100px] 2xl:w-[300px] bg-white rounded-2xl overflow-hidden p-4 mt-10 w-fit hidden lg:block ">
        <div className="flex justify-between gap-3">
          <text className=" font-bold">User Profile</text>
          <text className="bg-gray-200 px-3 rounded-md text-sm xl:flex items-center hidden">
            + Add a profile
          </text>
        </div>

        <div className="flex gap-5 mt-2 2xl:mt-5">
          <img
            className="h-[50px] w-[50x] 2xl:h-[80px] 2xl:w-[80px] rounded-full object-cover"
            src="/profile-one.jpg"
          />
          <div className="">
            <div className=" 2xl:text-3xl font-bold ">John Doe</div>
            <div className="  2xl:text-lg font-bold shadows-into-light-regular">
              Web Developer
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
