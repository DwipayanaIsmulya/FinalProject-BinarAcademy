import filist from "../../assets/img/UserLogin/fi_list.png";
import fibell from "../../assets/img/UserLogin/fi_bell.png";
import fiuser from "../../assets/img/UserLogin/fi_user.png";
import { useState } from "react";

const NavbarComponent = () => {
  const [toggleKelas, setToggleKelas] = useState(true);
  const [toggleNotif, setToggleNotif] = useState(false);
  const [toggleAkun, setToggleAkun] = useState(false);
  const handleKelas = () => {
    setToggleKelas(true);
    setToggleNotif(false);
    setToggleAkun(false);
  };
  const handleNotif = () => {
    setToggleNotif(true);
    setToggleKelas(false);
    setToggleAkun(false);
  };
  const handleAkun = () => {
    setToggleAkun(true);
    setToggleKelas(false);
    setToggleNotif(false);
  };
  return (
    <>
      <div className=" bg-[#6148FF] w-full flex h-28">
        <div className="flex w-[80%] mx-auto">
          <div className=" flex-auto w-64">
            <div className="flex items-center h-full">
              <div className=" text-white text-4xl pr-5 items-center">Belajar</div>
              <div className=" ml-6">
                <input className="py-5 px-8 w-[526px] rounded-2xl" type="text" placeholder="Cari kursus terbaik.." />
              </div>
            </div>
          </div>
          <div className="flex-auto">
            <div className="flex justify-end items-center h-full">
              <div className="px-3">
                <div className={`px-6 py-2 rounded-xl ${toggleKelas && "bg-[#489CFF]"}`}>
                  <button className="flex text-white text-xl items-center" onClick={handleKelas}>
                    <img src={filist} className={` ${toggleKelas && "pr-2 "} pt-[-2px]`} />
                    {toggleKelas && "Kelas"}
                  </button>
                </div>
              </div>
              <div className="px-3">
                <div className={`px-6 py-2 rounded-xl ${toggleNotif && "bg-[#489CFF] "} `}>
                  <button className="flex text-white text-xl items-center" onClick={handleNotif}>
                    <img src={fibell} className={`${toggleNotif && "pr-2 "}  my-[-3px] pt-[2px]`} />
                    {toggleNotif && "Notifikasi"}
                  </button>
                </div>
              </div>
              <div className="px-3">
                <div className={`px-6 py-2 rounded-xl ${toggleAkun && "bg-[#489CFF]"} `}>
                  <button className="flex text-white text-xl items-center" onClick={handleAkun}>
                    <img src={fiuser} className={`${toggleAkun && "pr-2"} pt-[2px]`} />
                    {toggleAkun && "Akun"}
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default NavbarComponent;
