import axios from "axios";
import { setDetails } from "../reducers/detailReducer";

export const getDetailsCourse = (courseId, setErrors, errors) => async (dispatch, getState) => {
  try {
    const { token } = getState().auth;
    if (!token) return;

    const response = await axios.get(
      `https://fpbejs-production.up.railway.app/api/v1/course/getBy/${courseId}`,
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );
    const { data } = response.data;

    dispatch(setDetails(data));
    setErrors({ ...errors, isError: false });
  } catch (error) {
    if (axios.isAxiosError(error)) {
      setErrors({
        ...errors,
        isError: true,
        message: error?.response?.data?.status_message || error?.message,
      });
      return;
    }

    alert(error?.message);
    setErrors({
      ...errors,
      isError: true,
      message: error?.message,
    });
  }
};
