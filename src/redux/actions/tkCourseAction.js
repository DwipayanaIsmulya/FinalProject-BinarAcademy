import axios from "axios";
import { setAllCourse } from "../reducers/tkCourseReducer";

export const getAllCourse = () => async (dispatch) => {
  try {
    const response = await axios.get("https://fpbejs-production.up.railway.app/api/v1/course");

    const { data } = response.data;
    dispatch(setAllCourse(data));
  } catch (error) {
    alert(error.message);
  }
};
