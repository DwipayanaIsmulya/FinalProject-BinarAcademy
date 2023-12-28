import axios from "axios";
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

    // Send the updated data in the request body
    const response = await axios.put("https://fpbejs-production.up.railway.app/api/v1/profile/update-my-profile", updatedData, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });

    // Dispatch any action or handle the response as needed
    dispatch(setUpdateProfile(response));
  } catch (error) {
    // Handle errors and dispatch any error action if needed
    console.error("Profile update error:", error);
  }
};
