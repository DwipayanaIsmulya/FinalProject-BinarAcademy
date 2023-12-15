import star from "../assets/img/Card/star.png";
import levelBadge from "../assets/img/Card/levelBadge.png";
import book from "../assets/img/Card/book.png";
import time from "../assets/img/Card/time.png";

const CardRiwayatPembayaranComponent = () => {
  return (
    <>
      <div className="bg-white w-full h-[195px] rounded-xl shadow-xl md:w-[440px] md:h-[280px]">
        <div className=" bg-gray-500 w-full h-[40%] rounded-t-xl"></div>
        <div className="p-2">
          <div className="flex justify-between w-full">
            <div className="font-medium text-[#6148FF] text-xs md:text-xl">UI/UX Design</div>
            <div className="flex">
              <div className=" my-auto ">
                <img src={star} className="" />
              </div>
              <div className="text-xs md:text-base">4.7</div>
            </div>
          </div>
          <div className="font-medium text-xs md:text-xl">Belajar Web Designer dengan Figma </div>
          <div className="font-medium text-xs md:pt-2">By Angela Doe</div>
          <div className="flex justify-between md:py-1">
            <div className="flex text-sm">
              <div className="my-auto pr-1">
                <img src={levelBadge} />
              </div>
              <div className="text-xs font-medium text-[#6148FF]">Advanced Level</div>
            </div>
            <div className="flex text-xs md:text-base">
              <div className="my-auto pr-1">
                <img src={book} />
              </div>
              <div className="text-xs font-medium md:text-base">10 Modul</div>
            </div>
            <div className="flex text-sm">
              <div className="my-auto pr-1">
                <img src={time} />
              </div>
              <div className="text-xs font-medium md:text-base">120 Menit</div>
            </div>
          </div>
          <div className="py-1 w-[50%] text-center">
            <div className="bg-[#FF0000] text-white text-xs md:text-base py-1 rounded-xl">Waiting for payment</div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CardRiwayatPembayaranComponent;
