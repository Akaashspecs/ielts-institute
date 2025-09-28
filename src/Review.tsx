import { reviews } from "./data";

const Review = () => {
  return (
    <div className="flex flex-col justify-center p-14">
      <h3 className=" text-center text-[50px]">Review</h3>

      <div className="flex justify-center gap-10 ">
        {reviews.map((item) => (
          <div className="bg-gray-100 rounded-2xl max-w-[400px] p-5 shadow-2xl">
            <div className="flex gap-2">
              <img src={item.image} className="rounded-full h-[70px]" />
              <div className="flex flex-col">
                <text>{item.name}</text>
                <text>{item.star}</text>
              </div>
            </div>
            <div className="text-sm mt-1">'{item.description}'</div>
            <div className="text-xs mt-3">Date Posted: {item.date}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Review;
