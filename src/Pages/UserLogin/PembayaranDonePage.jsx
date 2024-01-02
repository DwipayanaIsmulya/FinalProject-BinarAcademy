import NavbarComponent from "../../Components/UserLogin/NavbarComponent";
import MobileNavbar from "../../Components/UserLogin/MobileNavbar";
import arrow from "../../assets/img/UserLogin/arrow.png";
import done from "../../assets/img/UserLogin/paymentdone.png";

const PembayaranDonePage = () => {
  return (
    <>
      <div className=" h-full bg-[#FFFF] pb-32 md:w-full ">
        {/* Navbar */}
        <div className="hidden md:block">
          <NavbarComponent />
        </div>
        <div className="md:hidden">
          <MobileNavbar />
        </div>

        <div className="md:w-[80%] md:mx-auto">
          <div className="flex pt-4">
            <div>
              <img src={arrow} />
            </div>
            <div className="font-medium pl-2">Kembali</div>
          </div>
          <div className="w-[80%] mx-auto">
            <div className="bg-[#73CA5C] text-white text-center my-14 py-2 rounded-xl md:py-4 md:text-xl">Terimakasih atas pembayaran transaksi</div>
          </div>
          <div className="mx-auto">
            <div className="text-center text-3xl text-[#6148FF] font-bold">Selamat!</div>
            <div>
              <img src={done} className="mx-auto pt-8" />
            </div>
            <div className="w-[80%] mx-auto">
              <div className="text-center pt-10 font-bold">Transaksi pembayaran kelas premium berhasil!</div>
              <div className="text-center font-medium">E-receipt telah dikirimkan ke email.</div>
              <div className="pt-24 text-center">
                <button className=" bg-[#6148FF]  px-24 py-2 rounded-2xl text-center text-white font-medium">Mulai Belajar</button>
              </div>
              <div className="text-center">
                <button className=" bg-white  px-24 py-2 rounded-2xl text-center text-[#489CFF] font-medium">Kembali ke Beranda</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default PembayaranDonePage;
