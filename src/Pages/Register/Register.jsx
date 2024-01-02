import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import { useDispatch } from "react-redux";
import digilearn_banner from "../../assets/img/Digilearn/digilearn_banner.png";
import { register } from "../../redux/actions/authAction";

const Register = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [no_telp, setNoTelp] = useState("");
  const [errors, setErrors] = useState(null);

  const handleRegister = async (e) => {
    e.preventDefault();

    dispatch(
      register(name, email, password, no_telp, navigate, setErrors, errors)
    );
  };

  return (
    <>
      <div
        className="flex sm:flex-col-2 h-screen w-full"
        style={{ fontFamily: "poppins" }}
      >
        {/* Ini Kiri */}
        <div className="flex flex-initial w-[100%] sm:w-[60%]">
          <div className="flex flex-col justify-center items-center h-screen w-full">
            <div className="flex flex-col w-[300px] lg:w-[452px]">
              <form onSubmit={handleRegister}>
                <div
                  className="text-start text-2xl font-bold text-[#6148FF]"
                  style={{ fontFamily: "sans-serif" }}
                >
                  Daftar
                </div>
                {/* Username */}
                <div className="flex flex-col mt-4">
                  <div className="text-start text-xs">Username</div>
                  <input
                    type="text"
                    value={name}
                    className="mt-1 p-2 w-full rounded-xl text-black border-solid border-2"
                    placeholder="Username"
                    onChange={(e) => setName(e.target.value)}
                  />
                </div>
                {/* Email */}
                <div className="flex flex-col mt-4">
                  <div className="text-start text-xs">Email</div>
                  <input
                    type="email"
                    value={email}
                    className="mt-1 p-2 w-full rounded-xl text-black border-solid border-2"
                    placeholder="Contoh: johndee@gmail.com"
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </div>
                {/* Nomor Telepon */}
                <div className="flex flex-col mt-4">
                  <div className="text-start text-xs">Nomor Telepon</div>
                  <input
                    type="text"
                    value={no_telp}
                    className="mt-1 p-2 w-full rounded-xl text-black border-solid border-2"
                    placeholder="Nomor Telepon"
                    onChange={(e) => setNoTelp(e.target.value)}
                    autoComplete="new-phone-number"
                  />
                </div>
                {/* Buat Password */}
                <div className="flex flex-col mt-4">
                  <div className="text-start text-xs">Buat Password</div>
                  <input
                    type="password"
                    value={password}
                    className="mt-1 p-2 w-full rounded-xl text-black border-solid border-2"
                    placeholder="Password"
                    onChange={(e) => setPassword(e.target.value)}
                    autoComplete="new-password"
                  />
                </div>
                {/* Daftar */}
                <div className="flex flex-col mt-4">
                  <button
                    className="bg-[#6148FF] text-white rounded-xl p-2"
                    type="submit"
                  >
                    Daftar
                  </button>
                </div>
              </form>
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
            <img className="w-[100%]" src={digilearn_banner} alt="" />
          </div>
        </div>
      </div>
    </>
  );
};

export default Register;
