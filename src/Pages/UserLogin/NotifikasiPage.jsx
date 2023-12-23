import MobileNavbar from "../../Components/UserLogin/MobileNavbar";
import NavbarComponent from "../../Components/UserLogin/NavbarComponent";
import arrowPurple from "../../assets/img/UserLogin/arrowpurple.png";
import notifSimbol from "../../assets/img/UserLogin/notifsimbol.png";
import { Link } from "react-router-dom";

const NotifikasiPage = () => {
  return (
    <>
      <div className="h-screen bg-[#EBF3FC] md:w-full ">
        {/* Navbar */}
        <div className="hidden md:block">
          <NavbarComponent />
        </div>
        <div className="md:hidden">
          <MobileNavbar />
        </div>
        <div className="flex py-4 md:pl-48">
          <img src={arrowPurple} />
          <Link to="/beranda">
            <p className="md:text-xl pl-2 text-[#6148FF] font-bold">Kembali ke Beranda</p>
          </Link>
        </div>
        <div className="md:w-[1240px] w-[320px] mx-auto py-4">
          <div className="w-full border-2 border-[#6148FF] rounded-xl bg-white ">
            <div className="bg-[#6148FF] rounded-t-xl py-4 text-center mx-auto">
              <p className="text-white font-bold text-xl">Notifikasi</p>
            </div>
            <div className="px-2 py-4 md:px-16">
              <div className="flex items-center justify-around">
                <div className="md:flex-none">
                  <img src={notifSimbol} className="" />
                </div>
                <div className="md:flex-auto md:pl-3 pl-2">
                  <p className="md:text-xl text-[#6148FF] font-medium">Promosi</p>
                  <p className="md:text-base font-medium text-sm">Dapatkan potongan sebanyak 50%!</p>
                  <p className="md:text-base text-sm">Syarat dan ketentuan berlaku</p>
                </div>
                <div className="md:flex-auto">
                  <div className="flex md:justify-end">
                    <p className="md:text-base text-sm">2 Maret 12:00</p>
                    <img src="" />
                  </div>
                </div>
              </div>
            </div>
            <div className="px-2 py-4 md:px-16">
              <div className="flex items-center justify-around">
                <div className="md:flex-none">
                  <img src={notifSimbol} className="" />
                </div>
                <div className="md:flex-auto md:pl-3 pl-2">
                  <p className="md:text-xl text-[#6148FF] font-medium">Promosi</p>
                  <p className="md:text-base font-medium text-sm">Dapatkan potongan sebanyak 50%!</p>
                  <p className="md:text-base text-sm">Syarat dan ketentuan berlaku</p>
                </div>
                <div className="md:flex-auto">
                  <div className="flex md:justify-end">
                    <p className="md:text-base text-sm">2 Maret 12:00</p>
                    <img src="" />
                  </div>
                </div>
              </div>
            </div>
            <div className="px-2 py-4 md:px-16">
              <div className="flex items-center justify-around">
                <div className="md:flex-none">
                  <img src={notifSimbol} className="" />
                </div>
                <div className="md:flex-auto md:pl-3 pl-2">
                  <p className="md:text-xl text-[#6148FF] font-medium">Promosi</p>
                  <p className="md:text-base font-medium text-sm">Dapatkan potongan sebanyak 50%!</p>
                  <p className="md:text-base text-sm">Syarat dan ketentuan berlaku</p>
                </div>
                <div className="md:flex-auto">
                  <div className="flex md:justify-end">
                    <p className="md:text-base text-sm">2 Maret 12:00</p>
                    <img src="" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default NotifikasiPage;
