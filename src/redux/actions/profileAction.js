import axios from "axios";
import toast from "react-hot-toast";
import { setMyProfile, setUser, setUpdateProfile } from "../reducers/profileReducer";

// get user profile
export const getMyProfile = (setErrors, errors) => async (dispatch, getState) => {
  try {
    const { token } = getState().auth;
    if (!token) return;

    const response = await axios.get("https://fpbejs-production.up.railway.app/api/v1/profile/my-profile", {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    const { data } = response.data;
    dispatch(setMyProfile(data));
    const userData = data.user;
    dispatch(setUser(userData));
    setErrors({ ...errors, isError: false });
  } catch (error) {
    return;
  }
};

// update user profile
export const updateMyProfile = (updatedData) => async (dispatch, getState) => {
  try {
    const { token } = getState().auth;
    if (!token) return;

    const response = await axios.put("https://fpbejs-production.up.railway.app/api/v1/profile/update-my-profile", updatedData, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });

    dispatch(setUpdateProfile(response));
    toast.success("New profile updated!", {
      duration: 3000,
    });
  } catch (error) {
    console.error("Profile update error:", error);
  }
};
