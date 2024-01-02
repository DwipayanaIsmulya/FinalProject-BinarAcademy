import star from "../assets/img/Card/star.png";
import levelBadge from "../assets/img/Card/levelBadge.png";
import book from "../assets/img/Card/book.png";
import time from "../assets/img/Card/time.png";
import banner from "../assets/img/Card/banner.png";
import progress from "../assets/img/Card/progress.png";
import PropType from "prop-types";
import { Link } from "react-router-dom";

const ProgressCardKelasComponent = ({
  id,
  name,
  level,
  category,
  rating,
  duration,
  mentor,
}) => {
  const formattedLevel = level
    ? level.charAt(0).toUpperCase() + level.slice(1)
    : "";
  return (
    <>
      <Link to={`/detailks/${id}`}>
        <div className="bg-[#FFFFFF] w-[350px] h-[225px] rounded-xl shadow-xl md:w-[440px] md:h-[270px]">
          <div className="w-full h-[40%] rounded-t-xl">
            <img className="w-full h-full" src={banner} alt="" />
          </div>
          <div className="p-2">
            <div className="flex justify-between w-full">
              <div className="font-medium text-[#6148FF] md:text-xl">
                {category}
              </div>
              <div className="flex">
                <div className=" my-auto">
                  <img src={star} className="" />
                </div>
                <div>{rating}</div>
              </div>
            </div>
            <div className="font-medium md:text-xl">{name}</div>
            <div className="font-medium text-sm md:pt-2">By {mentor}</div>
            <div className="flex justify-between md:py-1">
              <div className="flex text-sm">
                <div className="my-auto pr-1">
                  <img src={levelBadge} />
                </div>
                <div className="text-sm font-medium text-[#6148FF]">
                  {formattedLevel}
                </div>
              </div>
              <div className="flex text-sm">
                <div className="my-auto pr-1">
                  <img src={book} />
                </div>
                <div className="text-sm font-medium">10 Modul</div>
              </div>
              <div className="flex text-sm">
                <div className="my-auto pr-1">
                  <img src={time} />
                </div>
                <div className="text-sm font-medium">{duration}</div>
              </div>
            </div>
            <div className="py-1">
              <div className="flex items-center">
                <div className="">
                  <img src={progress} alt="" />
                </div>
                <div className="pl-1">
                  <div className="bg-[#D9D9D9] w-[225px] rounded-xl text-sm px-2 text-white">
                    <div>50% Complete</div>
                    <div className="bg-red w-[50%] rounded-xl px-2  overflow-hidden"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Link>
    </>
  );
};

ProgressCardKelasComponent.propTypes = {
  id: PropType.any,
  name: PropType.string,
  level: PropType.any,
  category: PropType.any,
  rating: PropType.any,
  duration: PropType.any,
  mentor: PropType.any,
};

export default ProgressCardKelasComponent;
