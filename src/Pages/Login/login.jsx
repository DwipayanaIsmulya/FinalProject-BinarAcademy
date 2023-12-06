import { useState } from "react";
import axios from "axios";
import { Email } from "@mui/icons-material";


const Login = () => {
  const [email, setEmail] = useState ();
  const [password, setPassword] = useState("");

  const handleLogin = async => (event) {
    event.preventDefault();
    try{

      const response =await axios.post(
        `${import.meta.env.VITE_API_URL}/api/v1/auth/login`,
        {
          email,
          password,
        }
      );
      const { data } = response.data;
      const { token } = data;

      localStorage.setItem("token", token);
      window.location.replace("/");

    } catch (error) {
      if (axios.isAxiosError(error)) {
        alert(error?.response?.data?.message);
        return;
      }

      alert(error?.message);
    }
  };
  return (
    <>
    <div
      className="flex sm:flex-col-2 h-screen w-full"
      style={{ fontFamily: "poppins" }}
    >

      {/*bagian kiriri*/}
      <div className="flex flex-initial w-[100%] sm:w-[60%]">
        <div className="flex flex-col justify-center items-center h-screen w-full">
          <div className="flex flex-col w-[300px] lg:w-[452px]">
            <div 
              className="text-start text-2xl font-bold text-[#6148ff]"
              style={{ fontFamily: "sans-serif"}}
            >
              Masuk  
          </div>
          {/*Email*/} 
          <div className="flex flex-col mt-4">
            <div className="text-star text-xs">Email/No Telepon</div>
            <input
              type="text"
              className="mt-1 p-2 w-full rounder-x1 text-black border-solid border-2"
              placeholder="Contoh: johndee@gmail.com"
              value={email}
              onChange={(event) =>
                  setEmail(event.target.value)
              }
          />
        </div>
        {/*Password*/} 
        <div className="flex flex-col mt-4">
        <div className="text-black text-xs font-normal font-['Poppins'] leading-[18px]">Password</div>
        <div className="w-[390px] text-right text-indigo-600 text-xs font-medium font-['Poppins'] leading-[18px]">Lupa Kata Sandi</div>
            <input
              type="text"
              className="mt-1 p-2 w-full rounder-x1 text-black border-solid border-2"
              placeholder=""
              value={email}
              onChange={(event) =>
                  setEmail(event.target.value)
              }  
          />
      </div>
      {/*Masuk*/}
      <div className="flex flex-col mt-4">
        <button className="bg-[#6148FF] text-white rounded-xl p-2">
          Masuk
          onClickk={handleLoginLogin}
        </button>
      </div>
    </div>
    <div className="Frame148 w-72 h-12 px-6 py-4 bg-red-600 rounded-xl shadow justify-start items-center gap-4 inline-flex">
  <div className="AlamatEmailTidakTerdaftar grow shrink basis-0 text-center text-white text-sm font-medium font-['Poppins'] leading-tight">Alamat email tidak terdaftar!</div>
   
</div>
    </div>
    </div>
    </div>
    </>
  );
};

export default Login;