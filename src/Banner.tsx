import { heroData, ielts } from "./data";

const Banner = () => {
  return (
    <div className="relative  z-20 w-[50%] ">
      <div className="bg-white  flex rounded-3xl  relative shadow-2xl ">
        <div className="w-[80px] relati h-[70%] bg-cyan-100 flex flex-col items-center text-4xl gap-5 font-extrabold pt-5">
          {ielts.map((item) => (
            <div>{item}</div>
          ))}
        </div>
        <div>
          <div className="p-10 w-[305px]">
            {heroData.map((item) => {
              const Icon = item.icon; // ✅ get the component
              return (
                <div
                  key={item.id}
                  className="flex items-center gap-3  p-4 bg-white  "
                >
                  <div className="bg-cyan-100 p-2 rounded-xl flex items-center justify-center h-min">
                    <Icon className="text-2xl text-blue-500 " />{" "}
                  </div>

                  {/* ✅ render */}
                  <div>
                    <h3 className="text-sm font-semibold">{item.title}</h3>
                    <p className="text-sm text-gray-600">{item.total}+</p>
                  </div>
                </div>
              );
            })}
            <div></div>
          </div>
        </div>
        {/* <div className="w-[300px] ">
          <img
            src="/student.webp"
            className="max-w-[100%] h-[50%] object-cover"
          />
        </div>
        <div className="absolute -bottom-[250px] z-[30] -right-[50px] h-fit w-[300px] bg-white rounded-2xl overflow-hidden ">
          <img
            className="h-[300px] w-full object-cover"
            src="/profile-one.jpg"
          />
          <div className="p-5">
            <div className="text-3xl font-bold ">John Doe</div>
            <div className="  text-lg font-bold shadows-into-light-regular">
              Web Developer
            </div>
            <div className=" font-medium text-sm ">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam,
              quod. Lorem ipsum dolor sit amet consectetur adipisicing elit.
            </div>
            <div className=" font-medium text-lg mt-2 shadows-into-light-regular ">
              'Always choose your happiness'
            </div>
          </div>
        </div> */}
      </div>
      <div className="h-fit relative w-[350px] bg-white rounded-2xl overflow-hidden p-4 mt-10 ">
        <div className="flex justify-between">
          <text className=" font-bold">User Profile</text>
          <text className="bg-gray-200 px-3 rounded-md ">+ Add a profile</text>
        </div>

        <div className="flex gap-5  mt-5">
          <img
            className="h-[80px] w-[80px] rounded-full object-cover"
            src="/profile-one.jpg"
          />
          <div>
            <div className="text-3xl font-bold ">John Doe</div>
            <div className="  text-lg font-bold shadows-into-light-regular">
              Web Developer
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
