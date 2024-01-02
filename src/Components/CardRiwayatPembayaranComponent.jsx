import levelBadge from "../assets/img/Card/levelBadge.png";
import { Link } from "react-router-dom";
import PropType from "prop-types";

const CardRiwayatPembayaranComponent = ({ id, name, level, category }) => {
  const formattedLevel = level
    ? level.charAt(0).toUpperCase() + level.slice(1)
    : "";
  return (
    <>
      <Link to={`/detailks/${id}`}>
        <div className="bg-white w-full h-[195px] rounded-xl shadow-xl md:w-[440px] md:h-[280px]">
          <div className=" w-full h-[40%] rounded-t-xl">
            <img className="w-full h-full" src="" alt="" />
          </div>
          <div className="p-2">
            <div className="flex justify-between w-full">
              <div className="font-medium text-[#6148FF] text-xs md:text-xl">
                {category}
              </div>
              <div className="flex">
                <div className=" my-auto ">
                  <img src="" className="" />
                </div>
                <div className="text-xs md:text-base"></div>
              </div>
            </div>
            <div className="font-medium text-xs md:text-xl">{name}</div>
            <div className="font-medium text-xs md:pt-2"></div>
            <div className="flex justify-between md:py-1">
              <div className="flex text-sm">
                <div className="my-auto pr-1">
                  <img src={levelBadge} />
                </div>
                <div className="text-xs font-medium text-[#6148FF]">
                  {formattedLevel}
                </div>
              </div>
              <div className="flex text-xs md:text-base">
                <div className="my-auto pr-1">
                  <img src="" />
                </div>
                <div className="text-xs font-medium md:text-base"></div>
              </div>
              <div className="flex text-sm">
                <div className="my-auto pr-1">
                  <img src="" />
                </div>
                <div className="text-xs font-medium md:text-base"></div>
              </div>
            </div>
            <div className="py-1 w-[50%] text-center mt-4">
              <div className="bg-[#73CA5C] text-white text-xs md:text-base py-1 rounded-xl">
                Paid
              </div>
            </div>
          </div>
        </div>
      </Link>
    </>
  );
};

CardRiwayatPembayaranComponent.propTypes = {
  id: PropType.any,
  name: PropType.string,
  level: PropType.any,
  category: PropType.any,
};

export default CardRiwayatPembayaranComponent;
