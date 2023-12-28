import { useDispatch, useSelector } from "react-redux";
import { useState, useEffect } from "react";
import { getSearchCourse } from "../../redux/actions/searchAction";
import { useSearchParams } from "react-router-dom";
import NavbarComponent from "../../Components/UserLogin/NavbarComponent";
import MobileNavbar from "../../Components/UserLogin/MobileNavbar";
import CardKelasComponent from "../../Components/CardKelasComponent";
import arrowPurple from "../../assets/img/UserLogin/arrowpurple.png";
import { Link } from "react-router-dom";

const SearchCourse = () => {
  const [searchParams] = useSearchParams();

  const query = searchParams.get("name");

  const dispatch = useDispatch();

  const { search } = useSelector((state) => state.search);

  const [errors, setErrors] = useState({
    isError: false,
    message: null,
  });

  useEffect(() => {
    dispatch(getSearchCourse(setErrors, errors, query));
  }, []);

  if (search.length === 0) {
    return (
      <div>
        <h1>Result not found for ~{searchParams.get("name")}</h1>
      </div>
    );
  }

  return (
    <>
      <div className=" h-screen bg-[#EBF3FC] pb-32 md:w-screen ">
        {/* Navbar */}
        <div className="hidden md:block">
          <NavbarComponent />
        </div>
        <div className="md:hidden">
          <MobileNavbar />
        </div>
        <div className="flex py-4 md:pl-48">
          <img src={arrowPurple} />
          <Link to="/">
            <p className="md:text-xl pl-2 text-[#6148FF] font-bold">Kembali ke Beranda</p>
          </Link>
        </div>
        <div className="md:grid grid-cols-2 md:gap-7 pt-6">
          {search.map((course) => (
            <div className="py-2 flex justify-around hover:scale-105 duration-300" key={course.id}>
              <CardKelasComponent id={course.id} name={course.name} level={course.level} price={course.price} isPremium={course.isPremium} category={course.category} rating={course.rating} duration={course.duration} />
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default SearchCourse;
