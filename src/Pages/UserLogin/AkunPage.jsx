import EditProfileComponent from "../../Components/UserLogin/EditProfileComponent";
import MobileNavbar from "../../Components/UserLogin/MobileNavbar";
import NavbarComponent from "../../Components/UserLogin/NavbarComponent";
import arrowPurple from "../../assets/img/UserLogin/arrowpurple.png";
import edit from "../../assets/img/UserLogin/edit.png";
import settings from "../../assets/img/UserLogin/settings.png";
import cart from "../../assets/img/UserLogin/cart.png";
import logout from "../../assets/img/UserLogin/logout.png";
import { Link } from "react-router-dom";
import { useState } from "react";
import PasswordSettingsComponent from "../../Components/UserLogin/PasswordSettingsComponent";
import RiwayatPembelianComponent from "../../Components/UserLogin/RiwayatPembelianComponent";

const AkunPage = () => {
  const [editProfil, setEditProfil] = useState(true);
  const [passwordSettings, setPasswordSettings] = useState(false);
  const [riwayatPembelian, setRiwayatPembelian] = useState(false);
  const handleEditProfile = () => {
    setEditProfil(true);
    setPasswordSettings(false);
    setRiwayatPembelian(false);
  };
  const handlePasswordSettings = () => {
    setPasswordSettings(true);
    setEditProfil(false);
    setRiwayatPembelian(false);
  };
  const handleRiwayatPembelian = () => {
    setRiwayatPembelian(true);
    setEditProfil(false);
    setPasswordSettings(false);
  };

  return (
    <>
      <div className={`${passwordSettings ? "h-screen" : "h-full"} bg-[#EBF3FC] pb-32 md:w-full`}>
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
              <p className="text-white font-bold text-xl">Akun</p>
            </div>
            <div className="flex justify-around py-3 md:hidden">
              <div onClick={handleEditProfile} className={`${editProfil ? "border-2 border-[#6148FF]" : ""}`}>
                <img src={edit} />
              </div>
              <div onClick={handlePasswordSettings} className={`${passwordSettings ? "border-2 border-[#6148FF]" : ""}`}>
                <img src={settings} />
              </div>
              <div onClick={handleRiwayatPembelian} className={`${riwayatPembelian ? "border-2 border-[#6148FF]" : ""}`}>
                <img src={cart} />
              </div>
              <div>
                <img src={logout} />
              </div>
            </div>
            <div className="hidden md:block">
              <div className="flex justify-between px-5">
                <div className="p-2 w-[450px]">
                  <div className="pb-8">
                    <div className="flex py-4 hover:border-b" onClick={handleEditProfile}>
                      <img src={edit} className="" />
                      <p className="pl-2 text-xl font-medium ">Profil Saya</p>
                    </div>
                  </div>
                  <div className="pb-8">
                    <div className="flex py-4 hover:border-b" onClick={handlePasswordSettings}>
                      <img src={settings} className="" />
                      <p className="pl-2 text-xl font-medium ">Ubah Password</p>
                    </div>
                  </div>
                  <div className="pb-8">
                    <div className="flex py-4 hover:border-b" onClick={handleRiwayatPembelian}>
                      <img src={cart} className="" />
                      <p className="pl-2 text-xl font-medium ">Riwayat Pembayaran</p>
                    </div>
                  </div>
                  <div className="pb-8">
                    <div className="flex py-4 hover:border-b">
                      <img src={logout} className="" />
                      <p className="pl-2 text-xl font-medium ">Keluar</p>
                    </div>
                  </div>
                </div>
                <div className="mx-auto">
                  <div className="px-5 w-[550px]">{editProfil ? <EditProfileComponent /> : passwordSettings ? <PasswordSettingsComponent /> : riwayatPembelian ? <RiwayatPembelianComponent /> : null}</div>
                </div>
              </div>
            </div>
            <div className="md:hidden">
              <div className="px-5">{editProfil ? <EditProfileComponent /> : passwordSettings ? <PasswordSettingsComponent /> : riwayatPembelian ? <RiwayatPembelianComponent /> : null}</div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AkunPage;
