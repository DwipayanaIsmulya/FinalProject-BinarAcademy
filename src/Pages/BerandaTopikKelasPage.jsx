import CardKelasComponent from "../Components/CardKelasComponent";
<<<<<<< HEAD
import NavbarComponent from "../Components/UserLogin/NavbarComponent";
import { useState } from "react";

const BerandaTopikKelasPage = () => {
=======
import MobileNavbar from "../Components/UserLogin/MobileNavbar";
import NavbarComponent from "../Components/UserLogin/NavbarComponent";
import filter from "../assets/img/UserLogin/filter.png";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getAllCourse } from "../redux/actions/tkCourseAction";

const BerandaTopikKelasPage = () => {
  const { allCourse } = useSelector((state) => state.tkCourse);
  const dispatch = useDispatch();
  const [filteredCourses, setFilteredCourses] = useState([]);
>>>>>>> 2f716b32ede0325449966b217c74f625e6f9cb2a
  const [all, setAll] = useState(true);
  const [kelasPremium, setKelasPremium] = useState(false);
  const [kelasGratis, setKelasGratis] = useState(false);
  const [filterBox, setFilterBox] = useState(false);
<<<<<<< HEAD
=======
  const [uiUxFilter, setUiUxFilter] = useState(false);
  const [webDevFilter, setWebDevFilter] = useState(false);
  const [androidDevFilter, setAndroidDevFilter] = useState(false);
  const [dataScienceFilter, setDataScienceFilter] = useState(false);
  const [biFilter, setBiFilter] = useState(false);
>>>>>>> 2f716b32ede0325449966b217c74f625e6f9cb2a
  const handleAll = () => {
    setAll(true);
    setKelasPremium(false);
    setKelasGratis(false);
<<<<<<< HEAD
=======
    setUiUxFilter(false);
    setWebDevFilter(false);
    setAndroidDevFilter(false);
    setDataScienceFilter(false);
    setBiFilter(false);
>>>>>>> 2f716b32ede0325449966b217c74f625e6f9cb2a
  };
  const handleKelasPremium = () => {
    setKelasPremium(true);
    setAll(false);
    setKelasGratis(false);
<<<<<<< HEAD
=======
    setUiUxFilter(false);
    setWebDevFilter(false);
    setAndroidDevFilter(false);
    setDataScienceFilter(false);
    setBiFilter(false);
>>>>>>> 2f716b32ede0325449966b217c74f625e6f9cb2a
  };
  const handleKelasGratis = () => {
    setKelasGratis(true);
    setAll(false);
    setKelasPremium(false);
<<<<<<< HEAD
=======
    setUiUxFilter(false);
    setWebDevFilter(false);
    setAndroidDevFilter(false);
    setDataScienceFilter(false);
    setBiFilter(false);
>>>>>>> 2f716b32ede0325449966b217c74f625e6f9cb2a
  };
  const handleFilterBox = () => {
    setFilterBox(!filterBox);
  };
<<<<<<< HEAD
=======
  useEffect(() => {
    const filterCourses = () => {
      let filtered = allCourse;

      if (kelasPremium) {
        filtered = filtered.filter((course) => course.isPremium);
      } else if (kelasGratis) {
        filtered = filtered.filter((course) => !course.isPremium);
      }

      if (uiUxFilter) {
        filtered = filtered.filter((course) => course.category === "UI/UX Design");
      }
      if (webDevFilter) {
        filtered = filtered.filter((course) => course.category === "Web Development");
      }
      if (androidDevFilter) {
        filtered = filtered.filter((course) => course.category === "Android Development");
      }
      if (dataScienceFilter) {
        filtered = filtered.filter((course) => course.category === "Data Science");
      }
      if (biFilter) {
        filtered = filtered.filter((course) => course.category === "Business Intelligence");
      }

      setFilteredCourses(filtered);
    };
    filterCourses();
  }, [allCourse, kelasPremium, kelasGratis, uiUxFilter, webDevFilter, androidDevFilter, dataScienceFilter, biFilter]);
  useEffect(() => {
    const filterCourses = () => {
      let filtered = allCourse;

      if (kelasPremium) {
        filtered = filtered.filter((course) => course.isPremium);
      } else if (kelasGratis) {
        filtered = filtered.filter((course) => !course.isPremium);
      }

      setFilteredCourses(filtered);
    };
    filterCourses();
  }, [allCourse, kelasPremium, kelasGratis]);

  useEffect(() => {
    dispatch(getAllCourse());
  }, [dispatch]);
>>>>>>> 2f716b32ede0325449966b217c74f625e6f9cb2a
  return (
    <>
      <div className=" h-full bg-[#EBF3FC] pb-32 md:w-full ">
        {/* Navbar */}
<<<<<<< HEAD
        <NavbarComponent />
        {/* Body */}
        <div className="md:w-[1340px] md:mx-auto">
          <div className="flex justify-around py-6 md:flex md:justify-between md:pt-16 md:pb-12">
            <div className="text-xl font-bold md:text-3xl">Topik Kelas</div>
            <div className="">
              <input className="rounded-3xl border-2 text-sm border-[#6148FF] py-1 px-2 md:py-2 md:px-3" type="text" placeholder="Cari Kelas" />
            </div>
            <button onClick={handleFilterBox} className="md:hidden">
              Filter
            </button>
          </div>
=======
        <div className="hidden md:block">
          <NavbarComponent />
        </div>
        <div className="md:hidden">
          <MobileNavbar />
        </div>

        {/* Body */}
        <div className="md:w-[1340px] md:mx-auto">
          <div className="flex justify-around py-6 md:flex md:justify-between md:pt-16 md:pb-12">
            <div className="text-xl font-bold md:text-3xl">
              Topik Kelas
              <Link to="/kelassaya">
                <div className="text-sm pt-2 text-[#6148FF] border-b-2 border-[#6148FF] hidden md:block">Lihat kelas yang sedang diikuti</div>
              </Link>
            </div>
            <div className="ml-auto">
              <input className="rounded-3xl border-2 text-xs border-[#6148FF] py-1 px-2 md:text-sm md:py-2 md:px-3 md:mt-0 " type="text" placeholder="Cari Kelas" />
            </div>
            <div>
              <img onClick={handleFilterBox} src={filter} className="w-4 mt-1 mx-1 md:hidden" />
            </div>
          </div>
          <Link to="/kelassaya" className="md:hidden">
            <div className="text-center pb-3">
              <p className="text-xs text-[#6148FF] font-bold">Lihat kelas yang diikuti</p>
            </div>
          </Link>
>>>>>>> 2f716b32ede0325449966b217c74f625e6f9cb2a
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
<<<<<<< HEAD
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
=======
                        <input className=" accent-[#6148FF]" type="checkbox" checked={uiUxFilter} onChange={() => setUiUxFilter(!uiUxFilter)} />
                      </div>
                      <div className="text-sm md:text-base">UI/UX Design</div>
                    </div>
                    <div className="flex p-2">
                      <div className="pr-4">
                        <input className=" accent-[#6148FF]" type="checkbox" checked={webDevFilter} onChange={() => setWebDevFilter(!webDevFilter)} />
                      </div>
                      <div className="text-sm md:text-base">Web Development</div>
                    </div>
                    <div className="flex p-2">
                      <div className="pr-4">
                        <input className=" accent-[#6148FF]" type="checkbox" checked={androidDevFilter} onChange={() => setAndroidDevFilter(!androidDevFilter)} />
                      </div>
                      <div className="text-sm md:text-base">Android Development</div>
                    </div>
                    <div className="flex p-2">
                      <div className="pr-4">
                        <input className=" accent-[#6148FF]" type="checkbox" checked={dataScienceFilter} onChange={() => setDataScienceFilter(!dataScienceFilter)} />
                      </div>
                      <div className="text-sm md:text-base">Data Science</div>
                    </div>
                    <div className="flex p-2">
                      <div className="pr-4">
                        <input className=" accent-[#6148FF]" type="checkbox" checked={biFilter} onChange={() => setBiFilter(!biFilter)} />
                      </div>
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
                    </div>
                  </div>
                  <div className="pt-5 pb-3 text-center">
                    <button className="text-[#FF0000] hover:text-[#ff0000]">Hapus Filter</button>
=======
                      <div className="text-sm md:text-base">Advance Level</div>
                    </div>
                  </div>
                  <div className="pt-5 pb-3 text-center">
                    <button className="text-[#FF0000] hover:text-[#ff0000] text-sm md:text-base">Hapus Filter</button>
>>>>>>> 2f716b32ede0325449966b217c74f625e6f9cb2a
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
                  <button onClick={handleKelasPremium} className={`p-2 w-[150px] md:p-3 md:w-[388px] ${kelasPremium ? "bg-[#6148FF] text-white" : "bg-white text-[#8A8A8A]"}  rounded-2xl`}>
=======
                  <button onClick={handleKelasPremium} className={`p-2 w-[110px] md:p-3 md:w-[388px] ${kelasPremium ? "bg-[#6148FF] text-white" : "bg-white text-[#8A8A8A]"} text-xs md:text-base rounded-2xl`}>
>>>>>>> 2f716b32ede0325449966b217c74f625e6f9cb2a
                    Kelas Premium
                  </button>
                </div>
                <div>
<<<<<<< HEAD
                  <button onClick={handleKelasGratis} className={`p-2 w-[150px] md:p-3 md:w-[250px] ${kelasGratis ? "bg-[#6148FF] text-white" : "bg-white text-[#8A8A8A]"} rounded-2xl`}>
=======
                  <button onClick={handleKelasGratis} className={`p-2 w-[110px] md:p-3 md:w-[250px] ${kelasGratis ? "bg-[#6148FF] text-white" : "bg-white text-[#8A8A8A]"} rounded-2xl text-xs md:text-base`}>
>>>>>>> 2f716b32ede0325449966b217c74f625e6f9cb2a
                    Kelas Gratis
                  </button>
                </div>
              </div>
              <div className="md:grid grid-cols-2 md:gap-7 pt-6">
<<<<<<< HEAD
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
=======
                {filteredCourses.map((course) => (
                  <div className="py-2 flex justify-around" key={course.id}>
                    <CardKelasComponent name={course.name} level={course.level} price={course.price} isPremium={course.isPremium} category={course.category} />
                  </div>
                ))}
>>>>>>> 2f716b32ede0325449966b217c74f625e6f9cb2a
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default BerandaTopikKelasPage;
