import axios from "axios";
import toast from "react-hot-toast";
import { setToken, setUser } from "../reducers/authReducer";

// Login
export const login = (email, password, navigate) => async (dispatch) => {
  try {
    const response = await axios.post("https://fpbejs-production.up.railway.app/api/v1/auth/login", {
      email,
      password,
    });
    const { data } = response.data;
    const { token } = data;
    dispatch(setToken(token));
    navigate("/");
    toast.success("Hello, welcome back!", {
      duration: 3000,
    });
  } catch (error) {
    if (axios.isAxiosError(error)) {
      toast.error(error?.response?.data?.message, {
        duration: 3000,
      });
      return;
    }
    toast.error(error?.message, {
      duration: 3000,
    });
  }
};

export const register = (username, email, password, no_telp, navigate, setErrors, errors) => async (dispatch) => {
  try {
    let data = JSON.stringify({
      username,
      email,
      no_telp,
      password,
    });

    let config = {
      method: "post",
      url: "https://fpbejs-production.up.railway.app/api/v1/auth/register",
      headers: {
        "Content-Type": "application/json",
      },
      data: data,
    };

    const response = await axios.request(config);
    const { token } = response.data.data;

    localStorage.setItem("token", token);

    dispatch(setToken(token));
    setErrors({ ...errors, isError: false });
    toast.success("Welcome to Digilearn Academy!", {
      duration: 3000,
    });
  } catch (error) {
    if (axios.isAxiosError(error)) {
      toast.error(error?.response?.data?.message, {
        duration: 3000,
      });
      return;
    }
    toast.error(error?.message, {
      duration: 3000,
    });
  }
};

export const logout = () => (dispatch) => {
  dispatch(setToken(null));
  dispatch(setUser(null));
};

export const getMe = (navigate, navigatePathSuccess, navigatePathError) => async (dispatch, getState) => {
  try {
    let { token } = getState().auth;

    const response = await axios.get("https://fpbejs-production.up.railway.app/api/v1/auth/me", {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });

    const { data } = response.data;
    dispatch(setUser(data));

    if (navigatePathSuccess) navigate(navigatePathSuccess);
  } catch (error) {
    if (axios.isAxiosError(error)) {
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
