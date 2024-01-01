import axios from "axios";
import { setMyCourse } from "../reducers/ksCourseReducer";

export const getMyCourse = () => async (dispatch, getState) => {
  try {
    const { token } = getState().auth;
    const response = await axios.get("https://fpbejs-production.up.railway.app/api/v1/course/my-course", {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });

    const { data } = response.data;
    dispatch(setMyCourse(data));
  } catch (error) {
    alert(error.message);
  }
};
