import CardKelasComponent from "../Components/CardKelasComponent";
import MobileNavbar from "../Components/UserLogin/MobileNavbar";
import NavbarComponent from "../Components/UserLogin/NavbarComponent";
import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";


const BerandaTopikKelasPage = () => {
  const [all, setAll] = useState(true);
  const [kelasPremium, setKelasPremium] = useState(false);
  const [kelasGratis, setKelasGratis] = useState(false);
  const [filterBox, setFilterBox] = useState(false);
  const [allCourse, setAllCourse] = useState([]);
  const [filteredCourses, setFilteredCourses] = useState([]);
  const handleAll = () => {
    setAll(true);
    setKelasPremium(false);
    setKelasGratis(false);
  };
  const handleKelasPremium = () => {
    setKelasPremium(true);
    setAll(false);
    setKelasGratis(false);
  };
  const handleKelasGratis = () => {
    setKelasGratis(true);
    setAll(false);
    setKelasPremium(false);
  };
  const handleFilterBox = () => {
    setFilterBox(!filterBox);
  };
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
    const getData = async () => {
      try {
        const response = await axios.get("https://fpbejs-production.up.railway.app/api/v1/course", {
          headers: {
            Authorization: "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MiwiZW1haWwiOiJNdWx5YTI2QHlhaG9vLmNvbSIsImlhdCI6MTcwMjIzMDQ5OX0.Firorna3YFlxqNSaquzk5qlM8Hp7GHLoHgAbQUJT7AY",
          },
        });

        const { data } = response.data;
        setAllCourse(data);
        console.log(allCourse);
      } catch (error) {
        alert(error.message);
      }
    };
    getData();
  }, []);
  return (
    <>
      <div className=" h-full bg-[#EBF3FC] pb-32 md:w-full ">
        {/* Navbar */}
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
                <div className="text-sm pt-2 text-[#6148FF] border-b-2 border-[#6148FF]">Lihat kelas yang sedang diikuti</div>
              </Link>
            </div>
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
                  <button onClick={handleKelasPremium} className={`p-2 w-[150px] md:p-3 md:w-[388px] ${kelasPremium ? "bg-[#6148FF] text-white" : "bg-white text-[#8A8A8A]"}  rounded-2xl`}>
                    Kelas Premium
                  </button>
                </div>
                <div>
                  <button onClick={handleKelasGratis} className={`p-2 w-[150px] md:p-3 md:w-[250px] ${kelasGratis ? "bg-[#6148FF] text-white" : "bg-white text-[#8A8A8A]"} rounded-2xl`}>
                    Kelas Gratis
                  </button>
                </div>
              </div>
              <div className="md:grid grid-cols-2 md:gap-7 pt-6">
                {filteredCourses.map((course) => (
                  <div className="py-2 flex justify-around" key={course.id}>
                    <CardKelasComponent name={course.name} level={course.level} price={course.price} isPremium={course.isPremium} categoryId={course.categoryId} />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default BerandaTopikKelasPage;
