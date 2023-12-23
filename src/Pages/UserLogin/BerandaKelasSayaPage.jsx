import NavbarComponent from "../../Components/UserLogin/NavbarComponent";
<<<<<<< HEAD
import CardKelasComponent from "../../Components/CardKelasComponent";
import { useState } from "react";
=======
import { useState } from "react";
import MobileNavbar from "../../Components/UserLogin/MobileNavbar";
import ProgressCardKelasComponent from "../../Components/ProgressCardKelasComponent";
import filter from "../../assets/img/UserLogin/filter.png";
>>>>>>> 2f716b32ede0325449966b217c74f625e6f9cb2a

const BerandaKelasSayaPage = () => {
  const [all, setAll] = useState(true);
  const [inProgress, setInProgress] = useState(false);
  const [selesai, setSelesai] = useState(false);
  const [filterBox, setFilterBox] = useState(false);
  const handleAll = () => {
    setAll(true);
    setInProgress(false);
    setSelesai(false);
  };
  const handleInProgress = () => {
    setInProgress(true);
    setAll(false);
    setSelesai(false);
  };
  const handleSelesai = () => {
    setSelesai(true);
    setAll(false);
    setInProgress(false);
  };
  const handleFilterBox = () => {
    setFilterBox(!filterBox);
  };
  return (
    <>
      <div className=" h-full bg-[#EBF3FC] pb-32 md:w-full ">
        {/* Navbar */}
<<<<<<< HEAD
        <NavbarComponent />
=======
        <div className="hidden md:block">
          <NavbarComponent />
        </div>
        <div className="md:hidden">
          <MobileNavbar />
        </div>

>>>>>>> 2f716b32ede0325449966b217c74f625e6f9cb2a
        {/* Body */}
        <div className="md:w-[1340px] md:mx-auto">
          <div className="flex justify-around py-6 md:flex md:justify-between md:pt-16 md:pb-12">
            <div className="text-xl font-bold md:text-3xl">Kelas Berjalan</div>
<<<<<<< HEAD
            <div className="">
              <input className="rounded-3xl border-2 text-sm border-[#6148FF] py-1 px-2 md:py-2 md:px-3" type="text" placeholder="Cari Kelas" />
            </div>
            <button onClick={handleFilterBox} className="md:hidden">
              Filter
            </button>
=======
            <div className="ml-auto">
              <input className="rounded-3xl border-2 text-xs border-[#6148FF] py-1 px-2 md:text-sm md:py-2 md:px-3" type="text" placeholder="Cari Kelas" />
            </div>
            <div>
              <img onClick={handleFilterBox} src={filter} className="w-4 mt-1 mx-1 md:hidden" />
            </div>
>>>>>>> 2f716b32ede0325449966b217c74f625e6f9cb2a
          </div>
          <div className="md:flex">
            {/* Filter */}
            <div className={`${filterBox ? "hidden" : ""}`}>
              <div className="bg-white rounded-xl mx-auto w-64 md:w-72">
                <div className="p-3 px-5">
                  <div className=" font-bold md:text-xl ">Filter</div>
                  <div className="p-2">
                    <div className="flex p-2">
                      <div className="pr-4">
                        <input className=" accent-[#6148FF]" type="checkbox" />
                      </div>
<<<<<<< HEAD
                      <div className="">Paling Baru</div>
=======
                      <div className="text-sm md:text-base">Paling Baru</div>
>>>>>>> 2f716b32ede0325449966b217c74f625e6f9cb2a
                    </div>
                    <div className="flex p-2">
                      <div className="pr-4">
                        <input className=" accent-[#6148FF]" type="checkbox" />
                      </div>
<<<<<<< HEAD
                      <div className="">Paling Popular</div>
=======
                      <div className="text-sm md:text-base">Paling Popular</div>
>>>>>>> 2f716b32ede0325449966b217c74f625e6f9cb2a
                    </div>
                    <div className="flex p-2">
                      <div className="pr-4">
                        <input className=" accent-[#6148FF]" type="checkbox" />
                      </div>
<<<<<<< HEAD
                      <div className="">Promo</div>
=======
                      <div className="text-sm md:text-base">Promo</div>
>>>>>>> 2f716b32ede0325449966b217c74f625e6f9cb2a
                    </div>
                  </div>
                  <div className="font-bold  md:text-xl">Kategori</div>
                  <div className="p-2">
                    <div className="flex p-2">
                      <div className="pr-4">
                        <input className=" accent-[#6148FF]" type="checkbox" />
                      </div>
<<<<<<< HEAD
                      <div className="">UI/UX Design</div>
=======
                      <div className="text-sm md:text-base">UI/UX Design</div>
>>>>>>> 2f716b32ede0325449966b217c74f625e6f9cb2a
                    </div>
                    <div className="flex p-2">
                      <div className="pr-4">
                        <input className=" accent-[#6148FF]" type="checkbox" />
                      </div>
<<<<<<< HEAD
                      <div className="">Web Development</div>
=======
                      <div className="text-sm md:text-base">Web Development</div>
>>>>>>> 2f716b32ede0325449966b217c74f625e6f9cb2a
                    </div>
                    <div className="flex p-2">
                      <div className="pr-4">
                        <input className=" accent-[#6148FF]" type="checkbox" />
                      </div>
<<<<<<< HEAD
                      <div className="">Android Development</div>
=======
                      <div className="text-sm md:text-base">Android Development</div>
>>>>>>> 2f716b32ede0325449966b217c74f625e6f9cb2a
                    </div>
                    <div className="flex p-2">
                      <div className="pr-4">
                        <input className=" accent-[#6148FF]" type="checkbox" />
                      </div>
<<<<<<< HEAD
                      <div className="">Data Science</div>
=======
                      <div className="text-sm md:text-base">Data Science</div>
>>>>>>> 2f716b32ede0325449966b217c74f625e6f9cb2a
                    </div>
                    <div className="flex p-2">
                      <div className="pr-4">
                        <input className=" accent-[#6148FF]" type="checkbox" />
                      </div>
<<<<<<< HEAD
                      <div className="">Business Intelligence</div>
=======
                      <div className="text-sm md:text-base">Business Intelligence</div>
>>>>>>> 2f716b32ede0325449966b217c74f625e6f9cb2a
                    </div>
                  </div>
                  <div className="font-bold  md:text-xl">Level Kesulitan</div>
                  <div className="p-2">
                    <div className="flex p-2">
                      <div className="pr-4">
                        <input className=" accent-[#6148FF]" type="checkbox" />
                      </div>
<<<<<<< HEAD
                      <div className="">Semua Level</div>
=======
                      <div className="text-sm md:text-base">Semua Level</div>
>>>>>>> 2f716b32ede0325449966b217c74f625e6f9cb2a
                    </div>
                    <div className="flex p-2">
                      <div className="pr-4">
                        <input className=" accent-[#6148FF]" type="checkbox" />
                      </div>
<<<<<<< HEAD
                      <div className="">Beginner Level</div>
=======
                      <div className="text-sm md:text-base">Beginner Level</div>
>>>>>>> 2f716b32ede0325449966b217c74f625e6f9cb2a
                    </div>
                    <div className="flex p-2">
                      <div className="pr-4">
                        <input className=" accent-[#6148FF]" type="checkbox" />
                      </div>
<<<<<<< HEAD
                      <div className="">Intermediate Level</div>
=======
                      <div className="text-sm md:text-base">Intermediate Level</div>
>>>>>>> 2f716b32ede0325449966b217c74f625e6f9cb2a
                    </div>
                    <div className="flex p-2">
                      <div className="pr-4">
                        <input className=" accent-[#6148FF]" type="checkbox" />
                      </div>
<<<<<<< HEAD
                      <div className="">Advance Level</div>
=======
                      <div className="text-sm md:text-base">Advance Level</div>
>>>>>>> 2f716b32ede0325449966b217c74f625e6f9cb2a
                    </div>
                  </div>
                  <div className="pt-5 pb-3 text-center">
                    <button className="text-[#FF0000] hover:text-[#ff0000]">Hapus Filter</button>
                  </div>
                </div>
              </div>
            </div>
            <div className="pt-4 md:w-[970px] md:ml-auto md:pt-0">
              <div className="flex justify-around md:justify-between">
                <div>
<<<<<<< HEAD
                  <button onClick={handleAll} className={`p-2 w-[100px] md:p-3 md:w-[200px] ${all ? "bg-[#6148FF] text-white" : "bg-white text-[#8A8A8A]"} rounded-2xl`}>
=======
                  <button onClick={handleAll} className={`p-2 w-[110px] md:p-3 md:w-[200px] ${all ? "bg-[#6148FF] text-white" : "bg-white text-[#8A8A8A]"} rounded-2xl text-xs md:text-base`}>
>>>>>>> 2f716b32ede0325449966b217c74f625e6f9cb2a
                    All
                  </button>
                </div>
                <div>
<<<<<<< HEAD
                  <button onClick={handleInProgress} className={`p-2 w-[150px] md:p-3 md:w-[388px] ${inProgress ? "bg-[#6148FF] text-white" : "bg-white text-[#8A8A8A]"}  rounded-2xl`}>
=======
                  <button onClick={handleInProgress} className={`p-2 w-[110px] md:p-3 md:w-[388px] ${inProgress ? "bg-[#6148FF] text-white" : "bg-white text-[#8A8A8A]"}  rounded-2xl text-xs md:text-base`}>
>>>>>>> 2f716b32ede0325449966b217c74f625e6f9cb2a
                    In Progress
                  </button>
                </div>
                <div>
<<<<<<< HEAD
                  <button onClick={handleSelesai} className={`p-2 w-[100px] md:p-3 md:w-[250px] ${selesai ? "bg-[#6148FF] text-white" : "bg-white text-[#8A8A8A]"} rounded-2xl`}>
=======
                  <button onClick={handleSelesai} className={`p-2 w-[110px] md:p-3 md:w-[250px] ${selesai ? "bg-[#6148FF] text-white" : "bg-white text-[#8A8A8A]"} rounded-2xl text-xs md:text-base`}>
>>>>>>> 2f716b32ede0325449966b217c74f625e6f9cb2a
                    Selesai
                  </button>
                </div>
              </div>
              <div className="md:grid grid-cols-2 md:gap-7 pt-6">
                <div className="py-2 flex justify-around">
<<<<<<< HEAD
                  <CardKelasComponent />
                </div>
                <div className="py-2 flex justify-around">
                  <CardKelasComponent />
                </div>
                <div className="py-2 flex justify-around">
                  <CardKelasComponent />
                </div>
                <div className="py-2 flex justify-around">
                  <CardKelasComponent />
                </div>
                <div className="py-2 flex justify-around">
                  <CardKelasComponent />
=======
                  <ProgressCardKelasComponent />
                </div>
                <div className="py-2 flex justify-around">
                  <ProgressCardKelasComponent />
                </div>
                <div className="py-2 flex justify-around">
                  <ProgressCardKelasComponent />
                </div>
                <div className="py-2 flex justify-around">
                  <ProgressCardKelasComponent />
                </div>
                <div className="py-2 flex justify-around">
                  <ProgressCardKelasComponent />
>>>>>>> 2f716b32ede0325449966b217c74f625e6f9cb2a
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default BerandaKelasSayaPage;
