import axios from "axios";
import { setToken, setUser } from "../reducers/authReducer";

// Login
export const login = (email, password, navigate) => async (dispatch) => {
  try {
    const response = await axios.post("https://fpbejs-production.up.railway.app/api/v1/auth/login", {
      email,
      password,
    });
    const { data } = response.data;
    const { token } = data
    dispatch(setToken(token));
    navigate("/");
  } catch (error) {
    if (axios.isAxiosError(error)) {
      alert(error);
    }
  }
};

export const register =
  (username, email, password, no_telp, navigate, setErrors, errors) =>
  async (dispatch) => {
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
      navigate("/");
      setErrors({ ...errors, isError: false });
    } catch (error) {
      if (axios.isAxiosError(error)) {
        alert(error?.response?.data?.message);
        return;
      }
      alert(error?.message);
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
      "https://fpbejs-production.up.railway.app/api/v1/auth/me",
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
