import filist from "../../assets/img/UserLogin/fi_list.png";
import fibell from "../../assets/img/UserLogin/fi_bell.png";
import fiuser from "../../assets/img/UserLogin/fi_user.png";

import { NavLink } from "react-router-dom";

const NavbarComponent = () => {
  return (
    <>
      <div className="md:w-full md:flex md:h-28 bg-[#6148FF]">
        <div className="md:flex md:w-[80%] md:mx-auto">
          <div className=" md:flex-auto md:w-64">
            <div className="md:flex md:items-center h-full">
              <div className="text-white text-4xl pr-5 items-center">Belajar</div>
              <div className=" md:ml-6">
                <input className="md:py-5 md:px-8 md:w-[526px] md:rounded-2xl md:text-md invisible md:visible" type="text" placeholder="Cari kursus terbaik.." />
              </div>
            </div>
          </div>
          <div className="flex-auto">
            <div className="flex justify-end items-center h-full">
              <div className="px-2">
                <div className={``}>
<<<<<<< HEAD
                  <NavLink to="/kelassaya" className={({ isActive }) => `flex items-center px-6 py-2 rounded-xl ${isActive ? "bg-[#489CFF] text-white" : ""}`}>
=======
                  <NavLink to="/topikkelas" className={({ isActive }) => `flex items-center px-6 py-2 rounded-xl ${isActive ? "bg-[#489CFF] text-white" : ""}`}>
>>>>>>> 2f716b32ede0325449966b217c74f625e6f9cb2a
                    {({ isActive }) => (
                      <>
                        <img src={filist} alt="Fibell" className="w- h-8" />
                        {isActive ? <span className="ml-2 text-xl">Kelas</span> : null}
                      </>
                    )}
                  </NavLink>
                </div>
              </div>
              <div className="px-2">
                <div className={``}>
<<<<<<< HEAD
                  <NavLink to="/notifikasi" className={({ isActive }) => `flex items-center px-6 py-2 rounded-xl ${isActive ? "bg-[#489CFF] text-white" : ""}`}>
                    {({ isActive }) => (
                      <>
                        <img src={fibell} alt="Fibell" className="w- h-8" />
=======
                  <NavLink to="/notifikasi" className={({ isActive }) => `flex items-center px-6 py-1 rounded-xl ${isActive ? "bg-[#489CFF] text-white" : ""}`}>
                    {({ isActive }) => (
                      <>
                        <img src={fibell} alt="Fibell" className="mt-2 h-8" />
>>>>>>> 2f716b32ede0325449966b217c74f625e6f9cb2a
                        {isActive ? <span className="ml-2 text-xl">Notifikasi</span> : null}
                      </>
                    )}
                  </NavLink>
                </div>
              </div>
              <div className="px-2">
                <div className={``}>
                  <NavLink to="/akun" className={({ isActive }) => `flex items-center px-6 py-2 rounded-xl ${isActive ? "bg-[#489CFF] text-white" : ""}`}>
                    {({ isActive }) => (
                      <>
                        <img src={fiuser} alt="Fibell" className="w- h-8" />
                        {isActive ? <span className="ml-2 text-xl">Akun</span> : null}
                      </>
                    )}
                  </NavLink>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default NavbarComponent;
