import { IoIosArrowDropright } from "react-icons/io";
import { features } from "./data";

const Features = () => {
  return (
    <div>
      <div className="flex flex-col gap-10  justify-center items-center p-10">
        {features.map((item, i) => (
          <div
            className={`flex flex-col md:flex-row md:max-w-[900px] bg-blue-100 rounded-2xl overflow-hidden max-w-[400px] shadow-2xl ${
              i === 1 && "md:flex-row-reverse"
            }`}
          >
            <img src={item.image} className=" md:w-[40%] object-cover" />
            <div className="p-5 flex flex-col">
              <text className="text-2xl font-sans  underline">
                {item.title}
              </text>
              <text className="text-sm mt-2">{item.description}</text>
              <span className="mt-3">
                {item.details.map((points) => (
                  <div className="flex items-center gap-2 text-sm">
                    <IoIosArrowDropright className="w-fit h-fit" /> {points}
                  </div>
                ))}
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Features;
