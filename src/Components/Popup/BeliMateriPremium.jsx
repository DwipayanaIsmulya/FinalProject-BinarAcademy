import arrowright from "../../assets/img/BeliPremium/arrowright.png";
import star from "../../assets/img/Card/star.png";
import levelBadge from "../../assets/img/Card/levelBadge.png";
import book from "../../assets/img/Card/book.png";
import time from "../../assets/img/Card/time.png";
import premium from "../../assets/img/Card/premium.png";
import PropType from "prop-types";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import banner from "../../assets/img/Card/banner.png";

const BeliMateriPremium = ({
  name,
  mentor,
  level,
  price,
  isPremium,
  category,
  duration,
}) => {
  const [change, setChange] = useState(false);
  const navigate = useNavigate();

  const formattedLevel = level
    ? level.charAt(0).toUpperCase() + level.slice(1)
    : "";

  const formatNumber = (num) => {
    return num.toLocaleString("id-ID");
  };
  const formattedPrice = price ? formatNumber(price) : "";

  const handleChange = (event) => {
    event.preventDefault();
    setChange(true);
  };

  if (change == true) {
    return navigate("/pembayaran");
  }

  return (
    <>
      <div className="fixed z-20 flex justify-center items-center w-full h-full bg-black/[.85]">
        <div className="flex items-center flex-col relative w-[320px] h-[350px] md:w-[420px] md:h-[385px] bg-[#fff] rounded-xl">
          <div className="flex flex-col w-full mt-3 pt-2 items-center">
            <div className="font-bold text-sm md:text-xl ">
              Selangkah lagi menuju
            </div>
            <div className="font-bold text-[#6148FF] text-sm md:text-xl">
              Kelas Premium
            </div>
          </div>
          {/* CardComponent */}
          <div className="bg-white w-[275px] h-[225px] rounded-xl shadow-xl md:w-[350px] md:h-[240px] mt-1">
            <div className=" bg-gray-500 w-full h-[40%] rounded-t-xl">
              <img src={banner} alt="" />
            </div>
            <div className="p-2">
              <div className="flex justify-between w-full">
                <div className="font-medium text-base text-[#6148FF] md:text-xl">
                  {category}
                </div>
                <div className="flex">
                  <div className=" my-auto">
                    <img src={star} className="" />
                  </div>
                  <div>4.7</div>
                </div>
              </div>
              <div className="font-medium text-sm md:text-base">{name}</div>
              <div className="font-medium text-sm">{mentor}</div>
              <div className="flex justify-between">
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
                  <div className="text-sm font-medium">1 Modul</div>
                </div>
                <div className="flex text-sm">
                  <div className="my-auto pr-1">
                    <img src={time} />
                  </div>
                  <div className="text-sm font-medium">{duration}</div>
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

                  <div className="text-white px-1">
                    {isPremium ? `Rp ${formattedPrice}` : "Mulai Kelas"}
                  </div>
                </div>
              </div>
            </div>
          </div>
          <button
            className="flex w-[75%] h-[35px] items-center justify-center rounded-2xl bg-[#6148FF] mt-4"
            onClick={handleChange}
          >
            <div className="text-sm text-[#fff] md:font-bold md:text-base">
              Beli Sekarang
            </div>
            <img
              className="ms-2 w-[15px] h-[15px] md:w-[17px] md:h-[17px]"
              src={arrowright}
              alt=""
            />
          </button>
        </div>
      </div>
    </>
  );
};

BeliMateriPremium.propTypes = {
  name: PropType.string,
  level: PropType.string,
  price: PropType.any,
  isPremium: PropType.any,
  category: PropType.any,
  mentor: PropType.any,
  duration: PropType.any,
};

export default BeliMateriPremium;
