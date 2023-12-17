import logoImage from "../../assets/img/Register/Belajar_white2.png";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { login } from "../../redux/actions/authAction";

const LoginPage = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = async (event) => {
    event.preventDefault();

    dispatch(login(email, password, navigate));
  };

  return (
    <>
      <div className="flex sm:flex-col-2 h-screen w-full" style={{ fontFamily: "poppins" }}>
        {/* Ini Kiri */}
        <div className="flex flex-initial w-[100%] sm:w-[60%]">
          <div className="flex flex-col justify-center items-center h-screen w-full">
            <div className="flex flex-col w-[300px] lg:w-[452px]">
              <form onSubmit={handleLogin}>
                <div className="text-start text-2xl font-bold text-[#6148FF]" style={{ fontFamily: "sans-serif" }}>
                  Login
                </div>

                {/* Email */}
                <div className="flex flex-col mt-4">
                  <div className="text-start text-xs">Email</div>
                  <input type="email" name="email" className="mt-1 p-2 w-full rounded-xl text-black border-solid border-2" placeholder="johndoe@gmail.com" value={email} onChange={(e) => setEmail(e.target.value)} />
                </div>

                {/* Buat Password */}
                <div className="flex flex-col mt-4">
                  <div className="text-start text-xs">Password</div>
                  <input type="password" name="password" className="mt-1 p-2 w-full rounded-xl text-black border-solid border-2" placeholder="password" value={password} onChange={(e) => setPassword(e.target.value)} />
                </div>
                {/* Daftar */}
                <div className="flex flex-col mt-4">
                  <button className="bg-[#6148FF] text-white rounded-xl p-2" type="submit">
                    Masuk
                  </button>
                </div>
              </form>
            </div>
            <div className="flex m-5 text-black">
              <span>Belum punya akun?&nbsp;</span>
              <Link
                to="/register"
                className="font-bold"
                style={{
                  textDecoration: "none",
                  color: "#6148FF",
                }}
              >
                Daftar di sini
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

export default LoginPage;
