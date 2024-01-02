import NavbarComponent from "../../Components/UserLogin/NavbarComponent";
import arrowImg from "../../assets/img/UserLogin/arrow.png";
import star from "../../assets/img/Card/star.png";
import levelBadge from "../../assets/img/Card/levelBadge.png";
import book from "../../assets/img/Card/book.png";
import time from "../../assets/img/Card/time.png";
import chat from "../../assets/img/UserLogin/gridicons_chat.png";
import { Link, useParams } from "react-router-dom";
import checklist from "../../assets/img/UserLogin/checklist.png";
import fill1 from "../../assets/img/UserLogin/Fill1.png";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { getDetailsCourse } from "../../redux/actions/detailAction";
import MobileNavbar from "../../Components/UserLogin/MobileNavbar";
import MulaiBelajar from "../../Components/Popup/MulaiBelajar";

const DetailKelasSaya = () => {
  const dispatch = useDispatch();

  const { details } = useSelector((state) => state.detail);

  const [errors, setErrors] = useState({
    isError: false,
    message: null,
  });

  const { courseId } = useParams();

  useEffect(() => {
    dispatch(getDetailsCourse(courseId, setErrors, errors));
  }, []);

  return (
    <>
      <MulaiBelajar />

      <div className="flex w-full flex-col" key={details.id}>
        {/* Navbar */}
        <div className="hidden md:block">
          <NavbarComponent />
        </div>
        <div className="md:hidden">
          <MobileNavbar />
        </div>
        {/* Content */}
        <div className="flex flex-col w-full h-full lg:w-[55%] md:w-[50%]">
          <div className="flex flex-col w-full h-[250px]">
            <div className="flex absolute -z-10 w-full h-[250px] bg-[#EBF3FC]"></div>
            {/* Left Content */}
            <div className="flex w-full h-[50px] items-center">
              <img className="w-[20px] h-[20px] mx-2" src={arrowImg} alt="" />
              <Link
                to="/topikkelas"
                className="font-bold"
                style={{
                  textDecoration: "none",
                }}
              >
                Kelas Lainnya
              </Link>
            </div>
            <div className="flex w-full">
              <div className="flex justify-between w-full px-1">
                <div className="flex flex-col w-full ps-3 pr-3">
                  <div className="flex justify-between items-center">
                    <div className="flex items-center font-bold text-[#6148FF] text-3xl">
                      {details.category}
                    </div>
                    <div className="flex items-center">
                      <div>
                        <img src={star} className="" />
                      </div>
                      <div className="ms-1">{details.rating}</div>
                    </div>
                  </div>
                  <div className="font-bold text-xl">{details.name}</div>
                  <div className="font-medium my-1 text-sm">
                    by {details.mentor}
                  </div>
                  <div className="flex justify-between sm:justify-start w-full">
                    <div className="flex items-center">
                      <div className="my-auto pr-1">
                        <img src={levelBadge} />
                      </div>
                      <div className="text-xs font-medium text-[#6148FF] capitalize">
                        {details.level} Level
                      </div>
                    </div>
                    <div className="flex sm:mx-5 md:mx-10 lg:mx-20">
                      <div className="my-auto pr-1">
                        <img src={book} />
                      </div>
                      <div className="text-xs font-medium">1 Modul</div>
                    </div>
                    <div className="flex">
                      <div className="my-auto pr-1">
                        <img src={time} />
                      </div>
                      <div className="text-xs font-medium">
                        {details.duration}
                      </div>
                    </div>
                  </div>
                  <div className="flex mt-3 mb-2">
                    <Link to="https://t.me/+fgpYyFbDJ20xMGRl">
                      <button className="flex items-center justify-center bg-[#73CA5C] h-[34px] w-[230px] md:w-[269px] font-bold text-sm text-white rounded-xl">
                        <p>Join Grup Telegram</p>
                        <img
                          className="w-[22px] h-[22px] ms-2"
                          src={chat}
                          alt=""
                        />
                      </button>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="flex md:ms-4 mt-3 aspect-video xl:w-[700px] xl:h-[330px] bg-[#000000D9] md:rounded-xl">
            <iframe
              width="100%"
              height="315"
              src={details.videoUrl}
              frameBorder="0"
              allowFullScreen
              title="Movie Trailer"
              className="flex w-full relative items-center justify-center"
            ></iframe>
          </div>
          <div className="flex flex-col m-4">
            <div className="flex text-xl font-bold">Tentang Kelas</div>
            <div className="flex p-1 indent-3 text-justify">
              {details.description}
            </div>
            <div className="flex text-xl font-bold mt-1">
              Kelas Ini Ditujukan Untuk
            </div>
            <div className="flex p-1">
              <ol className="list-decimal mx-4">
                <li>{details.description}</li>
              </ol>
            </div>
          </div>
          {/* Right Content */}
          <div className="flex w-full justify-center md:absolute xl:right-28 lg:right-15 md:top-52 md:w-auto md:right-5">
            <div className="flex flex-col bg-[#fff] w-[350px] md:w-[400px] mb-4 rounded-xl shadow-md shadow-gray-400 py-3 px-5">
              <div className="flex justify-between items-center">
                <div className="text-xl font-bold">Materi Belajar</div>
                <div className="flex">
                  <img className="w-[18px] h-[18px]" src={checklist} alt="" />
                  {/* <div className="flex ms-1 w-[120px] bg-[#D9D9D9] rounded-xl">
                    <div className="flex w-[30%] bg-[#6148FF] rounded-xl text-xs "></div>
                    <p className="absolute text-xs text-[#FFFFFF]">
                      10% Complete
                    </p>
                  </div> */}
                </div>
              </div>
              <div className="flex justify-between my-2">
                <div className="text-base font-bold text-[#6148FF]">
                  Modul Belajar
                </div>
                <div className="text-base font-bold text-[#489CFF]">
                  {details.duration}
                </div>
              </div>
              {/* ===== */}
              <div className="flex items-center justify-between py-2 border-b-2">
                <div className="flex items-center">
                  <div className="flex w-[30px] h-[30px] rounded-3xl bg-[#EBF3FC] justify-center items-center">
                    <p className="text-sm font-medium">{1}</p>
                  </div>
                  <div className="flex ms-2 text-sm font-medium">
                    {details.description}
                  </div>
                </div>
                <img className="w-[18px] h-[18px] " src={fill1} alt="" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default DetailKelasSaya;
