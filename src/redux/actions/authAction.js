import axios from "axios";
import { setToken, setUser } from "../reducers/authReducer";

// Login
export const login = (email, password, navigate) => async (dispatch) => {
  try {
    const response = await axios.post("https://fpbejs-production.up.railway.app/api/v1/auth/login", {
      email,
      password,
    });
    const { token } = response.data;

    console.log(token);
    dispatch(setToken(token));
    navigate("/");
  } catch (error) {
    if (axios.isAxiosError(error)) {
      alert(error);
    }
  }
};

export const logout = () => (dispatch) => {
  dispatch(setToken(null));
  dispatch(setUser(null));
};

export const getMe = (navigate, navigatePathSuccess, navigatePathError) => async (dispatch, getState) => {
  try {
    let { token } = getState().auth;

    const response = await axios.get(
      `${import.meta.env.VITE_API_BASE_URL}/api/v1/auth/me`, // Disini belum diganti
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );

    const { data } = response.data;

    dispatch(setUser(data));

    if (navigatePathSuccess) navigate(navigatePathSuccess);
  } catch (error) {
    if (axios.isAxiosError(error)) {
      // If token is not valid
      if (error.response.status === 401) {
        dispatch(logout());

        if (navigatePathError) navigate(navigatePathError);
        return;
      }

      alert(error?.response?.data?.message);
      return;
    }

    alert(error?.message);
  }
};
