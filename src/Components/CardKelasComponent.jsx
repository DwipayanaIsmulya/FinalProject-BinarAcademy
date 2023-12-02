import star from "../assets/img/Card/star.png";
import levelBadge from "../assets/img/Card/levelBadge.png";
import book from "../assets/img/Card/book.png";
import time from "../assets/img/Card/time.png";
import premium from "../assets/img/Card/premium.png";

const CardKelasComponent = () => {
  return (
    <>
      <div className="bg-white w-[350px] h-[225px] rounded-xl shadow-xl md:w-[440px] md:h-[280px]">
        <div className=" bg-gray-500 w-full h-[40%] rounded-t-xl"></div>
        <div className="p-2">
          <div className="flex justify-between w-full">
            <div className="font-medium text-[#6148FF] md:text-xl">UI/UX Design</div>
            <div className="flex">
              <div className=" my-auto">
                <img src={star} className="" />
              </div>
              <div>4.7</div>
            </div>
          </div>
          <div className="font-medium md:text-xl">Belajar Web Design dengan Figma</div>
          <div className="font-medium text-sm md:pt-2">By Angela Doe</div>
          <div className="flex justify-between md:py-1">
            <div className="flex text-sm">
              <div className="my-auto pr-1">
                <img src={levelBadge} />
              </div>
              <div className="text-sm font-medium text-[#6148FF]">Intermediate Level</div>
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
            <div className="bg-[#489CFF] flex w-fit px-3 rounded-xl">
              <div className="my-auto px-1">
                <img src={premium} />
              </div>
              <div className="text-white">Premium</div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CardKelasComponent;
