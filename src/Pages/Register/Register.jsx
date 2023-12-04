import { Link } from "react-router-dom";
import logoImage from "../../assets/img/Register/Belajar_white2.png";

const Register = () => {
  return (
    <>
      <div className="flex sm:flex-col-2 h-screen w-full" style={{ fontFamily: "poppins" }}>
        {/* Ini Kiri */}
        <div className="flex flex-initial w-[100%] sm:w-[60%]">
          <div className="flex flex-col justify-center items-center h-screen w-full">
            <div className="flex flex-col flex w-[300px] lg:w-[452px]">
              <div className="text-start text-2xl font-bold text-[#6148FF]" style={{ fontFamily: "sans-serif" }}>
                Daftar
              </div>
              {/* Nama */}
              <div className="flex flex-col mt-4">
                <div className="text-start text-xs">Nama</div>
                <input type="text" className="mt-1 p-2 w-full rounded-xl text-black border-solid border-2" placeholder="Nama Lengkap" />
              </div>
              {/* Email */}
              <div className="flex flex-col mt-4">
                <div className="text-start text-xs">Email</div>
                <input type="text" className="mt-1 p-2 w-full rounded-xl text-black border-solid border-2" placeholder="Contoh: johndee@gmail.com" />
              </div>
              {/* Nomor Telepon */}
              <div className="flex flex-col mt-4">
                <div className="text-start text-xs">Nomor Telepon</div>
                <input type="text" className="mt-1 p-2 w-full rounded-xl text-black border-solid border-2" placeholder="+62" />
              </div>
              {/* Buat Password */}
              <div className="flex flex-col mt-4">
                <div className="text-start text-xs">Buat Password</div>
                <input type="text" className="mt-1 p-2 w-full rounded-xl text-black border-solid border-2" placeholder="Buat Password" />
              </div>
              {/* Daftar */}
              <div className="flex flex-col mt-4">
                <button className="bg-[#6148FF] text-white rounded-xl p-2">Daftar</button>
              </div>
            </div>
            <div className="flex m-5 text-black">
              <span>Sudah punya akun?&nbsp;</span>
              <Link
                to="/login"
                className="font-bold"
                style={{
                  textDecoration: "none",
                  color: "#6148FF",
                }}
              >
                Masuk di sini
              </Link>
            </div>
          </div>
        </div>
        {/* Ini Kanan */}
        <div className="collapse bg-[#6148FF] flex-initial w-[0%] sm:visible sm:w-[40%]">
          <div className="flex justify-center items-center text-white w-full h-screen">
            <img className="w-[60%]" src={logoImage} alt="" />
          </div>
        </div>
      </div>
    </>
  );
};

export default Register;
