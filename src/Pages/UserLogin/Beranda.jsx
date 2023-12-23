import logoImage from "../../assets/img/Register/Belajar_white2.png";
import { Link } from "react-router-dom";
import loginImage from "../../assets/img/Login_image.png";
import mainImage from "../../assets/img/UserLogin/Rectangle137.svg";
import CardKelasComponent from "../../Components/CardKelasComponent";
import { useState } from "react";

const Beranda = () => {
  const [all, setAll] = useState(false);
  const [dataScience, setDataScience] = useState(false);
  const [design, setDesign] = useState(true);
  const [android, setAndroid] = useState(false);
  const [web, setWeb] = useState(false);
  const [ios, setIos] = useState(false);
  const [business, setBusiness] = useState(false);

  const handleAll = () => {
    setAll(true);
    setDataScience(false);
    setDesign(false);
    setAndroid(false);
    setWeb(false);
    setIos(false);
    setBusiness(false);
  };

  const handleDataScience = () => {
    setAll(false);
    setDataScience(true);
    setDesign(false);
    setAndroid(false);
    setWeb(false);
    setIos(false);
    setBusiness(false);
  };

  const handleDesign = () => {
    setAll(false);
    setDataScience(false);
    setDesign(true);
    setAndroid(false);
    setWeb(false);
    setIos(false);
    setBusiness(false);
  };

  const handleAndroid = () => {
    setAll(false);
    setDataScience(false);
    setDesign(false);
    setAndroid(true);
    setWeb(false);
    setIos(false);
    setBusiness(false);
  };

  const handleWeb = () => {
    setAll(false);
    setDataScience(false);
    setDesign(false);
    setAndroid(false);
    setWeb(true);
    setIos(false);
    setBusiness(false);
  };

  const handleIos = () => {
    setAll(false);
    setDataScience(false);
    setDesign(false);
    setAndroid(false);
    setWeb(false);
    setIos(true);
    setBusiness(false);
  };

  const handleBusiness = () => {
    setAll(false);
    setDataScience(false);
    setDesign(false);
    setAndroid(false);
    setWeb(false);
    setIos(false);
    setBusiness(true);
  };

  return (
    <>
      {/* navbar */}
      <div className="px-0 mx-0 w-screen justify-center flex flex-initial h-28 bg-[#6148FF]">
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
            <div className="w-[20%] flex items-center flex-initial sm:visible md:w-[70%]">
              <input
                className="hidden py-5 px-8 w-[526px] h-[62px] rounded-2xl md:flex md:text-md md:visible"
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
      <div className="flex relative flex-wrap flex-initial w-[100%] h-[300px]">
        {/* left main-content */}
        <div className="flex">
          <img
            className="absolute top-0 right-0 left-0 bottom-0"
            src={mainImage}
            alt=""
          />
        </div>
        {/* right main-content */}
        <div className="flex md:z-10 w-[100%] items-center justify-center pt-14 flex-initial md:bg-gradient-to-l from-[#6148FF] from-35% to-85%">
          <div className="flex md:text-start pt-24 md:absolute md:pt-0 right-32 top-20 md:w-auto md:h-auto w-full h-full flex-col  text-center text-xl font-bold text-[#fff] bg-[#6148FF]">
            <h1 className="my-1">Belajar</h1>
            <h1 className="my-1">dari Praktisi Terbaik!</h1>
            <Link to="/kelassaya">
              <button className="my-1 bg-[#fff] w-[250px] font-bold text-[#6148FF] rounded-xl p-1">
                IKUTI KELAS
              </button>
            </Link>
          </div>
        </div>
      </div>

      {/* kategori belajar */}
      <div className="flex items-center flex-col flex-initial w-[100%] px-3 bg-[#EBF3FC]">
        <div className="flex justify-between items-center w-[100%] md:w-[80%] mb-5 mt-3">
          <div className="flex text-xl font-bold">Kategori Belajar</div>
          <Link to="/kelassaya">
            <p className="font-bold text-[#6148FF]">Lihat Semua</p>
          </Link>
        </div>
        <div className="flex flex-wrap justify-around flex-col-2 flex-initial w-[80%] h-full mb-5">
          <div className="flex flex-col items-center justify-center w-[160px] h-[136px] md:m-1">
            <img
              className="flex w-[140px] h-[100px] bg-[#443254] rounded-2xl"
              src=""
              alt=""
            />
            <div className="flex text-l font">UI-UX Design</div>
          </div>
          <div className="flex flex-col items-center justify-center w-[160px] h-[136px] md:m-1">
            <img
              className="flex w-[140px] h-[100px] bg-[#443254] rounded-2xl"
              src=""
              alt=""
            />
            <div className="flex text-l font">Product Management</div>
          </div>
          <div className="flex flex-col items-center justify-center w-[160px] h-[136px] md:m-1">
            <img
              className="flex w-[140px] h-[100px] bg-[#443254] rounded-2xl"
              src=""
              alt=""
            />
            <div className="flex text-l font">Web Development</div>
          </div>
          <div className="flex flex-col items-center justify-center w-[160px] h-[136px] md:m-1">
            <img
              className="flex w-[140px] h-[100px] bg-[#443254] rounded-2xl"
              src=""
              alt=""
            />
            <div className="flex text-l font">Android Development</div>
          </div>
          <div className="flex flex-col items-center justify-center w-[160px] h-[136px] md:m-1">
            <img
              className="flex w-[140px] h-[100px] bg-[#443254] rounded-2xl"
              src=""
              alt=""
            />
            <div className="flex text-l font">IOS Development</div>
          </div>
          <div className="flex flex-col items-center justify-center w-[160px] h-[136px] md:m-1">
            <img
              className="flex w-[140px] h-[100px] bg-[#443254] rounded-2xl"
              src=""
              alt=""
            />
            <div className="flex text-l font">Data Science</div>
          </div>
        </div>
      </div>

      {/* kursus populer */}
      <div className="flex items-center flex-col flex-initial w-[100%] px-3">
        <div className="flex justify-between items-center w-[100%] md:w-[80%] mb-5 mt-3">
          <div className="flex text-xl font-bold">Kursus Populer</div>
          <Link to="/kelassaya">
            <p className="font-bold text-[#6148FF]">Lihat Semua</p>
          </Link>
        </div>
        <div className="flex justify-center flex-wrap flex-initial w-[100%]">
          <div>
            <button
              onClick={handleAll}
              className={`w-auto h-[24px] m-1 px-4 md:mx-2 rounded-2xl ${
                all ? "bg-[#6148FF] text-white" : "bg-[#E8F1FF]"
              }`}
            >
              All
            </button>
          </div>
          <div>
            <button
              onClick={handleDataScience}
              className={`w-auto h-[24px] m-1 px-4 md:mx-2 rounded-2xl ${
                dataScience ? "bg-[#6148FF] text-white" : "bg-[#E8F1FF]"
              }`}
            >
              Data Science
            </button>
          </div>
          <div>
            <button
              onClick={handleDesign}
              className={`w-auto h-[24px] m-1 px-4 md:mx-2 rounded-2xl ${
                design ? "bg-[#6148FF] text-white" : "bg-[#E8F1FF]"
              }`}
            >
              UI/UX Design
            </button>
          </div>
          <div>
            <button
              onClick={handleAndroid}
              className={`w-auto h-[24px] m-1 px-4 md:mx-2 rounded-2xl ${
                android ? "bg-[#6148FF] text-white" : "bg-[#E8F1FF]"
              }`}
            >
              Android Development
            </button>
          </div>
          <div>
            <button
              onClick={handleWeb}
              className={`w-auto h-[24px] m-1 px-4 md:mx-2 rounded-2xl ${
                web ? "bg-[#6148FF] text-white" : "bg-[#E8F1FF]"
              }`}
            >
              Web Development
            </button>
          </div>
          <div>
            <button
              onClick={handleIos}
              className={`w-auto h-[24px] m-1 px-4 md:mx-2 rounded-2xl ${
                ios ? "bg-[#6148FF] text-white" : "bg-[#E8F1FF]"
              }`}
            >
              IOS Development
            </button>
          </div>
          <div>
            <button
              onClick={handleBusiness}
              className={`w-auto h-[24px] m-1 px-4 md:mx-2 rounded-2xl ${
                business ? "bg-[#6148FF] text-white" : "bg-[#E8F1FF]"
              }`}
            >
              Business Intelligence
            </button>
          </div>
        </div>
        <div className="flex md:flex-nowrap flex-wrap justify-around items-center w-[100%] md:w-[80%] mb-5 mt-3">
          <div className="flex w-auto md:w-[350px] justify-center my-3 mx-1">
            <CardKelasComponent />
          </div>
          <div className="flex w-auto md:w-[350px] justify-center my-3 mx-1">
            <CardKelasComponent />
          </div>
          <div className="flex w-auto md:w-[350px] justify-center my-3 mx-1">
            <CardKelasComponent />
          </div>
        </div>
      </div>
    </>
  );
};

export default Beranda;
