import filist from "../../assets/img/UserLogin/fi_list.png";
import fibell from "../../assets/img/UserLogin/fi_bell.png";
import fiuser from "../../assets/img/UserLogin/fi_user.png";
import digilearn_align from "../../assets/img/Digilearn/digilearn_align_white.png";
import { NavLink, Link } from "react-router-dom";

const MobileNavbar = () => {
  return (
    <>
      <div className="w-full h-24 bg-[#6148FF] flex items-center px-4 ">
        <div className="flex-1">
          <Link to="/">
            <img src={digilearn_align} className="w-[80%]" />
          </Link>
        </div>
        <div className="flex-1">
          <div className="flex items-center justify-end  ">
            <NavLink
              to="/topikkelas"
              className={({ isActive }) =>
                isActive ? "bg-[#489CFF] py-2 rounded-md" : ""
              }
            >
              <img src={filist} className="px-4 w-[150%]" />
            </NavLink>
            <NavLink
              to="/notifikasi"
              className={({ isActive }) =>
                isActive ? "bg-[#489CFF] rounded-md" : ""
              }
            >
              <img src={fibell} className="px-4 w-[150%] mt-2" />
            </NavLink>
            <NavLink
              to="/akun"
              className={({ isActive }) =>
                isActive ? "bg-[#489CFF] py-2 rounded-md" : ""
              }
            >
              <img src={fiuser} className="px-4 w-[150%]" />
            </NavLink>
          </div>
        </div>
      </div>
    </>
  );
};

export default MobileNavbar;
