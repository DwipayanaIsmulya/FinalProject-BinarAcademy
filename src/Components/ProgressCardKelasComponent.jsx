import star from "../assets/img/Card/star.png";
import levelBadge from "../assets/img/Card/levelBadge.png";
import book from "../assets/img/Card/book.png";
import time from "../assets/img/Card/time.png";
import banner from "../assets/img/Card/banner.png";
import progress from "../assets/img/Card/progress.png";

const ProgressCardKelasComponent = () => {
  return (
    <>
      <div className="bg-[#EBF3FC] w-[350px] h-[225px] rounded-xl shadow-xl md:w-[440px] md:h-[280px]">
        <div className="w-full h-[40%] rounded-t-xl">
          <img className="w-full h-full" src={banner} alt="" />
        </div>
        <div className="p-2">
          <div className="flex justify-between w-full">
            <div className="font-medium text-[#6148FF] md:text-xl">
              UI/UX Design
            </div>
            <div className="flex">
              <div className=" my-auto">
                <img src={star} className="" />
              </div>
              <div>4.7</div>
            </div>
          </div>
          <div className="font-medium md:text-xl">
            Belajar Web Designer dengan Figma{" "}
          </div>
          <div className="font-medium text-sm md:pt-2">By Angela Doe</div>
          <div className="flex justify-between md:py-1">
            <div className="flex text-sm">
              <div className="my-auto pr-1">
                <img src={levelBadge} />
              </div>
              <div className="text-sm font-medium text-[#6148FF]">
                Advanced Level
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
    </>
  );
};

export default ProgressCardKelasComponent;
