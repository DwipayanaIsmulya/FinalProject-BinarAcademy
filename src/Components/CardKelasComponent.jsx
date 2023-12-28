import star from "../assets/img/Card/star.png";
import levelBadge from "../assets/img/Card/levelBadge.png";
import book from "../assets/img/Card/book.png";
import time from "../assets/img/Card/time.png";
import premium from "../assets/img/Card/premium.png";
import banner from "../assets/img/Card/banner.png";
import PropType from "prop-types";
import { Link } from "react-router-dom";

const CardKelasComponent = ({
  id,
  name,
  level,
  price,
  isPremium,
  category,
  rating,
}) => {
  const formattedLevel = level
    ? level.charAt(0).toUpperCase() + level.slice(1)
    : "";

  const formatNumber = (num) => {
    return num.toLocaleString("id-ID");
  };
  const formattedPrice = price ? formatNumber(price) : "";

  return (
    <>
      <Link to={`/detail/${id}`}>
        <div className="bg-white w-[350px] h-[225px] rounded-xl shadow-xl md:w-[440px] md:h-[280px]">
          <div className=" w-full h-[40%] rounded-t-xl">
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
            <div className="font-medium text-sm md:pt-2">By Angela Doe</div>
            <div className="flex justify-between md:py-1">
              <div className="flex text-sm">
                <div className="my-auto pr-1">
                  <img src={levelBadge} />
                </div>
                <div className="text-sm font-medium text-[#6148FF]">
                  {formattedLevel} Level
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
                <div className="text-sm font-medium">120 Menit</div>
              </div>
            </div>
            <div className="py-1">
              <div
                className={`${
                  isPremium
                    ? "bg-[#489CFF] flex w-fit px-3 rounded-xl"
                    : "bg-[#6148FF] flex w-fit px-3 rounded-xl"
                } `}
              >
                <div className="my-auto px-1">
                  <img src={isPremium ? premium : null} />
                </div>

                <div className="text-white">
                  {isPremium ? `Rp ${formattedPrice}` : "Mulai Kelas"}
                </div>
              </div>
            </div>
          </div>
        </div>
      </Link>
    </>
  );
};
CardKelasComponent.propTypes = {
  id: PropType.any,
  name: PropType.string,
  level: PropType.string,
  price: PropType.any,
  isPremium: PropType.any,
  category: PropType.any,
  rating: PropType.any,
};

export default CardKelasComponent;
