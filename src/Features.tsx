import { features } from "./data";

const Features = () => {
  return (
    <div>
      Festures
      <div className="flex flex-col gap-10  justify-center items-center">
        {features.map((item, i) => (
          <div
            className={`flex max-w-[900px] bg-blue-100 rounded-2xl overflow-hidden ${
              i === 1 && "flex-row-reverse"
            }`}
          >
            <img src={item.image} className=" w-[40%] object-cover" />
            <div className="p-5 flex flex-col">
              <text className="text-4xl">{item.title}</text>
              <text className="text-">{item.description}</text>
              {item.details.map((points) => (
                <div>- {points}</div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Features;
