import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getMyProfile } from "../../redux/actions/profileAction";
import { updateMyProfile } from "../../redux/actions/profileAction";

const EditProfileComponent = () => {
  const dispatch = useDispatch();
  const { myProfile } = useSelector((state) => state.profile);
  const { user } = useSelector((state) => state.profile);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    username: "",
    no_telp: "",
    country: "",
    city: "",
  });
  const [errors, setErrors] = useState({
    isError: false,
    message: null,
  });

  useEffect(() => {
    dispatch(getMyProfile(setErrors, errors));
  }, [dispatch]);

  useEffect(() => {
    if ((myProfile, user)) {
      setFormData({
        name: myProfile.name || "",
        email: user.email || "",
        username: user.username || "",
        no_telp: myProfile.no_telp || "",
        country: myProfile.country || "",
        city: myProfile.city || "",
      });
    }
  }, [myProfile]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async () => {
    try {
      dispatch(updateMyProfile(formData));
    } catch (error) {
      console.error("Profile update failed:", error);
    }
  };

  return (
    <>
      <div className="py-2">
        <div className="text-xs md:text-base py-2">
          <p className="pb-2 font-medium">Nama</p>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            className="border-2 rounded-xl py-3 px-3 w-full"
            placeholder="Nama Lengkap"
          />
        </div>
        <div className="text-xs md:text-base py-2">
          <p className="pb-2 font-medium">Username</p>
          <input
            type="text"
            name="username"
            value={formData.username}
            onChange={handleChange}
            className="border-2 rounded-xl py-3 px-3 w-full"
            placeholder="Username"
            disabled
          />
        </div>
        <div className="text-xs md:text-base py-2">
          <p className="pb-2 font-medium">Email</p>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className="border-2 rounded-xl py-3 px-3 w-full"
            placeholder="Email"
            disabled
          />
        </div>
        <div className="text-xs md:text-base py-2">
          <p className="pb-2 font-medium">Nomor Telepon</p>
          <input
            type="text"
            name="no_telp"
            value={formData.no_telp}
            onChange={handleChange}
            className="border-2 rounded-xl py-3 px-3 w-full"
            placeholder="Nomor Telepon"
          />
        </div>
        <div className="text-xs md:text-base py-2">
          <p className="pb-2 font-medium">Negara</p>
          <input
            type="text"
            name="country"
            value={formData.country}
            onChange={handleChange}
            className="border-2 rounded-xl py-3 px-3 w-full"
            placeholder="Negara"
          />
        </div>
        <div className="text-xs md:text-base py-2">
          <p className="pb-2 font-medium">Kota</p>
          <input
            type="text"
            name="city"
            value={formData.city}
            onChange={handleChange}
            className="border-2 rounded-xl py-3 px-3 w-full"
            placeholder="Kota"
          />
        </div>
        <div className="py-2">
          <button
            onClick={handleSubmit}
            className="bg-[#6148FF] text-white py-2 px-2 w-full rounded-2xl"
          >
            Simpan Profil Saya
          </button>
        </div>
      </div>
    </>
  );
};

export default EditProfileComponent;
