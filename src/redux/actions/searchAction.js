import axios from "axios";
import { setSearch } from "../reducers/searchReducer";

export const getSearchCourse =
  (setErrors, errors, query) =>
  async (dispatch, getState) => {
    try {
      const { token } = getState().auth;
      if (!token) return;

      const response = await axios.get(
        `https://fpbejs-production.up.railway.app/api/v1/course/search?name=${query}`,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      const { data } = response.data;

      dispatch(setSearch(data));
      setErrors({ ...errors, isError: false });
    } catch (error) {
      if (axios.isAxiosError(error)) {
        setErrors({
          ...errors,
          isError: true,
          message: error?.response?.data?.message || error?.message,
        });
      }

      alert(error?.message);
      setErrors({
        ...errors,
        isError: true,
        message: error?.message,
      });
    }
  };
