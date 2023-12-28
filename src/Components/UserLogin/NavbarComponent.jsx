import digilearn_align from "../../assets/img/Digilearn/digilearn_align_white.png";
import filist from "../../assets/img/UserLogin/fi_list.png";
import fibell from "../../assets/img/UserLogin/fi_bell.png";
import fiuser from "../../assets/img/UserLogin/fi_user.png";
import { NavLink, Link } from "react-router-dom";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const NavbarBerandaComponent = () => {
  const [query, setQuery] = useState("");
  const navigate = useNavigate();

  const handleSearch = (event) => {
    event.preventDefault();
    navigate(`/search?name=${query}`);
  };
  return (
    <>
      <div className="px-0 mx-0 w-screen justify-center flex flex-initial h-28 bg-[#6148FF]">
        <div className="flex flex-col-2 w-[100%] sm:w-[90%]">
          {/* left Nav */}
          <div className="flex w-[60%] h-full">
            <div className="flex md:justify-center md:items-center h-full w-[100%] sm:w-[30%]">
              <Link to="/">
                <img
                  className="flex ms-6 mt-1 w-[70%]"
                  src={digilearn_align}
                  alt=""
                />
              </Link>
            </div>
            <div className="w-[20%] flex items-center flex-initial sm:visible md:w-[70%]">
              <form action="post md:flex md:text-md">
                <input
                  className="hidden py-5 px-8 w-[526px] h-[62px] rounded-2xl md:flex md:text-md md:visible"
                  type="text"
                  placeholder="Cari kursus terbaik.."
                  value={query}
                  onChange={(event) => setQuery(event.target.value)}
                />
                <button type="submit" onClick={handleSearch}></button>
              </form>
            </div>
          </div>
          {/* Right Nav */}
          <div className="flex justify-end items-center w-[40%] h-full">
            <div className="flex flex-initial">
              <div className="px-2">
                <div className={``}>
                  <NavLink
                    to="/topikkelas"
                    className={({ isActive }) =>
                      `flex items-center px-6 py-2 rounded-xl ${
                        isActive ? "bg-[#489CFF] text-white" : ""
                      }`
                    }
                  >
                    {({ isActive }) => (
                      <>
                        <img src={filist} alt="Fibell" className="w- h-8" />
                        {isActive ? (
                          <span className="ml-2 text-xl">Kelas</span>
                        ) : null}
                      </>
                    )}
                  </NavLink>
                </div>
              </div>
              <div className="px-2">
                <div className={``}>
                  <NavLink
                    to="/notifikasi"
                    className={({ isActive }) =>
                      `flex items-center px-6 py-1 rounded-xl ${
                        isActive ? "bg-[#489CFF] text-white" : ""
                      }`
                    }
                  >
                    {({ isActive }) => (
                      <>
                        <img src={fibell} alt="Fibell" className="mt-2 h-8" />
                        {isActive ? (
                          <span className="ml-2 text-xl">Notifikasi</span>
                        ) : null}
                      </>
                    )}
                  </NavLink>
                </div>
              </div>
              <div className="px-2">
                <div className={``}>
                  <NavLink
                    to="/akun"
                    className={({ isActive }) =>
                      `flex items-center px-6 py-2 rounded-xl ${
                        isActive ? "bg-[#489CFF] text-white" : ""
                      }`
                    }
                  >
                    {({ isActive }) => (
                      <>
                        <img src={fiuser} alt="Fibell" className="w- h-8" />
                        {isActive ? (
                          <span className="ml-2 text-xl">Akun</span>
                        ) : null}
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

export default NavbarBerandaComponent;
