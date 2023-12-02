import NavbarComponent from "../../Components/UserLogin/NavbarComponent";
import CardKelasComponent from "../../Components/CardKelasComponent";
import { useState } from "react";

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
        <NavbarComponent />
        {/* Body */}
        <div className="md:w-[1340px] md:mx-auto">
          <div className="flex justify-around py-6 md:flex md:justify-between md:pt-16 md:pb-12">
            <div className="text-xl font-bold md:text-3xl">Kelas Berjalan</div>
            <div className="">
              <input className="rounded-3xl border-2 text-sm border-[#6148FF] py-1 px-2 md:py-2 md:px-3" type="text" placeholder="Cari Kelas" />
            </div>
            <button onClick={handleFilterBox} className="md:hidden">
              Filter
            </button>
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
                      <div className="">Paling Baru</div>
                    </div>
                    <div className="flex p-2">
                      <div className="pr-4">
                        <input className=" accent-[#6148FF]" type="checkbox" />
                      </div>
                      <div className="">Paling Popular</div>
                    </div>
                    <div className="flex p-2">
                      <div className="pr-4">
                        <input className=" accent-[#6148FF]" type="checkbox" />
                      </div>
                      <div className="">Promo</div>
                    </div>
                  </div>
                  <div className="font-bold  md:text-xl">Kategori</div>
                  <div className="p-2">
                    <div className="flex p-2">
                      <div className="pr-4">
                        <input className=" accent-[#6148FF]" type="checkbox" />
                      </div>
                      <div className="">UI/UX Design</div>
                    </div>
                    <div className="flex p-2">
                      <div className="pr-4">
                        <input className=" accent-[#6148FF]" type="checkbox" />
                      </div>
                      <div className="">Web Development</div>
                    </div>
                    <div className="flex p-2">
                      <div className="pr-4">
                        <input className=" accent-[#6148FF]" type="checkbox" />
                      </div>
                      <div className="">Android Development</div>
                    </div>
                    <div className="flex p-2">
                      <div className="pr-4">
                        <input className=" accent-[#6148FF]" type="checkbox" />
                      </div>
                      <div className="">Data Science</div>
                    </div>
                    <div className="flex p-2">
                      <div className="pr-4">
                        <input className=" accent-[#6148FF]" type="checkbox" />
                      </div>
                      <div className="">Business Intelligence</div>
                    </div>
                  </div>
                  <div className="font-bold  md:text-xl">Level Kesulitan</div>
                  <div className="p-2">
                    <div className="flex p-2">
                      <div className="pr-4">
                        <input className=" accent-[#6148FF]" type="checkbox" />
                      </div>
                      <div className="">Semua Level</div>
                    </div>
                    <div className="flex p-2">
                      <div className="pr-4">
                        <input className=" accent-[#6148FF]" type="checkbox" />
                      </div>
                      <div className="">Beginner Level</div>
                    </div>
                    <div className="flex p-2">
                      <div className="pr-4">
                        <input className=" accent-[#6148FF]" type="checkbox" />
                      </div>
                      <div className="">Intermediate Level</div>
                    </div>
                    <div className="flex p-2">
                      <div className="pr-4">
                        <input className=" accent-[#6148FF]" type="checkbox" />
                      </div>
                      <div className="">Advance Level</div>
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
                  <button onClick={handleAll} className={`p-2 w-[100px] md:p-3 md:w-[200px] ${all ? "bg-[#6148FF] text-white" : "bg-white text-[#8A8A8A]"} rounded-2xl`}>
                    All
                  </button>
                </div>
                <div>
                  <button onClick={handleInProgress} className={`p-2 w-[150px] md:p-3 md:w-[388px] ${inProgress ? "bg-[#6148FF] text-white" : "bg-white text-[#8A8A8A]"}  rounded-2xl`}>
                    In Progress
                  </button>
                </div>
                <div>
                  <button onClick={handleSelesai} className={`p-2 w-[100px] md:p-3 md:w-[250px] ${selesai ? "bg-[#6148FF] text-white" : "bg-white text-[#8A8A8A]"} rounded-2xl`}>
                    Selesai
                  </button>
                </div>
              </div>
              <div className="md:grid grid-cols-2 md:gap-7 pt-6">
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
                </div>
                <div className="py-2 flex justify-around">
                  <CardKelasComponent />
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
