import NavbarComponent from "../../Components/UserLogin/NavbarComponent";
import arrowImg from "../../assets/img/UserLogin/arrow.png";
import star from "../../assets/img/Card/star.png";
import levelBadge from "../../assets/img/Card/levelBadge.png";
import book from "../../assets/img/Card/book.png";
import time from "../../assets/img/Card/time.png";
import chat from "../../assets/img/UserLogin/gridicons_chat.png";
import oval from "../../assets/img/UserLogin/Oval.png";
import play from "../../assets/img/UserLogin/Group6.png";
import { Link } from "react-router-dom";
import checklist from "../../assets/img/UserLogin/checklist.png";
import fill1 from "../../assets/img/UserLogin/Fill1.png";
import lock from "../../assets/img/UserLogin/lock.png";

const DetailKelas = () => {
  return (
    <>
      <div className="flex w-full flex-col">
        {/* Navbar */}
        <NavbarComponent />
        {/* Content */}
        <div className="flex flex-col w-full h-full lg:w-[55%] md:w-[50%]">
          <div className="flex flex-col w-full h-[250px]">
            <div className="flex absolute -z-10 w-full w-full h-[250px] bg-[#EBF3FC]"></div>
            {/* Left Content */}
            <div className="flex w-full h-[50px] items-center">
              <img className="w-[20px] h-[20px] mx-2" src={arrowImg} alt="" />
              <Link
                to="/kelassaya"
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
                      UI/UX Design
                    </div>
                    <div className="flex items-center">
                      <div>
                        <img src={star} className="" />
                      </div>
                      <div className="ms-1">4.7</div>
                    </div>
                  </div>
                  <div className="font-bold text-xl">
                    Intro to Basic of User Interaction Design
                  </div>
                  <div className="font-medium my-1 text-sm">by Simon Doe</div>
                  <div className="flex justify-between sm:justify-start w-full">
                    <div className="flex items-center">
                      <div className="my-auto pr-1">
                        <img src={levelBadge} />
                      </div>
                      <div className="text-xs font-medium text-[#6148FF]">
                        Beginner Level
                      </div>
                    </div>
                    <div className="flex sm:mx-5 md:mx-10 lg:mx-20">
                      <div className="my-auto pr-1">
                        <img src={book} />
                      </div>
                      <div className="text-xs font-medium">5 Modul</div>
                    </div>
                    <div className="flex">
                      <div className="my-auto pr-1">
                        <img src={time} />
                      </div>
                      <div className="text-xs font-medium">45 Menit</div>
                    </div>
                  </div>
                  <div className="flex mt-3 mb-2">
                    <button className="flex items-center justify-center bg-[#73CA5C] h-[34px] w-[230px] md:w-[269px] font-bold text-sm text-white rounded-xl">
                      <p>Join Grup Telegram</p>
                      <img
                        className="w-[22px] h-[22px] ms-2"
                        src={chat}
                        alt=""
                      />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="flex md:ms-4 mt-3 aspect-video xl:w-[700px] xl:h-[330px] bg-[#000000D9] md:rounded-xl">
            <div className="flex w-full relative items-center justify-center">
              <img className="w-[63px] h-[63px]" src={oval} alt="" />
              <img className="w-[26px] h-[20px] absolute" src={play} alt="" />
            </div>
          </div>
          <div className="flex flex-col m-4">
            <div className="flex text-xl font-bold">Tentang Kelas</div>
            <div className="flex p-1 indent-3 text-justify">
              Design system adalah kumpulan komponen design, code, ataupun
              dokumentasi yang dapat digunakan sebagai panduan utama yang
              memunginkan designer serta developer memiliki lebih banyak kontrol
              atas berbagai platform. Dengan hadirnya design system, dapat
              menjaga konsistensi tampilan user interface dan meningkatkan user
              experience menjadi lebih baik. Disisi bisnis, design system sangat
              berguna dalam menghemat waktu dan biaya ketika mengembangkan suatu
              produk. Bersama mentor XXX, kita akan mempelajari design system
              dari mulai manfaat, alur kerja pembuatannya, tools yang digunakan,
              hingga pada akhirnya, kita akan membuat MVP dari design system.
              Selain itu, mentor juga akan menjelaskan berbagai resource yang
              dibutuhkan untuk mencari inspirasi mengenai design system. Kelas
              ini sesuai untuk Anda yang ingin memahami apa itu design system.
              Tidak hanya ditujukan untuk UI/UX Designer ataupun Developer,
              kelas ini sangat sesuai untuk stakeholder lain agar dapat
              memudahkan tim dalam bekerja sama. Yuk segera daftar dan kami
              tunggu di kelas ya!
            </div>
            <div className="flex text-xl font-bold mt-1">
              Kelas Ini Ditujukan Untuk
            </div>
            <div className="flex p-1">
              <ol className="list-decimal mx-4">
                <li>Anda yang ingin memahami poin design</li>
                <li>Anda yang ingin membantu perusahaan</li>
                <li>Anda yang ingin latihan design system</li>
              </ol>
            </div>
          </div>
          {/* Right Content */}
          <div className="flex w-full justify-center md:absolute xl:right-28 lg:right-15 md:top-52 md:w-auto md:right-5">
            <div className="flex flex-col bg-[#fff] w-[350px] md:w-[400px] mb-4 rounded-xl shadow-md shadow-gray-400 h-[500px] py-3 px-5">
              <div className="flex justify-between items-center">
                <div className="text-xl font-bold">Materi Belajar</div>
                <div className="flex">
                  <img className="w-[18px] h-[18px]" src={checklist} alt="" />
                  <div className="flex ms-1 w-[120px] bg-[#D9D9D9] rounded-xl">
                    <div className="flex w-[30%] bg-[#6148FF] rounded-xl text-xs "></div>
                    <p className="absolute text-xs text-[#FFFFFF]">
                      10% Complete
                    </p>
                  </div>
                </div>
              </div>
              <div className="flex justify-between my-2">
                <div className="text-base font-bold text-[#6148FF]">
                  Chapter 1 - Pendahuluan
                </div>
                <div className="text-base font-bold text-[#489CFF]">
                  60 Menit
                </div>
              </div>
              {/* ===== */}
              <div className="flex items-center justify-between py-2 border-b-2">
                <div className="flex items-center">
                  <div className="flex w-[30px] h-[30px] rounded-3xl bg-[#EBF3FC] justify-center items-center">
                    <p className="text-sm font-medium">1</p>
                  </div>
                  <div className="flex ms-1 text-sm font-medium">
                    Tujuan Mengikuti Kelas Design System
                  </div>
                </div>
                <img className="w-[18px] h-[18px] " src={fill1} alt="" />
              </div>
              {/* ===== */}
              <div className="flex items-center justify-between py-2 border-b-2">
                <div className="flex items-center">
                  <div className="flex w-[30px] h-[30px] rounded-3xl bg-[#EBF3FC] justify-center items-center">
                    <p className="text-sm font-medium">2</p>
                  </div>
                  <div className="flex ms-1 text-sm font-medium">
                    Pengenalan Design System
                  </div>
                </div>
                <img className="w-[18px] h-[18px] " src={fill1} alt="" />
              </div>
              {/* ===== */}
              <div className="flex items-center justify-between py-2 border-b-2">
                <div className="flex items-center">
                  <div className="flex w-[30px] h-[30px] rounded-3xl bg-[#EBF3FC] justify-center items-center">
                    <p className="text-sm font-medium">3</p>
                  </div>
                  <div className="flex ms-1 text-sm font-medium">
                    Contoh Membangun Design System
                  </div>
                </div>
                <img className=" w-[18px] h-[18px] " src={fill1} alt="" />
              </div>
              <div className="flex justify-between my-2 mb-3">
                <div className="text-base font-bold text-[#6148FF]">
                  Chapter 2 - Memulai Desain
                </div>
                <div className="text-base font-bold text-[#489CFF]">
                  120 Menit
                </div>
              </div>
              {/* ===== */}
              <div className="flex items-center justify-between py-2 border-b-2">
                <div className="flex items-center">
                  <div className="flex w-[30px] h-[30px] rounded-3xl bg-[#EBF3FC] justify-center items-center">
                    <p className="text-sm font-medium">4</p>
                  </div>
                  <div className="flex ms-1 text-sm font-medium">
                    Color Palette
                  </div>
                </div>
                <img className="w-[16px] h-[20px] " src={lock} alt="" />
              </div>
              {/* ===== */}
              <div className="flex items-center justify-between py-2 border-b-2">
                <div className="flex items-center">
                  <div className="flex w-[30px] h-[30px] rounded-3xl bg-[#EBF3FC] justify-center items-center">
                    <p className="text-sm font-medium">5</p>
                  </div>
                  <div className="flex ms-1 text-sm font-medium">
                    Typography, Layout dan Grid
                  </div>
                </div>
                <img className="w-[16px] h-[20px] " src={lock} alt="" />
              </div>
              {/* ===== */}
              <div className="flex items-center justify-between py-2 border-b-2">
                <div className="flex items-center">
                  <div className="flex w-[30px] h-[30px] rounded-3xl bg-[#EBF3FC] justify-center items-center">
                    <p className="text-sm font-medium">6</p>
                  </div>
                  <div className="flex ms-1 text-sm font-medium">
                    Membuat Component
                  </div>
                </div>
                <img className="w-[16px] h-[20px] " src={lock} alt="" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default DetailKelas;