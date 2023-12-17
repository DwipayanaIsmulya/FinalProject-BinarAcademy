import axios from "axios";
import { setToken } from "../reducers/authReducer";

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
    navigate("/beranda");
  } catch (error) {
    if (axios.isAxiosError(error)) {
      alert(error);
    }
  }
};
