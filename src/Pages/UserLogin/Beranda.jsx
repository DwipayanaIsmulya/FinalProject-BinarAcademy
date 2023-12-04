import logoImage from "../../assets/img/Register/Belajar_white2.png";
import { Link } from "react-router-dom";
import loginImage from "../../assets/img/Login_image.png";

const Beranda = () => {
  return (
    <>
      {/* navbar */}
      <div className="w-auto justify-center flex flex-initial h-28 bg-[#6148FF]">
        <div className="flex flex-col-2 w-[100%] sm:w-[90%]">
          {/* left Nav */}
          <div className="flex w-[60%] h-full">
            <div className="flex md:justify-center md:items-center h-full w-[100%] sm:w-[30%]">
              <img
                className="flex ms-6 mt-1 w-[100px] h-[100px] md:w-[150px] md:h-[150px] md:mt-0"
                src={logoImage}
                alt=""
              />
            </div>
            <div className="collapse w-[20%] flex items-center flex-initial sm:visible md:w-[70%]">
              <input
                className="py-5 px-8 w-[526px] h-[62px] rounded-2xl md:text-md invisible md:visible"
                type="text"
                placeholder="Cari kursus terbaik.."
              />
            </div>
          </div>
          {/* Right Nav */}
          <div className="flex justify-end items-center w-[40%] h-full">
            <div className="flex flex-initial">
              <Link
                to="/login"
                className="flex items-center m-7 p-1 font-bold"
                style={{
                  textDecoration: "none",
                  color: "white",
                }}
              >
                <img
                  className="flex w-[20px] h-[20px]"
                  src={loginImage}
                  alt=""
                />
                <p>&nbsp; Masuk</p>
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* main content */}
      <div className="flex flex-initial w-auto h-[300px] bg-[#537543]"></div>

      {/* kategori belajar */}
      <div className="flex flex-initial w-auto h-[210px] bg-[#827943]"></div>

      {/* kursus populer */}
      <div className="flex flex-initial w-auto h-[282px] mt-2 bg-[#127943]"></div>
    </>
  );
};

export default Beranda;
