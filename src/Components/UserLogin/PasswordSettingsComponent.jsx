import { useState } from "react";
import axios from "axios";
import { useSelector } from "react-redux";
import toast from "react-hot-toast";

const PasswordSettingsComponent = () => {
  const { token } = useSelector((state) => state.auth);
  const [formData, setFormData] = useState({
    current_password: "",
    new_password: "",
    confirm_password: "",
  });

  const handleChangePassword = async () => {
    try {
      const response = await axios.put(
        "https://fpbejs-production.up.railway.app/api/v1/profile/reset-my-password",
        {
          current_password: formData.current_password,
          new_password: formData.new_password,
          confirm_password: formData.confirm_password,
        },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      const success = response.message;

      toast.success("Password changed successfully!", success);
    } catch (error) {
      toast.error(error);
    }
  };

  return (
    <>
      <div className="text-md font-bold text-center">Ubah Password</div>
      <div className="text-xs md:text-base py-2">
        <p className="pb-2 font-medium">Masukkan Password Lama</p>
        <input
          type="password"
          className="border-2 rounded-xl py-3 px-3 w-full"
          placeholder="password lama"
          value={formData.current_password}
          onChange={(e) =>
            setFormData((prevData) => ({
              ...prevData,
              current_password: e.target.value,
            }))
          }
        />
      </div>
      <div className="text-xs md:text-base py-2">
        <p className="pb-2 font-medium">Masukkan Password Baru</p>
        <input
          type="password"
          className="border-2 rounded-xl py-3 px-3 w-full"
          placeholder="password baru"
          value={formData.new_password}
          onChange={(e) =>
            setFormData((prevData) => ({
              ...prevData,
              new_password: e.target.value,
            }))
          }
        />
      </div>
      <div className="text-xs md:text-base py-2">
        <p className="pb-2 font-medium">Ulangi Password Baru</p>
        <input
          type="password"
          className="border-2 rounded-xl py-3 px-3 w-full"
          placeholder="ulangi password baru"
          value={formData.confirm_password}
          onChange={(e) =>
            setFormData((prevData) => ({
              ...prevData,
              confirm_password: e.target.value,
            }))
          }
        />
      </div>
      <div className="py-2">
        <button className="bg-[#6148FF] text-white py-2 px-2 w-full rounded-2xl" onClick={handleChangePassword}>
          Simpan Ubah Password
        </button>
      </div>
    </>
  );
};

export default PasswordSettingsComponent;
