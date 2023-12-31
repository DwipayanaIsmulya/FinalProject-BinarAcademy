import NavbarComponent from "../../Components/UserLogin/NavbarComponent";
import MobileNavbar from "../../Components/UserLogin/MobileNavbar";
import ProgressCardKelasComponent from "../../Components/ProgressCardKelasComponent";
import filter from "../../assets/img/UserLogin/filter.png";
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getMyCourse } from "../../redux/actions/ksCourseAction";

const BerandaKelasSayaPage = () => {
  const { myCourse } = useSelector((state) => state.ksCourse);
  const dispatch = useDispatch();
  const [filteredCourses, setFilteredCourses] = useState([]);
  const [all, setAll] = useState(true);
  const [inProgress, setInProgress] = useState(false);
  const [selesai, setSelesai] = useState(false);
  const [filterBox, setFilterBox] = useState(false);
  const [uiUxFilter, setUiUxFilter] = useState(false);
  const [webDevFilter, setWebDevFilter] = useState(false);
  const [androidDevFilter, setAndroidDevFilter] = useState(false);
  const [dataScienceFilter, setDataScienceFilter] = useState(false);
  const [biFilter, setBiFilter] = useState(false);
  const handleAll = () => {
    setAll(true);
    setInProgress(false);
    setSelesai(false);
    setUiUxFilter(false);
    setWebDevFilter(false);
    setAndroidDevFilter(false);
    setDataScienceFilter(false);
    setBiFilter(false);
  };
  const handleInProgress = () => {
    setInProgress(true);
    setAll(false);
    setSelesai(false);
    setUiUxFilter(false);
    setWebDevFilter(false);
    setAndroidDevFilter(false);
    setDataScienceFilter(false);
    setBiFilter(false);
  };
  const handleSelesai = () => {
    setSelesai(true);
    setAll(false);
    setInProgress(false);
    setUiUxFilter(false);
    setWebDevFilter(false);
    setAndroidDevFilter(false);
    setDataScienceFilter(false);
    setBiFilter(false);
  };
  const handleFilterBox = () => {
    setFilterBox(!filterBox);
  };

  useEffect(() => {
    const filterCourses = () => {
      let filtered = myCourse;

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
  }, [myCourse, uiUxFilter, webDevFilter, androidDevFilter, dataScienceFilter, biFilter]);

  useEffect(() => {
    dispatch(getMyCourse());
  }, [dispatch]);
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
            <div className="text-xl font-bold md:text-3xl">Kelas Berjalan</div>
            <div className="ml-auto">
              <input className="rounded-3xl border-2 text-xs border-[#6148FF] py-1 px-2 md:text-sm md:py-2 md:px-3" type="text" placeholder="Cari Kelas" />
            </div>
            <div>
              <img onClick={handleFilterBox} src={filter} className="w-4 mt-1 mx-1 md:hidden" />
            </div>
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
                      <div className="text-sm md:text-base">Paling Baru</div>
                    </div>
                    <div className="flex p-2">
                      <div className="pr-4">
                        <input className=" accent-[#6148FF]" type="checkbox" />
                      </div>
                      <div className="text-sm md:text-base">Paling Popular</div>
                    </div>
                    <div className="flex p-2">
                      <div className="pr-4">
                        <input className=" accent-[#6148FF]" type="checkbox" />
                      </div>
                      <div className="text-sm md:text-base">Promo</div>
                    </div>
                  </div>
                  <div className="font-bold  md:text-xl">Kategori</div>
                  <div className="p-2">
                    <div className="flex p-2">
                      <div className="pr-4">
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
                    </div>
                  </div>
                  <div className="font-bold  md:text-xl">Level Kesulitan</div>
                  <div className="p-2">
                    <div className="flex p-2">
                      <div className="pr-4">
                        <input className=" accent-[#6148FF]" type="checkbox" />
                      </div>
                      <div className="text-sm md:text-base">Semua Level</div>
                    </div>
                    <div className="flex p-2">
                      <div className="pr-4">
                        <input className=" accent-[#6148FF]" type="checkbox" />
                      </div>
                      <div className="text-sm md:text-base">Beginner Level</div>
                    </div>
                    <div className="flex p-2">
                      <div className="pr-4">
                        <input className=" accent-[#6148FF]" type="checkbox" />
                      </div>
                      <div className="text-sm md:text-base">Intermediate Level</div>
                    </div>
                    <div className="flex p-2">
                      <div className="pr-4">
                        <input className=" accent-[#6148FF]" type="checkbox" />
                      </div>
                      <div className="text-sm md:text-base">Advance Level</div>
                    </div>
                  </div>
                  <div className="pt-5 pb-3 text-center">
                    <button className="text-[#FF0000] hover:text-[#ff0000]">
                      Hapus Filter
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <div className="pt-4 md:w-[970px] md:ml-auto md:pt-0">
              <div className="flex justify-around md:justify-between">
                <div>
                  <button onClick={handleAll} className={`p-2 w-[110px] md:p-3 md:w-[200px] ${all ? "bg-[#6148FF] text-white" : "bg-white text-[#8A8A8A]"} rounded-2xl text-xs md:text-base`}>
                    All
                  </button>
                </div>
                <div>
                  <button onClick={handleInProgress} className={`p-2 w-[110px] md:p-3 md:w-[388px] ${inProgress ? "bg-[#6148FF] text-white" : "bg-white text-[#8A8A8A]"}  rounded-2xl text-xs md:text-base`}>
                    In Progress
                  </button>
                </div>
                <div>
                  <button onClick={handleSelesai} className={`p-2 w-[110px] md:p-3 md:w-[250px] ${selesai ? "bg-[#6148FF] text-white" : "bg-white text-[#8A8A8A]"} rounded-2xl text-xs md:text-base`}>
                    Selesai
                  </button>
                </div>
              </div>
              <div className="md:grid grid-cols-2 md:gap-7 pt-6">
                {filteredCourses.map((course) => (
                  <div className="py-2 flex justify-around hover:scale-105 duration-300" key={course.id}>
                    <ProgressCardKelasComponent id={course.id} name={course.name} level={course.level} category={course.category} rating={course.rating} duration={course.duration} mentor={course.mentor} />
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

export default BerandaKelasSayaPage;
