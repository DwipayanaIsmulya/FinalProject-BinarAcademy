import exit from "../../assets/img/BeliPremium/exit.png";
import iconOnBoard from "../../assets/img/MulaiBelajar/iconOnBoard.png";

const MulaiBelajar = () => {
  return (
    <>
      <div className="absolute z-20 flex justify-center items-center w-full h-full bg-black/[.70]">
        <div className="flex items-center flex-col relative w-[320px] h-[350px] md:w-[430px] md:h-[395px] bg-[#fff] rounded-xl p-4">
          <button className="absolute right-3 top-3">
            <img
              className="w-[14px] h-[14px] md:w-[18px] md:h-[18px]"
              src={exit}
              alt=""
            />
          </button>
          <div className="font-bold text-[#6148FF] text-3xl md:text-4xl md:mb-3">
            Onboarding...
          </div>
          <img className="w-[150px] md:w-[170px]" src={iconOnBoard} alt="" />
          <div className="flex flex-col text-center mt-2">
            <div className="text-xs md:text-sm font-bold mb-2">
              Persiapkan hal berikut untuk belajar yang maksimal:
            </div>
            <div className="text-xs md:text-sm">
              Mempunyai akun Figma atau Install Adobe XD Menggunakan internet
              minimal kecepatan 2Mbps Belajar di tempat yang nyaman
            </div>
          </div>
          <button className="flex w-[75%] h-[35px] items-center justify-center rounded-2xl bg-[#6148FF] mt-4">
            <div className="text-sm text-[#fff] md:font-bold md:text-base">
              Ikuti Kelas
            </div>
          </button>
        </div>
      </div>
    </>
  );
};

export default MulaiBelajar;
